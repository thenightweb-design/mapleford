'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/Button';

interface Inquiry {
    _id: string;
    parentName: string;
    contactNumber: string;
    email: string;
    childName: string;
    childDob: string;
    gradeApplying: string;
    message: string;
    status: string;
    createdAt: string;
}

export default function EnquiryDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simplified login for this specific dashboard
        // In a real app, use the /api/auth/login endpoint
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: 'admin', password }) // Assuming admin username
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('adminToken', data.token);
                setIsLoggedIn(true);
                fetchInquiries();
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    const fetchInquiries = async () => {
        setIsLoading(true);
        const token = localStorage.getItem('adminToken');
        try {
            const res = await fetch('/api/inquiries', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setInquiries(data);
            } else if (res.status === 401) {
                setIsLoggedIn(false);
            }
        } catch (err) {
            console.error('Fetch error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            setIsLoggedIn(true);
            fetchInquiries();
        } else {
            setIsLoading(false);
        }
    }, []);

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black text-[#000000] mb-2 uppercase tracking-tighter shadow-sm">Enquiry Portal</h1>
                        <p className="text-gray-500 font-medium uppercase tracking-widest text-[10px]">Secure Admin Access</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all font-bold text-[#000000]"
                                placeholder="••••••••"
                            />
                        </div>
                        {error && <p className="text-[#d0302b] text-xs font-bold text-center">{error}</p>}
                        <Button type="submit" variant="primary" size="lg" className="w-full">Unlock Dashboard</Button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF9F6] p-8 md:p-12 lg:p-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div className="space-y-2">
                        <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-[10px] block">Management Console</span>
                        <h1 className="text-5xl font-black text-[#000000] uppercase tracking-tighter shadow-sm">Admission Inquiries</h1>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="md" onClick={() => { localStorage.removeItem('adminToken'); setIsLoggedIn(false); }}>Logout</Button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d0302b]"></div>
                    </div>
                ) : (
                    <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Date</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Parent Name</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Child Details</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Contact Info</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Grade</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {inquiries.length > 0 ? (
                                        inquiries.map((inquiry) => (
                                            <tr key={inquiry._id} className="hover:bg-gray-50/50 transition-colors group">
                                                <td className="px-8 py-6">
                                                    <p className="text-sm font-bold text-gray-400">{new Date(inquiry.createdAt).toLocaleDateString()}</p>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <p className="text-lg font-black text-[#000000]">{inquiry.parentName}</p>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <p className="text-sm font-bold text-[#000000]">{inquiry.childName}</p>
                                                    <p className="text-xs font-medium text-gray-400">DOB: {new Date(inquiry.childDob).toLocaleDateString()}</p>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <p className="text-sm font-bold text-[#d0302b]">{inquiry.contactNumber}</p>
                                                    <p className="text-xs font-medium text-gray-400">{inquiry.email}</p>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <p className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-widest uppercase">
                                                        {inquiry.gradeApplying}
                                                    </p>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${inquiry.status === 'pending' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-green-50 text-green-600 border-green-100'
                                                        }`}>
                                                        {inquiry.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="px-8 py-20 text-center">
                                                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No enquiries found</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
