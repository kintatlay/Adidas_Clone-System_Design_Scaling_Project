// Create sample test data for PostgreSQL - 10M product

const faker = require('faker');
const fs = require('fs');

// Create 10M of data in CSV file using faker data
const writeUsers = fs.createWriteStream('productTableSQLData.csv');

writeUsers.write('product_id,product_name\n', 'utf8');

function writeTenMillionProducts(writer, encoding, callback) {
    let i = 10000000;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            id += 1;
            const product_id = id;
            const product_name = faker.lorem.word();

        const data = `${product_id},${product_name}\n`;
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

writeTenMillionProducts(writeUsers, 'utf-8', () => {
    writeUsers.end();
});