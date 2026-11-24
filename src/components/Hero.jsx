import React from 'react';
import { Sparkles, ArrowRight, Star, Heart, CheckCircle2, Award } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-cream-white via-soft-blush/60 to-nude-pink/40 pt-8 pb-16 lg:py-24">
      {/* Decorative Floral & Sparkle Elements */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-champagne/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-5 w-96 h-96 bg-rose-gold/15 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Subtle geometric rose-gold ring background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-rose-gold/10 rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-champagne/20 rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-2 lg:pt-0">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mx-auto lg:mx-0 w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
              <span>Luxury Nail Studio & Spa • Uttam Nagar, Delhi</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-dark-brown leading-[1.15] mb-6 tracking-tight">
              Your Nails Deserve <br className="hidden sm:inline" />
              <span className="italic font-serif rose-gold-text">Their Own Story.</span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-dark-brown/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
              Where elegance meets creativity. Experience beautiful nail transformations, luxurious nail care, and artistic designs crafted just for you.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-rose-gold text-rose-gold-dark hover:bg-rose-gold hover:text-white font-montserrat text-xs tracking-wider uppercase font-semibold transition-all duration-300 text-center shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                EXPLORE OUR SERVICES
              </a>
              <a
                href="#booking"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-rose-gradient hover:bg-rose-gradient-hover text-white font-montserrat text-xs tracking-wider uppercase font-semibold transition-all duration-300 text-center shadow-luxury hover:shadow-luxury-hover transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>BOOK YOUR APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Three Small Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-rose-gold/20">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-rose-gold/15 flex items-center justify-center text-rose-gold flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-montserrat text-xs font-medium text-dark-brown tracking-wide">
                  Premium Nail Art
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-rose-gold/15 flex items-center justify-center text-rose-gold flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-montserrat text-xs font-medium text-dark-brown tracking-wide">
                  Expert Nail Artists
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-rose-gold/15 flex items-center justify-center text-rose-gold flex-shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="font-montserrat text-xs font-medium text-dark-brown tracking-wide">
                  Beautiful Nail Transformations
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Real Studio Work */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Photo Card */}
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-rose-gold/30 via-champagne/40 to-white shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-nude-pink">
                  <img
                    src="/assets/client-work-1.jpg"
                    alt="Luxury Nail Extensions and Art by The Nail Story by Madhu"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Shade at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-rose-gold/80 backdrop-blur-md text-[10px] font-montserrat uppercase tracking-wider mb-1">
                      Featured Creation
                    </span>
                    <p className="font-serif text-sm font-medium tracking-wide">
                      Artisan Tortoiseshell & Burgundy Gold Star Extensions
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 5 Years Trust */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-rose-gold/30 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-10 h-10 rounded-xl bg-nude-pink flex items-center justify-center text-rose-gold font-bold font-serif text-base">
                  5★
                </div>
                <div>
                  <div className="text-[10px] font-montserrat tracking-wider uppercase text-rose-gold font-semibold">
                    Client Love
                  </div>
                  <div className="text-xs font-semibold text-dark-brown">
                    5+ Years Trusted
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Real Studio Artistry */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-champagne flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-rose-gold/40 flex-shrink-0">
                  <img 
                    src="/assets/client-work-3.jpg" 
                    alt="Glitter Heart Nails" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-montserrat tracking-wider uppercase text-rose-gold font-semibold">
                    Signature Style
                  </div>
                  <div className="text-xs font-semibold text-dark-brown">
                    Bespoke Art & Care
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
