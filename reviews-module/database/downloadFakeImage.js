// This document downloads 1000 faker images to an image folder when running the command line "node downloadfakeImage.js"

const faker = require('faker');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

async function seedImage() {
    const url = [];
    // Generate 1000 fake url from faker
    for (let i = 0; i < 1000; i++) {
        url.push(faker.image.fashion());
    }

    // Download 1000 user photos to local image folder
    for (let i = 0; i < url.length; i++) {
        // path for image storage
        const imagePath = await path.join(__dirname, './image', `${i}.jpg`);
        axios({
            method: 'get',
            url: url[i],
            responseType: 'stream'
        })
            .then((response) => {
                response.data.pipe(fs.createWriteStream(imagePath));
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

seedImage();

// const url = [];
// // Generate 1000 fake url from faker
// for (let i=0; i<1000; i++) {
//     url.push(faker.image.fashion());
// }

// // Download 1000 user photos to local image folder
// for (let i=0; i<url.length; i++) {
//     // path for image storage
//     const imagePath = path.join(__dirname, './image', `${i}.jpg`);
//     axios({
//         method: 'get',
//         url: url[i],
//         responseType: 'stream'
//     })
//         .then((response) => {
//             response.data.pipe(fs.createWriteStream(imagePath));
//         })
//         .catch((error) => {
//         console.log(error);
//     });
// }





// Check for missing images from the array. Sometimes the previous formula does not run properly
// const { readdirSync } = require('fs');
// const imageFolder = './image';

// var count = [];
// var countFormula = function () {
//     for (var j = 0; j < 1000; j++) {
//         count.push(j);
//     }
// }
// countFormula();

// var allFileNames = readdirSync(imageFolder);
// var allFileNamesWithoutExtension = [];

// for (var i = 0; i < allFileNames.length; i++) {
//     var split = allFileNames[i].split('.');
//     allFileNamesWithoutExtension.push(Number(split[0]));
// }

// for (var k = 0; k < count.length; k++) {
//     if (allFileNamesWithoutExtension.includes(count[k])) {

//     } else {
//         console.log("Not there:", count[k]);
//     }
// }