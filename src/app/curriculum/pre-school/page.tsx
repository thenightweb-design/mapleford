'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../../components/Button';

export default function PreSchool() {
    return (
        <div className="min-h-screen bg-white text-[#1A1A1A]">
            <Header />
            <div className="pt-24">
                {/* Hero Section */}
                <section className="relative py-32 lg:py-48 overflow-hidden bg-[#FDF6E3]/30">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d0302b]/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-bold tracking-[0.3em] text-[#d0302b] mb-4 block"
                        >
                            Nursery | Jr. KG | Sr. KG
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-[56px] lg:text-[92px] font-bold mb-8 leading-tight"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            Pre-<span className="text-[#d0302b]">School</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl lg:text-2xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed "
                            style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            "Where curiosity blossoms and imagination leads learning."
                        </motion.p>
                    </div>
                </section>

                {/* Core Philosophy */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
                                    <Image
                                        src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=800&fit=crop"
                                        alt="Pre-School Learning"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#d0302b]/10"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-[32px] lg:text-[44px] font-bold" style={{ fontFamily: '"Raleway", sans-serif' }}>The Foundation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Years</span></h2>
                                <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full"></div>
                                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                    The foundation years where curiosity blossoms and imagination leads learning. Through play-based exploration, storytelling, and creative discovery, pre-schoolers develop early confidence, communication skills, and joy in learning.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Play-based inquiry approach",
                                        "Creative expression through arts & music",
                                        "Early literacy and mathematical thinking",
                                        "Social-emotional development focus",
                                        "Safe and stimulating environment"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-lg font-semibold">
                                            <span className="w-10 h-10 rounded-full bg-[#FDF6E3] flex items-center justify-center text-[#d0302b]">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Curriculum Pillars */}
                <section className="py-32 bg-[#FDF6E3]/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-[32px] lg:text-[56px] font-bold mb-20" style={{ fontFamily: '"Raleway", sans-serif' }}>Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Pillars</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Cognitive", icon: "🧠", desc: "Developing problem-solving skills and logical reasoning through hands-on activities." },
                                { title: "Physical", icon: "🏃", desc: "Enhancing gross and fine motor skills in our dedicated play arenas and creative zones." },
                                { title: "Socio-Emotional", icon: "❤️", desc: "Building empathy, confidence, and strong interpersonal bonds with peers and mentors." }
                            ].map((pillar, i) => (
                                <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-[#D6B25E]/10 group hover:-translate-y-2 transition-transform">
                                    <div className="text-6xl mb-8 transform transition-transform group-hover:scale-110">{pillar.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA - Redesigned to match homepage theme */}
                <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-100">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d0302b]/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Side - Image and Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-[#1A1A1A]"
                            >
                                <span className="text-5xl mb-4 block">🚀</span>
                                <h2
                                    className="text-[44px] lg:text-[56px] font-bold mb-8 leading-tight"
                                    style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                                >
                                    Start Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Journey</span>
                                </h2>
                                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#d0302b' }}>
                                    The First Step Towards Excellence
                                </h3>
                                <p className="text-[#4F4F4F] mb-8 text-lg leading-relaxed" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                    Experience the unique blend of wisdom and wonder at Mapleford. Our pre-school program is designed to nurture curiosity, creativity, and confidence in every child, laying a strong foundation for lifelong learning.
                                </p>

                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=500&fit=crop"
                                        alt="Pre-School at Mapleford"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Button
                                        href="/admissions"
                                        variant="primary"
                                        size="lg"
                                        className="w-full sm:w-auto shadow-xl hover:shadow-2xl"
                                    >
                                        Admissions Open
                                    </Button>
                                    <Button
                                        href="/contact"
                                        variant="outline"
                                        size="lg"
                                        className="w-full sm:w-auto shadow-xl hover:shadow-2xl"
                                    >
                                        Visit Us
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Right Side - Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div
                                    className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl"
                                    style={{ border: '1px solid rgba(214,178,94,0.3)' }}
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Quick Enquiry</h3>
                                    <form className="space-y-5">
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Parent / Guardian Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:border-transparent transition-all"
                                                placeholder="Enter name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Contact Number</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:border-transparent transition-all"
                                                placeholder="Enter number"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:border-transparent transition-all"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2 font-medium text-sm">Child&apos;s Age</label>
                                            <select
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:border-transparent transition-all"
                                            >
                                                <option value="">Select age</option>
                                                <option value="2-3">2-3 Years (Nursery)</option>
                                                <option value="3-4">3-4 Years (Jr. KG)</option>
                                                <option value="4-5">4-5 Years (Sr. KG)</option>
                                            </select>
                                        </div>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            className="w-full shadow-xl hover:shadow-2xl"
                                        >
                                            Submit Enquiry
                                        </Button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
