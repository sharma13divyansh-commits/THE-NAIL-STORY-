import React from 'react';
import { Sparkles, Heart, ShieldCheck, Palette, Scissors } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Flourish */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-soft-blush/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nude-pink/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Imagery Column: Elegant Collage with Studio Work and Artist Focus */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              
              {/* Primary Image: Artist Crafting / Nail Transformation */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-white aspect-[4/5] max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Nail Artist working on client nails"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-montserrat uppercase tracking-widest text-champagne block mb-1">
                    Artistry & Precision
                  </span>
                  <p className="font-serif text-lg">
                    Every stroke tailored to your hands
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Card: The Nail Story Branded Slate */}
              <div className="absolute -bottom-8 -right-2 sm:-right-6 w-52 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/assets/client-work-3.jpg"
                    alt="The Nail Story by Madhu Signature Crystal Nail Art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 text-center">
                  <span className="text-[11px] font-montserrat font-semibold text-rose-gold tracking-wider uppercase block">
                    Signature Studio Creation
                  </span>
                  <span className="text-xs text-dark-brown/70 font-sans">
                    Uttam Nagar Studio
                  </span>
                </div>
              </div>

              {/* Decorative Experience Badge */}
              <div className="absolute -top-6 -left-2 sm:-left-6 bg-gradient-to-br from-rose-gold to-dark-brown text-white p-4 rounded-2xl shadow-xl">
                <div className="font-serif text-2xl font-bold tracking-tight text-champagne">
                  100%
                </div>
                <div className="text-[10px] font-montserrat tracking-widest uppercase text-white/90">
                  Custom Art & Hygiene
                </div>
              </div>

            </div>
          </div>

          {/* Text Column: Narrative & Values */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            
            {/* Sub-label */}
            <div className="inline-flex items-center gap-2 text-rose-gold font-montserrat text-xs tracking-widest uppercase font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Studio</span>
            </div>

            {/* Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal leading-tight mb-6">
              More Than Nails, <br />
              <span className="italic rose-gold-text">It's An Experience.</span>
            </h2>

            {/* Introduction Copy Exactly as Required */}
            <div className="space-y-4 text-dark-brown/85 font-sans leading-relaxed text-base font-light mb-8">
              <p>
                Welcome to <strong className="font-semibold text-dark-brown">The Nail Story by Madhu</strong>, your destination for beautiful nails, self-care, and creative nail transformations in Uttam Nagar, New Delhi.
              </p>
              <p>
                We believe every set of nails tells a story. Our goal is to bring your imagination to life with creative nail designs, professional nail care, and personalized beauty services.
              </p>
              <p>
                Whether you love minimal elegance, timeless French manicures, or bold artistic nail extensions, we are here to make your nail dreams come true.
              </p>
            </div>

            {/* Studio Values / Distinctives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-rose-gold/20 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-nude-pink flex items-center justify-center text-rose-gold flex-shrink-0 mt-0.5">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-montserrat text-xs uppercase tracking-wider font-semibold text-dark-brown">
                    Custom Creativity
                  </h4>
                  <p className="text-xs text-dark-brown/70 mt-0.5">
                    Hundreds of gel colors, foils, charms, and hand-drawn designs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-nude-pink flex items-center justify-center text-rose-gold flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-montserrat text-xs uppercase tracking-wider font-semibold text-dark-brown">
                    Strict Hygiene
                  </h4>
                  <p className="text-xs text-dark-brown/70 mt-0.5">
                    Hospital-grade sterilization for all tools and stations.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-wider font-semibold text-rose-gold hover:text-rose-gold-dark transition-colors group"
              >
                <span>Discover All Our Services</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
