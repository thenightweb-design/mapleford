'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const MotionImage = motion(Image);
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AdmissionModal from '../components/AdmissionModal';

const testimonials = [
    { name: "Srinivas Rao", role: "Parent (Grade 8)", content: "Mapleford International School fosters a love for learning while maintaining high academic standards. Our son has excelled in ways we couldn’t have imagined, thanks to the dedicated teachers.", initials: "SR" },
    { name: "Dr. Priya Reddy", role: "Parent (Nursery)", content: "The way Mapleford International School integrates real-world applications into the curriculum is outstanding. My child is learning skills that prepare them for the future, and we couldn’t be happier.", initials: "PR" },
    { name: "Arjun Sharma", role: "Parent (Grade 4)", content: "We are incredibly grateful to Mapleford International School for nurturing our child both academically and emotionally. The focus on values, discipline, and creativity has truly shaped a well-rounded individual.", initials: "AS" },
];

export default function Home() {
    const [showFrenchMotto, setShowFrenchMotto] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [steamIndex, setSteamIndex] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    // Animate motto text sequence
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFrenchMotto(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Auto-rotate STEAM section
    useEffect(() => {
        const interval = setInterval(() => {
            setSteamIndex(prev => (prev + 1) % 5);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Auto-advance testimonial carousel
    useEffect(() => {
        const timer = setInterval(() => setTestimonialIndex(c => (c + 1) % testimonials.length), 4500);
        return () => clearInterval(timer);
    }, []);

    const prevTestimonial = () => setTestimonialIndex(c => (c - 1 + testimonials.length) % testimonials.length);
    const nextTestimonial = () => setTestimonialIndex(c => (c + 1) % testimonials.length);

    // Fade in animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Video */}
            <section className="relative overflow-hidden h-screen">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/WhatsApp Video 2026-01-16 at 09.02.08.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center max-w-5xl w-full"
                    >
                        <div className="flex items-center justify-center" style={{ minHeight: '120px' }}>
                            <AnimatePresence mode="wait">
                                {showFrenchMotto ? (
                                        <motion.h1
                                            key="french"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.8 }}
                                            className="font-bold tracking-tighter text-[26px] sm:text-[36px] lg:text-[48px] whitespace-nowrap"
                                            style={{
                                                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                                                lineHeight: '1.2',
                                                background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 50%, #D6B25E 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                            }}
                                        >
                                            Le Savoir | Intégrité | L&apos;Excellence
                                        </motion.h1>
                                    ) : (
                                        <motion.h1
                                            key="english"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.8 }}
                                            className="font-bold tracking-tighter text-[26px] sm:text-[36px] lg:text-[48px] whitespace-nowrap"
                                            style={{
                                                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                                                lineHeight: '1.2',
                                                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFA500 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                            }}
                                        >
                                            Knowledge | Integrity | Excellence
                                        </motion.h1>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                    >
                        <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Campus Section */}
            <section className="py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col"
                        >
                            <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold mb-8 leading-tight tracking-tighter ">
                                Campus
                            </h2>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-[#d0302b]">
                                A Space That Opens Horizons
                            </h3>
                            <p className="text-lg lg:text-xl mb-8 text-[#333333] leading-relaxed">
                                Set across a sprawling 4-acre campus, Mapleford International School offers students the freedom to explore, learn, and thrive in an open, thoughtfully designed environment. Lush green landscapes, modern classrooms, innovation labs, sports arenas, and creative spaces come together to create an environment that supports academic focus, physical vitality, and overall well-being.
                            </p>
                            <Button href="/campus" variant="tab" showTriangle={true} size="lg">
                                <span className="tracking-widest text-sm">Read more about Our Campus</span>
                            </Button>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative flex items-start pt-2 h-[400px] w-full"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative"
                            >
                                <Image
                                    src="/images/Image19.png"
                                    alt="Mapleford International School Campus"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D6B25E]/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Curriculum Section */}
            <section className="py-10 bg-[#d0302b] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        {/* Left Side - Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold mb-8 leading-tight tracking-tighter ">
                                Curriculum
                            </h2>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                A Seamless Blend of Two Powerful Systems
                            </h3>
                            <h4 className="text-xl lg:text-2xl font-medium mb-8 opacity-90">
                                Canadian Pedagogy + CBSE Curriculum
                            </h4>

                            <div
                                className="inline-flex items-center gap-6 px-10 py-5 rounded-full mb-10 bg-gradient-to-r from-[#D6B25E] to-[#C5A04D] shadow-xl border border-[#B38D3C]"
                            >
                                <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>Canadian Pedagogy</span>
                                <span className="text-3xl font-light opacity-50" style={{ color: '#FFFFFF' }}>|</span>
                                <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>CBSE Curriculum</span>
                            </div>

                            <p className="text-xl leading-relaxed mb-10" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', color: '#FFFFFF' }}>
                                At Mapleford International School, learning is shaped by a powerful collaboration with <span className="font-bold">Maple Bear Global Schools, Canada</span>, a world leader in bilingual, inquiry-based education operating across 35+ countries and 450+ schools. Through this framework, our students benefit from the proven strengths of the Canadian education system, consistently ranked among the world’s best, while staying firmly aligned to India’s robust CBSE curriculum.
                            </p>

                            <div className="w-full">
                                <Button href="/curriculum" variant="tab-golden" align="right" showTriangle={true} triangleColor="#D6B25E" size="lg">
                                    <span className="tracking-widest text-sm !text-black">Read More about Our Curriculum</span>
                                </Button>
                            </div>
                        </motion.div>


                        {/* Right Side - Visual Elements */}
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
                                className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto h-[600px] border-8 border-white/10"
                            >
                                <Image
                                    src="/images/curriculum_indian.png"
                                    alt="Canadian Pedagogy + CBSE Curriculum"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* The Continuum of Learning */}
            <section className="py-10 bg-white" id="continuum">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[28px] sm:text-[44px] lg:text-[52px] font-bold mb-6 leading-tight tracking-tighter ">
                                The Continuum of Learning
                            </h2>
                            <p className="max-w-4xl mx-auto text-lg lg:text-xl text-[#333333] leading-relaxed">
                                Every stage of learning is a critical milestone in a child’s developmental journey. Our curriculum is designed as a continuous and coherent pathway, where knowledge, skills, and values are systematically strengthened year after year.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                id: 'pre-school',
                                stage: 'Pre-School',
                                grades: 'Nursery - UKG',
                                description: 'Play-based early learning that builds curiosity, confidence, and strong foundations.',
                                image: '/images/continuum_preschool_indian.png'
                            },
                            {
                                id: 'elementary',
                                stage: 'Elementary School',
                                grades: 'Grade 1 - 5',
                                description: "Engaging and inquiry-led learning that blends CBSE milestones with Canadian instructional excellence.",
                                image: '/images/continuum_elementary_indian.png'
                            },
                            {
                                id: 'middle',
                                stage: 'Middle School',
                                grades: 'Grade 6 - 8',
                                description: "Analytical thinking and real-world application through interdisciplinary Canadian teaching methods.",
                                image: '/images/continuum_middle_indian.png'
                            },
                            {
                                id: 'high',
                                stage: 'High School',
                                grades: 'Grade 9 - 10',
                                description: "A CBSE-aligned programme that prepares students for academic success and future pathways.",
                                image: '/images/continuum_high_indian.png'
                            }
                        ].map((stage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -20,
                                    scale: 1.02,
                                    rotateX: 2,
                                    rotateY: -2,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-none overflow-hidden flex flex-col h-[520px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_45px_120px_rgba(0,0,0,0.18)] transition-all duration-500 relative z-10 hover:z-20 border-t border-gray-50"
                                style={{ perspective: "1000px" }}
                            >
                                <div className="h-[42%] overflow-hidden relative">
                                    <Image
                                        src={stage.image}
                                        alt={`${stage.stage}`}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                </div>
                                <div className="h-[58%] text-center flex flex-col justify-between items-center bg-white relative">
                                    <div className="space-y-4 p-8 pb-4">
                                        <h3
                                            className="font-bold"
                                            style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#000000', fontSize: 'clamp(18px, 2.5vw, 24px)' }}
                                        >
                                            {stage.stage}
                                        </h3>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                                            <p className="font-bold text-[11px] tracking-[0.15em] text-[#d0302b]">
                                                {stage.grades}
                                            </p>
                                        </div>
                                        <p className="text-[#000000] leading-relaxed px-2 font-medium" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', fontSize: '13px' }}>
                                            {stage.description}
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <Button
                                            href={`/curriculum#${stage.id}`}
                                            variant="tab"
                                            showTriangle={true}
                                            size="md"
                                        >
                                            <span className="tracking-widest text-sm">Read More</span>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEAM Section */}
            <section className="py-4 bg-[#d0302b] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        {/* Left Column: Pure-SVG Circular Ring */}
                        <div className="relative w-full h-[600px] flex items-center justify-center">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 600 600"
                                style={{ maxWidth: '600px' }}
                            >
                                {[
                                    {
                                        title: 'Science', color: '#FFD700',
                                        renderIcon: () => (
                                            <g transform="translate(0,-18)">
                                                {/* Nucleus */}
                                                <circle cx="0" cy="0" r="3" fill="white" fillOpacity="0.95">
                                                    <animate attributeName="r" values="3;4.2;3" dur="2s" repeatCount="indefinite" />
                                                </circle>
                                                {/* Orbit 1 - spinning */}
                                                <ellipse cx="0" cy="0" rx="12" ry="4.5" stroke="white" strokeWidth="1.4" fill="none" strokeOpacity="0.9">
                                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
                                                </ellipse>
                                                {/* Orbit 2 */}
                                                <ellipse cx="0" cy="0" rx="12" ry="4.5" stroke="white" strokeWidth="1.4" fill="none" strokeOpacity="0.6" transform="rotate(60)" />
                                                {/* Orbit 3 */}
                                                <ellipse cx="0" cy="0" rx="12" ry="4.5" stroke="white" strokeWidth="1.4" fill="none" strokeOpacity="0.4" transform="rotate(-60)" />
                                                {/* Electron dot on orbit 1 */}
                                                <circle cx="12" cy="0" r="1.8" fill="white" fillOpacity="0.95">
                                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite" />
                                                </circle>
                                            </g>
                                        )
                                    },
                                    {
                                        title: 'Technology', color: '#DAA520',
                                        renderIcon: () => (
                                            <g transform="translate(0,-18)">
                                                {/* Chip body */}
                                                <rect x="-8" y="-8" width="16" height="16" rx="2" stroke="white" strokeWidth="1.4" fill="white" fillOpacity="0.15" />
                                                {/* Grid lines */}
                                                <line x1="-3" y1="-8" x2="-3" y2="8" stroke="white" strokeOpacity="0.35" strokeWidth="0.8" />
                                                <line x1="3" y1="-8" x2="3" y2="8" stroke="white" strokeOpacity="0.35" strokeWidth="0.8" />
                                                <line x1="-8" y1="-3" x2="8" y2="-3" stroke="white" strokeOpacity="0.35" strokeWidth="0.8" />
                                                <line x1="-8" y1="3" x2="8" y2="3" stroke="white" strokeOpacity="0.35" strokeWidth="0.8" />
                                                {/* Pins */}
                                                <line x1="-3" y1="-11" x2="-3" y2="-8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="3" y1="-11" x2="3" y2="-8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="-3" y1="8" x2="-3" y2="11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="3" y1="8" x2="3" y2="11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="-11" y1="-3" x2="-8" y2="-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="-11" y1="3" x2="-8" y2="3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="8" y1="-3" x2="11" y2="-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="8" y1="3" x2="11" y2="3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                {/* Pulsing center dot */}
                                                <circle cx="0" cy="0" r="2.5" fill="white" fillOpacity="0.95">
                                                    <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
                                                    <animate attributeName="r" values="2.5;3.8;2.5" dur="1.2s" repeatCount="indefinite" />
                                                </circle>
                                            </g>
                                        )
                                    },
                                    {
                                        title: 'Engineering', color: '#FFA500',
                                        renderIcon: () => (
                                            <g transform="translate(0,-18)">
                                                {/* Large Gear */}
                                                <g>
                                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
                                                    <circle cx="0" cy="0" r="12" fill="none" stroke="white" strokeWidth="4" strokeDasharray="3,2" />
                                                    <circle cx="0" cy="0" r="6" fill="white" fillOpacity="0.2" />
                                                </g>
                                                {/* Small Gear */}
                                                <g transform="translate(14, 14)">
                                                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="4s" repeatCount="indefinite" />
                                                    <circle cx="0" cy="0" r="7" fill="none" stroke="white" strokeWidth="3" strokeDasharray="2,2" />
                                                </g>
                                            </g>
                                        )
                                    },
                                    {
                                        title: 'Arts', color: '#B8860B',
                                        renderIcon: () => (
                                            <g transform="translate(0,-18)">
                                                <path d="M-12,-4 C-12,-10 12,-10 12,-4 C12,4 4,12 -4,12 C-8,12 -12,8 -12,-4" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.2" />
                                                <circle cx="-4" cy="-3" r="1.5" fill="#FFD700" />
                                                <circle cx="2" cy="-4" r="1.5" fill="#FF69B4" />
                                                <circle cx="5" cy="1" r="1.5" fill="#00CED1" />
                                                <g>
                                                    <path d="M4,4 L10,10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                    <animateTransform attributeName="transform" type="rotate" values="0 4 4; 25 4 4; 0 4 4" dur="2s" repeatCount="indefinite" />
                                                </g>
                                            </g>
                                        )
                                    },
                                    {
                                        title: 'Mathematics', color: '#F0C040',
                                        renderIcon: () => (
                                            <g transform="translate(0,-18)">
                                                {/* Plus Symbol */}
                                                <g transform="translate(-12,-8)">
                                                    <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                                    <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                                    <animateTransform attributeName="transform" type="translate" values="-12,-8; -12,-11; -12,-8" dur="2s" repeatCount="indefinite" />
                                                </g>
                                                {/* Minus Symbol */}
                                                <g transform="translate(12,-8)">
                                                    <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                                    <animateTransform attributeName="transform" type="translate" values="12,-8; 12,-5; 12,-8" dur="2s" repeatCount="indefinite" />
                                                </g>
                                                {/* Multiply Symbol */}
                                                <g transform="translate(-8,10)">
                                                    <g transform="rotate(45)">
                                                        <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                                        <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                                    </g>
                                                    <animateTransform attributeName="transform" type="rotate" from="0 -8 10" to="360 -8 10" dur="4s" repeatCount="indefinite" />
                                                </g>
                                                {/* Division Symbol */}
                                                <g transform="translate(8,10)">
                                                    <line x1="-5" y1="0" x2="5" y2="0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                                                    <circle cx="0" cy="-4" r="1.5" fill="white" />
                                                    <circle cx="0" cy="4" r="1.5" fill="white" />
                                                    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                                                </g>
                                            </g>
                                        )
                                    },
                                ].map((seg, i) => {
                                    const R = 210, cx = 300, cy = 300;
                                    const gapDeg = 8, arcSpan = 72 - gapDeg;
                                    const startDeg = i * 72 - 90 + gapDeg / 2;
                                    const arcEndDeg = startDeg + arcSpan;
                                    const midDeg = startDeg + arcSpan / 2;
                                    const toRad = (d: number) => d * Math.PI / 180;

                                    const sx = cx + R * Math.cos(toRad(startDeg));
                                    const sy = cy + R * Math.sin(toRad(startDeg));
                                    const ex = cx + R * Math.cos(toRad(arcEndDeg));
                                    const ey = cy + R * Math.sin(toRad(arcEndDeg));
                                    const mx = cx + R * Math.cos(toRad(midDeg));
                                    const my = cy + R * Math.sin(toRad(midDeg));

                                    const rawRot = midDeg + 90;
                                    const normRot = ((rawRot % 360) + 360) % 360;
                                    const textRot = (normRot > 90 && normRot < 270) ? rawRot - 180 : rawRot;

                                    const isActive = steamIndex === i;
                                    const sw = isActive ? 170 : 150;

                                    return (
                                        <g key={i} style={{ cursor: 'pointer' }} onClick={() => setSteamIndex(i)}>
                                            {/* Thick arc segment */}
                                            <path
                                                d={`M ${sx} ${sy} A ${R} ${R} 0 0 1 ${ex} ${ey}`}
                                                fill="none"
                                                stroke={seg.color}
                                                strokeWidth={sw}
                                                strokeLinecap="butt"
                                                opacity={isActive ? 1 : 0.82}
                                                style={{ transition: 'stroke-width 0.35s, opacity 0.35s' }}
                                            />
                                            {/* Animated icon + title, tangentially rotated */}
                                            <g transform={`translate(${mx},${my}) rotate(${textRot})`}>
                                                {/* Animated icon — scaled up */}
                                                <g transform="scale(1.7)">
                                                    {seg.renderIcon()}
                                                </g>
                                                <text
                                                    x="0" y="32"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    fontSize={isActive ? '13' : '11'}
                                                    fontWeight="900"
                                                    fill="white"
                                                    fontFamily="Raleway, sans-serif"
                                                    letterSpacing="2"
                                                    style={{ transition: 'font-size 0.35s' }}
                                                >
                                                    {seg.title.toUpperCase()}
                                                </text>
                                            </g>
                                        </g>
                                    );
                                })}

                                {/* Center STEAM hub — pure SVG */}
                                {/* White circle background */}
                                <circle cx="300" cy="300" r="85" fill="white" style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.6))' }} />
                                <circle cx="300" cy="300" r="85" fill="none" stroke="white" strokeWidth="6" />
                                {/* STEAM letters in red */}
                                {['S', 'T', 'E', 'A', 'M'].map((letter, idx) => {
                                    const isActive = steamIndex === idx;
                                    const totalWidth = 5 * 22; // 5 letters × ~22px each
                                    const startX = 300 - totalWidth / 2 + 11;
                                    const x = startX + idx * 22;
                                    return (
                                        <text
                                            key={letter}
                                            x={x}
                                            y="306"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fontSize={isActive ? '28' : '22'}
                                            fontWeight="900"
                                            fill="#d0302b"
                                            fontFamily="Raleway, sans-serif"
                                            style={{ transition: 'font-size 0.3s' }}
                                        >
                                            {letter}
                                        </text>
                                    );
                                })}
                                {/* Subtle underline */}
                                <rect x="282" y="316" width="36" height="2" rx="1" fill="rgba(208,48,43,0.25)" />
                            </svg>
                        </div>

                        {/* Right Column: Description */}
                        <motion.div
                            className="text-left relative text-white"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                            >
                                <h2 className="text-[32px] lg:text-[44px] font-bold mb-6 leading-tight tracking-tighter " style={{ color: '#FFFFFF' }}>
                                    Where Logic Meets Imagination
                                </h2>

                                <div className="space-y-6 text-base leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                                    <p className="border-l-4 border-white pl-6 py-1 font-bold" style={{ color: '#FFFFFF' }}>
                                        At Mapleford International School, STEAM education blends Science, Technology, Engineering, Arts, and Mathematics to cultivate learners who can think critically, design creatively, and innovate purposefully.
                                    </p>
                                    <p style={{ color: '#FFFFFF' }}>
                                        Our classrooms are spaces of exploration, where scientific curiosity merges with artistic creativity, and technology becomes a canvas for expression.
                                    </p>
                                    <p style={{ color: '#FFFFFF' }}>
                                        Students engage in hands-on design projects, robotics, visual arts, coding, and creative problem-solving, learning to see challenges from multiple perspectives.
                                    </p>
                                </div>

                                <div className="mt-12 hidden">
                                    <Button href="/programs" variant="outline-white" size="lg" className="hover:bg-white hover:text-[#d0302b]">
                                        Discover our Labs →
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Sports Arena Section */}
            <section className="py-10 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#d0302b]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 relative"
                                >
                                    <Image
                                        src="/images/WhatsApp Image 2026-03-19 at 13.19.19.jpeg"
                                        alt="Football"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 relative"
                                >
                                    <Image
                                        src="/images/WhatsApp Image 2026-03-19 at 13.19.20.jpeg"
                                        alt="Badminton"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 relative"
                                >
                                    <Image
                                        src="/images/WhatsApp Image 2026-03-19 at 13.19.20 (1).jpeg"
                                        alt="Tennis"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white/10 relative"
                                >
                                    <Image
                                        src="/images/WhatsApp Image 2026-03-19 at 13.19.20 (2).jpeg"
                                        alt="Athletics"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="order-1 lg:order-2 text-[#000000]"
                        >
                            <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold mb-8 leading-tight tracking-tighter ">
                                Sports Arena
                            </h2>
                            <p className="text-2xl lg:text-3xl font-bold mb-4 text-[#d0302b]">
                                Build Spirit. Play Strong.
                            </p>
                            <p className="text-lg lg:text-xl leading-relaxed mb-10 text-[#333333]">
                                At Mapleford International School, growth isn’t limited to books and classrooms; it thrives on the field, on the court, and in every challenge that builds spirit and strength. Every match played, every goal scored, and every serve perfected shapes not just an athlete, but a resilient, disciplined, and determined individual. With a vibrant sporting culture at its heart, Mapleford nurtures young talent through Football, Badminton, Tennis, and Athletics, encouraging every student to discover the joy of play and the power of perseverance. Our state-of-the-art infrastructure, from modern sports arenas to safe, well-equipped training zones, forms the backbone of an environment that fosters confidence, team spirit, and leadership.
                            </p>

                            <Button href="/campus" variant="tab" showTriangle={true} size="lg">
                                <span className="tracking-widest text-sm">Read more about Sports Facilities</span>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>




            {/* Testimonials Section */}
            <section className="py-20 bg-[#d0302b] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-14 relative z-30">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold mb-4 leading-tight tracking-tighter ">
                                Words from Our Community
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg lg:text-xl font-bold opacity-90">
                                Discover why families trust Mapleford International school for their child&apos;s educational journey.
                            </p>
                        </motion.div>
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[0, 1, 2].map((offset) => {
                                const index = (testimonialIndex + offset) % testimonials.length;
                                const t = testimonials[index];
                                return (
                                    <motion.div
                                        key={`${testimonialIndex}-${offset}`}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: offset * 0.1 }}
                                        className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-8 py-10 text-center flex flex-col items-center h-full testimonial-card-text-black"
                                    >
                                        {/* Quote icon */}
                                        <div className="mb-6">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#000000">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 8.44772 14.0171 9V12C14.0171 12.5523 13.5694 13 13.0171 13H11.0171L11.0171 4H21.0171V15C21.0171 17.7614 18.7785 20 16.0171 20L14.017 21ZM3.01711 21L3.01711 18C3.01711 16.8954 3.91255 16 5.01711 16H8.01711C8.56939 16 9.01711 15.5523 9.01711 15V9C9.01711 8.44772 8.56939 8 8.01711 8H4.01711C3.46482 8 3.01711 8.44772 3.01711 9V12C3.01711 12.5523 2.56939 13 2.01711 13H0.0171094L0.0171094 4H10.0171V15C10.0171 17.7614 7.77853 20 5.01711 20L3.01711 21Z" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <p className="text-base leading-relaxed mb-8 italic flex-grow font-bold text-black" style={{ color: '#000000', fontFamily: '"Lato", sans-serif' }}>
                                            &quot;{t.content}&quot;
                                        </p>

                                        {/* Avatar + Name */}
                                        <div className="flex flex-col items-center gap-3 mt-auto">
                                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border-2 border-black/20">
                                                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>{t.initials}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-base text-black" style={{ fontFamily: "'Raleway', sans-serif", color: '#000000' }}>{t.name}</h4>
                                                <p className="text-xs font-bold text-black" style={{ color: '#000000' }}>{t.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Prev / Next Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#d0302b] hover:text-white transition-all duration-200 z-20"
                            style={{ color: '#000000' }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#d0302b] hover:text-white transition-all duration-200 z-20"
                            style={{ color: '#000000' }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>

                        {/* Dot Indicators */}
                        <div className="flex justify-center gap-2 mt-12">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setTestimonialIndex(i)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${i === testimonialIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Get in Touch CTA Section */}
            <section className="py-12 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
                <div className="absolute inset-0 opacity-100">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d0302b]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-[#1A1A1A]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="text-[#1A1A1A] flex flex-col justify-center"
                        >
                            <h2
                                className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold mb-8 leading-tight tracking-tighter"
                            >
                                Start Your Child&apos;s Journey
                            </h2>
                            <h3 className="text-3xl font-bold mb-8" style={{ color: '#d0302b' }}>
                                Connect with Mapleford
                            </h3>
                            <p className="text-[#4F4F4F] mb-12 text-xl leading-relaxed max-w-xl" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Do you have questions about admissions, curriculum, or campus visits?
                                We’re here to assist you at every step of your child&apos;s educational journey.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Button
                                    onClick={() => setIsModalOpen(true)}
                                    variant="tab"
                                    showTriangle={true}
                                    size="lg"
                                >
                                    <span className="tracking-widest text-sm">Enroll Now</span>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white lg:max-w-[85%] lg:ml-auto h-[500px] relative">
                                <MotionImage
                                    whileHover={{ scale: 1.02 }}
                                    src="/images/WhatsApp Image 2026-03-20 at 00.06.04.jpeg"
                                    alt="Start Your Journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D6B25E]/15 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Footer />
        </div >
    );
}
