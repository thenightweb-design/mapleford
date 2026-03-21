'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="pt-24 min-h-screen bg-white text-[#1A1A1A]">
          {/* Hero Section */}
          <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#FDF6E3] to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight uppercase tracking-tighter">
                  Privacy Policy
                </h1>
                <p className="text-lg text-gray-600">
                  Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="space-y-12">
                  {/* Introduction */}
                  <div className="bg-gradient-to-br from-[#FDF6E3]/50 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#1A1A1A] uppercase tracking-tighter">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed">
                      At Mapleford International School, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">Information We Collect</h2>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                        <h3 className="text-xl font-bold mb-3 text-[#d0302b]">Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Fill out admission or inquiry forms</li>
                          <li>Contact us via email or phone</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Participate in school events or programs</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          This information may include: name, email address, phone number, address, student information, and any other details you choose to provide.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                        <h3 className="text-xl font-bold mb-3 text-[#d0302b]">Automatically Collected Information</h3>
                        <p className="text-gray-700 leading-relaxed">
                          When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* How We Use Your Information */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">How We Use Your Information</h2>
                    <div className="bg-gradient-to-br from-[#FDF6E3]/30 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We use the information we collect to:
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">✓</span>
                          <span>Process admission applications and inquiries</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">✓</span>
                          <span>Communicate with parents, students, and prospective families</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">✓</span>
                          <span>Send newsletters and updates about school activities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">✓</span>
                          <span>Improve our website and services</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">✓</span>
                          <span>Comply with legal obligations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Information Sharing */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">Information Sharing and Disclosure</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>With your consent</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect the rights and safety of our school community</li>
                        <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Data Security */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">Data Security</h2>
                    <div className="bg-gradient-to-br from-[#FDF6E3]/50 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                      <p className="text-gray-700 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>

                  {/* Your Rights */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">Your Rights</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        You have the right to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Lodge a complaint with a supervisory authority</li>
                      </ul>
                    </div>
                  </div>

                  {/* Children's Privacy */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">Children&apos;s Privacy</h2>
                    <div className="bg-gradient-to-br from-[#FDF6E3]/30 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                      <p className="text-gray-700 leading-relaxed">
                        We are committed to protecting the privacy of children. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.
                      </p>
                    </div>
                  </div>

                  {/* Changes to Privacy Policy */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">Changes to This Privacy Policy</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-gray-700 leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                      </p>
                    </div>
                  </div>

                  {/* Contact Us */}
                  <div className="bg-gradient-to-br from-[#d0302b]/5 to-[#D6B25E]/5 p-10 rounded-3xl border-2 border-[#D6B25E]/30">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] uppercase tracking-tighter">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-center gap-3">
                        <span className="text-[#d0302b] text-xl">📧</span>
                        <span><strong>Email:</strong> info@maplefordinternational.com</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="text-[#d0302b] text-xl">📞</span>
                        <span><strong>Phone:</strong> +91 93466 48486</span>
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="text-[#d0302b] text-xl">📍</span>
                        <span><strong>Address:</strong> Hayathnagar, Hyderabad, Telangana - 500070</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
