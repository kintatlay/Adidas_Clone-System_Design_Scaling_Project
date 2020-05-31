// Create sample test data for PostgreSQL - 50M product

const faker = require('faker');
const fs = require('fs');

// Create 50M of data in CSV file using faker data
const writeUsers = fs.createWriteStream('usersTableSQLData.csv');

writeUsers.write('userID,firstname,lastname,gender,nickname,email,password\n', 'utf8');

function writeFiftyMillionUsers(writer, encoding, callback) {
    let i = 50000000;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            id += 1;
            const userID = id;
            const firstname = faker.name.firstName();
            const lastname = faker.name.lastName();
            const gender = faker.random.arrayElement(['Male', 'Female', 'Other']);
            const nickname = faker.internet.userName();
            const email = faker.internet.email();
            const password = faker.internet.password();

            const data = `${userID},${firstname},${lastname},${gender},${nickname},${email},${password}\n`;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                // see if we should continue, or wait
                // don't pass the callback, because we're not done yet.
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // had to stop early!
            // write some more once it drains
            writer.once('drain', write);
        }
    }
    write()
}

writeFiftyMillionUsers(writeUsers, 'utf-8', () => {
    writeUsers.end();
});