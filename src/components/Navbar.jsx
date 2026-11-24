import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-dark-brown text-cream-white text-xs py-2 px-4 border-b border-rose-gold/20 font-montserrat">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-rose-gold/30 text-champagne px-2 py-0.5 rounded-full text-[11px] font-medium tracking-wide">
              <Sparkles className="w-3 h-3 text-champagne animate-pulse" />
              Open Every Day
            </span>
            <span className="hidden md:inline text-champagne/80">|</span>
            <span className="text-champagne/90 flex items-center gap-1">
              <Clock className="w-3 h-3 inline text-rose-gold-light" />
              10:00 AM – 10:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-champagne/90">
            <span>Uttam Nagar, New Delhi</span>
            <span>•</span>
            <a 
              href={BRAND_INFO.phoneTel} 
              className="hover:text-rose-gold-light transition-colors flex items-center gap-1 font-semibold text-white"
            >
              <Phone className="w-3 h-3 text-rose-gold-light" />
              +91 {BRAND_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-white/95 backdrop-blur-md shadow-md py-3 border-b border-rose-gold/20' 
            : 'bg-cream-white/80 backdrop-blur-sm py-4 border-b border-rose-gold/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo & Title */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rose-gold/40 shadow-sm bg-white p-0.5 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={BRAND_INFO.logo} 
                  alt="The Nail Story by Madhu Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-dark-brown group-hover:text-rose-gold transition-colors">
                  The Nail Story
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-montserrat text-rose-gold font-semibold">
                  By Madhu
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark-brown/90 hover:text-rose-gold font-montserrat text-xs tracking-wider uppercase font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#booking"
                className="bg-rose-gradient hover:bg-rose-gradient-hover text-white px-5 py-2.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold shadow-luxury hover:shadow-luxury-hover transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-champagne" />
                BOOK AN APPOINTMENT
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-dark-brown hover:text-rose-gold hover:bg-rose-gold/10 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-white border-b border-rose-gold/30 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-dark-brown hover:text-rose-gold font-montserrat text-sm uppercase tracking-wider font-medium py-2 px-3 rounded-lg hover:bg-rose-gold/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-rose-gold/20 flex flex-col gap-2">
                <a
                  href="#booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-rose-gradient text-white py-3 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold shadow-luxury"
                >
                  BOOK AN APPOINTMENT
                </a>
                <a
                  href={BRAND_INFO.phoneTel}
                  className="w-full text-center border border-rose-gold text-rose-gold py-2.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold hover:bg-rose-gold/10 transition-colors"
                >
                  Call: +91 {BRAND_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
