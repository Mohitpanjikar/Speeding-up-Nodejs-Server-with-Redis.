// Import the Redis class from the 'ioredis' library
const { Redis } = require("ioredis");

// Create a new Redis client instance
const client = new Redis();

// Export the Redis client instance so it can be used in other modules
module.exports = client;

// this code sets up a Redis client using the ioredis library and makes it available for use in other modules by exporting it.





