/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Sparkles, Utensils, Award } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-bakery-warm-white relative overflow-hidden">
      {/* Subtle organic background patterns */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-bakery-clay/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-bakery-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Interactive-looking Image Composition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Main Photo - Sourdough cut open */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square">
                <img
                  src={IMAGES.sourdough}
                  alt="Traditional Sourdough Bread slicing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Card 1: Handcrafted Badge */}
              <div className="absolute -top-6 -right-6 bg-bakery-chocolate text-bakery-cream p-4 rounded-2xl shadow-xl border border-bakery-gold/30 max-w-[160px] animate-bounce duration-[4s]">
                <span className="font-serif text-3xl font-bold text-bakery-gold block text-center">100%</span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-center block text-bakery-clay/80 mt-1">
                  Handcrafted Recipes
                </span>
              </div>

              {/* Float Card 2: Baker's Signature */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-bakery-clay/50 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-bakery-gold/20 flex items-center justify-center text-bakery-chocolate">
                  <Heart className="w-5 h-5 fill-bakery-gold text-bakery-gold" />
                </div>
                <div>
                  <span className="text-xs text-bakery-brown-light uppercase tracking-widest font-bold block">Signature</span>
                  <span className="font-serif font-bold text-sm text-bakery-chocolate block">Baked with Passion</span>
                </div>
              </div>
            </div>

            {/* Subtext description below image */}
            <p className="text-xs text-center text-bakery-brown-light/80 italic">
              "Baking is a conversation between grain, water, yeast, and flame."
            </p>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-bakery-gold font-semibold tracking-wider text-sm uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Our Story & Mission</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bakery-chocolate tracking-tight">
                About Chow Box
              </h2>
              <div className="w-20 h-1 bg-bakery-gold rounded-full" />
            </div>

            <p className="text-lg text-bakery-brown-dark font-light leading-relaxed">
              At Chow Box, baking is our passion. We create fresh breads, handcrafted pastries, delicious cakes, and premium desserts every day using high-quality ingredients. Whether you're looking for breakfast, a sweet treat, or a custom celebration cake, Chow Box is your destination for fresh bakery delights.
            </p>

            <p className="text-base text-bakery-brown-dark/85 leading-relaxed">
              We started with a simple belief: that everyone deserves to experience the comfort of real bread, baked with long fermentation and natural yeasts, and sweet treats crafted with authentic chocolates and pure dairy. No chemical additives, no mass-production compromises—just wholesome flour, sweet butter, and true human craft.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 border border-bakery-clay/30">
                <div className="p-3 bg-bakery-gold/10 rounded-xl text-bakery-gold shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-bakery-chocolate text-base">Purest Ingredients</h4>
                  <p className="text-xs text-bakery-brown-light mt-1">
                    Organic, stone-ground flours, premium Normandy butter, and seasonal local berries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 border border-bakery-clay/30">
                <div className="p-3 bg-bakery-gold/10 rounded-xl text-bakery-gold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-bakery-chocolate text-base">Master Bakers</h4>
                  <p className="text-xs text-bakery-brown-light mt-1">
                    Decades of combined technique in European Viennoiserie and sourdough baking.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
