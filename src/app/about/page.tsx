'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdmissionModal from '../../components/AdmissionModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* HERO SECTION — Who We Are */}
        <section className="py-24 px-4 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center bg-[#d0302b]">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/Image22_000.png" 
              alt="About Mapleford" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold !text-white leading-tight mb-4 tracking-tighter">
                Who We Are
              </h1>
              <p className="!text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic leading-tight">
                Rooted in Legacy. Ready for Tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — The Story */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="space-y-8 flex flex-col justify-center"
              >
                <div className="space-y-6 text-lg lg:text-xl text-[#000000] leading-relaxed">
                  <p>
                    Located in the heart of Hayathnagar, Hyderabad, <strong>Mapleford International School</strong> carries forward the distinguished three-decade legacy of <strong>Megacity High School</strong>, a trusted institution known for its strong values and commitment to quality education.
                  </p>
                  <p>
                    Today, this legacy is reimagined for a new era, one that embraces innovation, global horizons, and a future-ready learning experience.
                  </p>
                  <p>
                    As a CBSE-affiliated co-educational institution, Mapleford offers a structured, meticulous, and value-driven academic foundation. Our collaboration with <strong>Maple Bear Global Schools, Canada</strong>, brings forth international perspectives, modern pedagogy, holistic development, and global pathways to every learner, creating a harmonious blend of Indian academic depth and world-class educational insight.
                  </p>
                </div>
                <div className="p-8 bg-[#d0302b]/5 rounded-3xl border-l-[5px] border-[#d0302b]">
                  <p className="font-bold text-[#d0302b] text-xl leading-tight">
                    &quot;Empowering Mapleites to rise with Erudition, Ethos, and Excellence&quot;
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px]"
              >
                <img
                  src="/images/Image22.png"
                  alt="Mapleford Legacy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Our School of Thought */}
        <section className="py-10 sm:py-14 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* Text Part */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="space-y-8 lg:pr-8"
              >
                <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-white tracking-tighter">
                  Our School of Thought
                </h2>
                <div className="space-y-6 text-lg lg:text-xl text-white/90 leading-relaxed font-medium">
                  <p className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight ">
                    Knowledge in Pursuit of Integrity and Excellence
                  </p>
                  <div className="space-y-6">
                    <p>
                      At Mapleford International School, the euphony of intellect and integrity nurtures young talent to discover the courage to question, the discipline to grow, and the humility to keep learning.
                    </p>
                    <p>
                      Our approach fosters disciplined thinking, ethical actions, and purposeful ambitions, shaping individuals to excel with conviction and contribute with conscience.
                    </p>
                    <p>
                      We strive to raise curious thinkers, compassionate leaders, and confident achievers— grounded in enduring values and inspired to excel beyond boundaries.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image Part */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full flex items-center justify-center lg:mt-0 mt-8"
              >
                <div className="relative z-10 w-full max-w-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/images/WhatsApp Image 2026-03-19 at 13.48.35.jpeg"
                    alt="Our School of Thought"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* SECTION 3 — Our Team */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-[#000000] mb-6 tracking-tighter">
                Our Team
              </h2>
              <p className="text-xl lg:text-2xl text-[#000000] max-w-4xl mx-auto leading-relaxed font-bold opacity-80 italic ">
                The heart of Mapleford is an empathetic, compassionate, dynamic, and visionary team, a committed leadership, and devoted mentors at its core.
              </p>
            </div>

            <div className="space-y-20 pt-6">
              {/* Leader 1: Chairman */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                    <img src="/images/01--Subba Reddy Director.jpg" alt="P Subba Reddy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#d0302b] tracking-tighter">P Subba Reddy</h3>
                    <p className="text-gray-500 font-bold tracking-widest text-sm">Chairman</p>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-[#000000] ">Vision for the Future</h4>
                  <div className="w-20 h-1.5 bg-[#d0302b] rounded-full" />
                  <div className="space-y-6 text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    <p>At Mapleford International School, we believe that education is not merely the transfer of knowledge but the cultivation of character, curiosity, and compassion. As we carry forward the distinguished legacy of Megacity High School, our mission remains grounded in a simple truth: children learn best when they feel valued, supported, and inspired to discover who they are.</p>
                    <p>Our journey has been shaped by the belief that schooling must prepare students for life, not just for examinations. Mapleford stands as an evolution of that belief, embracing global perspectives while staying anchored in timeless values.</p>
                  </div>
                </div>
              </motion.div>

              {/* Leader 2: Assistant Director - RED SECTION */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-14 bg-[#d0302b] rounded-[4rem] text-white overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
                    <div className="space-y-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tighter">CH Swetha Reddy</h3>
                      <p className="text-white/60 font-bold tracking-widest text-sm">Assistant Director</p>
                    </div>
                    <h4 className="text-xl lg:text-2xl font-bold text-white/90 tracking-tighter">Driven by Purpose</h4>
                    <div className="w-20 h-1.5 bg-white/30 rounded-full" />
                    <div className="space-y-6 text-lg text-white/80 leading-relaxed font-medium">
                      <p>At Mapleford, we are committed to creating a space where every child can flourish. My focus is on ensuring that our operational excellence meets our academic vision, providing students with the best possible resources and environment to grow.</p>
                      <p>Innovation and empathy are at the heart of our strategy. We strive to maintain the perfect balance between modern infrastructure and heart-to-heart connections with our students and parents.</p>
                    </div>
                  </div>
                  <div className="lg:col-span-4 order-1 lg:order-2">
                    <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
                      <img src="/images/02--Swetha Madam.jpg" alt="CH Swetha Reddy" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Leader 3: Principal */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                    <img src="/images/03--Principal Madam.jpg" alt="P Varalaxmi" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#d0302b] tracking-tighter">P Varalaxmi</h3>
                    <p className="text-gray-500 font-bold tracking-widest text-sm">Principal</p>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-[#000000] tracking-tighter">Excellence in Learning</h4>
                  <div className="w-20 h-1.5 bg-[#d0302b] rounded-full" />
                  <div className="space-y-6 text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    <p>Education, to us, is not a race but a journey. It is augmented through attentive listening, thoughtful guidance, and learning experiences that encourage children to think independently and understand deeply.</p>
                    <p>Our faculty brings together expertise and empathy, ensuring that every learner is seen not just for their academic abilities, but for the individual they are becoming. We emphasize balance—between discipline and creativity, reflection and action, ambition and humility.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}