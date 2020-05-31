// Create sample test data for PostgreSQL - 50M product

const faker = require('faker');
const fs = require('fs');

// Create 50M of data in CSV file using faker data
const writeUsers1 = fs.createWriteStream('usersTableSQLData1.csv');
const writeUsers2 = fs.createWriteStream('usersTableSQLData2.csv');
const writeUsers3 = fs.createWriteStream('usersTableSQLData3.csv');
const writeUsers4 = fs.createWriteStream('usersTableSQLData4.csv');
const writeUsers5 = fs.createWriteStream('usersTableSQLData5.csv');

writeUsers1.write('userID,firstname,lastname,gender,nickname,email,password\n', 'utf8');
writeUsers2.write('userID,firstname,lastname,gender,nickname,email,password\n', 'utf8');
writeUsers3.write('userID,firstname,lastname,gender,nickname,email,password\n', 'utf8');
writeUsers4.write('userID,firstname,lastname,gender,nickname,email,password\n', 'utf8');
writeUsers5.write('userID,firstname,lastname,gender,nickname,email,password\n', 'utf8');

function writeFiftyMillionUsers(writer, encoding, endingAmount, beginningAmount, callback) {
    let i = endingAmount;
    let id = beginningAmount;
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
            if (i === beginningAmount) {
                writer.write(data, encoding, callback);
            } else {
                // see if we should continue, or wait
                // don't pass the callback, because we're not done yet.
                ok = writer.write(data, encoding);
            }
        } while (i > beginningAmount && ok);
        if (i > beginningAmount) {
            // had to stop early!
            // write some more once it drains
            writer.once('drain', write);
        }
    }
    write()
}

writeFiftyMillionUsers(writeUsers1, 'utf-8', 50000000, 40000000, () => {
    writeUsers1.end();
});
writeFiftyMillionUsers(writeUsers2, 'utf-8', 40000000, 30000000, () => {
    writeUsers2.end();
});
writeFiftyMillionUsers(writeUsers3, 'utf-8', 30000000, 20000000, () => {
    writeUsers3.end();
});
writeFiftyMillionUsers(writeUsers4, 'utf-8', 20000000, 10000000, () => {
    writeUsers4.end();
});
writeFiftyMillionUsers(writeUsers5, 'utf-8', 10000000, 0, () => {
    writeUsers5.end();
});