const Model = require('./condensedMongoSchema.js');

// GET Request
const getReview = (request, response) => {
    Model.ProductModel.find({}, (error, results) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(results);
        }
        // this limit 300 output
    }).limit(300);
};

const getReviewByProductId = (request, response) => {
    const id = parseInt(request.params.id);
    Model.ProductModel.find({product_id: id}, (error, results) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(results);
        }
    });
};

const getReviewAndUserByProductId = (request, response) => {
    const id = parseInt(request.params.id);
    Model.ProductModel.aggregate([
        {"$unwind": "$review"},
        {"$match": {"review.review_id": id}}],
        (error, results) => {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(200).send(results);
            }
        }).limit(1);
}

// POST Request
const createReview = (request, response) => {
    console.log('request', request.body);
    Model.ProductModel.create(request.body, (error, results) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(201).send(results);
        }
    });
};

// PUT Request
// Reference - https://www.nodechef.com/docs/cloud-search/updates-documents-nested-in-arrays
const updateReview = (request, response) => {
    const id = parseInt(request.params.id);
    Model.ProductModel.findOneAndUpdate({ "review.review_id": id }, { $set: {"review.$.isHelpful": 24} }, (error, results) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(results);
        }
    });
};

// DELETE Request
const deleteReview = (request, response) => {
    const id = parseInt(request.params.id);
    Model.ProductModel.findOneAndDelete({ "review.review_id": id}, (error, results) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send(results);
        }
    });
};

module.exports = { getReview, getReviewByProductId, getReviewAndUserByProductId, createReview, updateReview, deleteReview };