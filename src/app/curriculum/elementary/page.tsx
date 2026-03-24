'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../../components/Button';

export default function ElementarySchool() {
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
                            Grades 1–5
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-[56px] lg:text-[92px] font-bold mb-8 leading-tight"
                            style={{ fontFamily: '"Raleway", sans-serif' }}
                        >
                            Elementary <span className="text-[#d0302b]">School</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl lg:text-3xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed "
                            style={{ fontFamily: '"Lato", sans-serif' }}
                        >
                            "Building knowledge and strengthening values through real-world applications."
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1 space-y-8"
                            >
                                <h2 className="text-[32px] lg:text-[44px] font-bold" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>The Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Years</span></h2>
                                <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full"></div>
                                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                    The building years of knowledge and expression — where students strengthen academics, values, and creativity. Learning becomes meaningful through interactive classrooms and real-world applications.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Inquiry Led", desc: "Developing analytical and reasoning skills." },
                                        { title: "Value Centric", desc: "Grounded in character and ethical responsibility." },
                                        { title: "Collaborative", desc: "Learning through teamwork and shared goals." },
                                        { title: "Skill Focused", desc: "Emphasizing digital fluency and communication." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-[#FDF6E3]/50 border border-[#D6B25E]/10">
                                            <h4 className="font-bold text-[#d0302b] mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
                                        alt="Elementary Learning"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Holistic Expansion - Redesigned to match homepage theme */}
                <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
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
                                <span className="text-5xl mb-4 block">📖</span>
                                <h2
                                    className="text-[44px] lg:text-[56px] font-bold mb-8 leading-tight"
                                    style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                                >
                                    Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Textbooks</span>
                                </h2>
                                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#d0302b' }}>
                                    Learning That Extends Beyond the Classroom
                                </h3>

                                <div
                                    className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8"
                                    style={{ background: 'linear-gradient(135deg, rgba(214,178,94,0.2), rgba(208,48,43,0.1))' }}
                                >
                                    <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Academics</span>
                                    <span className="text-2xl">+</span>
                                    <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Arts</span>
                                    <span className="text-2xl">+</span>
                                    <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Sports</span>
                                </div>

                                <p className="text-lg leading-relaxed mb-8" style={{ color: '#4F4F4F', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                    We ensure students have a balanced exposure to academics, arts, and physical education. Our holistic approach develops well-rounded individuals who excel not just in the classroom, but in all aspects of life.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        'Languages & Communication Skills',
                                        'Sciences & Mathematical Thinking',
                                        'Visual & Performing Arts',
                                        'Physical Education & Sports'
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
                                    className="rounded-3xl overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto h-full min-h-[500px]"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1000&h=1200&fit=crop"
                                        alt="Beyond the Textbooks"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#D6B25E]/20">
                                        <p className="font-bold text-[#d0302b]">Holistic Learning:</p>
                                        <p className="font-bold text-[#1A1A1A]">Mind. Body. Spirit.</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA - Redesigned to match homepage theme */}
                <section className="py-24 bg-white" id="continuum">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-5xl mb-4 block">🎓</span>
                            <h2
                                className="text-[44px] lg:text-[56px] font-bold mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                            >
                                Secure Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Future</span>
                            </h2>
                            <p className="text-xl max-w-4xl mx-auto" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Building a strong foundation today for a bright and successful tomorrow. Our comprehensive educational pathway ensures every child develops the skills, knowledge, and character needed to thrive in an ever-changing world.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    stage: 'Academic Excellence',
                                    description: 'Rigorous curriculum aligned with CBSE standards, ensuring strong conceptual understanding and critical thinking skills.',
                                    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                                    color: '#E8F5E9'
                                },
                                {
                                    stage: 'Character Building',
                                    description: 'Developing values, ethics, and social responsibility through experiential learning and community engagement.',
                                    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
                                    color: '#E3F2FD'
                                },
                                {
                                    stage: 'Future Ready',
                                    description: 'Preparing students with 21st-century skills, digital literacy, and global perspectives for tomorrow\'s challenges.',
                                    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
                                    color: '#FFF3E0'
                                }
                            ].map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ y: -10 }}
                                    className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <Image
                                            src={stage.image}
                                            alt={`${stage.stage}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 text-center" style={{ background: stage.color }}>
                                        <h3
                                            className="text-2xl font-bold mb-4"
                                            style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                                        >
                                            {stage.stage}
                                        </h3>
                                        <p style={{ color: '#4F4F4F', lineHeight: '1.7', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>{stage.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button href="/admissions" variant="primary" size="lg">
                                    Admissions Open
                                </Button>
                                <Button href="/contact" variant="outline" size="lg">
                                    Enquire Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
