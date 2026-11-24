import React from 'react';
import { Sparkles, ExternalLink, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { BRAND_INFO } from '../data/salonData';

export default function SocialMedia() {
  const instagramFeed = [
    {
      image: '/assets/client-work-1.jpg',
      title: 'Tortoiseshell & Burgundy Gold Stars',
      tag: '#nailsofinstagram'
    },
    {
      image: '/assets/client-work-2.jpg',
      title: 'Royal Blue Coffin with Evil-Eye Accent',
      tag: '#acrylicnails'
    },
    {
      image: '/assets/client-work-3.jpg',
      title: 'Crystal Glam & Heart French Design',
      tag: '#nailartlover'
    },
    {
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      title: 'Baby Boomer Nude & French Ombré',
      tag: '#nailtransformation'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-soft-blush border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
            <span>Connect & Inspire</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal mb-4">
            Follow Our <span className="italic rose-gold-text">Beauty Journey</span>
          </h2>

          <p className="font-sans text-dark-brown/75 text-base sm:text-lg font-light leading-relaxed">
            Stay inspired by our latest nail art, creative designs, and beautiful transformations.
          </p>
        </div>

        {/* Social Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          
          {/* Instagram Channel Card */}
          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#FFF5F6] via-white to-[#FDEBEC] border border-rose-gold/30 hover:border-rose-gold shadow-soft hover:shadow-luxury transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <InstagramIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-montserrat uppercase tracking-wider text-rose-gold font-semibold block">
                  Official Instagram
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-dark-brown group-hover:text-rose-gold transition-colors">
                  @the_nail_story_by_madhu
                </h3>
                <p className="text-xs text-dark-brown/60 mt-0.5">
                  Reels, Daily Transformations & Stories
                </p>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-nude-pink/60 flex items-center justify-center text-rose-gold group-hover:bg-rose-gold group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* YouTube Channel Card */}
          <a
            href={BRAND_INFO.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#FFF7F7] via-white to-[#FEECEC] border border-rose-gold/30 hover:border-rose-gold shadow-soft hover:shadow-luxury transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FF0000] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <YoutubeIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-montserrat uppercase tracking-wider text-rose-gold font-semibold block">
                  Official YouTube
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-dark-brown group-hover:text-rose-gold transition-colors">
                  The Nail Story by madhu
                </h3>
                <p className="text-xs text-dark-brown/60 mt-0.5">
                  Watch full tutorials, courses & artistry
                </p>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-nude-pink/60 flex items-center justify-center text-rose-gold group-hover:bg-rose-gold group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

        </div>

        {/* Instagram Visual Grid */}
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-montserrat uppercase tracking-wider font-semibold text-dark-brown/70 flex items-center gap-1.5">
              <InstagramIcon className="w-4 h-4 text-rose-gold" />
              Studio Feed Highlights
            </span>
            <a
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-montserrat text-rose-gold hover:text-rose-gold-dark font-semibold uppercase tracking-wider"
            >
              View on Instagram →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {instagramFeed.map((item, idx) => (
              <a
                key={idx}
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-soft border border-rose-gold/20 block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-dark-brown/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                  <InstagramIcon className="w-7 h-7 text-champagne mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform" />
                  <p className="font-serif text-xs font-medium line-clamp-2 mb-1">
                    {item.title}
                  </p>
                  <span className="text-[10px] font-montserrat text-rose-gold-light uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
