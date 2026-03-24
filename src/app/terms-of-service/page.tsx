'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="pt-24 min-h-screen bg-white text-[#000000]">
          {/* Hero Section */}
          <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#FDF6E3] to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter">
                  Terms of Service
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
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#000000] tracking-tighter">Welcome to Mapleford International School</h2>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms of Service ("Terms") govern your access to and use of the Mapleford International School website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.
                    </p>
                  </div>

                  {/* Acceptance of Terms */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#000000] tracking-tighter">Acceptance of Terms</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-[#000000] leading-relaxed">
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                      </p>
                    </div>
                  </div>

                  {/* Use of Website */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#000000] tracking-tighter">Use of Website</h2>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-[#FDF6E3]/30 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                        <h3 className="text-xl font-bold mb-3 text-[#d0302b]">Permitted Use</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          You may use our website for lawful purposes only. You agree not to:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-3">
                            <span className="text-[#d0302b] mt-1">•</span>
                            <span>Use the website in any way that violates any applicable laws or regulations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#d0302b] mt-1">•</span>
                            <span>Engage in any conduct that restricts or inhibits anyone's use of the website</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#d0302b] mt-1">•</span>
                            <span>Attempt to gain unauthorized access to any portion of the website</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#d0302b] mt-1">•</span>
                            <span>Use any automated system to access the website</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Intellectual Property */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">Intellectual Property Rights</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Mapleford International School and is protected by copyright, trademark, and other intellectual property laws.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission.
                      </p>
                    </div>
                  </div>

                  {/* User Submissions */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">User Submissions</h2>
                    <div className="bg-gradient-to-br from-[#FDF6E3]/50 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        By submitting any content to our website (including forms, comments, or feedback), you grant Mapleford International School a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such content.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        You represent and warrant that you own or have the necessary rights to submit such content and that it does not violate any third-party rights.
                      </p>
                    </div>
                  </div>

                  {/* Admission Process */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">Admission Process</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Submission of an admission inquiry or application through our website does not guarantee admission to Mapleford International School. All admissions are subject to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Availability of seats</li>
                        <li>Completion of the admission process</li>
                        <li>Meeting eligibility criteria</li>
                        <li>Satisfactory interaction and assessment</li>
                        <li>Submission of required documentation</li>
                      </ul>
                    </div>
                  </div>

                  {/* Disclaimer of Warranties */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">Disclaimer of Warranties</h2>
                    <div className="bg-gradient-to-br from-[#FDF6E3]/30 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        This website is provided on an "as is" and "as available" basis. Mapleford International School makes no representations or warranties of any kind, express or implied, regarding:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">•</span>
                          <span>The accuracy, reliability, or completeness of any content</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">•</span>
                          <span>The availability or uninterrupted access to the website</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#d0302b] mt-1">•</span>
                          <span>The security of data transmission</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Limitation of Liability */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">Limitation of Liability</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-gray-700 leading-relaxed">
                        To the fullest extent permitted by law, Mapleford International School shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of the website.
                      </p>
                    </div>
                  </div>

                  {/* External Links */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">External Links</h2>
                    <div className="bg-gradient-to-br from-[#FDF6E3]/50 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                      <p className="text-gray-700 leading-relaxed">
                        Our website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites.
                      </p>
                    </div>
                  </div>

                  {/* Modifications to Terms */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">Modifications to Terms</h2>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 ">
                      <p className="text-gray-700 leading-relaxed">
                        We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page with a new "Last Updated" date. Your continued use of the website after such modifications constitutes your acceptance of the updated Terms.
                      </p>
                    </div>
                  </div>

                  {/* Governing Law */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#1A1A1A] tracking-tighter">Governing Law</h2>
                    <div className="bg-gradient-to-br from-[#FDF6E3]/30 to-white p-8 rounded-3xl border border-[#D6B25E]/20">
                      <p className="text-gray-700 leading-relaxed">
                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gradient-to-br from-[#d0302b]/5 to-[#D6B25E]/5 p-10 rounded-3xl border-2 border-[#D6B25E]/30">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#000000] tracking-tighter">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have any questions about these Terms of Service, please contact us:
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

                  {/* Acknowledgment */}
                  <div className="bg-white p-8 rounded-3xl border-2 border-[#d0302b]/20 shadow-lg">
                    <p className="text-gray-700 leading-relaxed text-center">
                      By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
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
