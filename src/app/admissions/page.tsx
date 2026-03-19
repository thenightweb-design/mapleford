'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import AdmissionModal from '../../components/AdmissionModal';

const steps = [
  {
    number: '01',
    title: 'Take Your First Step',
    subtitle: 'Enquiry & Registration',
    tagline: 'Step in and experience our inspiring learning atmosphere.',
    description: [
      'Step into a world where global standards meet strong values. Choosing the right school is the first step toward your child\'s success, and we are here to make that journey meaningful.',
      'Our campus fosters curiosity, creativity, and confidence, while our nurturing environment supports every child\'s holistic growth.',
      'Complete the enquiry form and take the first step toward your child\'s future.'
    ],
    cta: 'Enquire Now',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="3" />
        <path d="M20 32h24M32 20l12 12-12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: 'white',
  },
  {
    number: '02',
    title: 'Enquire Now',
    subtitle: 'Student Interaction',
    tagline: 'Unlock endless possibilities for your child\'s future.',
    description: [
      'A warm and thoughtfully designed, age-appropriate interaction created to understand each learner\'s unique strengths, interests, and potential.',
      'We ensure children feel comfortable, confident, and free to express themselves. Our approach focuses on discovery rather than evaluation, without any pressure.'
    ],
    cta: null,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="26" cy="22" r="10" stroke="currentColor" strokeWidth="3" />
        <path d="M12 52c0-7.732 6.268-14 14-14h0c7.732 0 14 6.268 14 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M42 28l4 4 8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: 'red',
  },
  {
    number: '03',
    title: 'Documentation',
    subtitle: 'Smooth & Guided',
    tagline: 'We handle every detail with care.',
    description: [
      'Our dedicated team provides complete support through every formal requirement and submission. We guide parents at every step, ensuring clarity and ease throughout the process.',
      'From documentation to final confirmation, every detail is handled with care. This ensures a seamless, smooth, and stress-free experience for every family.'
    ],
    cta: null,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M22 24h20M22 32h20M22 40h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="48" cy="48" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="3" />
        <path d="M44 48l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: 'white',
  },
  {
    number: '04',
    title: 'Onboarding',
    subtitle: 'Welcome to Mapleford',
    tagline: 'The beginning of a meaningful and inspiring journey.',
    description: [
      'A thoughtfully curated final orientation for both children and parents. We ensure a smooth, confident transition into the Mapleford community.',
      'With warmth and clarity, families are guided every step of the way. Marking the beginning of a meaningful and inspiring journey together.'
    ],
    cta: null,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M32 12L8 28v28h16V40h16v16h16V28L32 12z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="32" cy="24" r="5" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    bg: 'red',
  }
];

export default function Admissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' as const } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' as const } }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#000000]">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER */}
        <section className="py-24 px-4 text-center relative overflow-hidden min-h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/Image25.png" alt="Admissions Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#d0302b]/80" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">Your Journey Starts Here</p>
              <h1
                className="text-[52px] sm:text-[68px] lg:text-[88px] font-black text-white leading-tight mb-4 uppercase tracking-tighter"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Admissions
              </h1>
              <p className="text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic leading-tight">
                A Holistic Education for a Global Future
              </p>
            </motion.div>
          </div>
        </section>

        {/* STEP COUNTER OVERVIEW */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#d0302b]/10 flex items-center justify-center group-hover:bg-[#d0302b] transition-colors duration-300">
                    <span className="text-2xl font-black text-[#d0302b] group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      {step.number}
                    </span>
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest text-[#000000]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    {step.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STEPS SECTIONS */}
        {steps.map((step, i) => {
          const isRed = step.bg === 'red';
          const isEven = i % 2 === 0;

          return (
            <section
              key={i}
              className={`py-20 lg:py-28 relative overflow-hidden ${isRed ? 'bg-[#d0302b]' : 'bg-white'}`}
            >
              {/* Background decoration */}
              {isRed && (
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>
              )}

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>

                  {/* Content side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={isEven ? fadeInLeft : fadeInRight}
                    className={!isEven ? 'lg:col-start-2' : ''}
                  >
                    {/* Step number */}
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className={`text-[80px] lg:text-[100px] font-black leading-none select-none ${isRed ? 'text-white/20' : 'text-[#d0302b]/10'}`}
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <p className={`text-xs font-black uppercase tracking-[0.2em] mb-1 ${isRed ? 'text-white/70' : 'text-[#d0302b]'}`}>
                          {step.subtitle}
                        </p>
                        <h2
                          className={`text-[32px] lg:text-[44px] font-black leading-tight ${isRed ? 'text-white' : 'text-[#000000]'}`}
                          style={{ fontFamily: "'Raleway', sans-serif" }}
                        >
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`w-24 h-1.5 rounded-full mb-6 ${isRed ? 'bg-white/40' : 'bg-[#D6B25E]'}`} />

                    {/* Tagline */}
                    <p
                      className={`text-xl lg:text-2xl font-bold italic mb-8 leading-snug ${isRed ? 'text-white' : 'text-[#d0302b]'}`}
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      &ldquo;{step.tagline}&rdquo;
                    </p>

                    {/* Description paragraphs */}
                    <div className={`space-y-4 text-lg leading-relaxed mb-10 ${isRed ? 'text-white/90' : 'text-[#333333]'}`} style={{ fontFamily: "'Lato', sans-serif" }}>
                      {step.description.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>

                    {/* CTA */}
                    {step.cta && (
                      <Button
                        onClick={() => setIsModalOpen(true)}
                        variant={isRed ? 'tab-golden' : 'tab'}
                        showTriangle
                        triangleColor={isRed ? '#D6B25E' : undefined}
                        size="lg"
                      >
                        <span className="tracking-widest uppercase text-sm">{step.cta}</span>
                      </Button>
                    )}
                  </motion.div>

                  {/* Visual side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={isEven ? fadeInRight : fadeInLeft}
                    className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
                  >
                    <div className={`relative rounded-[3rem] p-12 flex flex-col items-center justify-center min-h-[360px] ${isRed ? 'bg-white/10 border-2 border-white/20' : 'bg-[#d0302b]/5 border-2 border-[#d0302b]/10'}`}>
                      {/* Icon */}
                      <div className={`mb-8 ${isRed ? 'text-white' : 'text-[#d0302b]'}`}>
                        {step.icon}
                      </div>

                      {/* Mini step list */}
                      <div className="space-y-4 w-full relative z-10">
                        {step.description.map((para, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${isRed ? 'bg-white' : 'bg-[#D6B25E]'}`} />
                            <p className={`text-sm leading-relaxed font-medium ${isRed ? 'text-white/80' : 'text-[#555555]'}`} style={{ fontFamily: "'Lato', sans-serif" }}>
                              {para}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* FINAL CTA SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-100 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#D6B25E]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d0302b]/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-[#d0302b] uppercase tracking-[0.3em] text-sm font-black mb-4">Ready to Begin?</p>
              <h2
                className="text-[44px] lg:text-[64px] font-black mb-6 leading-tight text-[#000000] uppercase tracking-tighter"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Take Your Child&apos;s First Step <span className="text-[#d0302b]">Forward</span>
              </h2>
              <p className="text-[#555555] text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                Every great journey starts with a single, brave step. We are here to walk alongside you and your child from day one.
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="tab"
                showTriangle
                size="lg"
              >
                <span className="tracking-widest uppercase text-sm">Begin Enrollment</span>
              </Button>
            </motion.div>
          </div>
        </section>

      </div>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}