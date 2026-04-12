import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-4 overflow-hidden bg-[#d0302b]/90" style={{ color: '#FFFFFF', fontStyle: 'normal' }}>
      {/* Background with Custom Image and Deep Red Overlay */}
      <div className="absolute inset-0 z-0 text-white">
        <Image 
          src="/WhatsApp Image 2026-02-20 at 10.23.06.jpeg"
          alt="Footer Background"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#d0302b]/80 via-[#d0302b]/70 to-[#8d211d]/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Sleek 3 Equal Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start">

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start md:pr-8 md:border-r md:border-white/10 py-6 md:py-2 h-full w-full">

            <Link href="/" className="inline-block transition-all hover:scale-105 duration-500">
              <Image
                src="/images/footer-logo.png"
                alt="Mapleford International School Logo"
                width={200}
                height={160}
                className="h-40 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Location Section */}
          <div className="flex flex-col items-center md:items-start md:px-8 md:border-r md:border-white/10 py-6 md:py-2 h-full w-full space-y-4">

            <div className="space-y-2 text-center md:text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[13px] uppercase tracking-widest font-bold" style={{ fontFamily: 'var(--font-body)', color: '#FFFFFF' }}>Location</span>
                <p className="text-[17px] font-normal leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: '#FFFFFF' }}>
                  Hayathnagar, Hyderabad,<br />
                  Telangana - 501505
                </p>
                <a
                  href="https://maps.app.goo.gl/sNJS9t1NsUfLhnmL8?g_st=ic"

                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-bold underline underline-offset-4 hover:opacity-80 transition-opacity flex items-center gap-2"
                  style={{ color: '#FFFFFF' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Get directions
                </a>
              </div>
            </div>
          </div>

          {/* Quick Connect Section */}
          <div className="flex flex-col items-center md:items-start md:pl-8 py-6 md:py-2 h-full w-full space-y-2">

            <div className="text-center md:text-left space-y-2 w-full">
              <span className="text-[13px] uppercase tracking-widest font-bold" style={{ fontFamily: 'var(--font-body)', color: '#FFFFFF' }}>Quick Connect</span>
              <div className="space-y-1">
                {[
                  { label: 'Contact', value: '+91 93466 48486', href: 'tel:+919346648486' },
                  { label: 'Admissions', value: 'admissions@maplefordinternational.com', href: 'mailto:admissions@maplefordinternational.com' },
                  { label: 'Mail', value: 'info@maplefordinternational.com', href: 'mailto:info@maplefordinternational.com' }
                ].map((item) => (
                  <p key={item.label} className="text-[17px] font-normal transition-colors" style={{ fontFamily: 'var(--font-body)', color: '#FFFFFF' }}>
                    <span className="mr-2 text-[14px] font-bold" style={{ color: '#FFFFFF' }}>{item.label}:</span>
                    <a href={item.href} className="hover:underline underline-offset-4" style={{ color: '#FFFFFF' }}>{item.value}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-1 border-t border-white/10 mb-0">
          {[
            { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms & Conditions', href: '/terms-of-service' },
            { label: 'Cancellation & Refund', href: '/refund-policy' },
            { label: 'Shipping & Exchange', href: '/shipping-policy' },
            { label: 'Contact us', href: '/contact' }
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold text-[14px] transition-all tracking-wide hover:opacity-80"
              style={{ fontFamily: 'var(--font-body)', color: '#FFFFFF' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Global Branding Attribution */}
        <div className="text-center pt-2 border-t border-white/5 space-y-1 px-4">
          <p className="text-[14px] sm:text-[16px] font-normal leading-tight" style={{ fontFamily: 'var(--font-body)', color: '#FFFFFF' }}>
            © {new Date().getFullYear()} by Mapleford International School Group
          </p>
          <p className="text-[13px] font-normal opacity-80" style={{ fontFamily: 'var(--font-body)', color: '#FFFFFF' }}>
            co managed by Swathi Educational Society
          </p>
        </div>
      </div>
    </footer>
  );
}
