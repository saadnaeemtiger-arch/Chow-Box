/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Award,
  Heart,
  Banknote,
  Smile,
  ShieldCheck,
  Cake,
  Zap,
  PhoneCall,
  ChevronUp
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import CakeCustomizer from './components/CakeCustomizer';
import SpecialOffers from './components/SpecialOffers';
import CustomerReviews from './components/CustomerReviews';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import { MenuItem, CartItem } from './types';
import { WHY_CHOOSE_US, CONTACT_INFO } from './data';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show Back to Top button
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  // Cart operations
  const handleAddToCart = (menuItem: MenuItem, option?: string) => {
    setCart((prevCart) => {
      // Find if item already exists in cart with same option
      const existingIdx = prevCart.findIndex(
        (item) => item.menuItem.id === menuItem.id && item.selectedOption === option
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { menuItem, quantity: 1, selectedOption: option }];
      }
    });

    // Auto-open shopping bag to give visual delight
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (idx: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(idx);
      return;
    }
    setCart((prevCart) => {
      const updated = [...prevCart];
      updated[idx].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveItem = (idx: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== idx));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToSection = (selector: string) => {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      const offset = 80; // height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenCustomizerDirectly = () => {
    setIsCustomizerOpen(true);
    handleScrollToSection('#customizer');
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Map icon names to real Lucide icon components
  const renderFeatureIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-bakery-chocolate' };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Award':
        return <Award {...props} />;
      case 'Heart':
        return <Heart {...props} />;
      case 'Banknote':
        return <Banknote {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Cake':
        return <Cake {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-bakery-cream font-sans relative">
      {/* 1. Header Navigation */}
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />

      {/* 2. Hero Presentation */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* 3. Story / About Segment */}
      <About />

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden border-y border-bakery-clay/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 text-bakery-gold text-sm font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Uncompromising Quality standards</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bakery-chocolate tracking-tight">
              Why Choose Chow Box
            </h2>
            <div className="w-20 h-1 bg-bakery-gold mx-auto rounded-full" />
            <p className="text-sm text-bakery-brown-light font-light leading-relaxed">
              We cultivate beautiful breakfast tables and celebration milestones with strict ingredient parameters, slow fermentations, and deep care.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((feat) => (
              <div
                key={feat.id}
                className="p-6 rounded-2xl border border-bakery-clay/35 hover:border-bakery-gold/40 bg-bakery-cream/30 hover:bg-bakery-cream/75 transition-all duration-300 space-y-4 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-bakery-gold/25 flex items-center justify-center">
                  {renderFeatureIcon(feat.icon)}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-lg text-bakery-chocolate">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-bakery-brown-dark/80 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Menu Section */}
      <Menu onAddToCart={handleAddToCart} onOpenCustomizer={handleOpenCustomizerDirectly} />

      {/* 6. Special Offers Panel */}
      <SpecialOffers onApplyPromo={(code) => setAppliedPromo(code)} />

      {/* 7. Interactive Custom Cake Studio */}
      <CakeCustomizer onAddToCart={handleAddToCart} onClose={() => setIsCustomizerOpen(false)} />

      {/* 8. Testimonials Deck */}
      <CustomerReviews />

      {/* 9. Lightbox Photo Gallery */}
      <Gallery />

      {/* 10. Call-To-Action Ribbon */}
      <section className="py-20 bg-gradient-to-r from-bakery-chocolate to-bakery-brown-dark text-white text-center relative overflow-hidden border-y border-bakery-gold/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/chow_box_hero_1782623619710.jpg"
            alt="Warm baking backdrop"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Freshly Baked Goodness Is Waiting for You
          </h2>
          <p className="text-sm sm:text-base text-bakery-clay max-w-xl mx-auto font-light leading-relaxed">
            Reserve your morning loaves, design your dream celebration cake, or coordinate bulk pastry treats in real-time. We bake happiness every day.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleScrollToSection('#menu')}
              className="px-8 py-4 rounded-xl bg-bakery-gold hover:bg-bakery-gold-dark text-bakery-chocolate font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-xl hover:scale-105"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* 11. Contact Block + Maps */}
      <ContactSection />

      {/* 12. Footer block */}
      <Footer />

      {/* 13. Shopping Bag Slide-over */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        appliedPromo={appliedPromo}
        onApplyPromo={(code) => setAppliedPromo(code)}
      />

      {/* 14. Floating WhatsApp Chat Icon */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Chow%20Box%20Bakery!%20I'd%20love%20to%20inquire%20about%20your%20freshly%20baked%20delights.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <PhoneCall className="w-6 h-6 animate-[pulse_2s_infinite]" />
        {/* Unread dot notification bubble */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 animate-ping border border-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border border-white" />
      </a>

      {/* 15. Back to Top float button */}
      {showScrollTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-24 right-6 z-30 p-3.5 bg-bakery-chocolate text-bakery-cream hover:bg-bakery-gold hover:text-bakery-chocolate rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ChevronUp className="w-4.5 h-4.5" />
        </button>
      )}
    </div>
  );
}
