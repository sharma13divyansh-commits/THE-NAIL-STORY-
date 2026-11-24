import React from 'react';
import { Sparkles, MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { BRAND_INFO, OPENING_HOURS } from '../data/salonData';

export default function ContactLocation() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-soft-blush/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-champagne/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-soft-blush border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
            <span>Studio Location & Hours</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal mb-4">
            Visit Our <span className="italic rose-gold-text">Studio</span>
          </h2>

          <p className="font-sans text-dark-brown/75 text-base sm:text-lg font-light leading-relaxed">
            Conveniently situated in Uttam Nagar, New Delhi. Step into our world of calm and luxury.
          </p>
        </div>

        {/* Content Grid: Contact Details & Hours on Left, Map & Directions on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Timings (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Identity Card */}
            <div className="bg-gradient-to-br from-cream-white via-white to-soft-blush/40 rounded-3xl p-6 sm:p-8 border border-rose-gold/30 shadow-soft">
              
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-rose-gold/40 shadow-sm bg-white p-0.5 flex-shrink-0">
                  <img
                    src={BRAND_INFO.logo}
                    alt="The Nail Story Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-brown">
                    The Nail Story by madhu
                  </h3>
                  <span className="text-[11px] font-montserrat uppercase tracking-wider text-rose-gold font-semibold">
                    Premier Nail & Beauty Destination
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 mb-6 pb-6 border-b border-rose-gold/20">
                <div className="w-9 h-9 rounded-xl bg-nude-pink flex items-center justify-center text-rose-gold flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-montserrat uppercase tracking-wider text-dark-brown/60 font-semibold block mb-1">
                    Address
                  </span>
                  <p className="text-xs sm:text-sm text-dark-brown/85 font-sans leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone & Direct WhatsApp Buttons */}
              <div className="space-y-3 pb-6 border-b border-rose-gold/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-nude-pink flex items-center justify-center text-rose-gold flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-montserrat uppercase tracking-wider text-dark-brown/60 font-semibold block">
                        Direct Phone / Call
                      </span>
                      <a
                        href={BRAND_INFO.phoneTel}
                        className="text-sm font-semibold text-dark-brown hover:text-rose-gold transition-colors font-montserrat"
                      >
                        +91 {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={BRAND_INFO.phoneTel}
                    className="px-3.5 py-1.5 rounded-full border border-rose-gold text-rose-gold-dark hover:bg-rose-gold hover:text-white text-xs font-montserrat font-medium transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Hello The Nail Story by Madhu! I would like to get more information about your studio services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-montserrat uppercase tracking-wider text-dark-brown/70 font-semibold">
                  Follow Us Online
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={BRAND_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-nude-pink flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-colors"
                    title="Follow on Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-nude-pink flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-colors"
                    title="Subscribe on YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-rose-gold/25 shadow-soft">
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-gold/15">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose-gold" />
                  <h4 className="font-serif text-lg font-semibold text-dark-brown">
                    Studio Timings
                  </h4>
                </div>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-montserrat uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
                  Open Every Day
                </span>
              </div>

              <div className="space-y-2">
                {OPENING_HOURS.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs py-1.5 border-b border-rose-gold/5 last:border-0"
                  >
                    <span className="font-montserrat font-medium text-dark-brown/80">
                      {slot.day}
                    </span>
                    <span className="font-sans font-semibold text-rose-gold-dark">
                      {slot.timing}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-rose-gold/15 text-center">
                <span className="text-[11px] font-montserrat text-dark-brown/60">
                  Walk-ins welcome, prior booking recommended on weekends.
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps & Directions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Map Frame Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-rose-gold/30 shadow-soft">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="font-serif text-xl font-medium text-dark-brown">
                    Locate Us On Map
                  </h4>
                  <p className="text-xs text-dark-brown/65 font-light">
                    Near Grover Sweets, Arya Samaj Road, Uttam Nagar
                  </p>
                </div>

                <a
                  href={BRAND_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-rose-gold/15 hover:bg-rose-gold text-rose-gold-dark hover:text-white px-4 py-2 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold transition-colors flex-shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Embedded Google Map iframe with exact Uttam Nagar coordinates */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-rose-gold/20 shadow-inner bg-cream-white">
                <iframe
                  title="The Nail Story by Madhu Google Maps Location"
                  src="https://maps.google.com/maps?q=D-59,+Arya+Samaj+Road,+Near+Grover+Sweets,+Block+C,+Uttam+Nagar,+New+Delhi,+Delhi+110059&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Transit & Landmark Guide */}
              <div className="mt-4 pt-4 border-t border-rose-gold/15 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-dark-brown/70 font-sans">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-gold flex-shrink-0" />
                  <span><strong>Landmark:</strong> Near Grover Sweets, Arya Samaj Road</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-gold flex-shrink-0" />
                  <span><strong>Nearest Metro:</strong> Uttam Nagar East / West (Blue Line)</span>
                </div>
              </div>

            </div>

            {/* Quick Consultation Banner */}
            <div className="bg-gradient-to-r from-soft-blush via-nude-pink to-soft-blush rounded-3xl p-6 border border-rose-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="font-serif text-base sm:text-lg font-semibold text-dark-brown">
                  Visiting for the first time?
                </h5>
                <p className="text-xs text-dark-brown/75 font-light">
                  Our artists will guide you through nail care, shapes, extensions, and nail designs tailored to your hand structure.
                </p>
              </div>
              <a
                href="#booking"
                className="bg-rose-gradient text-white px-5 py-2.5 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold shadow-luxury flex-shrink-0"
              >
                Plan Your Visit
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
