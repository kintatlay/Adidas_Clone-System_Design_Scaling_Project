# System Design

**Note: I did not build the front-end. I only take the front-end and scale the backend for practice.**

[My Trello Progress Details](https://trello.com/b/ZbxAyAhh/system-design-with-nike-clone)

## Step 1 - Database Selection

I used this video to get an idea on which database to select: https://www.youtube.com/watch?v=v5e_PasMdXc&feature=emb_logo

- In this project, we consider how to scale our backend as we expect there are many requests per second. We expect there is a lot of web server that will be serving a lot of people at the same time. Therefore, we consider of using distributed no-sql database than consider monolithic relational database. We want to test out 2 backend system and choose 1 from the 2 based on justification. We have to take into consideration of CAP (Consistency, Availability, Partition-Tolerance) theorem. The partition-tolerance is about the ability to scale the data. Availability is about having your data always be there. Consistency is about if you write something and a user gets the subsequence reads for a few seconds. There is especially important if your application is about stock or financial transactions. If your application is okay for your system to go down for a few seconds or minutes, availability is not your main consideration. Below is our analysis:

![CAP](https://user-images.githubusercontent.com/32609294/83193865-94f48400-a0ec-11ea-8541-47354e9a27d3.JPG)

  - For this application
    - Availability: It's important because when a user goes to your webpage to look for review, you need to show it.
    - Consistency: It's okay for a few second delay before a new review shows up while the user gets the old review.
    - Partition-tolerance: The web page has to be run fast.

    1. MongoDB
      - Strength:
        - There is professional paid support for setting up the security of the database.
        - Ability to outsource the administration of the system over time.
        - Simplicity of use - there are many article supports for this application and large community user base.
        - Partition-tolerance - to scale fast
      
    2. PostgreSQL
      - Strength:
        - Database dealing with structured data.
        - Online research indicates that PostgreSQL is faster than MySQL.

## Step 2 - Develope Schemas for PostgreSQL and MongoDB

- I created a folder named `database` to store all the schema and seeding files there

- Generate fake images for testing purpose.

  1. run `npm install faker` to help generate fake images

  2. create a folder named `image` inside `database` folder

  3. Build a script named `downloadFakeImage.js` to generate 1000 fake images to `image` folder

  4. 

#### MongoDB Schemas

- I used this following reference for tutorial: https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2

![MongoDB_database_diagram](https://user-images.githubusercontent.com/32609294/83194536-a68a5b80-a0ed-11ea-83b4-76cdf7da0fa1.JPG)

#### MongoDB Seeding

- I plan to seed over 10 millions of data into the schema that I just created.

  1. Run `npm install mongodb mongoose` so that package.json file has the dependencies for connecting MongoDB (make sure you install Mongo in your computer first).

- Cd to the mongoDB folder and run `node condensedMongoSeed.js` to seed the database.

![mongoSeedingResult](https://user-images.githubusercontent.com/32609294/83194438-8064bb80-a0ed-11ea-864a-5f08cabfc1f8.JPG)

![mongoDB_database_size](https://user-images.githubusercontent.com/32609294/83321374-11c65180-a204-11ea-9270-a4c6a7764caa.JPG)

#### PostgreSQL Seeding

1. Build the seeding script: I plan to seed over 10 millions of data into CSV files and then load the csv to PostgreSQL.

  - I used this following reference for tutorial of building the seeding script: https://medium.com/@danielburnsart/writing-a-large-amount-of-data-to-a-csv-file-using-nodes-drain-event-99dcaded99b5

2. Seed csv file to PostgreSQL database

  - run `node newPostgreSQLReviewSeed.js` to create the seeding file.

#### PostgreSQL Schema

1. After installing PostgreSQL, run the command line `psql -U postgres` and subsequently enter the password in Git Bash to turn on postgresSQL in terminal to check the status

2. Ensure the previous step to generate csv files are completed.

3. Upload schema.sql

  - cd to the directory where the schema.sql file is stored and run the following command `psql -f schema.sql -p 5432 -U postgres` will upload the schema to postgreSQL database.

4. Check database

![SQL_database_diagram](https://user-images.githubusercontent.com/32609294/83194684-e2252580-a0ed-11ea-987f-25832609240d.JPG)

  **Must login to postgres through "psql -U postgres" first**

  - To show databases: `\l`

  - To drop database:
    1. `REVOKE CONNECT ON DATABASE adidas FROM public;`
    2. 
```
SELECT pid, pg_terminate_backend(pid) 
FROM pg_stat_activity 
WHERE datname = current_database() AND pid <> pg_backend_pid();
```
    3. `drop database if exists adidas;`

#### Create API to support CRUD operations (PostgreSQL)

[Web Tutorial for PostgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)

1. Run `npm i express pg` to install dependencies.

2. Build the "queries.js" and "newIndex.js" files to connect the API.

3. To ensure the 'POST' request is working, use postman and test it with the following json - raw - body and API `http://localhost:3000/review`
```
{
	"review_id":30000000,
	"product_id":21011,
	"userID":2,
	"opinion":"It's bad",
	"text":"It's cool",
	"rating_overall":"2",
	"doesRecommended":true,
	"rating_size":"1/2 a size too big",
	"rating_width":"Too wide",
	"rating_comfort":"Comfortable",
	"rating_quality":"What I expected",
	"isHelpful":2,
	"isNotHelpful":2,
	"created_at":"May 28, 2020"
}
```

4. To ensure the 'PUT' request, use postman and test it with the following json - raw - body and API `http://localhost:3000/review/30000004`
```
{
	"rating_overall": "5",
	"text": "It's almost finish."
}
```

#### Create API to support CRUD operations (MongoDB)

1. Create the "queries.js" file inside "database/mongoDB" and connect with the existing "newIndex.js" file.

2. **Please note that the webpage of the front end might encounter issue because the current front-end design is following PostgresSQL data structure.** The database of MongoDB structured differently than PostgreSQL.

3. To ensure the 'POST' request is working, use postman and test it with the following json - raw - body and API `http://localhost:3000/review`
```
{
	"product_id": 10000002,
	"product_name": "tissue",
	"review": [{
		"review_id": 30000001,
		"user": {
			"user_id": 30000001,
			"firstname": "Peter",
			"lastname": "Chen",
			"gender": "Male",
			"nickname": "Superman",
			"email": "hongkongbboy@gmail.com",
			"password": "123"
		},
		"opinion": "It's good",
		"text": "It's bad",
		"rating_overall": 3,
		"doesRecommended": true,
		"rating_size": "a size too big",
		"rating_width": "Slightly wide",
		"rating_comfort": "Uncomfortable",
		"rating_quality": "What I expected",
		"isHelpful": 23,
		"isNotHelpful": 17,
		"created_at": "2007-10-19T09:03:29.967Z",
		"review_photo_path": [{
			"review_photo_id": 60000001,
			"review_photo_url": "https://sdcuserphotos.s3.us-west-1.amazonaws.com/741.jpg"
		}, {
			"review_photo_id": 60000002,
			"review_photo_url": "https://sdcuserphotos.s3.us-west-1.amazonaws.com/741.jpg"
		}]
	}, {
		"review_id": 30000002,
		"user": {
			"user_id": 30000002,
			"firstname": "Peter",
			"lastname": "Chen",
			"gender": "Male",
			"nickname": "Superman",
			"email": "hongkongbboy@gmail.com",
			"password": "123"
		},
		"opinion": "It's good",
		"text": "It's bad",
		"rating_overall": 3,
		"doesRecommended": true,
		"rating_size": "a size too big",
		"rating_width": "Slightly wide",
		"rating_comfort": "Uncomfortable",
		"rating_quality": "What I expected",
		"isHelpful": 23,
		"isNotHelpful": 17,
		"created_at": "2007-10-19T09:03:29.967Z",
		"review_photo_path": [{
			"review_photo_id": 60000003,
			"review_photo_url": "https://sdcuserphotos.s3.us-west-1.amazonaws.com/741.jpg"
		}]
	}]
}
```

4. For PUT request reference, see [here](https://www.nodechef.com/docs/cloud-search/updates-documents-nested-in-arrays)

#### DBMS Benchmarking

**MongoDB**

- To estimate the query time of CRUD methods for MongoDB, we login mongoDB through terminal with command `mongo` and run `show dbs;` to look at available databases. Then run `use reviews` to get inside the database. Then run `show tables` to show database tables. To obtain the execution time of mongoDB query, put `.explain("executionStats")` to the end of each query command.

##### CREATE

- You can create a new product using this following script in mongoDB terminal

```
db.products.insert({"product_id": 10000002,"product_name": "tissue","review": [{"review_id": 30000001,"user": {"user_id": 30000001,"firstname": "Peter","lastname": "Chen","gender": "Male","nickname": "Superman","email": "hongkongbboy@gmail.com","password": "123"},"opinion": "It's good","text": "It's bad","rating_overall": 3,"doesRecommended": true,"rating_size": "a size too big","rating_width": "Slightly wide","rating_comfort": "Uncomfortable","rating_quality": "What I expected","isHelpful": 23,"isNotHelpful": 17,"created_at": "2007-10-19T09:03:29.967Z","review_photo_path": [{"review_photo_id": 60000001,"review_photo_url": "https://sdcuserphotos.s3.us-west-1.amazonaws.com/741.jpg"}, {"review_photo_id": 60000002,"review_photo_url": "https://sdcuserphotos.s3.us-west-1.amazonaws.com/741.jpg"}]}, {"review_id": 30000002,"user": {"user_id": 30000002,"firstname": "Peter","lastname": "Chen","gender": "Male","nickname": "Superman","email": "hongkongbboy@gmail.com","password": "123"},"opinion": "It's good","text": "It's bad","rating_overall": 3,"doesRecommended": true,"rating_size": "a size too big","rating_width": "Slightly wide","rating_comfort": "Uncomfortable","rating_quality": "What I expected","isHelpful": 23,"isNotHelpful": 17,"created_at": "2007-10-19T09:03:29.967Z","review_photo_path": [{"review_photo_id": 60000003,"review_photo_url": "https://sdcuserphotos.s3.us-west-1.amazonaws.com/741.jpg"}]}]});
```

##### READ (Without optimization)

- In my example, I show that my query `db.products.find({product_name:"quas"}).explain("executionStats");` has "totalDocsExamined" of 10M records with execution time of 28334ms and it returns 40222 documents that match that criteria.

![mongoDB_read_without-optimization](https://user-images.githubusercontent.com/32609294/83321345-d75cb480-a203-11ea-91e5-74882cafa1a4.JPG)

##### READ (With optimization)

- To optimize my query for the read method, use the following [tutorial video](https://www.youtube.com/watch?v=vftxTniVYrU) for help. I run the command `db.products.ensureIndex({product_name: 1});` to create index for the "product_name" field. Then I run `db.products.getIndexes()` to make sure the index is created.

- After optimization, I run the following query `db.products.find({product_name:"nobis"}).explain("executionStats");` and the execution time is 3301ms.

![mongoDB_read_with-optimization](https://user-images.githubusercontent.com/32609294/83321358-e2afe000-a203-11ea-962d-145c16d95f1c.JPG)

##### UPDATE (Without optimization)

- I run the following command for my UPDATE request `db.products.update({"review.review_id": 30000002}, {$set: {"review.$.text": "it’s an updated."}});`.

![mongoDB_update_without-optimization](https://user-images.githubusercontent.com/32609294/83328917-63d69980-a23b-11ea-937d-202f1a4595f5.JPG)

##### UPDATE (With optimization)

- To optimize my query for the update method, I run the following command `db.products.ensureIndex({"review.review_id": 1});`. My execution time goes from 40655ms to 0ms.

![mongoDB_update_with-optimization](https://user-images.githubusercontent.com/32609294/83328928-6fc25b80-a23b-11ea-93d6-42313b16005e.JPG)

##### DELETE (Without optimization)

- To perform the DELETE request, I can run the command `db.products.remove({"review.review_id":30000002});` in the MongoDB terminal. This function will remove the products collection. If want to remove the individual review, see 
[here](https://docs.mongodb.com/manual/reference/operator/update/pull/#pull-array-of-documents) instead, such as this `db.products.update({},{$pull:{review:{review_id: 30000002}}},{multi:true});`

![mongoDB_delete_without-optimization](https://user-images.githubusercontent.com/32609294/83328808-b8c5e000-a23a-11ea-81fa-f4d2863bf4c2.JPG)

##### DELETE (With optimization)

![mongoDB_delete_with-optimization](https://user-images.githubusercontent.com/32609294/83328819-c67b6580-a23a-11ea-91cb-750c223d8de0.JPG)

- After optimization through indexing, the execution time goes from 40570ms to 0ms.

**PostgreSQL**

- To improve query time, we can perform indexing. See [here](https://www.youtube.com/watch?v=--c8TnI1Sws) for tutorial.

- In addition, run the command `\timing` and it will shows the execution time of a command line.

##### CREATE

- You can create a new review using the following command line in PostgreSQL terminal `insert into review (review_id, product_id, userID, opinion, text, rating_overall, doesRecommended, rating_size, rating_width, rating_comfort, rating_quality, isHelpful, isNotHelpful, created_at) VALUES (31000000, 2, 2, 'hello', 'this is cool', '2', true, 'a size too small', 'Too narrow', 'Uncomfortable', 'Poor', 2, 2, 'Mon Oct 06 2014 22:38:57 GMT-0700 (Pacific Daylight Time)');`

##### READ (Without optimization)

- You can read detail using the following command line in PostgreSQL terminal `SELECT review.review_id, product_id, opinion, text, rating_overall, doesRecommended, rating_size, rating_width, rating_comfort, rating_quality, isHelpful, isNotHelpful, created_at, firstname, lastname, gender, nickname, email FROM review INNER JOIN users ON (users.userID = review.userID) WHERE product_id =9999500;`

![postgreSQL_read_without-optimization](https://user-images.githubusercontent.com/32609294/83335319-cee69700-a260-11ea-9ded-1a99f258982a.JPG)

##### READ (With optimization)

- To optimize the READ request in PostgreSQL, I did indexing. To perform indexing, I run the following command `Explain Analyze DELETE FROM review WHERE review_id = 31000000;` and then following with this command `Analyze`. 

The execution time reduces from 3612.243ms to 2.371ms.

![postgreSQL_read_with-optimization](https://user-images.githubusercontent.com/32609294/83336219-64385a00-a266-11ea-871a-94a982253ffe.JPG)


##### UPDATE (Without optimization)

- You can update values of a key using the following command line in PostgreSQL terminal `UPDATE review SET rating_overall = ‘3’, text = ‘super cute’ WHERE review_id = 31000000;`

![postgreSQL_update_without-optimization](https://user-images.githubusercontent.com/32609294/83335325-db6aef80-a260-11ea-8560-205fb7afd8d0.JPG)

##### UPDATE (With optimization)

- To optimize the UPDATE request in PostgreSQL, I perform indexing by run the following command `CREATE INDEX ON review (review_id);` and then followed by `Analyze;`

- My execution time reduced from 0.850ms to 0.064ms.

![postgreSQL_update_with-optimization](https://user-images.githubusercontent.com/32609294/83336286-fe000700-a266-11ea-90ad-4e63b7b2e6e6.JPG)

##### DELETE (Without optimization)

- You can delete values using the following command line `Explain Analyze DELETE FROM review WHERE review_id = 31000000;`

![postgreSQL_delete_without-optimization](https://user-images.githubusercontent.com/32609294/83335309-c1311180-a260-11ea-9cd9-4f0499f5c7fd.JPG)

##### DELETE (With optimization)

- Using the index technical that I have done previously, my execuion time reduces from 1856.151ms to 1772.118ms.

![postgreSQL_delete_with-optimization](https://user-images.githubusercontent.com/32609294/83336318-52a38200-a267-11ea-9b3c-2f7b57747145.JPG)

## Step 3 - Measure Initial Performance

- Below starting this session, I need to have a goal. My current goal is **expect my website to serve 10K user simultaneously**.

- I will be performance testing (load test and stress test) GET and POST requests with 1, 10, 100, 1K requests per second using K6 and will use New Relic to obtain performance data.

1. Sign up `New Relic` account on its website. Then select `New Relic APM`.

  -  Then there is an installation video on the right hand side of the website. Follow the instructions to complete the installation.

2. Increase Node's memory by running the following script in terminal `set NODE_OPTIONS=--max_old_space_size=8000`. See [reference](https://medium.com/tomincode/increasing-nodes-memory-337dfb1a60dd)

3. Install caching with Redis.

  - Make sure webpack is in "development" mode.

  - Follow this [guide](https://codeburst.io/implement-caching-with-redis-in-express-js-and-mongodb-9aa09f9146ce)

  - For Window, you can install through ubuntu using instruction [here](https://linuxize.com/post/how-to-install-and-configure-redis-on-ubuntu-18-04/)

  - To start, in one Ubuntu terminal, run `redis-server` and in another Ubuntu terminal, run `redis-cli`

  - Create `redis.js` file inside `database/mongoDB/utils` folder.

4. Create a `.env` file and store these data inside:
```
MONGO_HOST=localhost

REDIS_PORT=6379

SERVER_PORT=80
```

  - run `npm install npm dotenv`

  - add `.env` to .gitignore so when you push to github, other people won't see it.

  - put `require('dotenv').config();` in the `newIndex.js` file so the data can get pick up.

  - update `condensedMongoSchema.js` for env variables.

  - update `mongoDB/queries.js` file with `const redis = require('./utils/redis.js');`. 

5. Install K6 (load testing tool)

  - Create the folder inside database folder and write a script to check the get and post methods.

  - Our target to get 1000 vus for local machine and 10000 in EC2.

  - The following result is what I get from K6 with GET request:
  ![k6-getReview](https://user-images.githubusercontent.com/32609294/83552108-1ae24780-a4be-11ea-8187-a500878a8525.JPG)

  - The following result is what I get from New Relic:
  ![newRelic-getReview](https://user-images.githubusercontent.com/32609294/83552291-5ed54c80-a4be-11ea-93eb-3d524bb9668d.JPG)

  ![newRelic-getReview](https://user-images.githubusercontent.com/32609294/83552907-56c9dc80-a4bf-11ea-8a3e-ab0e83737b48.png)

## Step 4 - Deploy the Service and Proxy

1. Launch 1st EC2 instance to deploy Database
	1. Launch EC2
		- Use `Amazon Linux 2` and select `t2.medium`.
		- Hit `Next` until you hit security configuration
		- Add rule for "SSH", "HTTP", "HTTPS", "Custom TCP" types. For "HTTP", "HTTPS", and "Custom TCP", select "Anywhere" for source. For "Custom TCP" only., put your port number for Port Range.
		- Create a pem file and put it inside the root folder and make sure you include it in .gitignore
		- run "chmod 700 xxx.pem" in terminal provided by pressing "Connect" on AWS website
		- In AWS website, click `Elastic IPs` from the selection of the left drop down menu. Then press `Allocate Elastic IP address`. The reason we do this is to keep the IP address the same even if we shut down the instance because the IP address would change when we shut down instance. A new Public IPv4 address would create. Click on it. Click `Associate Elastic IP address`. With the `Instance` section, click on your current instance. Click `Associate`
		- run `ssh ec2-user@13.56.236.35 -i adidas_micro.pem` - the number 54.153.0.155 you can get it from "IPv4 Public IP" in AWS EC2.

	2. Install Node.js in EC2 Instance
		- Follow [this](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html) instruction

	3. Install MongoDB on EC2 Linux
		- Follow [this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/) instruction for installation.
		- When ask to create a /etc/yum.repos.d/mongodb-org-4.2.repo file, run the following command line `sudo vi /etc/yum.repos.d/mongodb-org-4.2.repo`. You can save the file by press `esc` and then run `:wq` to save

	4. Install Git
		- run `sudo yum install git`

	5. Start Seeding
		- Git clone repo from Github
		- run `npm install` for dependencies
		- Go to the seed file location and run `node condensedMongoSeed.js`

	6. Change MongoDB config
		- Run `sudo vi /etc/mongod.conf`
		- Press `i` to edit
		- comment out `bindIp: 127.0.0.1` by adding `#` to the left
		- Add `bindIpAll: true` to the next line. Make sure you index it correctly.
		- Run `sudo service mongod restart` to trigger the change.
	
	7. Testing server
		- To test if database is setup correctly in EC2. Go to `.env` file in your local machine and change `MONGO_HOST=mongodb://localhost` to `MONGO_HOST=mongodb://13.56.236.35:27017`. Then make a webpage runs to see if data displays correctly. Note that "27017" is the default code for Mongo database.
		
2. Launch 2nd EC2 for service
	1. Un-highlight redis script in `mongoDB/queries.js` file.

	2. Delete the `bundle.js` file and rerun `bundle.js` file to get a js file without redis.

	3. Go to AWS website and create another instance for the service with Linux. Can use `t2.micro`.

	4. Save the "pem" file inside the root folder.

	5. Press "connect" in AWS website and follow the instruction in "Connect to your instance". Go into the root folder where the pem file at and run `ssh ec2-user@13.57.191.130 -i adidas_service.pem`. "13.57.191.130" is the IPv4 Public IP.

	6. Check to make sure you have `MONGO_HOST=mongodb://13.56.236.35:27017` in ".env" folder and then git push everything to github.

	7. In the EC2 terminal, run these installations:
		- Install Node.js in EC2 Instance
			- Follow [this](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html) instruction
		- Install Git
			- run `sudo yum install git`
		- Update `package.json` script by run `npm install concurrently`.
			- change `nodemon` to `node` because nodemon does many things and it should only be used during development.
		- Git clone the previously pushed repo.
		- Run `npm run ec2-dev`
		- In the web browser, enter `13.57.191.130:3000`. The website should shows up. If it doesn't, it probably there is an error with MongoDB. Run `sudo service mongod start` to keep mongo going.
		- In the EC2 server, you can keep it running even if you delete the terminal by running `nohup npm run ec2-dev &`. Then test it's running by enter `ps -ax | grep node`. (optional: you can run `killall node` to remove nohup)

	8. Install loader.io into the same folder that you put the `bundle.js` file
		- Sign up for account with loader.io
		- Inside loader.io, enter `http://13.57.191.130:3000/` for `New target host`. 
		- Git push the file to github and git pull to the instance with the server and do the nohup to run the application.
		- Go back to loader.io to confirm target verification.
		- Click `Add a new test`. [Reference](https://support.loader.io/article/21-expression-syntax)
		![loader io test setup](https://user-images.githubusercontent.com/32609294/83833778-951ef180-a6a1-11ea-87ef-bcec66c86e90.JPG)

		![loader io test result](https://user-images.githubusercontent.com/32609294/83833802-a49e3a80-a6a1-11ea-862f-93fba4f8dc6c.JPG)
		- In the diagrams, you can tell that I am testing the last 10% of my database. There is 0 400 and 500 error response. There is 3 timeout which indicates there is ;likely 3 items that takes over 10 seconds (default) to generate a response. Response Counts is 9969. You use that number to divide by 60 second and you will get 166.15. This means that there is about 166.15 success responses when 800 clients visiting your website per seconds for that 1 minute, which is much below our throughput configuration of 800. The response time is 8399 ms which means that it takes about ~9 seconds to get the response from the GET request when 800 clients are visiting the website at the same time, but I need to target it to under 2000 ms. (Note that when you compare the loader.io result with NewRelic, you might get a slight different which loader.io giving a higher throughput. Goes with that.) You can go to the EC2 terminal root folder and run `less nohup.out` (then press shift + G) to see a log of which GET request items are being tested and used it to change the testing path. [Reference](https://drive.google.com/file/d/1OwlcFqDawUGwPXEVSXuivb8GVmdxEU7V/view)

		![loader io test result 2](https://user-images.githubusercontent.com/32609294/83870260-ca97ff00-a6e2-11ea-969c-9092c6decf9d.JPG)
		- As you can tell from the diagram, around 225 clients per second seem to be my limit as it averages around 1941 ms response time, which is slightly below my target of average 2000 ms response time.

	9. New Relic vs Loader.io comparsion
		- Next, we can switch to the New Relic website.
		![newRelic Loader io comparsion 1](https://user-images.githubusercontent.com/32609294/83846837-15ece600-a6c0-11ea-933c-671c9f7eb935.JPG)
		- From the diagram, you can tell that ~4720ms is different than the 8399ms. You can choose either the New Relic or Loader.io result in this part.
		- Click on one of the transactions and you will notice the following diagram.
		![newRelic Loader io comparsion 2](https://user-images.githubusercontent.com/32609294/83847184-ad523900-a6c0-11ea-979c-639b4ac3916d.JPG)
		- From this diagram, you will notice that the majority of the response time is spend on `MongoDB products toArray`. Therefore, we need to figure out how to reduce that to reach out target goal of 2000.

	10. AWS - Cloudwatch
		- In the AWS website, search `Cloudwatch` and find the diagram for `CPU Utilization Average`.
		![aws cpu usage](https://user-images.githubusercontent.com/32609294/83850112-484d1200-a6c5-11ea-8212-97877cda26a6.JPG)
		- In the diagram, it shows that the peak of one of the stress test of the service instance is about 20% for the CPU usage, which is very minimal.

	11.	Ram and CPU usage
		- In the EC2 service, runs the command `top` and re-run one of the loader.io test
		- You would notice the following RAM changes:
		![Top Ram usage](https://user-images.githubusercontent.com/32609294/83851885-d32f0c00-a6c7-11ea-8bc9-bd56abe311c7.JPG)
		- You can figure out how to improve the website performance by utilizing the data.

	12. G-zip and webpack production mode update
		- Run `npm install compression compression-webpack-plugin brotli-gzip-webpack-plugin`
		- Update `webpack.config.js` with production configuration.
		- Update `newIndex.js` with compression dependency.
		- Update script of package.json
		- Run `npm run prod` to test if it works in local machine.
		- Once it work, push to github and upload to EC2 server. Then run your instance there and do nohup to do a loader.io test. Some people improve their performance in this step. Unfortunately for me, it did not improve for my database.

3. Launch 3rd EC2 for NGINX
	1. For setup, see [reference here](https://www.nginx.com/blog/setting-up-nginx/). Only install Nginx and not Nginx Plus. Note that the default security setting sets the nginx load balancer with port number of 80.

	2. Run `systemctl status nginx.service` to see if it is actively running.

	3. Run `cd /etc/nginx/` and then `sudo vi nginx.conf`. See [reference](https://www.nginx.com/resources/wiki/start/topics/examples/dynamic_ssi/) to update "Nginx.conf". In my example, I updated with the following:

	![Nginx conf Setup](https://user-images.githubusercontent.com/32609294/83934413-bba66080-a765-11ea-9ce4-8fecaeff95ce.JPG)
	Please note that proper indexing does matter. "13.56.236.35" is the IPv4 of the EC2 service. You can name anything to replace "nodejs". The "nodejs" part of the "http://nodejs" has to match the "nodejs" of the upstream.

	4. Run `sudo systemctl stop nginx`, then `sudo systemctl start nginx`, then `systemctl status nginx.service`. You should expect to see a green sign of "active (running)". If you get a red sign of "failed", look into the error and redo this step.
	![Nginx Check](https://user-images.githubusercontent.com/32609294/83934492-5737d100-a766-11ea-8055-c2e483326dde.JPG)

	5. Go to `loader.io` website and replace the target host. My previous target host is `13.57.191.130:3000` which refers to my EC2 service. I will replace to `18.222.19.182:80`. Copy the verification token to the current token in the "client" folder.

















# Reviews Module 

Reviews module for e-commerce website of Front End Capstone Project #HRSF127

## Related Projects

  - https://github.com/9-space-lobster/addidas-product
  - https://github.com/9-space-lobster/adidas-related-info
  - https://github.com/9-space-lobster/adidas-instagram-feed
  - https://github.com/9-space-lobster/adidas-crawler

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Seeding the MySQL Database

```sh
cp db-mysql/config.example.js db-mysql/config.js
```
Make sure that the new config.js file is ignored by Git, then update `user` and `password` with your MySQL credentials. It is currently defaulted to `root` and ` `.

```sh
brew services list
brew services start mysql@5.7
```
Start your MySQL database. Your version may differ.

```sh
npm run seed
```
Your database is now seeded.

### Starting the Server

```sh
npm run react-dev
npm run server-dev
```

This will run the project with a seeded MySQL database on [localhost:3003](http://localhost:3003) 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.16.0
- npm 6.14.
- MySQL 5.7.0

```sh
node --version
npm --version
mysql --version && which mysql
```

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

- React 16
- Express 4
- Babel 7
- Webpack 4

### Install MySQL 5.7 on macOS
This procedure explains how to install [MySQL](https://www.mysql.com) using [Homebrew](http://brew.sh) on macOS (Sierra 10.12 and up)

https://gist.github.com/operatino/392614486ce4421063b9dece4dfe6c21
