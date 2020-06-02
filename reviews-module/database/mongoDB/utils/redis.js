require('dotenv').config();
const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const client = redis.createClient(process.env.REDIS_PORT);
client.on('connect', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('redis connected');
    }
})

client.hget = util.promisify(client.hget);

// create new cache function on prototype
mongoose.Query.prototype.cache = function(hkey, options = { expire: 60 }) {
    this.useCache = true;
    this.expire = options.expire;
    this.hashKey = JSON.stringify(hkey || '');

    return this;
}

// create reference for .exec
const exec = mongoose.Query.prototype.exec;

// override exec function to first check cache for data
mongoose.Query.prototype.exec = async function() {
    if (!this.useCache) {
        return await exec.apply(this, arguments);
    }

    const key = JSON.stringify({
        ...this.getQuery()
    });

    // get cached value from redis
    const cacheValue = await client.hget(this.hashKey, key);

    // if cache value is not found, fetch data from mongodb and cache it
    if (!cacheValue) {
        const doc = JSON.parse(cacheValue)  // converting back to original datatype from string
        /* While storing data in redis we may store a single object or an array of objects. 
         * We need to convert normal json into mongoose model instance before returning to app.js, 
         * this.model() is used for this purpose
        */
        return Array.isArray(doc)
            ? doc.map((d) => new this.model(d))
            : new this.model(doc);
    }

    // Data not present in redis cache, get the data from Mongodb and save the data to redis cache also
    const result = await exec.apply(this, arguments) // using the default exec function
    // just some logic to check if the data for the required query is even present in the database
    if (result) { // mongodb retured non-null value (can be empty array)
        if (Array.isArray(result) && result.length == 0) {
            // array is empty
            return null
        }
        else {
            // data is there (non-empty array or an single object)
            client.hset(this.hashKey, key, JSON.stringify(result)); // saving data in redis cache
            return result
        }
    } else { // database returned null value
        console.log("data not present")
        return null
    } 
};