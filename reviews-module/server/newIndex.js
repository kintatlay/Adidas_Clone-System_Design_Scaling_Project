require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../database/PostgreSQL/queries.js');
// const db = require('../database/mongoDB/queries.js');
const port = 3000;
const path = require('path');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get('/review', db.getReview);
app.get('/product/:id', db.getReviewByProductId);
app.post('/review', db.createReview);
app.put('/review/:id', db.updateReview);
app.delete('/review/:id', db.deleteReview);
app.get('/product/:id/user', db.getReviewAndUserByProductId);

app.use('/', express.static(path.join(__dirname, '../client', 'dist')))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

