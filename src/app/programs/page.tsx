'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Programs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER — Red */}
        <section className="bg-[#d0302b] py-16 sm:py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-white/80 tracking-[0.3em] text-sm font-bold mb-4">Educational Excellence</p>
              <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold text-white leading-tight tracking-tighter ">
                Programs
              </h1>
              <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
                Where CBSE Excellence Meets Canadian Innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: Partnership */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
                <p className="text-[#d0302b] font-bold tracking-[0.4em] text-xs">Strategic Partnership</p>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#000000] leading-tight tracking-tighter ">
                  A Seamless Blend of Two Powerful Systems
                </h2>
                <div className="space-y-4 text-lg text-[#000000] leading-relaxed">
                  <p>At Mapleford International School, learning is shaped by a powerful collaboration with <strong className="text-[#000000]">Maple Bear Global Schools, Canada</strong> — a world leader in bilingual, inquiry-based education operating across <span className="text-[#d0302b]">35+ countries and 450+ schools</span>.</p>
                  <p>Through this partnership, our students benefit from the proven strengths of the Canadian education system, while staying firmly aligned to India&apos;s respected CBSE framework.</p>
                </div>
                <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full border-2 border-[#d0302b]/20 bg-[#d0302b]/5">
                  <span className="font-bold text-[#d0302b]">Canadian Pedagogy</span>
                  <span className="text-2xl font-bold text-[#000000]">+</span>
                  <span className="font-bold text-[#d0302b]">CBSE Curriculum</span>
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=800&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Students learning" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: What It Means for Learners */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold text-white tracking-tighter ">
                What This Means for Learners
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { no: "01", title: "Strong Foundations", desc: "Solid grounding in Math, Science, Languages, and Social Sciences." },
                { no: "02", title: "Conceptual Understanding", desc: "Deep understanding instead of rote memory — learning that lasts." },
                { no: "03", title: "Inquiry-Based Learning", desc: "Inquiry, problem-solving, and project-based learning at the core." },
                { no: "04", title: "Continuous Assessment", desc: "Assessment aligned to Maple Bear learning outcomes." },
                { no: "05", title: "Board Preparedness", desc: "Preparedness for CBSE board pathways in higher grades." },
                { no: "06", title: "Global Exposure", desc: "Ready for higher education in India or abroad." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-white/20 mb-3">{item.no}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — White: Curriculum Stages */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#d0302b] font-bold tracking-[0.4em] text-xs mb-3">Academic Stages</p>
              <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold text-[#000000] tracking-tighter ">
                Curriculum Pathway
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌱", title: "Pre-School", grades: "Nursery to Kindergarten", color: "bg-green-50 border-green-200",
                  accent: "text-green-700", href: "/curriculum",
                  points: ["Social and emotional growth", "Early literacy and numeracy", "Motor skills and creativity"]
                },
                {
                  icon: "📖", title: "Elementary School", grades: "Grades 1 to 5", color: "bg-blue-50 border-blue-200",
                  accent: "text-blue-700", href: "/curriculum",
                  points: ["CBSE milestones + Canadian strategies", "Nurturing curiosity and independence", "Hands-on and feedback-driven learning"]
                },
                {
                  icon: "🎓", title: "Middle & High School", grades: "Grades 6 to 10", color: "bg-amber-50 border-amber-200",
                  accent: "text-amber-700", href: "/curriculum",
                  points: ["Critical thinking frameworks", "Skill-based projects", "Global citizenship programs"]
                }
              ].map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className={`${stage.color} border p-8 sm:p-10 rounded-3xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                >
                  <div className="text-5xl mb-6">{stage.icon}</div>
                  <h3 className="text-2xl font-bold text-[#000000] mb-1">{stage.title}</h3>
                  <p className="text-gray-400 font-bold text-sm mb-5">{stage.grades}</p>
                  <ul className="space-y-3 mb-6">
                    {stage.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${stage.accent} bg-current`} />
                        <span className="text-[#000000] text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={stage.href} className={`font-bold ${stage.accent} hover:underline`}>Explore →</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — Red: Admission CTA */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold text-white leading-tight tracking-tighter ">
                Invest in Their Future.
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
                Our admissions for the upcoming academic year are now open. Secure your child&apos;s seat today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button href="/admissions" variant="primary" size="lg" className="bg-white text-[#d0302b] hover:bg-gray-100">Begin Admission</Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white">Schedule a Tour</Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}