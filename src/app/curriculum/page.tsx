'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';



const curriculumStages = [
    {
        title: "Pre-School",
        grades: "Nursery | JKG | UKG",
        description: "Our play-based, inquiry-led Maple Bear early learning model nurtures social-emotional growth while building strong foundations in early literacy and numeracy. With a strong focus on English language development, children learn through storytelling, songs, games, and creative play. The program encourages curiosity, problem-solving, confidence, and resilience, preparing young learners for future academic success.",
        img: "/images/Preschool.png"
    },
    {
        title: "Elementary School",
        grades: "Grade 1 to Grade 5",
        description: "Our Elementary programme integrates CBSE learning milestones with Canadian instructional strategies in a progressive, concept-driven framework. Through hands-on experiences and Instruction in English strengthens bilingual skills in a well-rounded, immersive learning environment, while equal emphasis on intellectual, social, and emotional growth prepares learners for sustained academic success.",
        img: "/images/Elementry.png"
    },
    {
        title: "Middle School",
        grades: "Grade 6 - Grade 8",
        description: "A transition-focused, application-oriented curriculum where CBSE academic frameworks are strengthened through Canadian inquiry-based and interdisciplinary teaching. Lessons emphasise analytical thinking, problem-solving, and real-world application of concepts.",
        img: "/images/Middle School.png"
    },
    {
        title: "High School",
        grades: "Grade 9 and Grade 10",
        description: "A strong CBSE academic roadmap strengthened by: Critical thinking frameworks, skill-based projects. Through the Global Connect program, students engage virtually with peers around the world, fostering international collaborations, cultural exchanges, and broader global perspectives.",
        img: "/images/High School.png"
    }
];

export default function Curriculum() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#000000]">
            <Header />
            <div className="pt-[90px] lg:pt-[120px] overflow-hidden">
                {/* SECTION 1 — HERO BANNER */}
                <section className="py-12 sm:py-16 px-4 relative overflow-hidden min-h-[300px] sm:min-h-[400px] flex items-center bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src="/images/Image23.png" 
                            alt="Curriculum Background" 
                            fill 
                            className="object-cover opacity-60" 
                            priority 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl"
                        >
                            <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] font-semibold !text-white leading-tight mb-6 tracking-tighter">
                                A Continuum of Learning
                            </h1>
                            <p className="!text-white/90 text-lg sm:text-xl font-bold tracking-wide italic leading-tight border-l-4 border-[#d0302b] pl-6">
                                Where CBSE structure meets Canadian instructional excellence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 2 — COLLABORATION DESCRIPTION */}
                <section className="py-10 bg-white px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 text-center"
                        >
                            <p className="text-xl sm:text-2xl lg:text-3xl leading-snug text-[#000000] font-medium">
                                At Mapleford International School, learning is shaped by a powerful collaboration with <span className="text-[#d0302b] font-bold underline decoration-red-200 underline-offset-8">Maple Bear Global Schools, Canada</span>, a world leader in bilingual, inquiry-based education operating across 35+ countries and 450+ schools. This association helps students benefit from the proven strengths of the Canadian education system, consistently ranked among the world’s best, while staying firmly aligned to India’s esteemed CBSE framework.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Mapleford Edge */}
                <section className="py-12 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center gap-12 text-center">
                            {/* Unified Shadow Box containing Title, Description, and Images */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                transition={{ duration: 0.8 }}
                                className="w-full max-w-[1400px] mx-auto bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-6 md:p-10 border border-gray-50 flex flex-col items-center"
                            >
                                {/* Title and Description */}
                                <div className="max-w-5xl mx-auto mb-16">
                                    <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold mb-8 leading-tight tracking-tighter ">
                                        The Mapleford Edge
                                    </h2>
                                    <div className="space-y-6 text-lg lg:text-xl text-[#333333] leading-snug">
                                        <p className="text-xl leading-snug">
                                            Rooted in the proud three-decade legacy of Megacity High School, a purposeful, progressive co-educational institution, Mapleford International School carries forward time-tested values while redefining learning in a rapidly changing world.
                                        </p>
                                        <p className="text-xl leading-snug">
                                            Anchored in the strength of the CBSE curriculum and enriched through global learning pathways through our academic collaboration with Maple Bear Global Schools, Canada, students gain international perspectives through contemporary teaching approaches and the confidence to navigate global opportunities.
                                        </p>
                                    </div>
                                </div>

                                {/* 3 Images Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center justify-center h-[180px] relative"
                                    >
                                        <Image
                                            src="/images/Screenshot 2026-02-09 at 2.44.22 PM.png"
                                            alt="Evolution 1"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center justify-center h-[180px] relative"
                                    >
                                        <Image
                                            src="/images/Screenshot 2026-02-09 at 2.44.26 PM.png"
                                            alt="Evolution 2"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center justify-center h-[180px] relative"
                                    >
                                        <Image
                                            src="/images/Screenshot 2026-02-09 at 2.44.30 PM.png"
                                            alt="Evolution 3"
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — SEAMLESS BLEND */}
                <section className="py-8 bg-slate-50 px-4 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                                <h2 className="text-[22px] sm:text-[38px] lg:text-[48px] font-bold mb-8 text-[#000000] leading-tight tracking-tighter ">
                                    A Seamless Blend <br className="hidden sm:block" /> of Two Powerful Systems
                                </h2>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                                    <span className="hidden sm:block w-12 h-1 bg-[#d0302b]" />
                                    Canadian Pedagogy + CBSE Curriculum
                                    <span className="hidden sm:block w-12 h-1 bg-[#d0302b]" />
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative order-2 lg:order-1 h-[250px] sm:h-[400px] w-full"
                            >
                                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white w-full h-full">
                                    <Image 
                                        src="/images/curriculum_blend.png" 
                                        alt="Seamless Blend" 
                                        fill 
                                        className="object-cover" 
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                className="order-1 lg:order-2 space-y-12"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl lg:text-3xl font-bold tracking-wider text-gray-900">Holistic Approach</h3>
                                    <div className="w-24 h-1.5 bg-[#d0302b] rounded-full" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { text: "Citizenship", icon: "🌍" },
                                        { text: "Critical Thinking", icon: "🧩" },
                                        { text: "Building Confidence", icon: "🦁" },
                                        { text: "Compassion", icon: "❤️" },
                                        { text: "Curiosity", icon: "🔍" },
                                        { text: "Creativity", icon: "🎨" },
                                        { text: "Communication", icon: "💬" }
                                    ].map((val) => (
                                        <div key={val.text} className="flex items-center gap-4 p-5 bg-white rounded-2xl  border border-gray-100 hover:shadow-md transition-shadow">
                                            <span className="text-2xl">{val.icon}</span>
                                            <span className="text-sm font-bold tracking-widest text-gray-800">{val.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* What this means for learners */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="bg-white p-8 sm:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden mb-10"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                                <div className="relative z-10 flex flex-col justify-center">
                                    <h3 className="text-4xl sm:text-5xl font-bold mb-8 text-[#000000] leading-tight tracking-tighter ">What this means for learners:</h3>
                                    <div className="w-20 h-2 bg-[#D6B25E] rounded-full" />
                                </div>
                                <div className="relative z-10 grid grid-cols-1 gap-6">
                                    {[
                                        "Deep conceptual understanding instead of rote memory",
                                        "Inquiry, problem-solving, and project-based learning",
                                        "Continuous assessment aligned to Maple Bear learning outcomes",
                                        "Preparedness for CBSE board pathways in higher grades"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-slate-50 border border-gray-100">
                                            <div className="w-10 h-10 rounded-full bg-[#d0302b] flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-lg font-bold text-[#000000] tracking-wide text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="text-center p-12 bg-[#d0302b]/5 rounded-[3rem] border border-[#d0302b]/10"
                        >
                            <p className="text-2xl lg:text-4xl font-bold leading-relaxed text-gray-900 tracking-tighter">
                                Dual Approach. Academic Excellence. Global Exposure
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 4 — CURRICULUM PATHWAY */}
                <section className="py-8 bg-[#d0302b] relative overflow-hidden px-4">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full lg:w-1/2">
                                <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold mb-10 text-white leading-none tracking-tighter ">
                                    Curriculum Pathway: <br className="hidden lg:block" /> <span className="text-xl lg:text-2xl font-bold opacity-80 italic">From Early Years to Senior School</span>
                                </h2>
                                <div className="space-y-10">
                                    <div className="p-10 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20">
                                        <p className="text-xl sm:text-2xl text-white leading-relaxed font-bold">
                                            Every stage of learning marks an important milestone in a child’s development. Our curriculum is thoughtfully designed as a continuous, coherent pathway, wherein knowledge, skills, and values are progressively strengthened year after year.
                                        </p>
                                    </div>
                                    <p className="text-xl text-white/90 leading-relaxed font-medium">
                                        Our holistic approach nurtures intellectual, social, emotional, and ethical growth while placing strong emphasis on reading, mathematics, science, and problem-solving. We enable students to succeed across disciplines and develop higher-order thinking skills essential for lifelong learning by building solid foundations in literacy, numeracy, and scientific understanding.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/2 relative h-[250px] sm:h-[400px]"
                            >
                                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] border-8 border-white/10 w-full h-full">
                                    <Image 
                                        src="/images/curriculum_pathway_intro.png" 
                                        alt="Pathways Roadmap" 
                                        fill 
                                        className="object-cover" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#d0302b]/80 via-transparent to-transparent" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5 — THE STAGES */}
                <section className="py-8 bg-white px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="space-y-10">
                            {curriculumStages.map((stage, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                                    className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}
                                >
                                    <div className="w-full lg:w-5/12 space-y-10">
                                        <div className="space-y-4">

                                            <h3 className="text-[32px] lg:text-[44px] font-bold text-[#000000] leading-none tracking-tighter mb-4 ">
                                                {stage.title}
                                            </h3>
                                            <p className="text-xl font-bold text-gray-400 tracking-widest">{stage.grades}</p>
                                        </div>
                                        <div className="w-32 h-1.5 bg-[#D6B25E] rounded-full" />
                                        <p className="text-lg lg:text-xl leading-relaxed text-gray-700 font-medium">
                                            {stage.description}
                                        </p>
                                        <Button href="/admissions" variant="tab" showTriangle={true} size="lg">
                                            <span className="tracking-widest text-sm">Apply for {stage.title}</span>
                                        </Button>
                                    </div>
                                    <div className="w-full lg:w-7/12 relative group h-[250px] sm:h-[400px]">
                                        <div className="absolute -inset-8 bg-slate-50 rounded-[4rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl transform group-hover:rotate-1 transition-transform duration-700">
                                            <Image 
                                                src={stage.img} 
                                                alt={stage.title} 
                                                fill 
                                                className="object-cover" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — FINAL CTA */}
                <section className="py-8 bg-[#d0302b] px-4 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <h2 className="text-[32px] sm:text-[54px] lg:text-[68px] font-bold text-white leading-none tracking-tighter ">
                                Prepare Your <br /> Global Future
                            </h2>
                            <p className="text-xl lg:text-2xl text-white font-bold max-w-2xl mx-auto mt-8 tracking-wide">
                                Give your child the edge of a Canadian pedagogy and the strength of a CBSE curriculum.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
                                <Button href="/admissions" variant="secondary" size="lg">
                                    <span className="!text-black">Enroll Now</span>
                                </Button>
                                <Button href="/contact" variant="outline" size="lg" className="border-[#D6B25E] text-[#D6B25E] hover:bg-[#D6B25E] hover:text-[#000000]">
                                    Contact Us
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};


