/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Instagram, Facebook, Twitter, MapPin, Phone, Coffee, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-bakery-chocolate text-bakery-cream pt-20 pb-10 border-t border-bakery-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand details col (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-bakery-gold flex items-center justify-center text-bakery-chocolate">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl tracking-wide text-white block">Chow Box</span>
                <span className="text-[10px] tracking-widest text-bakery-gold uppercase block font-medium">Artisanal Bakery</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-bakery-clay/80 leading-relaxed font-light">
              Crafting warm, delicious sourdough, gold laminated viennoiserie, custom designer celebration cakes, and rich espresso blends for our community with love.
            </p>

            {/* Social media handles */}
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 hover:bg-bakery-gold hover:text-bakery-chocolate rounded-xl transition-all duration-300 text-bakery-clay" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 hover:bg-bakery-gold hover:text-bakery-chocolate rounded-xl transition-all duration-300 text-bakery-clay" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.socials.twitter} target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 hover:bg-bakery-gold hover:text-bakery-chocolate rounded-xl transition-all duration-300 text-bakery-clay" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links col (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-bakery-gold">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-bakery-clay/80 hover:text-bakery-gold transition-colors py-1">Home Page</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-bakery-clay/80 hover:text-bakery-gold transition-colors py-1">About Our Story</a>
              <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="text-bakery-clay/80 hover:text-bakery-gold transition-colors py-1">Gourmet Menu</a>
              <a href="#offers" onClick={(e) => handleLinkClick(e, '#offers')} className="text-bakery-clay/80 hover:text-bakery-gold transition-colors py-1">Special Offers</a>
              <a href="#customizer" onClick={(e) => handleLinkClick(e, '#customizer')} className="text-bakery-clay/80 hover:text-bakery-gold transition-colors py-1">Custom Cake Studio</a>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="text-bakery-clay/80 hover:text-bakery-gold transition-colors py-1">Photo Gallery</a>
            </div>
          </div>

          {/* Contact Details col (2 cols) */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-serif text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-bakery-gold">
              Inquiries
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start space-x-2 text-bakery-clay/85">
                <MapPin className="w-4 h-4 text-bakery-gold shrink-0 mt-0.5" />
                <span>128 Gourmet Blvd, Culinary District</span>
              </div>
              <div className="flex items-start space-x-2 text-bakery-clay/85">
                <Phone className="w-4 h-4 text-bakery-gold shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-start space-x-2 text-bakery-clay/85">
                <Mail className="w-4 h-4 text-bakery-gold shrink-0 mt-0.5" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-lg font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-bakery-gold">
              Newsletter
            </h4>
            <p className="text-xs text-bakery-clay/80 leading-relaxed font-light">
              Subscribe to receive morning recipe disclosures, secret weekend discounts, and first looks at seasonal cupcake menus.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-bakery-gold transition-colors pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-bakery-gold text-bakery-chocolate hover:bg-white rounded-lg transition-all"
                  aria-label="Subscribe"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              {success && (
                <div className="text-[10px] text-green-400 font-semibold flex items-center space-x-1.5 bg-green-950/40 p-2 rounded-lg border border-green-900 animate-pulse">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed Successfully! Enjoy baking perks.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-bakery-clay/55 font-light gap-4">
          <span>© 2026 Chow Box. All Rights Reserved.</span>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-bakery-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-bakery-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
