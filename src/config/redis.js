import redis from 'redis'

const redisClient = redis.createClient({
    url: process.env.NODE_ENV === 'development' ? "" : "redis://redis:6379",
    host: process.env.NODE_ENV === 'development' ? "localhost" : "",
    port: 6379
})


async function redisConnection() {
    try {
        await redisClient.connect();
        // await redisClient.flushDb();

        console.log('Redis connected');
    } catch (error) {
        console.error('Error connecting to Redis:', error);
        throw error;
    }
}

export {
    redisClient,
    redisConnection
};