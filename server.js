const express = require('express');
const axios = require('axios');
const client = require('./client'); // Assuming 'client' is your Redis client instance
const app = express();

app.get('/', async (req, res) => {
    try {
        // Check if data is already cached in Redis
        const cacheValue = await client.get('todos');

        if (cacheValue) {
            // Parse the cached data and return it
            return res.json(JSON.parse(cacheValue));
        }

        // If not cached, fetch data from the API
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

        // Cache the data in Redis and set an expiration time
        await client.set('todos', JSON.stringify(data));
        await client.expire('todos', 30);

        // Return the fetched data
        return res.json(data);
    } catch (error) {
        // Handle errors (e.g., Redis or API errors)
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
