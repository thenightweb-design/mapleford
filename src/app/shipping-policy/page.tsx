'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ShippingPolicy() {
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
            <img src="/images/Image28.png" alt="Shipping Policy Background" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold !text-white leading-tight mb-4 uppercase tracking-tighter ">
                Shipping & Exchange
              </h1>
              <p className="!text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic leading-tight">
                Our policy regarding uniform and material delivery.
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
                Shipping & Material Policy
              </h2>
              <div className="space-y-6 text-lg leading-relaxed font-medium">
                <p>
                  At Mapleford International School, we provide necessary school supplies, including uniforms and books, through our approved vendors.
                </p>
                <h3 className="text-2xl font-bold text-[#d0302b] uppercase mt-8">Delivery</h3>
                <p>
                  School uniforms, books, and other educational materials are typically delivered at the school premises or can be purchased from authorized vendors as specified by the administration.
                </p>
                <h3 className="text-2xl font-bold text-[#d0302b] uppercase mt-8">Exchange Policy</h3>
                <p>
                  Uniforms and books can be exchanged within 7 days of receipt, provided they are in their original, unused condition with all tags intact.
                </p>
                <h3 className="text-2xl font-bold text-[#d0302b] uppercase mt-8">Claims</h3>
                <p>
                  Any discrepancy in the size or condition of the materials must be reported to the school office within 48 hours of receipt.
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
