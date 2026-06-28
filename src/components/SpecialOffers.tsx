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
    <section id="offers" className="py-20 bg-[#FDFBF7] relative overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Tag className="w-4 h-4" />
            <span>Exclusive Bakery Promotions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E2723]">
            Special Offers & Deals
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-[#8D6E63] font-light leading-relaxed">
            Delightful combinations, weekend specials, and promo packages compiled by our chefs to make artisanal baking even sweeter. Tap to copy and auto-apply codes.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#E0D5C1] hover:border-[#D4AF37] transition-all duration-300 flex flex-col sm:flex-row h-full group shadow-sm"
            >
              {/* Left Column - Image */}
              <div className="sm:w-2/5 relative min-h-[200px] sm:min-h-full bg-[#FDFBF7] border-r border-[#E0D5C1]/40">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-wider bg-[#3E2723] text-white border border-[#D4AF37]/20 shadow-sm">
                    {offer.badge}
                  </span>
                </div>
              </div>

              {/* Right Column - Information */}
              <div className="sm:w-3/5 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-[#D4AF37] uppercase block">
                    {offer.discountText}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#3E2723] group-hover:text-[#D4AF37] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#5D4037] leading-relaxed font-light">
                    {offer.description}
                  </p>
                </div>

                {/* Promo code drawer */}
                {offer.code && (
                  <div className="pt-4 border-t border-[#E0D5C1]/50 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[9px] uppercase font-bold text-[#8D6E63] tracking-wider block">
                        Checkout Code
                      </span>
                      <span className="font-mono text-sm font-extrabold text-[#3E2723] block tracking-wider">
                        {offer.code}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleCopyCode(e, offer.code || '')}
                      className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all duration-300 ${
                        copiedCode === offer.code
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-[#FDFBF7] text-[#3E2723] hover:bg-[#3E2723] hover:text-white border border-[#E0D5C1]'
                      }`}
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="w-3 h-3 text-green-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
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
        <div className="mt-10 text-center flex items-center justify-center space-x-2 text-[11px] text-[#8D6E63] bg-[#F5E6D3]/40 p-4 rounded-xl border border-[#E0D5C1] max-w-md mx-auto">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 animate-pulse" />
          <span>Copying any code will automatically load it into your Shopping Bag subtotal!</span>
        </div>

      </div>
    </section>
  );
}
