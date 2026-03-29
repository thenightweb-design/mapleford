'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
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
    cta: 'ENQUIRE NOW',
    image: '/images/admissions_step1_new.png',
    bg: 'white',
  },
  {
    number: '02',
    title: 'Interaction & Discovery',
    subtitle: 'Student Interaction',
    tagline: 'Unlock endless possibilities for your child\'s future.',
    description: [
      'A warm and thoughtfully designed, age-appropriate interaction created to understand each learner\'s unique strengths, interests, and potential.',
      'We ensure children feel comfortable, confident, and free to express themselves. Our approach focuses on discovery rather than evaluation, without any pressure.'
    ],
    cta: null,
    image: '/images/admissions_step2.png',
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
    image: '/images/admissions_step3.png',
    bg: 'white',
  },
  {
    number: '04',
    title: 'Welcome Aboard',
    subtitle: 'Welcome to Mapleford',
    tagline: 'The beginning of a meaningful and inspiring journey.',
    description: [
      'A thoughtfully curated final orientation for both children and parents. We ensure a smooth, confident transition into the Mapleford community.',
      'With warmth and clarity, families are guided every step of the way. Marking the beginning of a meaningful and inspiring journey together.'
    ],
    cta: null,
    image: '/images/BRT_4058.JPG',
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

        <section className="py-20 sm:py-32 px-4 relative overflow-hidden min-h-[400px] flex items-center bg-slate-900">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Image25.png" 
              alt="Admissions Background" 
              fill
              className="object-cover opacity-60" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 sm:p-14 rounded-[3rem] shadow-2xl"
            >
              <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-semibold !text-white leading-[1.1] mb-6 tracking-tighter">
                Admissions
              </h1>
              <p className="!text-white/90 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-[#d0302b] pl-6">
                A Holistic Education for a Global Future. Join us and shape your child&apos;s tomorrow.
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
                    <span className="text-2xl font-bold text-[#d0302b] group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <p className="text-sm font-bold tracking-widest text-[#000000]">
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
                      <span className={`text-[80px] lg:text-[100px] font-bold leading-none select-none ${isRed ? 'text-white/20' : 'text-[#d0302b]/10'}`}>
                        {step.number}
                      </span>
                      <div>
                        <p className={`text-xs font-bold tracking-[0.2em] mb-1 ${isRed ? 'text-white/70' : 'text-[#d0302b]'}`}>
                          {step.subtitle}
                        </p>
                        <h2 className={`text-[24px] sm:text-[32px] lg:text-[44px] font-bold leading-tight tracking-tighter  ${isRed ? 'text-white' : 'text-[#000000]'}`}>
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`w-24 h-1.5 rounded-full mb-6 ${isRed ? 'bg-white/40' : 'bg-[#D6B25E]'}`} />

                    {/* Tagline */}
                    <p className={`text-xl lg:text-2xl font-bold italic mb-8 leading-snug ${isRed ? 'text-white' : 'text-[#d0302b]'}`}>
                      &ldquo;{step.tagline}&rdquo;
                    </p>

                    {/* Description paragraphs */}
                    <div className={`space-y-4 text-lg lg:text-xl leading-relaxed mb-10 ${isRed ? 'text-white/90' : 'text-[#333333]'}`}>
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
                        <span className="tracking-widest text-sm">{step.cta}</span>
                      </Button>
                    )}
                  </motion.div>

                  {/* Visual side */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={isEven ? fadeInRight : fadeInLeft}
                    className={!isEven ? 'lg:col-start-1 lg:row-start-1 h-full' : 'h-full'}
                  >
                    <div className="relative aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
              <p className="text-[#d0302b] tracking-[0.3em] text-sm font-bold mb-4">Ready to Begin?</p>
              <h2 className="text-[22px] sm:text-[38px] lg:text-[48px] font-bold mb-6 leading-tight text-[#000000] tracking-tighter ">
                Take Your Child&apos;s First Step Forward
              </h2>
              <p className="text-[#555555] text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Every great journey starts with a single, brave step. We are here to walk alongside you and your child from day one.
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="tab"
                showTriangle
                size="lg"
              >
                <span className="tracking-widest text-sm">BEGIN ENROLLMENT</span>
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