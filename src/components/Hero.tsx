/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  onScrollToSection: (selector: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Freshly baked artisan bread and croissants in Chow Box bakery"
          className="w-full h-full object-cover scale-105 animate-[pulse_8s_infinite_alternate] brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        {/* Elegant overlay to enhance text readability with a gold-chocolate warm tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-bakery-chocolate/95 via-bakery-chocolate/75 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-bakery-cream via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full pt-16">
        <div className="max-w-3xl">
          {/* Subtle Accent Pill */}
          <div className="inline-flex items-center space-x-2 bg-bakery-gold/20 border border-bakery-gold/40 text-bakery-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EST. 2026 • Artisanal & Fresh</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-bakery-cream tracking-tight leading-tight mb-6">
            Freshly Baked <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bakery-gold via-bakery-clay to-bakery-gold animate-gradient">
              Happiness
            </span>
            , Every Day
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-bakery-warm-white/90 font-light leading-relaxed mb-10 max-w-2xl">
            At Chow Box, we craft delicious breads, pastries, cakes, and desserts using the finest ingredients to bring you fresh flavors every single day.
          </p>

          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <button
              onClick={() => onScrollToSection('#menu')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-bakery-gold text-bakery-chocolate font-bold tracking-wide text-sm uppercase shadow-lg hover:bg-bakery-gold-dark hover:scale-[1.03] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onScrollToSection('#offers')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold tracking-wide text-sm uppercase border border-white/25 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            >
              Order Now
            </button>
          </div>

          {/* Micro Stats Banner */}
          <div className="mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl text-left">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-bakery-gold block">100%</span>
              <span className="text-xs text-bakery-warm-white/60 uppercase tracking-widest font-medium">Natural</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-bakery-gold block">4:00 AM</span>
              <span className="text-xs text-bakery-warm-white/60 uppercase tracking-widest font-medium">Fresh Baked</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-bakery-gold block">25+</span>
              <span className="text-xs text-bakery-warm-white/60 uppercase tracking-widest font-medium">Recipes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Warm Wave Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full z-10 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full text-bakery-cream translate-y-[2px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
