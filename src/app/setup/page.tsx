'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

export default function Setup() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                setMessage(`✅ Admin user created successfully! You can now login at /admin with username: ${formData.username}`);
                setIsSuccess(true);
            } else {
                setMessage(`❌ ${data.error}`);
                setIsSuccess(false);
            }
        } catch (error) {
            setMessage('❌ Error creating admin user');
            setIsSuccess(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-[#D6B25E]/20"
            >
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-black mb-2 text-[#1A1A1A] uppercase tracking-tighter shadow-sm">
                        Admin Setup
                    </h1>
                    <p className="text-[#4F4F4F]">Create your admin account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2 font-semibold text-sm">Username</label>
                        <input
                            type="text"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:border-transparent"
                            placeholder="Enter admin username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2 font-semibold text-sm">Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:border-transparent"
                            placeholder="Enter admin password"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        className="w-full"
                    >
                        Create Admin Account
                    </Button>
                </form>

                {message && (
                    <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${isSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}>
                        {message}
                    </div>
                )}

                {isSuccess && (
                    <div className="mt-4 text-center">
                        <a
                            href="/admin"
                            className="text-[#d0302b] font-bold hover:text-[#D6B25E] transition-colors"
                        >
                            Go to Admin Panel →
                        </a>
                    </div>
                )}

                <div className="mt-6 p-4 bg-blue-50 rounded-xl text-sm text-blue-700">
                    <p className="font-semibold mb-2">📝 Default Credentials (Recommended):</p>
                    <p>Username: <strong>admin</strong></p>
                    <p>Password: <strong>admin123</strong></p>
                </div>
            </motion.div>
        </div>
    );
}
