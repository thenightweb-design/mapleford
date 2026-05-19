'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';

import AdmissionModal from '../../components/AdmissionModal';

export default function HayathnagarPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Mapleford International School",
        "url": "https://www.maplefordinternational.com/best-cbse-school-hayathnagar-hyderabad",
        "logo": "https://www.maplefordinternational.com/maple-ford-logo.png",
        "description": "Mapleford International School is one of the best CBSE schools in Hayathnagar, Hyderabad offering world-class education with CBSE curriculum and Canadian pedagogy.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shankar Nagar, Kuntloor Rd, Kolan Shiva Reddy Nagar, Hayathnagar Khalsa",
            "addressLocality": "Hayathnagar",
            "addressRegion": "Telangana",
            "postalCode": "501505",
            "addressCountry": "India"
        },
        "areaServed": [
            "Hayathnagar",
            "Hyderabad",
            "LB Nagar",
            "Vanasthalipuram"
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.33312",
            "longitude": "78.61464"
        },
        "hasMap": "https://www.google.com/maps/place/Mapleford+International+School/",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9346648486",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://www.facebook.com/people/Mapleford-International-School/61586409117016/",
            "https://www.instagram.com/maplefordintschool/",
            "https://share.google/NuuP1CfPrBP72gMlg",
            "https://www.justdial.com/Rangareddy/Mapleford-International-School-Near-Mother-Dairy-Hayath-Nagar/040PXX40-XX40-161118004753-M3T7_BZDET"
        ],
        "keywords": [
            "Best CBSE school in Hayathnagar",
            "Top CBSE schools in Hyderabad",
            "CBSE school admissions 2026",
            "International school in Hayathnagar",
            "Mapleford International School"
        ]
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        contactNumber: '',
        email: '',
        childName: '',
        gradeApplying: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'Landing Page - Best CBSE School' })
            });
            if (res.ok) setFormSubmitted(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const inputClass = "w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#d0302b] focus:ring-1 focus:ring-[#d0302b]/20 transition-all font-medium text-[#000000] placeholder:text-gray-400";

    return (
        <div className="min-h-screen bg-white font-sans text-[#000000]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />
            <Header />

            <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

                {/* ========== SECTION 1: BANNER + GET IN TOUCH FORM ========== */}
                <section className="relative overflow-hidden min-h-[550px] lg:min-h-[650px] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/Image19.png"
                            alt="Mapleford International School Campus"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Left: Banner Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-5">Session 2026-27</p>
                                <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-tight mb-6">
                                    <span className="text-white">Admissions</span> <br /><span className="text-white">Now Open</span>
                                </h1>
                                <p className="!text-white text-lg sm:text-xl font-medium leading-relaxed max-w-lg mb-8">
                                    Best CBSE School in Hayathnagar — blending Indian academic excellence with Canadian pedagogy.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                                        ✓ CBSE + Canadian Curriculum
                                    </span>
                                    <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                                        ✓ 4-Acre Green Campus
                                    </span>
                                </div>
                            </motion.div>

                            {/* Right: Get In Touch Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl"
                            >
                                {!formSubmitted ? (
                                    <>
                                        <div className="mb-6">
                                            <h2 className="text-2xl sm:text-[28px] font-bold text-[#000000]">Get In Touch</h2>
                                            <div className="w-12 h-1 bg-[#d0302b] rounded-full mt-3"></div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <input required type="text" value={formData.parentName} onChange={e => setFormData({...formData, parentName: e.target.value})} className={inputClass} placeholder="Parent Name" />
                                                <input required type="text" value={formData.childName} onChange={e => setFormData({...formData, childName: e.target.value})} className={inputClass} placeholder="Child Name" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <input required type="tel" value={formData.contactNumber} onChange={e => setFormData({...formData, contactNumber: e.target.value})} className={inputClass} placeholder="WhatsApp Number" />
                                                <select required value={formData.gradeApplying} onChange={e => setFormData({...formData, gradeApplying: e.target.value})} className={`${inputClass} appearance-none cursor-pointer`}>
                                                    <option value="">Select Grade</option>
                                                    <option value="Nursery">Nursery</option>
                                                    <option value="Kindergarten">Kindergarten</option>
                                                    <option value="Grade 1-5">Grade 1-5</option>
                                                    <option value="Grade 6-10">Grade 6-10</option>
                                                </select>
                                            </div>
                                            <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClass} placeholder="Email Address" />
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 bg-[#d0302b] hover:bg-[#b02824] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-colors disabled:opacity-50"
                                            >
                                                {isSubmitting ? 'SUBMITTING...' : 'BOOK CAMPUS TOUR'}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="text-center py-10 space-y-5">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 text-3xl font-bold">✓</div>
                                        <h3 className="text-2xl font-bold text-[#000000]">Enquiry Received!</h3>
                                        <p className="text-[#555555] font-medium">Our admissions team will contact you within 24 hours.</p>
                                        <button onClick={() => setFormSubmitted(false)} className="text-[#d0302b] font-bold text-sm tracking-widest uppercase hover:underline">SUBMIT ANOTHER →</button>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: ABOUT US ========== */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl group">
                                    <Image src="/images/Image26_000.png" alt="About Mapleford" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                <p className="text-[#d0302b] text-xs font-bold tracking-[0.3em] uppercase mb-3">About Us</p>
                                <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-tight tracking-tight text-[#000000] mb-6">
                                    A New Era of Global Education
                                </h2>
                                <div className="w-16 h-1 bg-[#D6B25E] rounded-full mb-8" />
                                <div className="space-y-5 text-lg leading-relaxed text-[#444444] mb-10">
                                    <p>Mapleford International School brings a distinguished new standard of education to Hayathnagar, Hyderabad, where the excellence of the <strong>CBSE curriculum</strong> is enriched with the progressive strength of <strong>Canadian pedagogy</strong>.</p>
                                    <p>Our approach places every child at the center of learning, encouraging curiosity, inquiry, creativity, collaboration, and confident communication.</p>
                                    <p>Spacious 4-acre green campus, Mapleford is designed as a vibrant learning ecosystem where academic excellence, character formation, innovation, and global awareness grow together. We prepare learners not only to excel in examinations, but to lead with confidence, compassion, and purpose in a rapidly changing world.</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-8 py-3.5 bg-[#d0302b] hover:bg-[#b02824] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-colors"
                                >
                                    ENQUIRE NOW
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: WHY CHOOSE US ========== */}
                <section className="py-20 lg:py-28 bg-[#d0302b] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                            <p className="text-white/70 text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
                            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-white tracking-tight">
                                The Mapleford Advantage
                            </h2>
                            <div className="w-16 h-1 bg-[#D6B25E] mx-auto mt-5 rounded-full" />
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Dual Pedagogy", desc: "CBSE rigor combined with Canadian Maple Bear early childhood methodology for a world-class foundation.", icon: "🎓" },
                                { title: "Safe & Secure Campus", desc: "24/7 CCTV monitoring and a highly secure campus for complete peace of mind for parents.", icon: "🛡️" },
                                { title: "Expert Faculty", desc: "Teachers trained in both CBSE and Canadian methods for a unique learning edge.", icon: "👩‍🏫" },
                                { title: "Smart Classrooms", desc: "Digital boards and technology-integrated learning to prepare children for the future.", icon: "💻" },
                                { title: "Sports & Arts", desc: "Professional coaching in cricket, football, basketball, performing arts, and more.", icon: "⚽" },
                                { title: "4-Acre Green Campus", desc: "Sprawling green campus providing a natural, pollution-free learning environment.", icon: "🌿" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="text-4xl mb-5">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-3 !text-black" style={{ color: '#000000' }}>{item.title}</h3>
                                    <p className="text-[15px] leading-relaxed !text-black" style={{ color: '#000000' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 4: OUR FACILITIES — Synced with Campus Page ========== */}
                <section id="facilities" className="py-24 bg-white px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                <p className="text-[#d0302b] text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Facilities</p>
                                <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-[#000000] tracking-tight leading-tight mb-6">
                                    World-Class Infrastructure
                                </h2>
                                <div className="w-24 h-1.5 bg-[#d0302b] mx-auto rounded-full" />
                            </motion.div>
                        </div>

                        {/* Academic Infrastructure — Alternating high-impact blocks */}
                        <div className="space-y-24 mb-32">
                            {[
                                {
                                    title: "Smart & Well-ventilated Classrooms",
                                    subtitle: "Smart. Bright. Engaging",
                                    description: "Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. With digital boards and projectors, lessons become dynamic and visual.",
                                    image: "/images/campus_classroom.png",
                                },
                                {
                                    title: "Science Labs",
                                    subtitle: "Explore. Experiment. Discover.",
                                    description: "Dedicated Physics, Chemistry, and Biology laboratories provide students with hands-on learning experiences that bring science to life. Well-equipped and thoughtfully designed, these labs encourage observation and inquiry.",
                                    image: "/images/campus_science_lab.png",
                                },
                                {
                                    title: "Computer Lab",
                                    subtitle: "Learn. Code. Innovate.",
                                    description: "Our modern computer lab supports technology-integrated learning and digital literacy. With updated systems and guided instruction, students develop essential computing skills and responsible digital habits.",
                                    image: "/images/campus_computer_lab.png",
                                },
                                {
                                    title: "Library",
                                    subtitle: "Quiet. Inviting. Inspiring.",
                                    description: "Our library is a calm and welcoming space where curiosity finds direction. Stocked with a wide range of age-appropriate books and reference materials, it encourages research and reflection.",
                                    image: "/images/campus_library.png",
                                }
                            ].map((fac, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                    className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                                >
                                    <div className="w-full lg:w-1/2 relative">
                                        <div className="absolute -inset-4 bg-gray-50 rounded-[3rem] -z-10 rotate-1 opacity-50" />
                                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white group">
                                            <img 
                                                src={fac.image} 
                                                alt={fac.title} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left px-4">
                                        <div className="space-y-3">
                                            <h3 className="text-3xl sm:text-4xl font-bold text-[#000000] tracking-tight leading-tight">{fac.title}</h3>
                                            <p className="text-[#d0302b] text-xl font-bold italic">{fac.subtitle}</p>
                                            <div className="w-16 h-1 bg-[#d0302b] rounded-full mx-auto lg:mx-0" />
                                        </div>
                                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                            {fac.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Sports Arena Section */}
                        <div className="bg-[#FFFDF7] rounded-[4rem] p-10 sm:p-20 border border-[#e8d5a0]/40 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6B25E]/5 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="relative z-10">
                                <div className="text-center mb-16">
                                    <h3 className="text-[28px] sm:text-[42px] font-bold text-[#000000] tracking-tight mb-4">Sports Arena</h3>
                                    <div className="w-20 h-1.5 bg-[#D6B25E] mx-auto rounded-full" />
                                    <p className="mt-6 text-xl text-gray-600 font-medium">Building strength, confidence, and teamwork</p>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {[
                                        { icon: '🏏', name: 'Cricket' },
                                        { icon: '🏀', name: 'Basketball' },
                                        { icon: '⛸️', name: 'Skating' },
                                        { icon: '🎾', name: 'Tennis' },
                                        { icon: '⚽', name: 'Football' },
                                        { icon: '🎽', name: 'Athletics' },
                                        { icon: '🏸', name: 'Badminton' },
                                        { icon: '🏊', name: 'Swimming' },
                                        { icon: '🏟️', name: 'Indoor Play' },
                                        { icon: '🪁', name: 'Kids Zone' }
                                    ].map((sport, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ y: -5 }}
                                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center group hover:shadow-xl hover:border-[#D6B25E]/30 transition-all duration-300"
                                        >
                                            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{sport.icon}</div>
                                            <span className="text-xs font-black text-gray-900 uppercase tracking-[0.15em]">{sport.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 5: CONTACT US ========== */}
                <section className="py-20 lg:py-28 bg-[#F8F8F8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
                                <div>
                                    <p className="text-[#d0302b] text-xs font-bold tracking-[0.3em] uppercase mb-3">Reach Us</p>
                                    <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#000000] tracking-tight mb-4">
                                        Contact Us
                                    </h2>
                                    <div className="w-16 h-1 bg-[#D6B25E] rounded-full" />
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-[#d0302b]/10 flex items-center justify-center text-xl shrink-0">📍</div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Address</p>
                                            <p className="font-bold text-[#000000]">Hayathnagar, Hyderabad, Telangana - 501505</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-[#d0302b]/10 flex items-center justify-center text-xl shrink-0">📞</div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Phone</p>
                                            <p className="font-bold text-[#000000]">+91 93466 48486</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-[#d0302b]/10 flex items-center justify-center text-xl shrink-0">📧</div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                                            <p className="font-bold text-[#000000]">info@maplefordinternational.com</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open('https://wa.me/919346648486')}
                                    className="px-8 py-3.5 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-colors"
                                >
                                    WHATSAPP US
                                </button>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                <div className="h-[450px] rounded-2xl overflow-hidden shadow-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.07943994593955!2d78.61484087402879!3d17.333126258670326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba02d6d66dddb%3A0x86420abb8c483eb8!2sMapleford%20International%20school!5e0!3m2!1sen!2sin!4v1774629760837!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ========== FINAL CTA ========== */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <p className="text-[#d0302b] text-xs font-bold tracking-[0.3em] uppercase mb-3">Ready to Begin?</p>
                            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#000000] tracking-tight leading-tight mb-5">
                                Give Your Child the Best Start
                            </h2>
                            <p className="text-[#555555] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                                Every great journey starts with a single step. Book a campus tour today and see why families trust Mapleford.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-block px-10 py-4 bg-[#d0302b] hover:bg-[#b02824] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-colors cursor-pointer"
                                >
                                    APPLY NOW
                                </button>
                                <a
                                    href="tel:+919346648486"
                                    className="inline-block px-10 py-4 border-2 border-[#D6B25E] text-[#D6B25E] hover:bg-[#D6B25E] hover:text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-colors text-center cursor-pointer"
                                >
                                    CALL US
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>

            {/* COPYRIGHT */}
            <div className="bg-[#d0302b] py-5 text-center">
                <p className="text-white text-sm font-medium">
                    © {new Date().getFullYear()} Mapleford International School. All Rights Reserved.
                </p>
            </div>

            <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
}
