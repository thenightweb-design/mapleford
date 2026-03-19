'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const jobOpenings = [
  { title: "Primary School Teacher", department: "Academics", type: "Full-time", description: "We are seeking passionate primary school teachers to join our dedicated faculty." },
  { title: "STEAM Coordinator", department: "Innovation", type: "Full-time", description: "Lead our Science, Technology, Engineering, Arts, and Mathematics programs." },
  { title: "Sports Coach", department: "Physical Education", type: "Full-time", description: "Develop and lead our comprehensive sports and physical education programs." },
  { title: "School Counselor", department: "Student Services", type: "Full-time", description: "Provide guidance and support to students for academic and personal development." },
  { title: "Administrative Assistant", department: "Administration", type: "Full-time", description: "Support our administrative team in maintaining smooth school operations." },
  { title: "IT Support Specialist", department: "Technology", type: "Full-time", description: "Maintain and support our educational technology infrastructure." }
];

export default function Careers() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER — Red */}
        <section className="py-24 px-4 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center bg-[#d0302b]">
          <div className="absolute inset-0 z-0">
            <img src="/images/Image28.png" alt="Careers Background" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="!text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">Grow With Us</p>
              <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black !text-white leading-tight mb-4 uppercase tracking-tighter" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Careers
              </h1>
              <p className="!text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic leading-tight">
                Join our mission to shape young minds and create future leaders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: Why Join Us */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">Our Workplace</p>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Why Join Mapleford?
              </h2>
              <p className="text-lg text-[#000000] max-w-2xl mx-auto mt-4">Be part of a community dedicated to excellence in education.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🌟", title: "Professional Growth", desc: "Continuous learning opportunities and career development programs." },
                { icon: "🤝", title: "Collaborative Culture", desc: "Work with passionate educators and supportive colleagues." },
                { icon: "🎓", title: "Impact Lives", desc: "Make a meaningful difference in students' lives and futures." },
                { icon: "💼", title: "Great Benefits", desc: "Comprehensive benefits package and work-life balance." }
              ].map((b, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="text-xl font-black text-[#000000] mb-3">{b.title}</h3>
                  <p className="text-[#000000] leading-relaxed text-sm">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: Current Openings */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Current Openings
              </h2>
              <p className="text-white/80 text-lg mt-3">Explore exciting career opportunities with us.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobOpenings.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-black text-[#000000]">{job.title}</h3>
                      <p className="text-[#d0302b] font-bold mt-1">{job.department}</p>
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">{job.type}</span>
                  </div>
                  <p className="text-[#000000] mb-5 leading-relaxed">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 font-bold">📍 Hyderabad</span>
                    <button className="px-6 py-2 bg-[#d0302b] text-white rounded-full text-sm font-black hover:bg-[#b02020] transition-colors">Apply Now</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — White: Application Process */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">Simple & Transparent</p>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                How to Apply
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Review Openings", desc: "Browse current positions and find the right fit for you." },
                { step: "02", title: "Submit Application", desc: "Send your resume and cover letter through our portal." },
                { step: "03", title: "Interview Process", desc: "Participate in interviews and assessments." },
                { step: "04", title: "Join Our Team", desc: "Welcome to Mapleford International School!" }
              ].map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#d0302b] rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-5 shadow-lg">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-black text-[#000000] mb-2">{s.title}</h3>
                  <p className="text-[#000000] leading-relaxed text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — Red: Final CTA */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <h2 className="text-[36px] sm:text-[48px] font-black text-white leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
                Join our team of passionate educators shaping the next generation of leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button href="/contact" variant="primary" size="lg" className="bg-white text-[#d0302b] hover:bg-gray-100">Contact HR</Button>
                <Button href="/admissions" variant="outline" size="lg" className="border-white text-white">Learn More</Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}