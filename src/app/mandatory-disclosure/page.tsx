'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const disclosureData = [
  { id: 1, title: 'Mandatory Public Disclosure', link: 'https://drive.google.com/file/d/1P8EWwmqflF0m4gi1mN7RqLOOdiXM0frU/view?usp=drive_link' },
  { id: 2, title: 'General Information', link: '/2.General Information.pdf' },
  { id: 3, title: 'Affiliation Documents', link: 'https://drive.google.com/file/d/172zyNVOwrPBINLp_Ivx0NcgRyI3jknP5/view?usp=drive_link' },
  { id: 4, title: 'Society Details', link: 'https://drive.google.com/file/d/1b71ScEJ9Hxni2bFKl_InKyxozge7dqan/view?usp=drive_link' },
  { id: 5, title: 'Structural Safety Certificate', link: 'https://drive.google.com/file/d/11GLg5ymP6SqdlRplDToqyNTvF5WGw5nW/view?usp=drive_link' },
  { id: 6, title: 'NOC & Recognition Certificate', link: 'https://drive.google.com/file/d/1xqK9_D9ZfscoCyDUKJpXsLm4BI4j9PnR/view?usp=drive_link' },
  { id: 7, title: 'Land Certificate', link: 'https://drive.google.com/file/d/1K3xpWCTB8V9wSjQclCA_Fo_C3mp9r412/view?usp=drive_link' },
  { id: 8, title: 'Fire NOC Certificate', link: 'https://drive.google.com/file/d/1DWXjkF5ZaHUU4B05MHgmhBvmvXiD5gnh/view?usp=drive_link' },
  { id: 9, title: 'Sanitary Certificate', link: 'https://drive.google.com/file/d/12myl_sFK6X9Pe3_JK73jxQPvtUawMmU9/view?usp=drive_link' },
  { id: 10, title: 'Fee Structure of the School', link: 'https://drive.google.com/file/d/1wj7XTwixIxtcSPPXhAA-e6pTJ2hEP6ni/view?usp=drive_link' },
  { id: 11, title: 'Safe Drinking Certificate', link: 'https://drive.google.com/file/d/1WMZUISda-GGRlJ3g4QBLO8vx_sdxIFON/view?usp=drive_link' },
  { id: 12, title: 'Annual Academic Calendar', link: 'https://drive.google.com/file/d/15jATzmggWrAVRL04JZ-1pDxt3E3CVGir/view?usp=drive_link' },
  { id: 13, title: 'School Management Committee', link: 'https://drive.google.com/file/d/1HPI_pYMlKb925Iy7TNxdQxEobFZvRUc9/view?usp=drive_link' },
  { id: 14, title: 'Parent Teacher Association Members', link: 'https://drive.google.com/file/d/1vJFf779Gqw6YmgdqLRP_rF1uYjlUBHZT/view?usp=drive_link' },
  { id: 15, title: 'Staff Information', link: 'https://drive.google.com/file/d/1KT-lSiXTcs09FJvbsnOeRs1dwe7csFKm/view?usp=drive_link' },
  { id: 16, title: 'Teachers Data', link: 'https://drive.google.com/file/d/1mTSIvP2oVpmC6hw-7L-hj55uQ2ekoxvL/view?usp=drive_link' },
];

export default function MandatoryDisclosure() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#000000]">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">
        
        {/* BANNER — Red theme consistent with other pages */}
        <section className="py-24 px-4 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center bg-[#d0302b]">
          <div className="absolute inset-0 z-0 text-white">
            <img 
              src="/images/Image21.png" 
              alt="Mandatory Disclosure Background" 
              className="w-full h-full object-cover opacity-40" 
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold !text-white leading-tight mb-4 tracking-tighter ">
                Mandatory Disclosure
              </h1>
              <p className="!text-white/90 text-xl lg:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic leading-tight ">
                Transparency in Excellence and Governance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TABLE SECTION */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-8 py-6 text-sm font-bold tracking-widest text-[#d0302b] w-24">Sl No.</th>
                      <th className="px-8 py-6 text-sm font-bold tracking-widest text-[#d0302b]">List of Documents</th>
                      <th className="px-8 py-6 text-sm font-bold tracking-widest text-[#d0302b] text-center w-48">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {disclosureData.map((item, index) => (
                      <tr 
                        key={item.id} 
                        className={`border-b border-gray-50 hover:bg-slate-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                      >
                        <td className="px-8 py-6 font-bold text-gray-400">{item.id}</td>
                        <td className="px-8 py-6 font-bold text-[#000000] text-lg tracking-tight">{item.title}</td>
                        <td className="px-8 py-6 text-center">
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-2 bg-[#d0302b] font-bold text-xs tracking-widest rounded-full hover:bg-[#b02020] transition-all hover:scale-105 shadow-md shadow-red-100"
                            style={{ color: '#D6B25E' }}
                          >
                            View File
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
