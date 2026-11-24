import React from 'react';
import { Sparkles, Palette, Users, Sparkle, HeartHandshake, Home } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

export default function WhyChooseUs() {
  const icons = [
    <Palette className="w-6 h-6 text-rose-gold" key="palette" />,
    <Users className="w-6 h-6 text-rose-gold" key="users" />,
    <Sparkles className="w-6 h-6 text-rose-gold" key="sparkles" />,
    <Home className="w-6 h-6 text-rose-gold" key="home" />,
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-soft-blush/30 to-cream-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-champagne/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-nude-pink/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mb-4">
            <Sparkle className="w-3.5 h-3.5 text-rose-gold" />
            <span>The Nail Story Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal mb-4">
            Your Beauty, <span className="italic rose-gold-text">Our Passion.</span>
          </h2>

          <div className="w-20 h-0.5 bg-rose-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-rose-gold/25 hover:border-rose-gold/70 shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col items-center text-center group transform hover:-translate-y-2 relative"
            >
              {/* Corner Rose Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-rose-gold/15 to-transparent rounded-tr-3xl rounded-bl-3xl pointer-events-none" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-nude-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-rose-gold/20">
                {icons[idx]}
              </div>

              {/* Number Pill */}
              <span className="text-[11px] font-montserrat font-semibold text-rose-gold uppercase tracking-widest mb-2">
                0{idx + 1}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-dark-brown mb-3 group-hover:text-rose-gold transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-dark-brown/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Confidence Assurance Strip */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-rose-gold/20 p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-xs font-montserrat text-dark-brown font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Hospital-Grade Tool Sterilization
          </div>
          <div className="hidden sm:block text-rose-gold/40">•</div>
          <div className="flex items-center gap-2 text-xs font-montserrat text-dark-brown font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Cruelty-Free & Premium Polish Brands
          </div>
          <div className="hidden sm:block text-rose-gold/40">•</div>
          <div className="flex items-center gap-2 text-xs font-montserrat text-dark-brown font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Personalized Nail Health Focus
          </div>
        </div>

      </div>
    </section>
  );
}
