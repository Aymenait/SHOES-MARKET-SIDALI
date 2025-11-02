const { MongoMemoryServer } = require('mongodb-memory-server');

const startMongo = async () => {
    try {
        const mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        console.log(`MongoDB running at: ${uri}`);
    } catch (error) {
        console.error('Error starting MongoDB:', error);
    }
};

startMongo();
