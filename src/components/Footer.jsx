import React from 'react';
import { Sparkles, MapPin, Phone, Clock, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { BRAND_INFO, SERVICE_CATEGORIES } from '../data/salonData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-brown text-cream-white relative pt-16 pb-12 border-t border-rose-gold/20 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-rose-gold/20">
          
          {/* Column 1: Brand Info & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-rose-gold/60 p-0.5 bg-white">
                <img
                  src={BRAND_INFO.logo}
                  alt="The Nail Story by Madhu Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                  The Nail Story
                </h3>
                <span className="text-[11px] uppercase tracking-[0.2em] font-montserrat text-rose-gold-light font-semibold">
                  By Madhu
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-champagne/80 font-light leading-relaxed">
              Your premier luxury nail studio and beauty sanctuary in Uttam Nagar, New Delhi. Dedicated to artistic nail transformations, gentle nail health, and indulgent self-care experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-gold flex items-center justify-center text-champagne hover:text-white transition-all"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center text-champagne hover:text-white transition-all"
                title="Subscribe on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-semibold text-champagne tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-montserrat">
              <li>
                <a href="#home" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Nail Art Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#booking" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Contact & Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-champagne tracking-wide">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-xs font-montserrat">
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Acrylic Nails & Extensions
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Custom Handcrafted Nail Art
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Gel Manicures & Overlays
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  French Manicures & Nude Ombré
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Stiletto & Coffin Extensions
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Pedicures & Foot Massages
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-rose-gold-light transition-colors">
                  Eyelash Extensions & Waxing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-champagne tracking-wide">
              Studio & Timings
            </h4>
            
            <div className="space-y-3 text-xs font-sans text-champagne/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-gold-light flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  D-59, Arya Samaj Road, Near Grover Sweets, Block C, Uttam Nagar, New Delhi – 110059
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-gold-light flex-shrink-0" />
                <a href={BRAND_INFO.phoneTel} className="text-white hover:text-rose-gold-light font-montserrat font-medium">
                  +91 {BRAND_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-rose-gold-light flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">10:00 AM – 10:00 PM</span>
                  <span className="text-[11px] text-rose-gold-light font-montserrat">Monday to Sunday (Open Every Day)</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="inline-block bg-rose-gradient text-white px-5 py-2.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold shadow-luxury hover:bg-rose-gradient-hover transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-montserrat text-champagne/70">
          <p className="text-center sm:text-left">
            © 2026 The Nail Story by madhu. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-champagne/50">
              Uttam Nagar, New Delhi
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-champagne hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
