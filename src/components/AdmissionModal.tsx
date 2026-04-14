'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface AdmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
    const [formData, setFormData] = useState({
        parentName: '',
        contactNumber: '',
        email: '',
        childName: '',
        childDob: '',
        gradeApplying: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'Admission Popup' })
            });
            if (res.ok) {
                setFormSubmitted(true);
                setFormData({
                    parentName: '',
                    contactNumber: '',
                    email: '',
                    childName: '',
                    childDob: '',
                    gradeApplying: '',
                    message: ''
                });
            } else {
                alert('Failed to submit. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 z-[101] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-4"
                    >
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-12">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute right-6 top-6 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-[#d0302b] transition-all"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>

                            {!formSubmitted ? (
                                <>
                                    <div className="mb-8 text-center">
                                        <span className="text-[#d0302b] font-black uppercase tracking-[0.3em] text-xs block mb-3">Admission Enquiry</span>
                                        <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter">
                                            Start Your Child's Journey
                                        </h2>
                                        <p className="mt-2 text-gray-500 font-medium">Join our community of excellence</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Parent / Guardian Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.parentName}
                                                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                                    placeholder="Your Name"
                                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={formData.contactNumber}
                                                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                                    placeholder="+91"
                                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="email@example.com"
                                                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Child Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.childName}
                                                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                                    placeholder="Child's Name"
                                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Grade Applying</label>
                                                <select
                                                    required
                                                    value={formData.gradeApplying}
                                                    onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold text-sm"
                                                >
                                                    <option value="">Select Grade</option>
                                                    <option value="nursery">Nursery</option>
                                                    <option value="jr-kg">Jr. KG</option>
                                                    <option value="sr-kg">Sr. KG</option>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                                                        <option key={g} value={`grade-${g}`}>Grade {g}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                                            <textarea
                                                rows={2}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Any questions?"
                                                className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold resize-none"
                                            />
                                        </div>

                                        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                        </Button>
                                        <p className="text-center text-[9px] font-bold text-gray-300 uppercase tracking-widest">Safe & Secure Encrypted Channel</p>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-12 space-y-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="text-7xl"
                                    >
                                        ✨
                                    </motion.div>
                                    <h3 className="text-3xl font-black text-[#1A1A1A]">Inquiry Sent!</h3>
                                    <p className="text-xl text-gray-500 font-medium">Our admissions officer will call you shortly.</p>
                                    <Button variant="outline" onClick={onClose} className="mt-4">Close Modal</Button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
