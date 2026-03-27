'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const academicFacilities = [
  {
    title: "Smart & Well-ventilated Classrooms",
    subtitle: "Smart. Bright. Engaging",
    description: "Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. With digital boards and projectors, lessons become dynamic and visual—making learning engaging, interactive, and impactful.",
    image: "/images/campus_classroom.png",
  },
  {
    title: "Science Labs",
    subtitle: "Explore. Experiment. Discover.",
    description: "Dedicated Physics, Chemistry, and Biology laboratories provide students with hands-on learning experiences that bring science to life. Well-equipped and thoughtfully designed, these labs encourage observation, experimentation, and inquiry—helping students develop scientific thinking and a deeper understanding of the world around them.",
    image: "/images/campus_science_lab.png",
  },
  {
    title: "Mathematics Lab",
    subtitle: "Think. Solve. Apply.",
    description: "The Mathematics Lab transforms abstract concepts into practical understanding. Through activity-based learning and hands-on tools, students build logical reasoning, problem-solving skills, and confidence—making maths engaging, intuitive, and enjoyable.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Computer Lab",
    subtitle: "Learn. Code. Innovate.",
    description: "Our modern computer lab supports technology-integrated learning and digital literacy across grades. With updated systems and guided instruction, students develop essential computing skills, responsible digital habits, and confidence in navigating today’s digital landscape.",
    image: "/images/campus_computer_lab.png",
  },
  {
    title: "Library",
    subtitle: "Quiet. Inviting. Inspiring.",
    description: "Our library is a calm and welcoming space where curiosity finds direction. Stocked with a wide range of age-appropriate books, reference materials, and learning resources, it encourages students to read, research, and reflect. Comfortable reading corners and a peaceful ambience help nurture imagination and a lifelong love for learning.",
    image: "/images/campus_library.png",
  },
  {
    title: "Resource Rooms",
    subtitle: "Supportive. Inclusive. Individualised.",
    description: "Dedicated resource rooms offer personalised academic and special education support in a nurturing setting. Designed to address diverse learning needs, these spaces ensure every child receives focused attention, encouragement, and the support required to learn at their own pace.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&fit=crop&q=80",
  }
];

const sportsGrid = [
  { icon: '🏏', name: 'Cricket', motto: 'Skill. Strategy. Sportsmanship.', desc: 'A dedicated cricket ground gives students the space to refine technique, build focus, and experience the spirit of team play, right from practice sessions to match days.' },
  { icon: '🏀', name: 'Basketball', motto: 'Agility. Teamwork. Pace.', desc: 'Our basketball court keeps the energy high, helping students develop quick thinking, coordination, and collaborative play through fast-paced action.' },
  { icon: '⛸️', name: 'Skating', motto: 'Balance. Confidence. Control.', desc: 'A safe and engaging skating area allows children to build balance, coordination, and self-assurance, while enjoying movement with freedom and joy.' },
  { icon: '🎾', name: 'Tennis', motto: 'Precision. Endurance. Grace.', desc: 'With tennis courts designed for both beginners and aspiring players, this space sharpens focus, coordination, and competitiveness.' },
  { icon: '⚽', name: 'Football', motto: 'Strength. Teamwork. Spirit.', desc: 'A lush football ground encourages students to play with passion, build resilience, and learn leadership through teamwork and strategy.' },
  { icon: '🎽', name: 'Athletics', motto: 'Speed. Strength. Determination.', desc: 'Athletics facilities encourage students to explore running, jumping, and field events—nurturing fitness, discipline, and individual bests.' },
  { icon: '🏸', name: 'Badminton', motto: 'Reflex. Rhythm. Focus.', desc: 'Badminton courts promote agility and sharp reflexes, offering students a fast, engaging sport that builds coordination and concentration.' },
  { icon: '🏊', name: 'Swimming Pool', motto: 'Strength. Skill. Confidence.', desc: 'A well-maintained swimming pool provides students with structured training and supervised sessions that build stamina, coordination, and water safety skills.' },
  { icon: '🏟️', name: 'Indoor Play Area', motto: 'All-Weather. Active. Inclusive.', desc: 'Designed for year-round activity, the indoor play area keeps students engaged in rain or shine, through structured and free play.' },
  { icon: '🪁', name: 'Kids’ Play Area', motto: 'Safe. Active. Joyful.', desc: 'A colourful, secure play zone lets younger learners climb, explore, and socialise—building confidence through guided free play.' }
];

export default function Campus() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[90px] lg:pt-[120px]">
        <section className="py-20 sm:py-32 px-4 relative overflow-hidden min-h-[400px] flex items-center bg-slate-900">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/Image24_000.png" 
              alt="Campus Background" 
              fill
              className="object-cover opacity-60" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 p-10 sm:p-14 rounded-[3rem] shadow-2xl"
            >
              <p className="text-[#d0302b] tracking-[0.4em] text-xs font-bold mb-6 uppercase">Inspiring Infrastructure</p>
              <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-extrabold !text-white leading-[1.1] mb-6 tracking-tighter">
                Campus
              </h1>
              <p className="!text-white/90 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-[#d0302b] pl-6">
                Spaces that Inspire | Designed for Discovery | Purposefully Equipped
              </p>
            </motion.div>
          </div>
        </section>

        {/* ACADEMIC INFRASTRUCTURE — Alternating high-impact blocks */}
        <section className="py-12 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {academicFacilities.map((fac, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
                >
                  <div className="w-full lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-slate-50 rounded-[4rem] -z-10 rotate-2" />
                    <div className="relative aspect-square sm:aspect-[16/10] rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl group border-[6px] sm:border-[12px] border-white">
                      <Image 
                        src={fac.image} 
                        alt={fac.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold text-[#000000] leading-tight tracking-tighter ">
                        {fac.title}
                      </h2>
                      <p className="text-[#d0302b] text-xl lg:text-2xl font-bold italic">
                        {fac.subtitle}
                      </p>
                      <div className="w-24 h-1.5 bg-[#d0302b] rounded-full" />
                    </div>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                      {fac.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RED SECTION — Quote/Impact */}
        <section className="py-16 bg-[#d0302b] relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold mb-8 leading-tight tracking-tighter ">
                Designed for Excellence, Built for the Future.
              </h2>
              <p className="text-xl lg:text-2xl font-bold opacity-90 italic">
                &quot;Every corner of Mapleford is a catalyst for discovery, blending modern technology with a nurturing environment.&quot;
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-white px-4 relative overflow-hidden" id="sports">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold text-[#000000] leading-none tracking-tighter mb-8 ">
                  Sports Arena
                </h2>
                <div className="w-32 h-2 bg-[#d0302b] mx-auto mb-10 rounded-full" />
                <p className="text-2xl lg:text-3xl text-gray-600 font-bold max-w-4xl mx-auto">
                  Spaces designed to build strength, confidence, and teamwork
                </p>
              </motion.div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {sportsGrid.map((sport, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="group perspective-1000 h-[260px]"
                >
                  <motion.div
                    className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180 cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* FRONT: Clean Style with Moving Icon */}
                    <div
                      className="absolute inset-0 backface-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_45px_120px_rgba(0,0,0,0.18)] transition-all duration-500 flex flex-col items-center justify-center p-8 border-t border-gray-50 overflow-hidden rounded-3xl"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-5xl mb-4 bg-gray-50 w-20 h-20 flex items-center justify-center rounded-full shadow-inner"
                      >
                        {sport.icon}
                      </motion.div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tighter text-center">
                        {sport.name}
                      </h3>
                      <div className="w-12 h-1 bg-[#d0302b] mt-4 opacity-20" />
                    </div>

                    {/* BACK: Description (Premium Red) */}
                    <div
                      className="absolute inset-0 backface-hidden bg-[#d0302b] shadow-2xl flex flex-col justify-center p-10 text-white rotate-y-180 border-t border-white/20 rounded-3xl"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <h4 className="text-sm font-bold mb-4 tracking-[0.3em] text-[#D6B25E]">
                        {sport.motto}
                      </h4>
                      <p className="text-base leading-relaxed font-medium opacity-100">
                        {sport.desc}
                      </p>
                      <div className="absolute top-6 right-8 opacity-20 grayscale invert brightness-0">
                        {/* Removing icon as requested, purely for layout if needed */}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHEDULE A VISIT */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold text-[#000000] leading-tight tracking-tighter ">
                Schedule a Campus Visit
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 font-bold max-w-xl mx-auto">
                Our admissions team will be happy to guide you through the campus and answer your questions.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="lg">
                  Schedule a Campus Visit
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}