const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
    console.log('Testing connection to:', MONGODB_URI.replace(/:([^@]+)@/, ':****@'));
    try {
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000
        });
        console.log('✅ Success: Connected to MongoDB');
        await mongoose.disconnect();
    } catch (error) {
        console.error('❌ Failure:', error.message);
        if (error.message.includes('whitelist')) {
            console.log('Tip: Make sure your current IP address is whitelisted in MongoDB Atlas.');
        }
    }
}

testConnection();
