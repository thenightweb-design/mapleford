'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
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
            <img src="/images/Image25.png" alt="Refund Policy Background" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold !text-white leading-tight mb-4 uppercase tracking-tighter ">
                Cancellation & Refund
              </h1>
              <p className="!text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic leading-tight">
                Our policy regarding fee cancellations and refunds.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="prose prose-lg max-w-none text-[#000000]"
            >
              <h2 className="text-[32px] sm:text-[44px] font-bold text-[#1A1A1A] mb-8 uppercase tracking-tighter ">
                Refund Policy
              </h2>
              <div className="space-y-6 text-lg leading-relaxed font-medium">
                <p>
                  At Mapleford International School, we strive to provide the best educational experience for our students. Please read our refund policy carefully.
                </p>
                <h3 className="text-2xl font-bold text-[#d0302b] uppercase mt-8">Admission Fees</h3>
                <p>
                  The Admission Fee and Registration Fee are non-refundable under any circumstances.
                </p>
                <h3 className="text-2xl font-bold text-[#d0302b] uppercase mt-8">Tuition Fees</h3>
                <p>
                  Tuition fees once paid are generally non-refundable. However, in exceptional cases (e.g., student withdrawal before the commencement of the academic session), a partial refund may be considered at the discretion of the management.
                </p>
                <h3 className="text-2xl font-bold text-[#d0302b] uppercase mt-8">Process</h3>
                <p>
                  All refund requests must be submitted in writing to the school administration office. Refunds, if approved, will be processed within 30-45 working days.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
