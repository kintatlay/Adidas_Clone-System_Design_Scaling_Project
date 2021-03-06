const faker = require('faker');
const Model = require('./condensedMongoSchema.js');
// require('events').EventEmitter.prototype._maxListeners = 10000;

async function seedMongo(outer, inner) {
    var userCounter = 1;
    var reviewPhotoList = [];
    var createReviewPhoto = function () {
        for (var k = 0; k < faker.random.number({ 'min': 0, 'max': 5 }); k++) {
            reviewPhotoList.push({
                review_photo_id: k,
                review_photo_url: `https://sdcuserphotos.s3.us-west-1.amazonaws.com/${faker.random.number({ 'min': 0, 'max': 1000 })}.jpg`
            })
        }
    }
    let reviewCounter = 1;
    var reviewList = [];
    var createReview = function () {
        for (var p = 0; p < faker.random.number({ 'min': 0, 'max': 8 }); p++) {
            createReviewPhoto();
            reviewList.push({
                review_id: reviewCounter,
                user: {
                    user_id: faker.random.number({ 'min': 0, 'max': 50000000 }),
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    gender: faker.random.arrayElement(['Male', 'Female', 'Other']),
                    nickname: faker.internet.userName(),
                    email: faker.internet.email(),
                    password: faker.internet.password()
                },
                opinion: faker.lorem.sentence(),
                text: faker.lorem.paragraph(),
                rating_overall: faker.random.number({ 'min': 1, 'max': 5 }),
                doesRecommended: faker.random.boolean(),
                rating_size: faker.random.arrayElement(['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big']),
                rating_width: faker.random.arrayElement(['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']),
                rating_comfort: faker.random.arrayElement(['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']),
                rating_quality: faker.random.arrayElement(['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']),
                isHelpful: faker.random.number({ 'min': 0, 'max': 100 }),
                isNotHelpful: faker.random.number({ 'min': 0, 'max': 100 }),
                created_at: faker.date.between('2000-01-01', '2019-12-31'),
                review_photo_path: reviewPhotoList
            })
            reviewPhotoList = [];
            userCounter += 1;
            reviewCounter += 1;
        }
    }
    var productCounter = 1;
    for (var i = 0; i < outer; i++) {
        let productList = [];
        for (var j = 0; j < inner; j++) {
            createReview();
            let eachProduct = {
                product_id: productCounter,
                product_name: faker.lorem.word(),
                review: reviewList,
            };
            inventoryList = [];
            reviewList = [];
            productList.push(eachProduct);
            productCounter += 1;
            if (productCounter % 100000 === 0) {
                console.log('product seeding progress:', productCounter);
            }
        }
        await Model.ProductModel.insertMany(productList);
    }
    // console.log('Number of user:', userCounter);
    console.log('Number of review:', reviewCounter - 1);
    console.log('Number of product:', productCounter - 1);
}

seedMongo(50000, 200);
console.log('...done');
console.time('seed time');
console.timeEnd('seed time');