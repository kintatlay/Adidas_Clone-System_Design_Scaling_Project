// Create sample test data for PostgreSQL - 10M review photos

const faker = require('faker');
const fs = require('fs');

// Create 10M of data in CSV file using faker data
const writeUsers = fs.createWriteStream('reviewPhotoTableSQLData.csv');

writeUsers.write('review_photo_id,review_photo_url,review_id\n', 'utf8');

function writeTenMillionReviewPhotos(writer, encoding, callback) {
    let i = 10000000;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            id += 1;
            const review_photo_id = id;
            const review_photo_url = `https://sdcuserphotos.s3.us-west-1.amazonaws.com/${faker.random.number({ 'min': 0, 'max': 1000 })}.jpg`;
            const review_id = faker.random.number({ 'min': 1, 'max': 24581469 });

            const data = `${review_photo_id},${review_photo_url},${review_id}\n`;
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

writeTenMillionReviewPhotos(writeUsers, 'utf-8', () => {
    writeUsers.end();
});