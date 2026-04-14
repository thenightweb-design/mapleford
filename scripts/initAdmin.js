const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env.local');
    process.exit(1);
}

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function initAdmin() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        const username = 'mapleford';
        const password = 'mapleford@123'; 

        
        const existingAdmin = await User.findOne({ username });
        if (existingAdmin) {
            console.log('⚠️  Admin user already exists. Updating password...');
            const hashedPassword = await bcrypt.hash(password, 10);
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            console.log('✅ Admin password updated successfully!');
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const adminUser = new User({
                username,
                password: hashedPassword
            });
            await adminUser.save();
            console.log('✅ Admin user created successfully!');
        }

        console.log('');
        console.log('📝 Admin Login Credentials:');
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log('');
        console.log('🔗 Admin Panel URL: http://localhost:3000/admin');

        await mongoose.disconnect();
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

initAdmin();
