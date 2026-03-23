'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasLoaded = sessionStorage.getItem('mapleford-loaded');
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide preloader after ~1.8s
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('mapleford-loaded', 'true');
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Background subtle pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d0302b]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#d0302b]/5 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo with pulse ring */}
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute w-40 h-40 rounded-full border-2 border-[#d0302b]/20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Inner pulsing ring */}
              <motion.div
                className="absolute w-32 h-32 rounded-full border-2 border-[#d0302b]/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
              {/* Logo image */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-10 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center"
              >
                <Image
                  src="/SHEI.png"
                  alt="Mapleford International School"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* School Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center space-y-1"
            >
              <h1
                className="text-2xl sm:text-3xl font-black text-[#000000] tracking-tight"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Mapleford International School
              </h1>
              <p
                className="text-sm font-bold text-[#d0302b] uppercase tracking-[0.3em]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Knowledge · Integrity · Excellence
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-64 sm:w-80"
            >
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#d0302b] to-[#D6B25E] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
