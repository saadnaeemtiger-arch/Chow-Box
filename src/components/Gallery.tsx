/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, X, ChevronRight, ChevronLeft, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'bread' | 'pastry' | 'cake' | 'donut' | 'coffee' | 'interior'>('all');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  // Filter gallery items
  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const nextIdx = (selectedImageIdx + 1) % filteredGallery.length;
    setSelectedImageIdx(nextIdx);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const prevIdx = (selectedImageIdx - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedImageIdx(prevIdx);
  };

  const tabs: { label: string; value: typeof activeTab }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Artisan Bread', value: 'bread' },
    { label: 'Croissants & Pastry', value: 'pastry' },
    { label: 'Cakes', value: 'cake' },
    { label: 'Donuts', value: 'donut' },
    { label: 'Espresso', value: 'coffee' },
    { label: 'Interior Cafe', value: 'interior' },
  ];

  return (
    <section id="gallery" className="py-24 bg-bakery-cream scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-bakery-gold text-sm font-semibold uppercase tracking-wider">
            <ImageIcon className="w-4 h-4" />
            <span>Visual Tour of Chow Box</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bakery-chocolate tracking-tight">
            Our Bakery Gallery
          </h2>
          <div className="w-20 h-1 bg-bakery-gold mx-auto rounded-full" />
          <p className="text-sm text-bakery-brown-light font-light leading-relaxed">
            Feast your eyes on the daily baking processes, freshly baked artisan sourdough crusts, and warm luxury cafe displays.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 max-w-full px-2 scrollbar-none justify-start lg:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  setSelectedImageIdx(null); // reset selected
                }}
                className={`px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.value
                    ? 'bg-bakery-chocolate text-bakery-cream shadow'
                    : 'bg-white text-bakery-brown-dark hover:bg-bakery-clay/30 border border-bakery-clay/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIdx(index)}
              className="group relative rounded-2xl overflow-hidden aspect-square sm:aspect-video lg:aspect-square bg-bakery-warm-white border border-bakery-clay/35 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image thumbnail */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-chocolate/95 via-bakery-chocolate/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Hover Zoom and Title Details */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <div className="flex items-center space-x-2 text-bakery-gold text-[10px] font-bold uppercase tracking-widest mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{item.category}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-white leading-tight">
                  {item.title}
                </h3>
                <div className="mt-3 inline-flex items-center space-x-1 text-xs text-bakery-clay font-medium uppercase tracking-wider">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIdx !== null && filteredGallery[selectedImageIdx] && (
          <div
            className="fixed inset-0 z-50 bg-bakery-chocolate/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImageIdx(null)}
          >
            {/* Close action */}
            <button
              onClick={() => setSelectedImageIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 transition-all duration-200 z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Image action */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 transition-all duration-200 z-40"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Central Media Card */}
            <div
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center space-y-4 text-center z-30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/40 flex items-center justify-center">
                <img
                  src={filteredGallery[selectedImageIdx].image}
                  alt={filteredGallery[selectedImageIdx].title}
                  className="max-w-full max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1 select-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-bakery-gold">
                  {filteredGallery[selectedImageIdx].category}
                </span>
                <h3 className="font-serif text-lg text-bakery-cream font-bold">
                  {filteredGallery[selectedImageIdx].title}
                </h3>
              </div>
            </div>

            {/* Next Image action */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:scale-105 transition-all duration-200 z-40"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
