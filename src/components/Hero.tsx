/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowRight, Clock, Award, Star } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  onScrollToSection: (selector: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="home" className="pt-28 pb-10 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#F5E6D3]/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. Large Main Hero Bento Block */}
          <div className="col-span-12 lg:col-span-8 bg-[#F5E6D3] rounded-[2rem] p-8 sm:p-12 relative overflow-hidden border border-[#E0D5C1] flex flex-col justify-between min-h-[460px] sm:min-h-[520px]">
            {/* Background watermarked baking silhouette */}
            <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
              <svg width="320" height="320" viewBox="0 0 24 24" fill="#3E2723">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              {/* Subtle tag pill */}
              <div className="inline-flex items-center space-x-2 bg-white/60 border border-[#E0D5C1] text-[#3E2723] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>EST. 2026 • Hand-kneaded Daily</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#3E2723] font-serif">
                Freshly Baked <br />
                <span className="text-[#D4AF37] italic">Happiness</span> Every Day
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[#5D4037] max-w-xl leading-relaxed font-light">
                At Chow Box, we craft delicious sourdough bread, buttery croissants, and designer celebration cakes using premium natural ingredients to bring comfort to your table.
              </p>
            </div>

            {/* Action group + Stats embedded */}
            <div className="mt-8 relative z-10 space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onScrollToSection('#menu')}
                  className="bg-[#3E2723] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#5D4037] transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>View Full Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
                <button
                  onClick={() => onScrollToSection('#about')}
                  className="bg-white border-2 border-[#3E2723] text-[#3E2723] px-8 py-4 rounded-xl font-bold hover:bg-[#FDFBF7] transition-all duration-300"
                >
                  Our Story
                </button>
              </div>

              {/* Quick stats mini-row inside the main block */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E0D5C1] max-w-md">
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#3E2723] block">100%</span>
                  <span className="text-[10px] text-[#8D6E63] uppercase tracking-widest font-semibold">Organic Flour</span>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#3E2723] block">4:00 AM</span>
                  <span className="text-[10px] text-[#8D6E63] uppercase tracking-widest font-semibold">Baking Starts</span>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#3E2723] block">24+ hrs</span>
                  <span className="text-[10px] text-[#8D6E63] uppercase tracking-widest font-semibold">Fermentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Visual Showcase & Special Bento Block */}
          <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-6">
            
            {/* Upper: Cinematic Image with Floating Rating */}
            <div className="bg-white rounded-[2rem] overflow-hidden border border-[#E0D5C1] relative group h-60 lg:h-auto min-h-[220px]">
              <img
                src={IMAGES.hero}
                alt="Chow Box fresh croissants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none" />
              
              {/* Floating Star rating inside bento */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-[#E0D5C1] flex items-center space-x-1.5">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                <span className="text-xs font-bold text-[#3E2723]">4.9/5</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold block mb-1">Storefront Showcase</span>
                <h4 className="font-serif text-lg font-bold">Artisanal Sourdough & Croissants</h4>
              </div>
            </div>

            {/* Lower: Weekly Special Progress Tracker Bento Card */}
            <div className="bg-white rounded-[2rem] p-6 border border-[#E0D5C1] flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Explore Menu</span>
                  <span className="px-2 py-0.5 bg-[#F5E6D3] text-[#3E2723] rounded-md text-[9px] font-bold">LIMITED VOLUME</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3E2723]">Weekly Special Highlight</h3>
                <p className="text-xs text-[#8D6E63] leading-relaxed">
                  Our double-baked Almond Croissants with rich frangipane fill fast. Claim yours before morning sellout!
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <div className="flex justify-between items-center text-xs p-1">
                  <span className="text-[#5D4037] font-medium">Almond Croissant</span>
                  <span className="font-bold text-[#3E2723]">$4.50</span>
                </div>
                <div className="h-2 bg-[#F5E6D3] rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full w-[85%] bg-[#D4AF37] rounded-full animate-[pulse_2s_infinite]" />
                </div>
                <div className="flex justify-between items-center text-[9px] text-[#8D6E63] mt-2 px-0.5">
                  <span>85% sold out today</span>
                  <span className="font-mono font-medium">6 pieces left</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
