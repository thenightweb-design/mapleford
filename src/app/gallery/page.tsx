'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '../../components/Footer';


interface GalleryItem {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
}

const CATEGORIES = ['All', 'Campus', 'Events', 'Sports', 'Academics', 'General'];

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filtered, setFiltered] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchGallery();
  }, []);

  useEffect(() => {
    setFiltered(
      activeCategory === 'All' ? items : items.filter(i => i.category === activeCategory)
    );
  }, [activeCategory, items]);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/gallery', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const gallery = Array.isArray(data) ? data : [];
      setItems(gallery);
      setFiltered(gallery);
    } catch (err) {
      console.error('Gallery fetch error:', err);
      setError(true);
      setItems([]);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Hero ── */}
      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">
        <section className="py-16 sm:py-24 px-4 relative overflow-hidden min-h-[350px] sm:min-h-[450px] flex items-center bg-slate-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/BRT_4033.JPG"
              alt="Mapleford Gallery"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl"
            >
              <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] font-semibold !text-white leading-tight mb-6 tracking-tighter">
                Our Gallery
              </h1>
              <p className="!text-white/90 text-lg sm:text-xl font-bold tracking-wide italic leading-tight border-l-4 border-[#d0302b] pl-6">
                Capturing moments of learning, growth, and joy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>


      {/* ── Content ── */}
      <section className="py-10 sm:py-16 bg-gray-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#C8102E] text-white shadow-lg shadow-red-200'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-10 h-10 border-2 border-[#C8102E] border-t-[#D6B25E] rounded-full animate-spin" />
              <p className="text-gray-400 text-sm font-medium">Loading gallery…</p>
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#C8102E" strokeWidth="1.5"/>
                  <path d="M16 10v6M16 21h.01" stroke="#C8102E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-semibold">Unable to load gallery</p>
                <p className="text-gray-400 text-sm mt-1">Please check your connection and try again</p>
              </div>
              <button onClick={fetchGallery}
                className="px-6 py-2.5 bg-[#C8102E] text-white rounded-full text-sm font-bold hover:bg-[#a80d26] transition-all">
                Retry
              </button>
            </div>
          )}

          {/* Gallery grid */}
          {!loading && !error && (
            <>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <rect x="2" y="5" width="24" height="18" rx="2" stroke="#D6B25E" strokeWidth="1.5"/>
                      <circle cx="9" cy="11" r="2.5" stroke="#D6B25E" strokeWidth="1.5"/>
                      <path d="M2 21l7-6 5 5 4-4 8 8" stroke="#D6B25E" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-500 font-semibold">
                    {items.length === 0
                      ? 'No images in the gallery yet.'
                      : `No images in "${activeCategory}" category.`}
                  </p>
                  {activeCategory !== 'All' && (
                    <button onClick={() => setActiveCategory('All')}
                      className="mt-4 text-[#C8102E] text-sm font-bold hover:underline">
                      View all images →
                    </button>
                  )}
                </div>
              ) : (
                <>
                  <p className="text-center text-xs text-gray-400 font-medium mb-6 uppercase tracking-widest">
                    {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
                    {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
                  </p>
                  <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                      {filtered.map(item => (
                        <motion.div
                          key={item._id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="group relative cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
                          onClick={() => setSelected(item)}
                        >
                          {/* Image */}
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            onError={e => {
                              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGNUYzRjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0Q2QjI1RSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                            }}
                          />
                          {/* Category badge */}
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 bg-white/90 text-[#C8102E] text-[9px] font-black uppercase tracking-widest rounded-lg">
                              {item.category}
                            </span>
                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                            <p className="text-[#D6B25E] text-[10px] font-black tracking-widest uppercase mb-1">{item.category}</p>
                            {item.description && (
                              <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.description}</p>
                            )}
                            <p className="text-white/50 text-[10px] mt-2 font-medium">Tap to enlarge →</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-[210]"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-4 sm:mt-6 text-center px-4">
                <span className="inline-block px-3 py-1 bg-[#D6B25E]/20 text-[#D6B25E] text-[10px] font-black uppercase tracking-widest rounded-full mb-2">
                  {selected.category}
                </span>
                {selected.description && (
                  <p className="text-white/60 mt-2 max-w-xl mx-auto text-sm leading-relaxed">{selected.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
