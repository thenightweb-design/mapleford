'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Button from './Button';
import AdmissionModal from './AdmissionModal';


interface DropdownItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();


  const menuItems: MenuItem[] = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Curriculum', href: '/curriculum' },
    { title: 'Campus', href: '/campus' },
    { title: 'Student Zone', href: '/student-zone' },
    { title: 'Admissions', href: '/admissions' },
    { title: 'Contact Us', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (title: string) => {
    setMobileExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-1' : 'shadow-sm py-2'
          }`}
        style={{
          background: '#FFFFFF',
          borderBottom: isScrolled ? '1px solid rgba(214, 178, 94, 0.2)' : '1px solid rgba(214, 178, 94, 0.15)',
          height: isScrolled ? '90px' : '120px' // Increased for bigger logo
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Left - Logo */}
            <div className="flex items-center h-full gap-3 sm:gap-6">
              <Link href="/" className="flex items-center h-full py-3">
                <Image
                  src="/ChatGPT Image Jan 14, 2026, 09_10_49 PM.png"
                  alt="Logo"
                  width={280}
                  height={80}
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Center - Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        onMouseEnter={() => setActiveDropdown(item.title)}
                        className={`menu-link px-3 py-2 text-[14px] font-bold transition-all duration-300 flex items-center gap-1 rounded-lg ${activeDropdown === item.title
                          ? 'bg-black/5'
                          : 'hover:bg-black/5'
                          }`}
                        style={{ fontFamily: '"Lato", sans-serif' }}
                      >
                        {item.title}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.title && (
                        <div
                          className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-black/5 py-2 min-w-[240px] z-50"
                          onMouseLeave={() => setActiveDropdown(null)}
                          style={{
                            animation: 'fadeIn 0.2s ease-out'
                          }}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="menu-link block px-4 py-2.5 text-[13px] hover:bg-black/5 transition-all duration-200"
                              style={{ fontFamily: '"Lato", sans-serif' }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      className={`menu-link px-3 py-2 text-[14px] font-bold transition-all duration-300 rounded-lg relative ${pathname === (item.href || '/')
                        ? 'text-black'
                        : 'hover:bg-black/5'
                        }`}
                      style={{ fontFamily: '"Lato", sans-serif' }}
                    >
                      {item.title}
                      {pathname === (item.href || '/') && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d0302b]"
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Middle Logo (CBSE Affiliation) */}
            <div className="hidden lg:flex flex-col items-center justify-center h-full px-4 mx-2">
              <Image
                src="/images/logo.png"
                alt="CBSE Logo"
                width={80}
                height={64}
                className="h-16 w-auto object-contain"
              />
              <span className="text-[10px] font-bold text-gray-700 mt-1 leading-none">
                Affiliation No: 3630573
              </span>
            </div>

            {/* Right - CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="md"
                className="hidden sm:inline-block"
              >
                ENROLL NOW
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden flex items-center gap-2 text-[#000000] hover:text-[#000000] transition-all duration-300"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto lg:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {/* Mobile Menu Header */}
          <div
            className="sticky top-0 z-10 border-b"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(214, 178, 94, 0.2)'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-1.5">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/ChatGPT Image Jan 14, 2026, 09_10_49 PM.png"
                    alt="Mapleford International School Logo"
                    width={160}
                    height={64}
                    className="h-16 sm:h-20 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-[#000000] hover:text-[#000000] transition-all duration-300"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(item.title)}
                        className="menu-link w-full flex items-center justify-between py-4 text-lg font-bold hover:bg-black/5 rounded-xl px-4 transition-colors text-left"
                        style={{ fontFamily: '"Raleway", sans-serif' }}
                      >
                        {item.title}
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${mobileExpandedItems[item.title] ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpandedItems[item.title] && (
                        <div className="pl-4 pb-4 space-y-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="menu-link block py-2 transition-colors font-medium"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all ${pathname === (item.href || '/')
                        ? 'bg-black/5 text-black font-black'
                        : 'text-black'
                        }`}
                      style={{ fontFamily: '"Raleway", sans-serif' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                variant="primary"
                size="lg"
                className="block w-full"
              >
                ENROLL NOW
              </Button>

              <a
                href="https://wa.me/919346648486"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 mt-4 py-3 text-[#000000] hover:text-[#000000] transition-colors font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chat with us
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
