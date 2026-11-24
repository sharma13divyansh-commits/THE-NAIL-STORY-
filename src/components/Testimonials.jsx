import React, { useState } from 'react';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-soft-blush/40 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-champagne/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-rose-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
            <span>Verified Client Praise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal mb-4">
            Love From <span className="italic rose-gold-text">Our Clients</span>
          </h2>

          <p className="font-sans text-dark-brown/75 text-base sm:text-lg font-light leading-relaxed">
            Real experiences. Beautiful transformations. Happy clients.
          </p>

          <p className="text-[11px] font-montserrat text-dark-brown/60 uppercase tracking-widest mt-2">
            ★ Authentic Reviews from our valued studio visitors ★
          </p>
        </div>

        {/* Testimonials Grid Displaying All 7 Exact Client Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              className={`bg-white/95 rounded-3xl p-7 border border-rose-gold/25 hover:border-rose-gold/60 shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white via-cream-white to-soft-blush/30' : ''
              }`}
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500" title="Decorative star rating representation">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-nude-pink flex items-center justify-center text-rose-gold">
                    <Quote className="w-4 h-4 fill-rose-gold" />
                  </div>
                </div>

                {/* Review Text - Unchanged, Verbatim as Required */}
                <p className="font-sans text-xs sm:text-sm text-dark-brown/85 leading-relaxed font-light italic whitespace-pre-line mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-rose-gold/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-gold to-champagne flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-dark-brown">
                    {review.name}
                  </h4>
                  <span className="text-[11px] font-montserrat uppercase tracking-wider text-rose-gold font-medium">
                    Verified Studio Client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Note */}
        <div className="mt-12 text-center text-xs font-montserrat text-dark-brown/50 tracking-wider">
          * Star visuals represent decorative studio ratings reflecting genuine client feedback.
        </div>

      </div>
    </section>
  );
}
