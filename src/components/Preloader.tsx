'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasLoaded = sessionStorage.getItem('mapleford-loaded');
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    // Hide preloader after ~1.5s
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('mapleford-loaded', 'true');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo image with simple fade/scale and continuous rotation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: 360
              }}
              transition={{ 
                scale: { duration: 0.8, ease: "easeOut" },
                opacity: { duration: 0.8, ease: "easeOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
              className="relative w-32 h-32 sm:w-40 sm:h-40"
            >
              <Image
                src="/SHEI.png"
                alt="Mapleford International School"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
