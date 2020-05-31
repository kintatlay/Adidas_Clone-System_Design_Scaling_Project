DROP DATABASE IF EXISTS adidas;

CREATE DATABASE adidas;

\c adidas;

CREATE TYPE rating AS ENUM(
    '1',
    '2',
    '3',
    '4',
    '5'
);

CREATE TYPE sizeOptions AS ENUM(
    'a size too small', 
    '1/2 a size too small', 
    'Perfect', 
    '1/2 a size too big', 
    'a size too big'
);

CREATE TYPE widthOptions AS ENUM(
    'Too narrow', 
    'Slightly narrow', 
    'Perfect', 
    'Slightly wide', 
    'Too wide'
);

CREATE TYPE comfortOptions AS ENUM(
    'Uncomfortable', 
    'Slightly uncomfortable', 
    'Ok', 
    'Comfortable', 
    'Perfect'
);

CREATE TYPE qualityOptions AS ENUM(
    'Poor', 
    'Below average', 
    'What I expected', 
    'Pretty great', 
    'Perfect'
);

CREATE TYPE genderOptions AS ENUM(
    'Male', 
    'Female', 
    'Other'
);

CREATE TABLE product(
    product_id      SERIAL PRIMARY KEY UNIQUE,
    product_name    VARCHAR(255)
);

CREATE TABLE review(
    review_id       SERIAL PRIMARY KEY UNIQUE,
    product_id      INT,
    userID         INT,
    opinion         VARCHAR(255),
    text            VARCHAR(3000),
    rating_overall  rating,
    doesRecommended boolean,
    rating_size     sizeOptions,
    rating_width    widthOptions,
    rating_comfort  comfortOptions,
    rating_quality  qualityOptions,
    isHelpful       INT,
    isNotHelpful    INT,
    created_at      VARCHAR(255)
);

CREATE TABLE users(
    userID         SERIAL PRIMARY KEY UNIQUE,
    firstname       VARCHAR(20),
    lastname        VARCHAR(20),
    gender          genderOptions,
    nickname        VARCHAR(50),
    email           VARCHAR(50),
    password        VARCHAR(30)
);

CREATE TABLE reviewPhoto(
    review_photo_id     SERIAL PRIMARY KEY,
    review_photo_url    VARCHAR(255),
    review_id           INT
);

/* 
Git Bash `pwd` command result:  /c/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL
*/

\COPY product FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/productTableSQLData.csv' DELIMITER ',' CSV HEADER;

\COPY review FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/reviewTableSQLData1.csv' DELIMITER ',' CSV HEADER;

\COPY review FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/reviewTableSQLData2.csv' DELIMITER ',' CSV HEADER;

\COPY review FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/reviewTableSQLData3.csv' DELIMITER ',' CSV HEADER;

\COPY review FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/reviewTableSQLData4.csv' DELIMITER ',' CSV HEADER;

\COPY review FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/reviewTableSQLData5.csv' DELIMITER ',' CSV HEADER;

\COPY users FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/usersTableSQLData1.csv' DELIMITER ',' CSV HEADER;

\COPY users FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/usersTableSQLData2.csv' DELIMITER ',' CSV HEADER;

\COPY users FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/usersTableSQLData3.csv' DELIMITER ',' CSV HEADER;

\COPY users FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/usersTableSQLData4.csv' DELIMITER ',' CSV HEADER;

\COPY users FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/usersTableSQLData5.csv' DELIMITER ',' CSV HEADER;

\COPY reviewPhoto FROM '/Users/hongk/Desktop/hackreactor/SDC2/reviews-module/database/PostgreSQL/reviewPhotoTableSQLData.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE review ADD FOREIGN KEY (product_id) REFERENCES product (product_id);
ALTER TABLE reviewPhoto ADD FOREIGN KEY (review_id) REFERENCES review (review_id);
ALTER TABLE review ADD FOREIGN KEY (userID) REFERENCES users (userID);