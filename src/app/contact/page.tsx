'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

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
            <img src="/images/Image26_000.png" alt="Contact Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#d0302b]/80" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight mb-4 uppercase tracking-tighter"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Contact <span className="text-white/60">Us</span>
              </h1>
              <p className="text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic">
                We&apos;re here to listen and help your child&apos;s journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: Contact Info + Form */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              {/* Left: Info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">Contact Points</p>
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-[#000000] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                    Reach out <br /><span className="text-[#d0302b]">Directly.</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Our Location", value: "Hayathnagar, Hyderabad, Telangana", icon: "📍", desc: "Visit our state-of-the-art campus" },
                    { title: "Call Us", value: "+91 93466 48486", icon: "📞", desc: "Mon-Sat, 8:30am - 4:30pm" },
                    { title: "Mail Us", value: "info@maplefordinternational.com", icon: "✉️", desc: "For general & administrative queries" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-start gap-5">
                        <div className="text-3xl w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">{item.icon}</div>
                        <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.title}</p>
                          <p className="text-lg font-black text-[#000000]">{item.value}</p>
                          <p className="text-sm font-medium text-[#000000]">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="lg:col-span-7 bg-gray-50 p-8 sm:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
              >
                {!formSubmitted ? (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-black text-[#000000] uppercase tracking-tight">Send a Message</h3>
                      <p className="text-[#000000] font-bold mt-2">We usually respond within 24 hours.</p>
                    </div>
                    <form
                      className="space-y-6"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        try {
                          const res = await fetch('/api/inquiries', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              parentName: formData.fullName,
                              email: formData.email,
                              contactNumber: 'N/A',
                              childName: 'Contact Form',
                              childDob: new Date().toISOString(),
                              gradeApplying: formData.subject,
                              message: formData.message
                            })
                          });
                          if (res.ok) setFormSubmitted(true);
                          else alert('Submission failed. Please try again.');
                        } catch {
                          alert('An error occurred.');
                        } finally {
                          setIsSubmitting(false);
                        }
                      }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                          <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Your Name" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#000000] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                          <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#000000] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Subject</label>
                        <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#000000] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all appearance-none cursor-pointer">
                          <option>General Inquiry</option>
                          <option>Admissions</option>
                          <option>Careers</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Message</label>
                        <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help?" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#000000] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all resize-none" />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#d0302b] text-white font-black rounded-full text-lg hover:bg-[#b02020] transition-all duration-200 shadow-lg disabled:opacity-60">
                        {isSubmitting ? 'Sending...' : 'Submit Now'}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-16 space-y-6">
                    <div className="text-7xl">🚀</div>
                    <h3 className="text-3xl font-black text-[#000000]">Message Sent Successfully</h3>
                    <p className="text-lg text-[#000000] max-w-sm mx-auto">One of our representatives will be in touch with you shortly.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-[#d0302b] font-black uppercase tracking-widest text-sm border-b-2 border-current">Send another</button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: Map */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-[32px] sm:text-[44px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>Find Us Here</h2>
              <p className="text-white/80 mt-3 text-lg">Hayathnagar, Hyderabad, Telangana - 500070</p>
            </div>
            <div className="relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8242045580665!2d78.5833215!3d17.3333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1234567890%3A0x1234567890abcdef!2sHayathnagar%2C%20Hyderabad%2C%20Telangana%20500070!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}