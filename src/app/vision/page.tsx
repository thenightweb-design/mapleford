'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Vision() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER — Red */}
        <section className="py-24 px-4 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/Image27.png" alt="Vision Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#d0302b]/80" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">Our Philosophy</p>
              <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Vision &amp; Mission
              </h1>
              <p className="text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic">
                To be a leading international school recognised for excellence, integrity, and holistic development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: Core Statements */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-100"
              >
                <div className="text-4xl mb-6">🎯</div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mb-5" style={{ fontFamily: '"Raleway", sans-serif' }}>Our Vision</h2>
                <p className="text-lg text-[#000000] leading-relaxed mb-4">
                  At Mapleford International School, we envision an educational ecosystem that transcends traditional boundaries, where learning becomes a lifelong adventure of discovery and growth.
                </p>
                <p className="text-lg text-[#000000] leading-relaxed">
                  We strive to be pioneers in educational innovation, creating environments where curiosity thrives, creativity flourishes, and every student emerges as a confident leader ready to contribute meaningfully to society.
                </p>
              </motion.div>
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                transition={{ delay: 0.15 }}
                className="p-8 sm:p-12 rounded-3xl bg-[#d0302b]/5 border border-[#d0302b]/10"
              >
                <div className="text-4xl mb-6">🚀</div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mb-5" style={{ fontFamily: '"Raleway", sans-serif' }}>Our Mission</h2>
                <p className="text-lg text-[#000000] leading-relaxed mb-4">
                  Our mission is to deliver outstanding education that is academically excellent, globally relevant, and firmly grounded in values.
                </p>
                <p className="text-lg text-[#4F4F4F] leading-relaxed">
                  We develop knowledge in pursuit of integrity and excellence, nurturing young talent to discover the courage to question, the discipline to grow, and the humility to keep learning.
                </p>
                <div className="mt-6 p-6 bg-white rounded-2xl border-l-4 border-[#d0302b]">
                  <p className="font-black text-[#d0302b] italic text-lg">&quot;Empowering Mapleites to rise with Erudition, Ethos, and Excellence.&quot;</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: Pillars */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Pillars of Our Vision
              </h2>
              <p className="text-white/80 text-lg mt-3 max-w-2xl mx-auto">Four fundamental pillars that guide our educational philosophy.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🌍", title: "Global Citizenship", desc: "Fostering understanding and respect for diverse cultures while developing skills for global collaboration." },
                { icon: "🚀", title: "Innovation", desc: "Encouraging creative thinking and technological proficiency to prepare students for future challenges." },
                { icon: "💪", title: "Character Development", desc: "Building integrity, resilience, and leadership qualities that last a lifetime." },
                { icon: "🤝", title: "Community Impact", desc: "Instilling values of service and social responsibility for positive societal change." }
              ].map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-xl font-black text-white mb-3">{p.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — White: Long-term Goals */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">Looking Ahead</p>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Long-term Goals
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "Establish partnerships with international institutions",
                "Achieve digital literacy and coding proficiency for all students",
                "Develop sustainable campus initiatives",
                "Launch global exchange programs for broader exposure",
                "Create innovation hubs fostering entrepreneurship",
                "Build a comprehensive alumni network for lifelong learning"
              ].map((goal, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-3 h-3 rounded-full bg-[#d0302b] shrink-0" />
                  <p className="text-[#000000] font-medium">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — Red: CTA */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <h2 className="text-[36px] sm:text-[48px] font-black text-white leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Be a Part of Our Journey.
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
                Join us in shaping the future of education and creating lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button href="/programs" variant="primary" size="lg" className="bg-white text-[#d0302b] hover:bg-gray-100">View Programs</Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white">Contact Us</Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}