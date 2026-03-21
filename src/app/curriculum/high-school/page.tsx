'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Button from '../../../components/Button';

export default function HighSchool() {
    return (
        <div className="min-h-screen bg-white text-[#1A1A1A]">
            <Header />
            <div className="pt-24">
                {/* Hero Section */}
                <section className="relative py-32 lg:py-48 overflow-hidden bg-[#FDF6E3]/30">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d0302b]/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-bold tracking-[0.3em] text-[#d0302b] uppercase mb-4 block"
                        >
                            Grades 6–10
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-[56px] lg:text-[92px] font-bold mb-8 leading-tight"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            High <span className="text-[#d0302b]">School</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl lg:text-3xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed "
                            style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            "The transformation years that foster independence, discipline, and vision. With CBSE’s structured framework and global exposure, learners evolve into confident aspirants — ready to lead, innovate, and explore the world beyond boundaries."
                        </motion.p>
                    </div>
                </section>

                {/* Transition Section */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=1500&fit=crop"
                                        alt="High School Learning"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#d0302b]/40 to-transparent"></div>
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <p className="text-2xl font-bold ">"Ready to lead, innovate, and explore the world beyond boundaries."</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>The Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Years</span></h2>
                                <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full"></div>
                                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                    The transformation years that foster independence, discipline, and vision. With CBSE’s structured framework and global exposure, learners evolve into confident aspirants — ready to lead, innovate, and explore the world beyond boundaries.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "CBSE Curriculum Excellence", desc: "Rigorous academic preparation following national standards." },
                                        { title: "Global Perspective", desc: "Integrating international insights and cross-cultural awareness." },
                                        { title: "Career & Life Skills", desc: "Guidance and workshops for future academic and professional pathways." }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-[#d0302b]/5 flex items-center justify-center text-[#d0302b] font-bold shrink-0">0{i + 1}</div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                                <p className="text-gray-600">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* STEAM Focus */}
                <section className="py-32 bg-[#FDF6E3]/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-[32px] lg:text-[44px] font-bold mb-8" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>STEAM & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Innovation</span></h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-20 text-center">Where logic meets imagination across every discipline.</p>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { label: "Science", icon: "🔬" },
                                { label: "Technology", icon: "💻" },
                                { label: "Engineering", icon: "⚙️" },
                                { label: "Arts", icon: "🎨" },
                                { label: "Maths", icon: "📐" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-[#D6B25E]/10 hover:shadow-2xl transition-all hover:-translate-y-2">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-[#d0302b]">{item.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA - Redesigned to match homepage theme */}
                <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d0302b] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6B25E] rounded-full blur-3xl"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-5xl mb-4 block">👑</span>
                                <h2
                                    className="text-[44px] lg:text-[56px] font-bold mb-8 leading-tight"
                                    style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                                >
                                    The Journey into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Leadership</span>
                                </h2>
                                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#d0302b' }}>
                                    From Students to Leaders of Tomorrow
                                </h3>

                                <div
                                    className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8"
                                    style={{ background: 'linear-gradient(135deg, rgba(214,178,94,0.2), rgba(208,48,43,0.1))' }}
                                >
                                    <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Character</span>
                                    <span className="text-2xl">+</span>
                                    <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Confidence</span>
                                    <span className="text-2xl">+</span>
                                    <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Competence</span>
                                </div>

                                <p className="text-lg leading-relaxed mb-8" style={{ color: '#4F4F4F', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                    Leadership is not just a position — it's a mindset we cultivate in every student. Through student council opportunities, community service projects, and leadership development programs, we help young minds discover their potential to lead with integrity, empathy, and vision. Prepare for a future without limits.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        'Student council and peer leadership programs',
                                        'Community service and social responsibility initiatives',
                                        'Public speaking and communication skills development',
                                        'Mentorship programs connecting students with role models'
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15, duration: 0.5 }}
                                            className="flex items-start"
                                        >
                                            <span className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0" style={{ background: 'linear-gradient(145deg, #D6B25E, #C4A24E)' }}></span>
                                            <span className="text-lg">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 mt-10">
                                    <Button href="/admissions" variant="primary" size="md">
                                        Enquire Now
                                    </Button>
                                    <Button href="/contact" variant="outline" size="md">
                                        Visit Campus
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Right Side - Visual Elements */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-3xl overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto h-full"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1000&h=1200&fit=crop"
                                        alt="The Journey into Leadership"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#D6B25E]/20">
                                        <p className="font-bold text-[#d0302b]">Leadership:</p>
                                        <p className="font-bold text-[#1A1A1A]">Service. Growth. Impact.</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
