const Queue = require('bull');
const redis = require('redis');

// Connect to Redis server
const redisClient = redis.createClient();

// Create a new Bull queue
const queue = new Queue('tasks', {
  redis: {
    port: 6379,
    host: '127.0.0.1',
  },
});

// Process jobs in the queue
queue.process(async (job) => {
  // Perform background task/job processing
  console.log(`Processing job ${job.id}: ${job.data}`);
});

// Add jobs to the queue
queue.add({ data: 'Example job data' });
