const faker = require('faker');
const Model = require('./mongoSchema.js');
require('events').EventEmitter.prototype._maxListeners = 10000;

async function seedProductSchema(outer, inner) {
    var quantityList = [];
    var createQuantity = function() {
        for (var o = 0; o < faker.random.number({ 'min': 0, 'max': 5 }); o++) {
            quantityList.push({
                item_No: o,
                SKU_Number: faker.lorem.word()
            })
        }
    }
    var sizeList = [];
    var createSize = function() {
        for (var n = 8; n < 13; n++) {
            createQuantity();
            sizeList.push({
                size_label: n,
                UPC_barcode: faker.random.number({ 'min': 100000000000, 'max': 999999999999 }),
                price: faker.finance.amount(0, 200, 2),
                quantity: quantityList,
                created_at: faker.date.between('2000-01-01', '2019-12-31'),
                updated_at: faker.date.between('2019-12-31', '2020-12-31'),
            });
            quantityList = [];
        }
    }
    var productImageList = [];
    var createProductImages = function() {
        for (var m = 0; m < faker.random.number({ 'min': 0, 'max' : 3 }); m++) {
            const range = faker.random.number({ 'min': 1, 'max': 1000 });
            productImageList.push({
                product_images_id: m,
                product_images_url: `https://sdcuserphotos.s3.us-west-1.amazonaws.com/${range}.jpg`
            });
        }
    }
    var colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var inventoryList = [];
    var createInventory = function() {
        for (var x = 0; x < colorOptions.length; x++) {
            createProductImages();
            createSize();
            inventoryList.push({
                color: colorOptions[x],
                product_images: productImageList,
                size: sizeList,
            });
            productImageList = [];
            sizeList = [];
        }
    }
    var productCounter = 1;
    var categoryOptions = ['New Arrivals', 'Original', 'Running', 'Soccer', 'Hiking & Outdoor', 'Basketball', 'Football', 'Skateboarding', 'Workout', 'Essentials', 'Sandals & Slides', 'Golf', 'Tennis', 'Baseball', 'Pants', 'Hoodies & Sweatshirts', 'Jackets & Vests', 'Track Suits', 'Short Sleeve Shirts', 'Jerseys', 'Tights', 'Shorts', 'Tank Tops', 'Swim', 'Socks & Underwear'];
    for (var i=0; i<outer; i++) {
        let productList = [];
        for (var j=0; j<inner; j++) {
            createInventory();
            let eachProduct = {
                product_id: productCounter,
                product_name: faker.lorem.word(),
                category: categoryOptions[Math.floor((Math.random()) * categoryOptions.length)],
                description: faker.lorem.paragraph(),
                specification: faker.lorem.paragraph(),
                inventory: inventoryList
            };
            inventoryList = [];
            productList.push(eachProduct);
            productCounter += 1;
            if (productCounter % 100000 === 0) {
                console.log('product seeding progress:', counter);
            }
        }
        await Model.ProductModel.insertMany(productList);
    }
}

async function seedReviewSchema(outer, inner) {
    var reviewPhotoList = [];
    var createReviewPhoto = function() {
        for (var k = 0; k < faker.random.number({ 'min': 0, 'max': 5}); k++) {
            reviewPhotoList.push({
                review_photo_id: k,
                review_photo_url: `https://sdcuserphotos.s3.us-west-1.amazonaws.com/${faker.random.number({ 'min': 0, 'max': 1000 })}.jpg`
            })
        }
    }
    let reviewCounter = 1;
    for (var i=0; i<outer; i++) {
        let reviewList = [];
        for (var j=0; j<inner; j++) {
            createReviewPhoto();
            let eachReview = {
                review_id: reviewCounter,
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
            };
            reviewPhotoList = [];
            reviewList.push(eachReview);
            reviewCounter += 1;
            if (reviewCounter % 100000 === 0) {
                console.log('product seeding progress:', counter);
            }
        }
        await Model.ReviewModel.insertMany(reviewList);
    }
}

seedProductSchema(10, 200);
seedReviewSchema(10, 200);
console.log('...done');
console.time('seed time');
console.timeEnd('seed time');