/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sparkles, ShoppingBag, Eye, Heart, HelpCircle, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface CakeCustomizerProps {
  onAddToCart: (item: MenuItem, option?: string) => void;
  onClose: () => void;
}

const SPONGES = [
  { id: 'cocoa', name: 'Decadent Dark Cocoa', color: '#3A1E0E', text: 'Rich 70% dark Belgian cocoa base', price: 0 },
  { id: 'velvet', name: 'Velvety Red Velvet', color: '#7E191B', text: 'Classic soft cocoa buttermilk sponge', price: 2.50 },
  { id: 'vanilla', name: 'Vanilla Bean Chiffon', color: '#EADBB6', text: 'Light sponge infused with Madagascar vanilla', price: 0 },
  { id: 'lemon', name: 'Lavender Lemon Zest', color: '#EADA8A', text: 'Citrusy zest sponge infused with lavender buds', price: 1.50 },
];

const FILLINGS = [
  { id: 'ganache', name: 'Dark Chocolate Ganache', color: '#2B140A', text: 'Fudge-like 70% dark whipped cream', price: 0 },
  { id: 'caramel', name: 'Salted Butter Caramel', color: '#C2833F', text: 'House-cooked slow buttery caramel', price: 1.50 },
  { id: 'raspberry', name: 'Wild Raspberry Coulis', color: '#9E2A2B', text: 'Tart, fresh organic raspberry reduction', price: 2.00 },
  { id: 'white-choc', name: 'White Chocolate Mousse', color: '#F7EDDC', text: 'Airy whipped white chocolate clouds', price: 1.00 },
];

const FROSTINGS = [
  { id: 'smooth', name: 'Classic Smooth Cream', color: '#FDFBF9', border: 'border-double', price: 0 },
  { id: 'naked', name: 'Rustic Semi-Naked', color: '#EBDCC2', border: 'border-dashed', price: -2.00 },
  { id: 'rosette', name: 'Piped Buttercream Rosettes', color: '#F4E3D7', border: 'border-dotted', price: 3.50 },
];

const TOPPINGS = [
  { id: 'berries', name: 'Fresh Forest Berries', icon: '🍓', price: 3.00 },
  { id: 'gold', name: 'Edible Gold Leaf Flakes', icon: '✨', price: 5.00 },
  { id: 'pistachio', name: 'Toasted Crushed Pistachios', icon: '🌰', price: 2.00 },
  { id: 'curls', name: 'Chocolate Curl Twists', icon: '🍫', price: 1.50 },
];

const TIERS = [
  { id: 'single', name: 'Single Tier (1.5 kg)', description: 'Serves 8-12 people', price: 48.00 },
  { id: 'double', name: 'Double Tiered (3.0 kg)', description: 'Serves 18-24 people', price: 76.00 },
];

export default function CakeCustomizer({ onAddToCart, onClose }: CakeCustomizerProps) {
  const [selectedSponge, setSelectedSponge] = useState(SPONGES[0]);
  const [selectedFilling, setSelectedFilling] = useState(FILLINGS[0]);
  const [selectedFrosting, setSelectedFrosting] = useState(FROSTINGS[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([TOPPINGS[0].id]);
  const [selectedTier, setSelectedTier] = useState(TIERS[0]);
  const [plaqueText, setPlaqueText] = useState('');
  const [showDemoAlert, setShowDemoAlert] = useState(false);

  const calculatedPrice = useMemo(() => {
    let price = selectedTier.price;
    price += selectedSponge.price;
    price += selectedFilling.price;
    price += selectedFrosting.price;
    
    selectedToppings.forEach((topId) => {
      const topObj = TOPPINGS.find((t) => t.id === topId);
      if (topObj) price += topObj.price;
    });

    return price;
  }, [selectedSponge, selectedFilling, selectedFrosting, selectedToppings, selectedTier]);

  const handleToppingToggle = (id: string) => {
    setSelectedToppings((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleAddCustomCakeToCart = () => {
    // Construct a custom menu item representation
    const summary = `${selectedTier.name} | Sponge: ${selectedSponge.name} | Filling: ${selectedFilling.name} | Frosting: ${selectedFrosting.name} | Toppings: ${selectedToppings.map(id => TOPPINGS.find(t => t.id === id)?.name).join(', ')}${plaqueText ? ` | Plaque Text: "${plaqueText}"` : ''}`;
    
    const customCakeItem: MenuItem = {
      id: `custom-cake-${Date.now()}`,
      name: 'Custom Celebration Cake',
      description: summary,
      category: 'Cakes',
      price: calculatedPrice,
      image: '/src/assets/images/chow_box_signature_cake_1782623648712.jpg',
    };

    onAddToCart(customCakeItem);
    setShowDemoAlert(true);
    setTimeout(() => {
      setShowDemoAlert(false);
      onClose();
    }, 2000);
  };

  return (
    <div id="customizer" className="py-20 bg-[#FDFBF7] relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Pastry Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E2723]">
            Design Your Custom Cake
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-[#8D6E63] font-light leading-relaxed">
            Unleash your creativity. Choose your cake tier size, cake sponge flavour, gourmet filling cream, visual frosting style, and delicate sweet toppings, then order instantly!
          </p>
        </div>

        {/* Customizer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Visual Real-time Render Stand (4 Tiers of visual representation) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-between bg-white rounded-[2rem] p-8 border border-[#E0D5C1] shadow-sm hover:border-[#D4AF37] transition-all duration-300 relative min-h-[500px]">
            <div className="absolute top-4 left-4 flex items-center space-x-1.5 text-[10px] text-[#8D6E63] font-bold bg-[#FDFBF7] px-3 py-1.5 rounded-full border border-[#E0D5C1]">
              <Eye className="w-3.5 h-3.5" />
              <span>Real-Time Cake Mockup</span>
            </div>

            {/* Visual stacked cake canvas container */}
            <div className="w-full flex-grow flex flex-col justify-end items-center py-12 relative">
              {/* Toppings visual markers */}
              <div className="flex space-x-3 mb-2 animate-bounce">
                {selectedToppings.map((topId) => {
                  const topObj = TOPPINGS.find((t) => t.id === topId);
                  return (
                    <span key={topId} className="text-4xl" title={topObj?.name}>
                      {topObj?.icon}
                    </span>
                  );
                })}
              </div>

              {/* TIER 2: Double Tier Cake Top Stack (Only shows if double tier) */}
              {selectedTier.id === 'double' && (
                <div className="relative w-40 flex flex-col items-center z-20 -mb-2 transition-all duration-500 scale-90">
                  {/* Piped border rosettes indicator */}
                  <div className="w-full h-4 rounded-full bg-white opacity-85 absolute top-0 border-b border-[#E0D5C1]/30" />
                  {/* Sponge filling visual sandwich slice */}
                  <div
                    style={{ backgroundColor: selectedFrosting.color }}
                    className={`w-full h-16 rounded-b-lg flex flex-col justify-between items-center py-2 px-1 border-4 ${selectedFrosting.border} border-white shadow-md relative`}
                  >
                    {/* Inner sponge sponge colored cream slice */}
                    <div style={{ backgroundColor: selectedFilling.color }} className="w-4/5 h-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-inner" />
                  </div>
                </div>
              )}

              {/* TIER 1: Standard Base Tier Stack */}
              <div className="relative w-56 flex flex-col items-center z-10 transition-all duration-500">
                {/* Visual custom text board plaque */}
                {plaqueText && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded shadow-md text-[10px] font-bold font-mono tracking-wide max-w-[150px] truncate z-30 transform rotate-[-2deg] flex items-center space-x-1">
                    <span>✍️</span>
                    <span>{plaqueText}</span>
                  </div>
                )}
                {/* Piped border rosettes indicator */}
                <div className="w-full h-5 rounded-full bg-white opacity-85 absolute top-0 border-b border-[#E0D5C1]/30" />
                {/* Sponge filling visual sandwich slice */}
                <div
                  style={{ backgroundColor: selectedFrosting.color }}
                  className={`w-full h-24 rounded-b-xl flex flex-col justify-between items-center py-3 px-2 border-4 ${selectedFrosting.border} border-white shadow-lg relative`}
                >
                  {/* Inner sponge sponge colored cream slice */}
                  <div style={{ backgroundColor: selectedFilling.color }} className="w-4/5 h-3 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-inner" />
                </div>
              </div>

              {/* Pedestal cake stand */}
              <div className="w-64 h-4 bg-slate-100 rounded-full border border-slate-200 mt-2 z-0 relative shadow-inner" />
              <div className="w-16 h-8 bg-slate-200 border-x border-b border-slate-300 z-0" />
              <div className="w-32 h-2 bg-slate-200 rounded-full z-0 -mt-1" />
            </div>

            {/* Spec Highlights Card */}
            <div className="w-full bg-[#FDFBF7] rounded-2xl p-4 border border-[#E0D5C1] space-y-2 text-xs">
              <div className="flex justify-between font-bold text-[#3E2723]">
                <span>Selected Sponge:</span>
                <span className="text-[#8D6E63]">{selectedSponge.name}</span>
              </div>
              <div className="flex justify-between font-bold text-[#3E2723]">
                <span>Core Filling Cream:</span>
                <span className="text-[#8D6E63]">{selectedFilling.name}</span>
              </div>
              <div className="flex justify-between font-bold text-[#3E2723]">
                <span>Frosting Style:</span>
                <span className="text-[#8D6E63]">{selectedFrosting.name}</span>
              </div>
              {plaqueText && (
                <div className="flex justify-between font-bold text-amber-800">
                  <span>Custom Plaque:</span>
                  <span className="italic">"{plaqueText}"</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Customizer Selector Panels */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-white rounded-[2rem] p-8 border border-[#E0D5C1] shadow-sm hover:border-[#D4AF37] transition-all duration-300">
            
            <div className="space-y-6">
              {/* Option 1: Choose Cake Tier Size */}
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#3E2723] flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/25 text-[#3E2723] font-mono text-[10px] flex items-center justify-center font-bold">1</span>
                  <span>Select Size & Tier Layout</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                        selectedTier.id === tier.id
                          ? 'border-[#3E2723] bg-[#FDFBF7] shadow-sm ring-1 ring-[#3E2723]'
                          : 'border-[#E0D5C1] hover:border-[#D4AF37] bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs uppercase font-bold text-[#3E2723]">{tier.name}</span>
                        {selectedTier.id === tier.id && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                      </div>
                      <p className="text-[11px] text-[#8D6E63] mt-1">{tier.description}</p>
                      <span className="text-xs font-mono font-bold text-[#3E2723] mt-2 block">${tier.price.toFixed(2)} Base</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Choose Sponge Flavour */}
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#3E2723] flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/25 text-[#3E2723] font-mono text-[10px] flex items-center justify-center font-bold">2</span>
                  <span>Choose Sponge Flavor</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SPONGES.map((sp) => (
                    <button
                      key={sp.id}
                      onClick={() => setSelectedSponge(sp)}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col justify-between items-center space-y-2 h-28 ${
                        selectedSponge.id === sp.id
                          ? 'border-[#3E2723] bg-[#FDFBF7] shadow-sm'
                          : 'border-[#E0D5C1] hover:border-[#D4AF37] bg-white'
                      }`}
                    >
                      <div style={{ backgroundColor: sp.color }} className="w-6 h-6 rounded-md shadow-md border border-white" />
                      <div>
                        <span className="text-[10px] font-bold text-[#3E2723] leading-tight block">{sp.name}</span>
                        {sp.price > 0 && <span className="text-[9px] font-mono font-semibold text-[#8D6E63] block mt-0.5">+${sp.price.toFixed(2)}</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Choose Filling Cream */}
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#3E2723] flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/25 text-[#3E2723] font-mono text-[10px] flex items-center justify-center font-bold">3</span>
                  <span>Choose Gourmet Filling Cream</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FILLINGS.map((fill) => (
                    <button
                      key={fill.id}
                      onClick={() => setSelectedFilling(fill)}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col justify-between items-center space-y-2 h-28 ${
                        selectedFilling.id === fill.id
                          ? 'border-[#3E2723] bg-[#FDFBF7] shadow-sm'
                          : 'border-[#E0D5C1] hover:border-[#D4AF37] bg-white'
                      }`}
                    >
                      <div style={{ backgroundColor: fill.color }} className="w-6 h-6 rounded-full shadow-md border border-white" />
                      <div>
                        <span className="text-[10px] font-bold text-[#3E2723] leading-tight block">{fill.name}</span>
                        {fill.price > 0 && <span className="text-[9px] font-mono font-semibold text-[#8D6E63] block mt-0.5">+${fill.price.toFixed(2)}</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Choose Frosting Style */}
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#3E2723] flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/25 text-[#3E2723] font-mono text-[10px] flex items-center justify-center font-bold">4</span>
                  <span>Choose Visual Frosting Style</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {FROSTINGS.map((frost) => (
                    <button
                      key={frost.id}
                      onClick={() => setSelectedFrosting(frost)}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-between h-24 ${
                        selectedFrosting.id === frost.id
                          ? 'border-[#3E2723] bg-[#FDFBF7] shadow-sm'
                          : 'border-[#E0D5C1] hover:border-[#D4AF37] bg-white'
                      }`}
                    >
                      <div style={{ backgroundColor: frost.color }} className={`w-12 h-6 rounded border-2 ${frost.border} border-[#8D6E63] shadow-sm`} />
                      <div>
                        <span className="text-[10px] font-bold text-[#3E2723] block">{frost.name}</span>
                        {frost.price !== 0 && (
                          <span className="text-[9px] font-mono text-[#8D6E63] block mt-0.5">
                            {frost.price > 0 ? `+$${frost.price.toFixed(2)}` : `-$${Math.abs(frost.price).toFixed(2)}`}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 5: Choose Toppings (Multiple) */}
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#3E2723] flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/25 text-[#3E2723] font-mono text-[10px] flex items-center justify-center font-bold">5</span>
                  <span>Gourmet Toppings (Select Multiple)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TOPPINGS.map((top) => {
                    const isSelected = selectedToppings.includes(top.id);
                    return (
                      <button
                        key={top.id}
                        onClick={() => handleToppingToggle(top.id)}
                        className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col justify-center items-center space-y-1.5 ${
                          isSelected
                            ? 'border-[#3E2723] bg-[#FDFBF7] shadow-sm ring-1 ring-[#3E2723]'
                            : 'border-[#E0D5C1] hover:border-[#D4AF37] bg-white'
                        }`}
                      >
                        <span className="text-2xl">{top.icon}</span>
                        <span className="text-[10px] font-bold text-[#3E2723] leading-tight block">{top.name}</span>
                        <span className="text-[9px] font-mono text-[#8D6E63] block">+${top.price.toFixed(2)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Option 6: Custom Chocolate Plaque Message */}
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-[#3E2723] flex items-center space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/25 text-[#3E2723] font-mono text-[10px] flex items-center justify-center font-bold">6</span>
                  <span>Custom Written Message (Plaque)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Happy Birthday Chloe! (Max 32 chars)"
                  maxLength={32}
                  value={plaqueText}
                  onChange={(e) => setPlaqueText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0D5C1] bg-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-sm text-[#3E2723]"
                />
              </div>
            </div>

            {/* Footer Summary & Cart Trigger */}
            <div className="border-t border-[#E0D5C1]/40 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs text-[#8D6E63] uppercase tracking-wider block font-semibold">Total Customizer Price</span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#3E2723] block">${calculatedPrice.toFixed(2)}</span>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={handleAddCustomCakeToCart}
                  className="flex-grow sm:flex-grow-0 px-8 py-4 rounded-xl bg-[#3E2723] text-[#FDFBF7] hover:bg-[#D4AF37] hover:text-[#3E2723] font-bold uppercase tracking-wide text-xs transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Custom Cake to Bag</span>
                </button>
              </div>
            </div>

          </div>
        </div>
        
      </div>

      {/* Success Alert Floating Bubble */}
      {showDemoAlert && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-green-900 border border-green-700 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 animate-in fade-in slide-in-from-bottom duration-300">
          <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">✓</div>
          <div>
            <span className="font-bold text-sm block">Custom Cake Added!</span>
            <span className="text-xs text-green-100 block">Successfully compiled your custom design and added to the cart drawer.</span>
          </div>
        </div>
      )}
    </div>
  );
}
