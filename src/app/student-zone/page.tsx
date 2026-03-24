'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const houses = [
  { name: "Terra", color: "from-emerald-600 to-green-800", text: "Earth", motto: "Strong Roots. Steady Rise.", rhyme: "Rooted deep! Standing tall! Terra power beats them all!", desc: "Terra represents the stability and strength of Earth. Students in this house are grounded, resilient, and collaborative—growing steadily with strong roots and unwavering purpose.", symbol: "🌱" },
  { name: "Blaze", color: "from-red-600 to-orange-700", text: "Fire", motto: "Fearless Hearts. Fierce Spirit.", rhyme: "Heat it up! See the flame! Blaze is rising—own the game!", desc: "Blaze embodies the passion and energy of Fire. Members of this house are dynamic, courageous, and enthusiastic leaders who light up every challenge they face.", symbol: "🔥" },
  { name: "Aero", color: "from-amber-400 to-yellow-600", text: "Air", motto: "Move Fast. Rise Free.", rhyme: "Swift and sharp, flying high—Aero spirit reach the sky!", desc: "Aero captures the swiftness and freedom of Air. Students here are quick thinkers, adaptable changemakers, and innovative spirits who rise above limits.", symbol: "💨" },
  { name: "Astra", color: "from-blue-600 to-indigo-800", text: "Space", motto: "Aim Higher. Go Beyond.", rhyme: "Look up high! Feel the light! Astra leads with vision bright!", desc: "Astra reflects the limitless potential of Space. Visionaries and explorers, students of Astra aim for the stars, dreaming big and leading with a bright, expanding perspective.", symbol: "⭐" }
];

export default function StudentZone() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#000000]">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER — Standard Red */}
        <section className="py-24 px-4 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center bg-[#d0302b]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Image24.png" 
              alt="Student Zone Background" 
              fill
              className="object-cover opacity-40" 
              priority
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="!text-white/80 tracking-[0.3em] text-sm font-bold mb-4">Life at Mapleford</p>
              <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold !text-white leading-tight tracking-tighter ">
                Student Zone
              </h1>
              <p className="!text-white/90 text-xl lg:text-2xl mt-4 max-w-2xl mx-auto font-bold leading-relaxed italic tracking-wider">
                &quot;Where talent meets opportunity and spirit meets action.&quot;
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: House Arena Intro */}
        <section className="py-16 bg-white relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <p className="text-[#d0302b] font-bold tracking-[0.4em] text-xs mb-4">Four Elements. One Unstoppable Spirit.</p>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold leading-none tracking-tighter text-[#000000]">
                  The House Arena
                </h2>
                <div className="w-24 h-1.5 bg-[#d0302b] mx-auto mt-8 mb-10 rounded-full" />
                <div className="max-w-3xl mx-auto space-y-4">
                  <p className="text-2xl lg:text-3xl font-bold text-[#d0302b] tracking-tighter">Every Mapleite belongs to a force of nature.</p>
                  <p className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed">The House Arena makes the elements come alive — Earth, Fire, Air, and Space — each shaping how students learn, lead, play, compete, and celebrate together!</p>
                </div>
              </motion.div>
            </div>

            {/* House Cards Grid — Premium Redesign */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {houses.map((house, idx) => (
                <motion.div
                  key={house.name}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  variants={fadeInUp}
                  className="relative group h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${house.color} rounded-[3.5rem] transform group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl`} />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3.5rem]" />

                  <div className="relative p-10 sm:p-14 text-white flex flex-col h-full z-10 overflow-hidden">
                    {/* Floating Symbol Background Decorations */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="flex justify-between items-start mb-12">
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-7xl sm:text-8xl filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                      >
                        {house.symbol}
                      </motion.div>
                      <div className="text-right">
                        <p className="text-white/60 text-sm font-bold tracking-[0.2em] mb-1">{house.text}</p>
                        <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-none">{house.name}</h3>
                      </div>
                    </div>

                    <div className="mt-auto space-y-8">
                      <div className="space-y-4">
                        <div className="inline-block px-6 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
                          <p className="font-bold text-lg sm:text-xl tracking-wider">{house.motto}</p>
                        </div>
                        <p className="text-white/80 text-lg sm:text-xl italic font-bold leading-relaxed border-l-4 border-[#D6B25E] pl-6">&quot;{house.rhyme}&quot;</p>
                      </div>
                      <p className="text-white/90 leading-relaxed text-lg lg:text-xl font-medium">{house.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Life Beyond Lessons */}
        <section className="py-16 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.1] tracking-tighter text-[#000000]">
                  Life at Mapleford is<br className="hidden sm:block" /> More Than Lessons
                </h2>
                <div className="w-24 h-1.5 bg-[#d0302b] mx-auto mt-8 mb-10 rounded-full" />
                <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto italic font-bold">
                  &quot;Every day is an opportunity to explore a new passion, build a new bridge, and take a new step toward who you want to be.&quot;
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: "🎨", title: "Arts & Culture", desc: "Music, dance, drama, and visual arts give every student a creative outlet and a stage to shine." },
                { icon: "🏆", title: "Sports Excellence", desc: "From cricket to badminton, our arenas build discipline, teamwork, and physical well-being." },
                { icon: "🔬", title: "Science Clubs", desc: "Robotics, coding, and science fairs let curious minds explore, build, and innovate." },
                { icon: "📚", title: "Reading Programs", desc: "Library sessions and reading challenges nurture a lifelong love for literature and learning." },
                { icon: "🌍", title: "Leadership Initiatives", desc: "Student councils, debates, and community projects build confident future leaders." },
                { icon: "🎉", title: "Celebrations & Events", desc: "Annual day, sports day, festivals, and inter-house competitions build community spirit." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  variants={fadeInUp}
                  className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center"
                >
                  <div className="text-5xl mb-8 bg-slate-50 w-24 h-24 flex items-center justify-center rounded-[2rem] group-hover:scale-110 group-hover:bg-[#d0302b]/5 transition-all duration-500 ">{item.icon}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#000000] mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-lg lg:text-xl">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16">
              <Button href="/campus" variant="tab" showTriangle={true} size="lg">
                <span className="tracking-widest text-sm font-bold">Explore Campus</span>
              </Button>
              <Button href="/contact" variant="tab" showTriangle={true} size="lg">
                <span className="tracking-widest text-sm font-bold">Join the Community</span>
              </Button>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}