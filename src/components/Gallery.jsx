import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS, BRAND_INFO } from '../data/salonData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Designs' },
    { id: 'creative', label: 'Creative Nail Art' },
    { id: 'acrylic', label: 'Acrylic & Coffin' },
    { id: 'bridal', label: 'Bridal & Glam' },
    { id: 'french', label: 'French & Nude' },
    { id: 'gel', label: 'Gel & Natural' },
    { id: 'stiletto', label: 'Stiletto & Bold' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.filter === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleEnquireArt = (title) => {
    const text = encodeURIComponent(
      `Hello The Nail Story by Madhu! I saw your nail design "${title}" in your website gallery and would love to get a similar design done. Are you available for appointments?`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-soft-blush/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-nude-pink/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-soft-blush border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
            <span>Our Nail Art Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal mb-4">
            Every Nail Has A <span className="italic rose-gold-text">Story.</span>
          </h2>

          <p className="font-sans text-dark-brown/75 text-base sm:text-lg font-light leading-relaxed">
            Explore our creativity, artistry, and beautiful nail transformations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-rose-gradient text-white shadow-luxury'
                  : 'bg-cream-white text-dark-brown/80 hover:text-rose-gold border border-rose-gold/25 hover:border-rose-gold/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Editorial / Masonry Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-cream-white shadow-soft hover:shadow-luxury-hover border border-rose-gold/20 cursor-pointer transform hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Studio Signature Badge for Real Client Work */}
                {item.isActualClientWork && (
                  <div className="absolute top-3 left-3 bg-dark-brown/85 backdrop-blur-md text-champagne text-[10px] font-montserrat uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-rose-gold/40 flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3 text-rose-gold-light" />
                    <span>Studio Original</span>
                  </div>
                )}

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/90 via-dark-brown/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-montserrat uppercase tracking-widest text-champagne block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-medium leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 font-light mb-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-xs font-montserrat text-champagne">
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5" />
                        Click to view
                      </span>
                      <span className="text-rose-gold-light font-semibold">
                        The Nail Story
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="p-3.5 bg-white border-t border-rose-gold/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif text-dark-brown truncate font-medium">
                    {item.title}
                  </span>
                  <span className="text-[10px] uppercase font-montserrat tracking-wider text-rose-gold font-semibold ml-2 flex-shrink-0">
                    {item.category.split(' ')[0]}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-dark-brown/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-cream-white hover:text-rose-gold p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-cream-white hover:text-rose-gold p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-cream-white hover:text-rose-gold p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-rose-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="md:w-3/5 bg-dark-brown flex items-center justify-center max-h-[50vh] md:max-h-[80vh] overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Info Side */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-cream-white">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-montserrat uppercase tracking-wider bg-rose-gold/20 text-rose-gold-dark font-semibold px-2.5 py-1 rounded-full">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  {filteredItems[lightboxIndex].isActualClientWork && (
                    <span className="text-[11px] font-montserrat uppercase tracking-wider bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded-full">
                      Studio Work
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-dark-brown font-normal mb-3">
                  {filteredItems[lightboxIndex].title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-dark-brown/75 leading-relaxed font-light mb-6">
                  {filteredItems[lightboxIndex].description}
                </p>

                <div className="bg-white/80 rounded-xl p-3.5 border border-rose-gold/20 mb-6 text-xs text-dark-brown/70 space-y-1.5">
                  <p><strong>Studio:</strong> The Nail Story by madhu</p>
                  <p><strong>Location:</strong> Uttam Nagar, New Delhi</p>
                  <p><strong>Customization:</strong> Length, shape, color & charm custom options available.</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-rose-gold/20">
                <button
                  type="button"
                  onClick={() => handleEnquireArt(filteredItems[lightboxIndex].title)}
                  className="w-full bg-rose-gradient hover:bg-rose-gradient-hover text-white py-3 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold shadow-luxury flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Enquire This Design on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="w-full text-center text-xs font-montserrat uppercase tracking-wider text-dark-brown/60 hover:text-dark-brown font-medium py-1"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
