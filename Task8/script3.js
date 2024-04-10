const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient();

// Middleware for caching
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  redisClient.get(key, (err, cachedData) => {
    if (err) throw err;
    if (cachedData !== null) {
      res.send(JSON.parse(cachedData));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        redisClient.setex(key, 3600, JSON.stringify(body)); // Cache for 1 hour
        res.sendResponse(body);
      };
      next();
    }
  });
};

// Route handler for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the caching example!');
});

// Route with caching middleware
app.get('/cached-data', cacheMiddleware, (req, res) => {
  res.json({ message: 'This data is cached for 1 hour' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
