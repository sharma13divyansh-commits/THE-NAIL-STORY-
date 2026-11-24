import React, { useState } from 'react';
import { Sparkles, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES, BRAND_INFO } from '../data/salonData';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleWhatsAppEnquiry = (serviceName) => {
    const text = encodeURIComponent(
      `Hello The Nail Story by Madhu! I would like to enquire about the "${serviceName}" service and check available appointment slots.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const filteredCategories = activeCategory === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(cat => cat.id === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-soft-blush/40 relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-champagne/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
            <span>Our Service Menu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal mb-4">
            Beauty At Your <span className="italic rose-gold-text">Fingertips</span>
          </h2>

          <p className="font-sans text-dark-brown/75 text-base sm:text-lg font-light leading-relaxed">
            Discover our range of professional nail and beauty services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-rose-gradient text-white shadow-luxury'
                : 'bg-white text-dark-brown/80 hover:text-rose-gold border border-rose-gold/20 hover:border-rose-gold/50'
            }`}
          >
            All Services ({SERVICE_CATEGORIES.reduce((acc, c) => acc + c.services.length, 0)})
          </button>

          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-rose-gradient text-white shadow-luxury'
                  : 'bg-white text-dark-brown/80 hover:text-rose-gold border border-rose-gold/20 hover:border-rose-gold/50'
              }`}
            >
              {cat.name} ({cat.services.length})
            </button>
          ))}
        </div>

        {/* Categorized Services Display */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Title & Description */}
              <div className="border-b border-rose-gold/20 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-dark-brown">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-brown/70 font-light mt-1">
                    {category.description}
                  </p>
                </div>
                <span className="text-[11px] font-montserrat uppercase tracking-wider text-rose-gold font-medium">
                  {category.services.length} Specialized Treatments
                </span>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white/95 rounded-2xl p-6 border border-rose-gold/20 hover:border-rose-gold/60 shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
                  >
                    <div>
                      {/* Top Header inside card */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h4 className="font-serif text-lg font-semibold text-dark-brown group-hover:text-rose-gold transition-colors">
                          {service.name}
                        </h4>
                        {service.tag && (
                          <span className="text-[10px] font-montserrat uppercase tracking-wider bg-nude-pink text-rose-gold-dark px-2.5 py-1 rounded-full font-semibold flex-shrink-0">
                            {service.tag}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-dark-brown/70 leading-relaxed font-light mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Card Footer: Pricing note and WhatsApp Enquiry button */}
                    <div className="pt-4 border-t border-rose-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-montserrat text-dark-brown/60 tracking-wide uppercase block">
                          Pricing
                        </span>
                        <span className="text-xs font-semibold text-dark-brown">
                          Contact us for pricing
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleWhatsAppEnquiry(service.name)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-nude-pink hover:bg-rose-gold text-dark-brown hover:text-white px-3.5 py-2 rounded-full font-montserrat text-[11px] font-semibold uppercase tracking-wider transition-all duration-200"
                        title={`Enquire about ${service.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt Banner */}
        <div className="mt-16 bg-gradient-to-r from-dark-brown via-dark-brown-light to-dark-brown text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-rose-gold/10 blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-champagne font-montserrat text-xs uppercase tracking-widest font-semibold block mb-2">
                Custom Consultations Available
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                Have a specific nail art or custom idea in mind?
              </h3>
              <p className="text-sm text-cream-white/80 font-light max-w-xl">
                Send us your reference photo or Pinterest inspiration on WhatsApp for a personalized consultation.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-rose-gradient hover:bg-rose-gradient-hover text-white px-7 py-3.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold shadow-luxury transition-all duration-300 transform hover:scale-105"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
