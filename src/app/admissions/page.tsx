'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    contactNumber: '',
    email: '',
    childName: '',
    childDob: '',
    gradeApplying: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormSubmitted(true);
        setFormData({
          parentName: '',
          contactNumber: '',
          email: '',
          childName: '',
          childDob: '',
          gradeApplying: '',
          message: ''
        });
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#000000]">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER — Red */}
        <section className="bg-[#d0302b] py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1
                className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight mb-4 uppercase tracking-tighter"
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

        {/* SECTION 1 — Holistic Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <p className="text-xl sm:text-2xl leading-relaxed text-gray-800 font-medium" style={{ fontFamily: "'Lato', sans-serif" }}>
                True education goes beyond academics; it shapes character, builds confidence, sparks curiosity, and broadens perspective. At Mapleford International School, each learner progresses through a thoughtfully steady journey that blends strong academic foundations with holistic development and a global outlook.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — Experience/Steps (Unique Organic Journey) */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-50 rounded-full blur-[120px] opacity-60" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-4">Your Journey Starts Here</p>
                <h2 className="text-[44px] lg:text-[64px] font-black leading-tight text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  A Seamless Admission Experience
                </h2>
                <div className="w-24 h-1.5 bg-[#d0302b] mx-auto mt-8 mb-8 rounded-full" />
              </motion.div>
            </div>

            <div className="relative">
              {/* Desktop Journey Path SVG */}
              <div className="hidden xl:block absolute inset-0 pointer-events-none -mt-20">
                <svg width="100%" height="100%" viewBox="0 0 1200 1000" fill="none" className="w-full h-full opacity-20">
                  <motion.path
                    d="M 200,100 C 600,100 1000,100 1000,400 S 600,700 200,700 S 200,950 600,950"
                    stroke="#d0302b"
                    strokeWidth="4"
                    strokeDasharray="15 15"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              {/* Journey Steps Cards */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-24 xl:gap-y-32 xl:gap-x-12 relative">
                {[
                  { step: "01", title: "Enquiry & Registration", desc: "Explore our campus, ethos, and learning environment. Fill out the enquiry form to begin your child's journey.", align: "xl:justify-self-start" },
                  { step: "02", title: "Student Interaction", desc: "A warm and age-appropriate engagement to understand the learner's unique strengths and potential.", align: "xl:justify-self-end xl:mt-48" },
                  { step: "03", title: "Documentation", desc: "Our team provides complete support through every formal requirement and submission needed.", align: "xl:justify-self-start xl:-mt-24" },
                  { step: "04", title: "Onboarding", desc: "A final orientation and a confident step into the Mapleford family for both child and parents.", align: "xl:justify-self-end xl:mt-24" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className={`relative w-full max-w-xl ${item.align}`}
                  >
                    <div className="bg-white rounded-[3.5rem] p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-gray-50 hover:shadow-[0_45px_100px_rgba(208,48,43,0.1)] transition-all duration-500 overflow-hidden group">
                      
                      {/* Giant Background Number */}
                      <span className="absolute -right-4 top-0 text-[16rem] font-black text-slate-50 group-hover:text-red-50/50 transition-colors duration-500 leading-none select-none">
                        {item.step}
                      </span>

                      <div className="relative z-10">
                        {/* Interactive Step Header */}
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center group-hover:bg-[#d0302b] group-hover:border-[#d0302b] transition-all duration-500 shadow-sm">
                            <span className="text-2xl font-black text-[#d0302b] group-hover:text-white transition-colors duration-500" style={{ fontFamily: '"Raleway", sans-serif' }}>
                              {item.step}
                            </span>
                          </div>
                          <div className="h-px w-12 bg-gray-200 group-hover:w-20 group-hover:bg-[#d0302b]/30 transition-all duration-500" />
                        </div>

                        <h3 className="text-3xl font-black text-[#000000] mb-6 tracking-tight group-hover:text-[#d0302b] transition-colors duration-300" style={{ fontFamily: '"Raleway", sans-serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-[#000000]/60 font-medium text-lg lg:text-xl leading-relaxed max-w-md" style={{ fontFamily: '"Lato", sans-serif' }}>
                          {item.desc}
                        </p>
                      </div>

                      {/* Animated Corner Accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-[5rem] translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Journey End Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-40 text-center"
            >
              <div className="bg-slate-50 inline-block px-12 py-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
                 <p className="text-xl font-bold italic text-gray-400 mb-2">The path is set.</p>
                 <h4 className="text-2xl font-black text-[#000000] uppercase tracking-widest" style={{ fontFamily: '"Raleway", sans-serif' }}>
                    Welcome to <span className="text-[#d0302b]">Mapleford</span>
                 </h4>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — The Admission Form */}
        <section className="py-20 bg-white" id="admission-form">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-[#d0302b] rounded-[4rem] p-10 sm:p-20 shadow-[0_50px_100px_rgba(208,48,43,0.3)] text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>

              {!formSubmitted ? (
                <>
                  <div className="text-center mb-12 relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>Admission Enquiry</h2>
                    <p className="text-white/80 font-bold">Fill in the details below and we&apos;ll get back to you.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest opacity-80 ml-2">Parent / Guardian Name</label>
                        <input
                          type="text" required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-8 py-5 bg-white shadow-inner rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/20 text-gray-900 font-bold transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest opacity-80 ml-2">Contact Number</label>
                        <input
                          type="tel" required
                          value={formData.contactNumber}
                          onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                          placeholder="+91"
                          className="w-full px-8 py-5 bg-white shadow-inner rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/20 text-gray-900 font-bold transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest opacity-80 ml-2">Email Address</label>
                      <input
                        type="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-8 py-5 bg-white shadow-inner rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/20 text-gray-900 font-bold transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest opacity-80 ml-2">Child&apos;s Name</label>
                        <input
                          type="text" required
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          placeholder="Child's Name"
                          className="w-full px-8 py-5 bg-white shadow-inner rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/20 text-gray-900 font-bold transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest opacity-80 ml-2">Grade Applying</label>
                        <select
                          required
                          value={formData.gradeApplying}
                          onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                          className="w-full px-8 py-5 bg-white shadow-inner rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/20 text-gray-900 font-bold transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select Grade</option>
                          <option value="nursery">Nursery</option>
                          <option value="jr-kg">Jr. KG</option>
                          <option value="sr-kg">Sr. KG</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                            <option key={g} value={`grade-${g}`}>Grade {g}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest opacity-80 ml-2">Message (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Any questions?"
                        className="w-full px-8 py-5 bg-white shadow-inner rounded-3xl focus:outline-none focus:ring-4 focus:ring-white/20 text-gray-900 font-bold transition-all resize-none"
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit" variant="tab-white" size="lg"
                        showTriangle={true} triangleColor="#FFFFFF"
                        disabled={isSubmitting}
                      >
                        <span className="tracking-widest uppercase text-sm">{isSubmitting ? 'Submitting...' : 'Send Enquiry'}</span>
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 space-y-6 relative z-10">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-8xl">✨</motion.div>
                  <h3 className="text-4xl font-black">Enquiry Sent!</h3>
                  <p className="text-xl text-white/80 font-medium">Our admissions team will contact you shortly to guide you through the next steps.</p>
                  <div className="pt-8">
                    <Button variant="outline-white" size="lg" onClick={() => setFormSubmitted(false)}>
                      <span className="tracking-widest uppercase text-sm">Send Another</span>
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}