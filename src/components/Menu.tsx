/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ShoppingCart, Leaf, ShieldAlert, BadgeCheck } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';

interface MenuProps {
  onAddToCart: (item: MenuItem, option?: string) => void;
  onOpenCustomizer: () => void;
}

export default function Menu({ onAddToCart, onOpenCustomizer }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtering logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#FDFBF7] scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Discover Our Creations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E2723]">
            Our Bakery Menu
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-[#8D6E63] font-light">
            Every product is freshly kneaded, laminated, and baked on-site with fine organic flour and pure dairy. Choose from our daily fresh delights.
          </p>
        </div>

        {/* Search & Filtering Toolbars */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="max-w-lg mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8D6E63]/60">
              <Search className="w-4.5 h-4.5" />
            </div>
            <input
              type="text"
              placeholder="Search croissants, tarts, sourdough..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-[#E0D5C1] bg-white focus:outline-none focus:ring-1.5 focus:ring-[#D4AF37] focus:border-transparent text-xs text-[#3E2723] shadow-sm placeholder:text-[#8D6E63]/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[10px] text-[#8D6E63] hover:text-[#3E2723]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Categories Horizontal Scroll Slider */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 overflow-x-auto pb-4 max-w-full px-2 scrollbar-none justify-start lg:justify-center">
              {/* "All" Tab */}
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-[#3E2723] text-white shadow-sm'
                    : 'bg-white text-[#3E2723] hover:bg-[#FDFBF7] border border-[#E0D5C1] hover:border-[#D4AF37]'
                }`}
              >
                All Items
              </button>
              {/* Category buttons */}
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-[#3E2723] text-white shadow-sm'
                      : 'bg-white text-[#3E2723] hover:bg-[#FDFBF7] border border-[#E0D5C1] hover:border-[#D4AF37]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Cake Prompt Banner (Styled as a large Bento Card) */}
        <div className="mb-12 bg-[#3E2723] p-8 sm:p-10 rounded-[2rem] border border-[#E0D5C1] flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 text-[#FDFBF7]">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 text-[#D4AF37] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Interactive Designer</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Planning a Special Occasion?
            </h3>
            <p className="text-xs text-[#E9DCC9]/80 max-w-xl font-light leading-relaxed">
              Design your own personalized celebration cake in real-time with our interactive customizer. Select sponge layers, frosting patterns, fresh toppings, and write custom messages.
            </p>
          </div>
          <button
            onClick={onOpenCustomizer}
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#B69124] text-white font-bold tracking-wider text-[10px] uppercase transition-all duration-300 whitespace-nowrap"
          >
            Design Custom Cake
          </button>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[2rem] overflow-hidden border border-[#E0D5C1] hover:border-[#D4AF37] transition-all duration-500 flex flex-col h-full shadow-sm"
              >
                {/* Image Wrap */}
                <div className="relative aspect-video overflow-hidden bg-[#FDFBF7] border-b border-[#E0D5C1]/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    {item.isBestSeller && (
                      <span className="px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest bg-[#D4AF37] text-white">
                        Best Seller
                      </span>
                    )}
                    {item.isVegan && (
                      <span className="px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest bg-green-600 text-white flex items-center space-x-1">
                        <Leaf className="w-2.5 h-2.5" />
                        <span>Vegan</span>
                      </span>
                    )}
                    {item.isGlutenFree && (
                      <span className="px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest bg-amber-600 text-white">
                        Gluten Free
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#8D6E63]">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#3E2723] group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#5D4037] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer buy action */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E0D5C1]/40 mt-4">
                    <span className="font-mono text-base font-bold text-[#3E2723]">
                      ${item.price.toFixed(2)}
                    </span>

                    {item.category === 'Cakes' && item.id === 'ca1' ? (
                      <button
                        onClick={onOpenCustomizer}
                        className="px-4 py-2 rounded-lg border border-[#D4AF37] bg-[#D4AF37]/10 text-[#3E2723] hover:bg-[#D4AF37] hover:text-white text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
                      >
                        Customize
                      </button>
                    ) : (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="px-4 py-2 rounded-lg bg-[#3E2723] text-[#FDFBF7] hover:bg-[#D4AF37] hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all duration-300"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E0D5C1] max-w-lg mx-auto p-8 space-y-3">
            <ShieldAlert className="w-10 h-10 text-[#D4AF37] mx-auto" />
            <h3 className="font-serif text-lg font-bold text-[#3E2723]">No Products Found</h3>
            <p className="text-xs text-[#8D6E63] leading-relaxed">
              We couldn't find any menu items matching your search criteria. Try selecting another category or typing another keyword.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#3E2723] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
