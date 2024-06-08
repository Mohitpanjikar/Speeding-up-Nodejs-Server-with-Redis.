# Redis Application for Speeding up Node.js

This repository provides a streamlined solution for speeding up your Node.js applications using Redis caching. By leveraging Redis, we aim to enhance the performance and responsiveness of Node.js servers, particularly when making frequent API calls.

## Features

- Utilizes Redis caching to minimize database queries and improve response times.
- Integrates with the "jsonplaceholder" API for demonstration purposes.
- Dockerized environment for easy setup and deployment.
- Includes a Postman collection for testing API endpoints.
- CLI interface to interact with Redis and view cached data.
- Web GUI available at port 8001 for visualizing Redis results.

## Getting Started

Follow these steps to set up and run the Redis application:

1. Ensure you have Docker installed on your machine.
2. Clone this repository to your local machine.
3. Run the following Docker command to start the Redis server and GUI:
   ```
   docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
   ```
   - Port 6379: Redis server
   - Port 8001: Redis GUI
4. Navigate to the project directory and install dependencies:
   ```
   npm install
   ```
5. Start the Node.js server:
   ```
   npm start
   ```
6. Access the API endpoints and test caching functionality using Postman.
7. Interact with Redis and view cached data using the provided CLI interface.

## Usage

- **API Endpoints**: 
  - Use the endpoints provided by the Node.js server to make API calls to "jsonplaceholder" and observe the caching mechanism in action.
- **Postman Collection**: 
  - Import the provided Postman collection to easily test API endpoints and caching behavior.
- **CLI Interface**: 
  - Use the CLI interface to interact with Redis and view cached data. Run `node redis-cli.js` in the terminal to launch the interface.
- **Redis GUI**: 
  - Access the Redis GUI at `http://localhost:8001` to visualize cached data and monitor Redis server activity.

## Screenshots

Here are some screenshots of the application:

1. Redis GUI:
   ![Redis GUI](https://raw.githubusercontent.com/Mohitpanjikar/Speeding-up-Nodejs-Server-with-Redis./main/redis%20gui.png)

2. Postman Collection before data being cached:
   ![Postman Collection](https://github.com/Mohitpanjikar/Speeding-up-Nodejs-Server-with-Redis./blob/main/before.png)

3. Postman Collection after data being cached in redis server:
   ![Postman Collection](https://github.com/Mohitpanjikar/Speeding-up-Nodejs-Server-with-Redis./blob/main/after%20being%20cache.png)


4. Data in redis gui - 
   ![Data in redis gui](https://github.com/Mohitpanjikar/Speeding-up-Nodejs-Server-with-Redis./blob/main/redis%20cache.png)

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests if you have any suggestions or improvements for this repository.



This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it according to your needs.

---

By leveraging Redis caching, this repository offers a straightforward solution for optimizing the performance of Node.js servers. Start accelerating your Node.js applications today!
