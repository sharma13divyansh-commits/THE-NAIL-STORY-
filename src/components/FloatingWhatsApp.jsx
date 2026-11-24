import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function FloatingWhatsApp() {
  const quickWhatsAppUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello The Nail Story by Madhu! I would like to book an appointment for nail services.'
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip on Desktop */}
      <div className="hidden sm:flex items-center gap-2 bg-white/95 text-dark-brown text-xs font-montserrat font-medium px-3.5 py-1.5 rounded-full shadow-lg border border-rose-gold/30 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Chat with us on WhatsApp</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Quick Phone Call Button (Mobile & Desktop) */}
        <a
          href={BRAND_INFO.phoneTel}
          className="w-12 h-12 rounded-full bg-white text-rose-gold border border-rose-gold/40 shadow-xl flex items-center justify-center hover:bg-rose-gold hover:text-white transition-all duration-300 transform hover:scale-110"
          title="Direct Phone Call"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={quickWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
          title="Chat with The Nail Story on WhatsApp"
          aria-label="Chat with The Nail Story on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          
          {/* Ripple Effect Ping */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10" />
        </a>
      </div>
    </aside>
  );
}
