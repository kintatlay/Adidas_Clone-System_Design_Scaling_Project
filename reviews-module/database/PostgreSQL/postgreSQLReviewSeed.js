// Create sample test data for PostgreSQL - ~24.5M product

const faker = require('faker');
const fs = require('fs');

// Create ~24.5M of data in CSV file using faker data
const writeUsers = fs.createWriteStream('reviewTableSQLData.csv');

writeUsers.write('review_id,product_id,userID,opinion,text,rating_overall,doesRecommended,rating_size,rating_width,rating_comfort,rating_quality,isHelpful,isNotHelpful,created_at\n', 'utf8');

function writeTwentyPlusMillionReviews(writer, encoding, callback) {
    let i = 24581469;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            id += 1;
            const review_id = id;
            const product_id = faker.random.number({ 'min': 1, 'max': 10000000 });
            const userID = faker.random.number({ 'min': 1, 'max': 50000000 });
            const opinion = faker.lorem.sentence();
            const text = faker.lorem.paragraph();
            const rating_overall = faker.random.number({ 'min': 1, 'max': 5 });
            const doesRecommended = faker.random.boolean();
            const rating_size = faker.random.arrayElement(['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big']);
            const rating_width = faker.random.arrayElement(['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']);
            const rating_comfort = faker.random.arrayElement(['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']);
            const rating_quality = faker.random.arrayElement(['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']);
            const isHelpful = faker.random.number({ 'min': 0, 'max': 100 });
            const isNotHelpful = faker.random.number({ 'min': 0, 'max': 100 });
            const created_at = faker.date.between('2000-01-01', '2019-12-31');

            const data = `${review_id},${product_id},${userID},${opinion},${text},${rating_overall},${doesRecommended},${rating_size},${rating_width},${rating_comfort},${rating_quality},${isHelpful},${isNotHelpful},${created_at}\n`;
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

writeTwentyPlusMillionReviews(writeUsers, 'utf-8', () => {
    writeUsers.end();
});