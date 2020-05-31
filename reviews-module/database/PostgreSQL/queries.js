const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'adidas',
    password: '123',
    port: 5432
});

// GET Request
const getReview = (request, response) => {
    pool.query('SELECT * FROM review ORDER BY review_id LIMIT 300', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getReviewByProductId = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM review WHERE product_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

const getReviewAndUserByProductId = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT review.review_id, product_id, opinion, text, rating_overall, doesRecommended, rating_size, rating_width, rating_comfort, rating_quality, isHelpful, isNotHelpful, created_at, firstname, lastname, gender, nickname, email FROM review INNER JOIN users ON (users.userID = review.userID) WHERE product_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
};

// POST Request
const createReview = (request, response) => {
    console.log('request', request.body);
    const { review_id, product_id, userID, opinion, text, rating_overall, doesRecommended, rating_size, rating_width, rating_comfort, rating_quality, isHelpful, isNotHelpful, created_at } = request.body;
    
    pool.query('INSERT INTO review (review_id, product_id, userID, opinion, text, rating_overall, doesRecommended, rating_size, rating_width, rating_comfort, rating_quality, isHelpful, isNotHelpful, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)', [review_id, product_id, userID, opinion, text, rating_overall, doesRecommended, rating_size, rating_width, rating_comfort, rating_quality, isHelpful, isNotHelpful, created_at], (error, results) => {
        if (error) {
            console.log(error);
            throw error
        }
        response.status(201).send(`Review added with ID: ${review_id}`);
    })
};

// PUT Request
const updateReview = (request, response) => {
    const id = parseInt(request.params.id);
    const { rating_overall, text } = request.body;
    pool.query('UPDATE review SET rating_overall = $1, text = $2 WHERE review_id = $3', [rating_overall, text, id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Review modified with ID: ${id}`)
    })
};

// DELETE Request
const deleteReview = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM review WHERE review_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Review deleted with ID: ${id}`)
    })
};

module.exports = { getReview, getReviewByProductId, getReviewAndUserByProductId, createReview, updateReview, deleteReview };

