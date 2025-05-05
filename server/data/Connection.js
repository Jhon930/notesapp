const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const connectionString = process.env.MONGO_URI;
    await mongoose.connect(connectionString).then(() => console.log('Connect to the database')).catch((err) => console.error('Connection error', err));
} 


module.exports = { connectToDatabase };