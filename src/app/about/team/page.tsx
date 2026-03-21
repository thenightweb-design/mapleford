'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="pt-24">
            <div className="min-h-screen bg-white">
              {/* Hero Section */}
              <section className="relative py-32 overflow-hidden bg-[#FDF6E3]/30">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d0302b]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-bold tracking-[0.3em] text-[#d0302b] uppercase mb-4 block"
                  >
                    Leadership & Vision
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold mb-8 leading-tight text-[#1A1A1A] uppercase tracking-tighter "
                  >
                    Our Team
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl lg:text-2xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed font-bold opacity-80 uppercase italic"
                  >
                    The heart of Mapleford is an empathetic, compassionate, dynamic, and visionary team, a committed leadership, and devoted mentors at its core. Our compass guides students toward steadiness and inspiration.
                  </motion.p>
                </div>
              </section>

              {/* Leadership Messages */}
              <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Chairman's Message */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative order-2 lg:order-1"
                    >
                      <div className="absolute -inset-4 bg-[#FDF6E3] rounded-[2rem] -z-10 transform rotate-3"></div>
                      <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-[#D6B25E]/20">
                        <span className="text-4xl mb-6 block">✉️</span>
                        <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">
                          Chairman&apos;s Message
                        </h2>
                        <div className="space-y-6 text-lg lg:text-xl text-[#4F4F4F] leading-relaxed font-medium">
                          <p>
                            &quot;At Mapleford International School, we believe that education is not merely the transfer of knowledge but the cultivation of character, curiosity, and compassion. As we carry forward the distinguished legacy of Megacity High School, our mission remains grounded in a simple truth: children learn best when they feel valued, supported, and inspired to discover who they are.&quot;
                          </p>
                          <p>
                            &quot;For three decades, our journey has been shaped by the belief that schooling must prepare students for life, not just for examinations. Today, Mapleford stands as an evolution of that belief, embracing global perspectives while staying anchored in timeless values. We strive to create an environment where learning is joyful, where discipline is self-driven, and where every accomplishment is measured not only by success, but by sincerity and effort.&quot;
                          </p>
                          <p>
                            &quot;I remain deeply committed to fostering a school community where every child feels empowered to learn, lead, and contribute meaningfully to society. Together, let us shape a future where every learning matters — the spark in a question, the pride in a goal, and the courage to try again.&quot;
                          </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-[#D6B25E]/30">
                          <p className="font-bold text-xl text-[#1A1A1A]">P. Subba Reddy</p>
                          <p className="text-[#d0302b] font-medium">Chairman, Mapleford International School</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="order-1 lg:order-2"
                    >
                      <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/5]">
                        <img
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                          alt="Chairman"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Principal's Message */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/5]">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                          alt="Principal"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 bg-[#FDF6E3] rounded-[2rem] -z-10 transform -rotate-2"></div>
                      <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-[#D6B25E]/20">
                        <span className="text-4xl mb-6 block">🎓</span>
                        <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">
                          Principal&apos;s Message
                        </h2>
                        <div className="space-y-6 text-lg lg:text-xl text-[#4F4F4F] leading-relaxed font-medium">
                          <p>
                            &quot;Education, to us, is not a race but a journey. It is augmented through attentive listening, thoughtful guidance, and learning experiences that encourage children to think independently and understand deeply.&quot;
                          </p>
                          <p>
                            &quot;Our faculty brings together expertise and empathy, ensuring that every learner is seen not just for their academic abilities, but for the individual they are becoming. We emphasize balance—between discipline and creativity, reflection and action, ambition and humility—so that students develop the confidence to succeed and the character to choose wisely.&quot;
                          </p>
                          <p>
                            &quot;As Mapleford steps into a new chapter, my vision is to lead a school where learning feels alive, and every child leaves each day a little more empowered than the last. Together, we aim to shape individuals who not only excel in the world but also enrich it with their integrity, kindness, and courage.&quot;
                          </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-[#D6B25E]/30">
                          <p className="font-bold text-xl text-[#1A1A1A]">XYZ</p>
                          <p className="text-[#d0302b] font-medium">Principal, Mapleford International School</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Team Members Grid */}
              <section className="py-24 bg-[#FDF6E3]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold text-[#1A1A1A] mb-6 uppercase tracking-tighter">
                      Leadership Team
                    </h2>
                    <div className="w-24 h-1.5 bg-[#D6B25E] mx-auto rounded-full"></div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      {
                        name: "P. Subba Reddy",
                        role: "Chairman",
                        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
                        bio: "Visionary leader with three decades of experience in education, guiding Mapleford's transformation and growth."
                      },
                      {
                        name: "XYZ",
                        role: "Principal",
                        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                        bio: "Experienced educator dedicated to fostering academic excellence and holistic development in every student."
                      },
                      {
                        name: "Mr. David Kumar",
                        role: "Vice Principal",
                        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
                        bio: "Committed to maintaining high academic standards and supporting student success across all grade levels."
                      }
                    ].map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-[#D6B25E]/10 group hover:shadow-2xl transition-all duration-500"
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-8 text-center bg-white">
                          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{member.name}</h3>
                          <p className="text-[#d0302b] font-bold uppercase tracking-widest text-sm mb-4">{member.role}</p>
                          <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section - Redesigned to match homepage theme */}
              <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-[#d0302b] rounded-full blur-3xl"></div>
                  <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6B25E] rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="text-5xl mb-4 block">🤝</span>
                      <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold mb-8 leading-tight text-[#1A1A1A] uppercase tracking-tighter">
                        Join Our Mission
                      </h2>
                      <h3 className="text-2xl font-semibold mb-6" style={{ color: '#d0302b' }}>
                        Building Tomorrow's Leaders Together
                      </h3>

                      <div
                        className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8"
                        style={{ background: 'linear-gradient(135deg, rgba(214,178,94,0.2), rgba(208,48,43,0.1))' }}
                      >
                        <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Passion</span>
                        <span className="text-2xl">+</span>
                        <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Purpose</span>
                        <span className="text-2xl">+</span>
                        <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Impact</span>
                      </div>

                      <p className="text-lg lg:text-xl leading-relaxed mb-8 text-[#4F4F4F]">
                        Be part of a community dedicated to shaping young minds and creating future leaders grounded in integrity. At Mapleford, we believe that great educators inspire greatness in others. Join us in our mission to transform education and empower the next generation.
                      </p>

                      <div className="space-y-4">
                        {[
                          'Collaborative and supportive work environment',
                          'Professional development and growth opportunities',
                          'Making a meaningful impact on young lives',
                          'Being part of a legacy of educational excellence'
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex items-start"
                          >
                            <span className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0" style={{ background: 'linear-gradient(145deg, #D6B25E, #C4A24E)' }}></span>
                            <span className="text-lg">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 mt-10">
                        <Button href="/careers" variant="primary" size="md">
                          View Opportunities
                        </Button>
                        <Button href="/contact" variant="outline" size="md">
                          Contact Us
                        </Button>
                      </div>
                    </motion.div>

                    {/* Right Side - Visual Elements */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto h-full"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=1200&fit=crop"
                          alt="Join Our Mission"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#D6B25E]/20">
                          <p className="font-bold text-[#d0302b]">Together We:</p>
                          <p className="font-bold text-[#1A1A1A]">Inspire. Educate. Transform.</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}