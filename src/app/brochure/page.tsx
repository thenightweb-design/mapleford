'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Brochure() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative py-32 lg:py-48 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d0302b]/5 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-5xl mb-4 block">📚</span>
                        <h1
                            className="text-[44px] lg:text-[68px] font-black mb-6 text-[#1A1A1A]"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            School <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Brochure</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-[#4F4F4F] max-w-3xl mx-auto leading-relaxed " style={{ fontFamily: '"Lato", sans-serif' }}>
                            "Your gateway to understanding Mapleford International School — where excellence meets opportunity."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brochure Content Sections */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-5xl mb-4 block">📖</span>
                            <h2
                                className="text-[44px] lg:text-[56px] font-black mb-8 leading-tight text-[#1A1A1A]"
                                style={{ fontFamily: '"Raleway", sans-serif' }}
                            >
                                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Prospectus</span>
                            </h2>
                            <div className="space-y-6 text-lg text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                                <p>
                                    Our comprehensive brochure offers an in-depth look at Mapleford International School's unique blend of Canadian pedagogy and CBSE curriculum, world-class facilities, and the values that drive our educational philosophy.
                                </p>
                                <p>
                                    Discover our 4-acre campus, specialized labs, sports arenas, and the nurturing environment that helps every child reach their full potential.
                                </p>
                                <div className="p-6 bg-amber-50 rounded-2xl border-l-4 border-[#D6B25E]">
                                    <p className=" font-medium text-[#d0302b]">
                                        "This brochure is more than information — it's an invitation to join our community of learners and leaders."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[3/4]"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=1000&fit=crop"
                                    alt="School Brochure Preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#D6B25E]/20">
                                    <p className="font-bold text-[#d0302b]">Academic Excellence</p>
                                    <p className="font-bold text-[#1A1A1A]">Global Standards</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-[44px] lg:text-[56px] font-black mb-8 leading-tight text-[#1A1A1A]"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            Download Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Brochure</span>
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                            Get detailed insights into our curriculum, facilities, admission process, and the Mapleford experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Academic Programs',
                                desc: 'Detailed curriculum overview and learning pathways.',
                                icon: '🎓',
                                size: '2.8 MB'
                            },
                            {
                                title: 'Campus Facilities',
                                desc: 'Explore our world-class infrastructure and amenities.',
                                icon: '🏫',
                                size: '3.2 MB'
                            },
                            {
                                title: 'Admission Guide',
                                desc: 'Complete guide to joining the Mapleford family.',
                                icon: '📝',
                                size: '1.9 MB'
                            }
                        ].map((brochure, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="p-8 text-center">
                                    <div className="text-6xl mb-6">{brochure.icon}</div>
                                    <h3
                                        className="text-2xl font-bold mb-4 text-[#1A1A1A]"
                                        style={{ fontFamily: "'Raleway', sans-serif" }}
                                    >
                                        {brochure.title}
                                    </h3>
                                    <p className="text-[#4F4F4F] mb-6 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>{brochure.desc}</p>
                                    <p className="text-sm text-[#d0302b] font-semibold mb-6">File size: {brochure.size}</p>
                                    <Button
                                        variant="tab"
                                        showTriangle={true}
                                        size="lg"
                                        onClick={() => {
                                            alert(`${brochure.title} download will be available soon!`);
                                        }}
                                    >
                                        <span className="tracking-widest uppercase text-sm">Download PDF</span>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-[32px] lg:text-[44px] font-black mb-8 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                        Ready to Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">More?</span>
                    </h2>
                    <p className="text-xl text-[#4F4F4F] mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
                        Have questions about our programs or want to schedule a campus visit? We're here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            href="/contact"
                            variant="tab"
                            showTriangle={true}
                            size="lg"
                        >
                            <span className="tracking-widest uppercase text-sm">Contact Us</span>
                        </Button>
                        <Button
                            href="/admissions"
                            variant="outline"
                            size="lg"
                        >
                            <span className="tracking-widest uppercase text-sm">Start Admission Process</span>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
