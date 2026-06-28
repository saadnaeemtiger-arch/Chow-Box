/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Clock, Coffee } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

export default function Navbar({ cart, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  // Calculate if bakery is open based on 2026 current time
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeInMinutes = hours * 60 + minutes;
      const day = now.getDay(); // 0 is Sunday, 1-5 is Mon-Fri, 6 is Sat

      let isOpen = false;
      if (day >= 1 && day <= 5) {
        // Mon-Fri: 6:30 AM - 7:30 PM (390 mins to 1170 mins)
        isOpen = timeInMinutes >= 390 && timeInMinutes <= 1170;
      } else if (day === 6) {
        // Sat: 7:00 AM - 8:00 PM (420 mins to 1200 mins)
        isOpen = timeInMinutes >= 420 && timeInMinutes <= 1200;
      } else {
        // Sun: 7:30 AM - 5:00 PM (450 mins to 1020 mins)
        isOpen = timeInMinutes >= 450 && timeInMinutes <= 1020;
      }
      setIsOpenNow(isOpen);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Offers', href: '#offers' },
    { label: 'Custom Cakes', href: '#customizer' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
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

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bakery-cream/95 backdrop-blur-md shadow-md py-3 border-b border-bakery-clay/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-bakery-chocolate flex items-center justify-center text-bakery-gold group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-2xl tracking-wide text-bakery-chocolate block leading-none">
                Chow Box
              </span>
              <span className="text-[10px] tracking-widest text-bakery-brown-light uppercase block font-medium mt-1">
                Artisanal Bakery
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 uppercase hover:text-bakery-gold ${
                  isScrolled ? 'text-bakery-chocolate' : 'text-bakery-chocolate/90 lg:text-bakery-cream'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Widgets */}
          <div className="flex items-center space-x-4">
            {/* Open Hours Status Banner for Desktop */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full border border-bakery-clay/50 text-xs font-semibold">
              <Clock className={`w-3.5 h-3.5 ${isOpenNow ? 'text-green-600 animate-pulse' : 'text-amber-600'}`} />
              <span className={isOpenNow ? 'text-green-800' : 'text-amber-800'}>
                {isOpenNow ? 'Open Now' : 'Closed'}
              </span>
            </div>

            {/* Shopping Bag Button */}
            <button
              id="btn-cart-toggle"
              onClick={onOpenCart}
              className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-bakery-chocolate text-bakery-cream hover:bg-bakery-brown-dark'
                  : 'bg-bakery-cream lg:bg-white text-bakery-chocolate hover:shadow-lg'
              }`}
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-bakery-gold text-bakery-chocolate text-[10px] font-bold flex items-center justify-center animate-bounce">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled ? 'text-bakery-chocolate' : 'text-bakery-chocolate lg:text-bakery-cream'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bakery-cream border-b border-bakery-clay/40 shadow-xl py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-semibold text-bakery-chocolate hover:text-bakery-gold transition-colors py-2 uppercase tracking-wider border-b border-bakery-clay/10"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex items-center justify-between text-sm">
            <span className="text-bakery-brown-light font-medium">Bakery Status Today</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${isOpenNow ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
              {isOpenNow ? 'Open Now' : 'Closed'}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
