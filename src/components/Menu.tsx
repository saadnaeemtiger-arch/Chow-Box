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
    <section id="menu" className="py-24 bg-bakery-cream scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-bakery-gold text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Discover Our Creations</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bakery-chocolate tracking-tight">
            Our Bakery Menu
          </h2>
          <div className="w-20 h-1 bg-bakery-gold mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-bakery-brown-light font-light">
            Every product is freshly kneaded, layered, and baked on-site with fine organic flours and pure dairy. Choose from our daily fresh delights.
          </p>
        </div>

        {/* Search & Filtering Toolbars */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="max-w-lg mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-bakery-brown-light/60">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search croissants, tarts, sourdough..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-bakery-clay bg-white focus:outline-none focus:ring-2 focus:ring-bakery-gold focus:border-transparent text-sm text-bakery-chocolate shadow-sm placeholder:text-bakery-brown-light/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-bakery-brown-light hover:text-bakery-chocolate"
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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-bakery-chocolate text-bakery-cream shadow-md'
                    : 'bg-white text-bakery-brown-dark hover:bg-bakery-clay/35 border border-bakery-clay/50'
                }`}
              >
                All Items
              </button>
              {/* Category buttons */}
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-bakery-chocolate text-bakery-cream shadow-md'
                      : 'bg-white text-bakery-brown-dark hover:bg-bakery-clay/35 border border-bakery-clay/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Cake Prompt Banner */}
        <div className="mb-12 bg-gradient-to-r from-bakery-brown-dark to-bakery-chocolate p-8 rounded-2xl shadow-xl border border-bakery-gold/20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-bakery-gold/10 border border-bakery-gold/20 text-bakery-gold px-3 py-1 rounded-full text-xs font-medium">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Interactive Designer</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-bakery-cream">
              Planning a Special Occasion?
            </h3>
            <p className="text-xs sm:text-sm text-bakery-clay/80 max-w-xl">
              Design your own personalized birthday or celebration cake in real-time with our 3D-styled interactive customizer. Select sponge layers, frosting patterns, fresh toppings, and write custom messages.
            </p>
          </div>
          <button
            onClick={onOpenCustomizer}
            className="px-6 py-3 rounded-xl bg-bakery-gold text-bakery-chocolate font-bold tracking-wide text-xs uppercase hover:bg-bakery-gold-dark hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Design Custom Cake
          </button>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-bakery-clay/30 hover:border-bakery-gold/30 transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="relative aspect-video overflow-hidden bg-bakery-warm-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    {item.isBestSeller && (
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-bakery-gold text-bakery-chocolate">
                        Best Seller
                      </span>
                    )}
                    {item.isVegan && (
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-green-600 text-white flex items-center space-x-1">
                        <Leaf className="w-2.5 h-2.5" />
                        <span>Vegan</span>
                      </span>
                    )}
                    {item.isGlutenFree && (
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-amber-600 text-white">
                        Gluten Free
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-bakery-brown-light">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-bakery-chocolate group-hover:text-bakery-brown-light transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-bakery-brown-dark/75 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer buy action */}
                  <div className="flex items-center justify-between pt-6 border-t border-bakery-clay/20 mt-4">
                    <span className="font-mono text-lg font-bold text-bakery-chocolate">
                      ${item.price.toFixed(2)}
                    </span>

                    {item.category === 'Cakes' && item.id === 'ca1' ? (
                      <button
                        onClick={onOpenCustomizer}
                        className="px-4 py-2 rounded-lg border border-bakery-gold bg-bakery-gold/10 text-bakery-gold-dark hover:bg-bakery-gold hover:text-bakery-chocolate text-xs font-bold uppercase tracking-wider transition-all duration-300"
                      >
                        Customize
                      </button>
                    ) : (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="px-4 py-2 rounded-lg bg-bakery-chocolate text-bakery-cream hover:bg-bakery-gold hover:text-bakery-chocolate text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all duration-300"
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
          <div className="text-center py-16 bg-white rounded-2xl border border-bakery-clay/40 max-w-lg mx-auto p-8 space-y-3">
            <ShieldAlert className="w-10 h-10 text-bakery-gold mx-auto" />
            <h3 className="font-serif text-lg font-bold text-bakery-chocolate">No Products Found</h3>
            <p className="text-xs text-bakery-brown-light leading-relaxed">
              We couldn't find any menu items matching your search criteria. Try selecting another category or typing another keyword.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-bakery-chocolate text-white text-xs font-semibold uppercase tracking-wider"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
