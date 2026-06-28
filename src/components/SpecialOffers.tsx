/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Tag, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data';
import { SpecialOffer } from '../types';

interface SpecialOffersProps {
  onApplyPromo: (code: string) => void;
}

export default function SpecialOffers({ onApplyPromo }: SpecialOffersProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (e: React.MouseEvent, code: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onApplyPromo(code); // auto-apply in cart too for delightful UX!
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers" className="py-24 bg-bakery-cream relative overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-bakery-gold text-sm font-semibold uppercase tracking-wider">
            <Tag className="w-4 h-4" />
            <span>Exclusive Bakery Promotions</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bakery-chocolate tracking-tight">
            Special Offers & Deals
          </h2>
          <div className="w-20 h-1 bg-bakery-gold mx-auto rounded-full" />
          <p className="text-sm text-bakery-brown-light font-light leading-relaxed">
            Delightful combinations, weekend specials, and promo packages compiled by our chefs to make artisanal baking even sweeter. Tap to copy and auto-apply codes.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-bakery-clay/40 transition-all duration-300 flex flex-col sm:flex-row h-full group"
            >
              {/* Left Column - Image */}
              <div className="sm:w-2/5 relative min-h-[200px] sm:min-h-full bg-bakery-warm-white">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bakery-chocolate text-bakery-cream border border-bakery-gold/20 shadow-lg">
                    {offer.badge}
                  </span>
                </div>
              </div>

              {/* Right Column - Information */}
              <div className="sm:w-3/5 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold font-mono tracking-widest text-bakery-gold uppercase block">
                    {offer.discountText}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-bakery-chocolate group-hover:text-bakery-brown-light transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bakery-brown-dark/80 leading-relaxed font-light">
                    {offer.description}
                  </p>
                </div>

                {/* Promo code drawer */}
                {offer.code && (
                  <div className="pt-4 border-t border-bakery-clay/35 flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-bakery-brown-light tracking-widest block">
                        Checkout Code
                      </span>
                      <span className="font-mono text-sm font-extrabold text-bakery-chocolate block tracking-wider">
                        {offer.code}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleCopyCode(e, offer.code || '')}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all duration-300 ${
                        copiedCode === offer.code
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-bakery-cream text-bakery-chocolate hover:bg-bakery-chocolate hover:text-white border border-bakery-clay/50'
                      }`}
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic banner regarding checkout helper */}
        <div className="mt-12 text-center flex items-center justify-center space-x-2 text-xs text-bakery-brown-light bg-bakery-warm-white p-4 rounded-xl border border-bakery-clay/30 max-w-lg mx-auto">
          <AlertCircle className="w-4 h-4 text-bakery-gold shrink-0 animate-pulse" />
          <span>Copying any code will automatically load it into your Shopping Bag subtotal!</span>
        </div>

      </div>
    </section>
  );
}
