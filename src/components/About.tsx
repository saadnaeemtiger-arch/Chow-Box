/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Sparkles, Utensils, Award } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#F5E6D3]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Our Heritage & Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E2723]">
            About Chow Box
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Narrative & Pillars (Col Span 7) */}
          <div className="col-span-12 lg:col-span-7 bg-white rounded-[2rem] p-8 sm:p-10 border border-[#E0D5C1] flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold block">OUR JOURNEY</span>
              <h3 className="font-serif text-2xl font-bold text-[#3E2723]">Baked with Deep Passion</h3>
              <p className="text-sm sm:text-base text-[#5D4037] leading-relaxed font-light">
                At Chow Box, baking is our lifelong conversation. We start with a simple belief: that everyone deserves to experience the absolute comfort of real bread, baked with long slow fermentation, natural starters, and authentic dairy.
              </p>
              <p className="text-xs sm:text-sm text-[#8D6E63] leading-relaxed">
                We cultivate beautiful breakfast tables and holiday milestones with strict quality parameters. No chemical additives, no volume compromises—just wholesome grain, pure Normandy butter, and human heart.
              </p>
            </div>

            {/* Core Pillars Sub-Bento Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E0D5C1]/60">
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#F5E6D3]/30 border border-[#E0D5C1]/50">
                <div className="p-2.5 bg-white rounded-xl text-[#D4AF37] border border-[#E0D5C1]/40 shrink-0">
                  <Utensils className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#3E2723] text-sm">Purest Ingredients</h4>
                  <p className="text-[11px] text-[#8D6E63] mt-1 leading-relaxed">
                    Stone-ground organic flour, farm butter, and seasonal local berries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-[#F5E6D3]/30 border border-[#E0D5C1]/50">
                <div className="p-2.5 bg-white rounded-xl text-[#D4AF37] border border-[#E0D5C1]/40 shrink-0">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#3E2723] text-sm">Master Technique</h4>
                  <p className="text-[11px] text-[#8D6E63] mt-1 leading-relaxed">
                    Decades of combined skills in sourdough cultures and lamination loops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Interactive Image Block (Col Span 5) */}
          <div className="col-span-12 lg:col-span-5 bg-white rounded-[2rem] p-6 border border-[#E0D5C1] flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[380px]">
            
            {/* Sourdough Image Layer */}
            <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-square relative group border border-[#E0D5C1]/60">
              <img
                src={IMAGES.sourdough}
                alt="Chow Box fresh Sourdough bread slicing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              
              {/* Float Rating */}
              <div className="absolute bottom-4 left-4 bg-[#3E2723] text-white px-3 py-1 rounded-lg text-[10px] font-mono tracking-widest uppercase">
                CRISP CRUST
              </div>
            </div>

            {/* Float Card 1: Baker's Badge */}
            <div className="mt-4 flex items-center justify-between border-t border-[#E0D5C1]/40 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#D4AF37]">
                  <Heart className="w-4.5 h-4.5 fill-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#8D6E63] block">Our Promise</span>
                  <span className="font-serif font-bold text-xs text-[#3E2723] block">Baked with Pure Love</span>
                </div>
              </div>
              <div className="bg-[#3E2723] text-[#FDFBF7] px-3.5 py-1.5 rounded-xl text-center text-xs font-bold border border-[#D4AF37]/30 shadow-sm">
                100% Homemade
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
