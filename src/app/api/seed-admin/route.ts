import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
    try {
        await connectDB();

        // Check if admin already exists
        const username = 'mapleford';
        const password = 'mapleford@123';
        
        const existingAdmin = await User.findOne({ username });
        if (existingAdmin) {
            const hashedPassword = await bcrypt.hash(password, 10);
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            return NextResponse.json({
                message: 'Admin password updated',
                credentials: { username, password, adminUrl: '/admin' }
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const adminUser = new User({ username, password: hashedPassword });
        await adminUser.save();

        return NextResponse.json({
            message: 'Admin user created successfully!',
            credentials: { username, password, adminUrl: '/admin' }
        });

    } catch (error) {
        console.error('Error creating admin:', error);
        return NextResponse.json({ error: 'Failed to create admin user' }, { status: 500 });
    }
}
