/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { X, Trash2, ShoppingBag, CreditCard, Tag, MessageSquareCode, Truck, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { CONTACT_INFO } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (idx: number, quantity: number) => void;
  onRemoveItem: (idx: number) => void;
  onClearCart: () => void;
  appliedPromo: string;
  onApplyPromo: (code: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedPromo,
  onApplyPromo,
}: CartDrawerProps) {
  const [promoInput, setPromoInput] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [promoError, setPromoError] = useState('');

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  }, [cart]);

  const discountAmount = useMemo(() => {
    const code = appliedPromo.toUpperCase().trim();
    if (code === 'FRESHSTART') {
      return subtotal * 0.25; // 25% Off
    }
    if (code === 'SWEETWEEKEND' && subtotal >= 20) {
      return 6.00; // Flat $6.00 off
    }
    if (code === 'CELEBRATE') {
      return 0; // Cupcakes promo (Free product, price stays)
    }
    if (code === 'AFTERNOONTEA') {
      return subtotal * 0.10; // 10% Off picnic
    }
    return 0;
  }, [appliedPromo, subtotal]);

  const deliveryFee = deliveryType === 'delivery' ? 5.00 : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoInput.toUpperCase().trim();
    if (['FRESHSTART', 'SWEETWEEKEND', 'CELEBRATE', 'AFTERNOONTEA'].includes(cleanCode)) {
      onApplyPromo(cleanCode);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try FRESHSTART!');
    }
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*🥖 Chow Box Pre-Order Request*\n`;
    message += `==========================\n`;
    message += `*Option:* ${deliveryType === 'pickup' ? '🏪 Store Pickup' : '🛵 Local Delivery'}\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.menuItem.name}* (x${item.quantity})\n`;
      message += `   _Details:_ ${item.menuItem.description.slice(0, 100)}...\n`;
      message += `   _Price:_ $${(item.menuItem.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `==========================\n`;
    message += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
    if (discountAmount > 0) {
      message += `*Promo Discount (${appliedPromo}):* -$${discountAmount.toFixed(2)}\n`;
    }
    if (deliveryFee > 0) {
      message += `*Delivery Fee:* $${deliveryFee.toFixed(2)}\n`;
    }
    message += `*Final Estimated Total:* $${finalTotal.toFixed(2)}\n\n`;

    if (customerNote.trim()) {
      message += `*Chef's Note:* "${customerNote.trim()}"\n\n`;
    }

    message += `Thank you! Please confirm my pre-order details and estimated pickup/delivery slot.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Black backdrop overlay */}
      <div
        className="absolute inset-0 bg-bakery-chocolate/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-bakery-cream shadow-2xl flex flex-col h-full border-l border-bakery-clay/50 animate-in slide-in-from-right duration-300">
          
          {/* Header block */}
          <div className="px-6 py-5 bg-white border-b border-bakery-clay/30 flex justify-between items-center">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-bakery-gold/15 text-bakery-chocolate flex items-center justify-center">
                <ShoppingBag className="w-4.5 h-4.5 text-bakery-brown-dark" />
              </div>
              <h2 className="font-serif text-lg font-bold text-bakery-chocolate">Your Shopping Bag</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-bakery-brown-light hover:text-bakery-chocolate hover:bg-bakery-warm-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-grow overflow-y-auto px-6 py-6 space-y-6">
            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <div
                    key={`${item.menuItem.id}-${idx}`}
                    className="bg-white p-4 rounded-2xl border border-bakery-clay/30 flex space-x-4 items-center justify-between"
                  >
                    {/* Left: Thumbnail & Name details */}
                    <div className="flex items-center space-x-3 flex-grow min-w-0">
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-12 h-12 rounded-lg object-cover bg-bakery-warm-white shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs uppercase font-bold tracking-wider text-bakery-brown-light">
                          {item.menuItem.category}
                        </h4>
                        <h3 className="font-serif font-bold text-sm text-bakery-chocolate truncate">
                          {item.menuItem.name}
                        </h3>
                        <p className="text-[10px] text-bakery-brown-dark/70 font-light truncate">
                          {item.menuItem.description}
                        </p>
                        <span className="font-mono text-xs font-bold text-bakery-chocolate mt-1 block">
                          ${item.menuItem.price.toFixed(2)} each
                        </span>
                      </div>
                    </div>

                    {/* Right: Quantity modifiers, Delete button */}
                    <div className="flex flex-col items-end space-y-2 shrink-0">
                      <div className="flex items-center border border-bakery-clay rounded-lg overflow-hidden h-7 bg-bakery-cream">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="px-2 text-xs font-bold text-bakery-brown-dark hover:bg-bakery-clay"
                        >
                          -
                        </button>
                        <span className="px-2 font-mono text-xs font-semibold text-bakery-chocolate">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="px-2 text-xs font-bold text-bakery-brown-dark hover:bg-bakery-clay"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="p-1 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                        title="Remove product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-bakery-warm-white flex items-center justify-center text-bakery-brown-light mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-bakery-chocolate">Your Bag is Empty</h3>
                <p className="text-xs text-bakery-brown-light leading-relaxed max-w-xs mx-auto">
                  Browse our gourmet categories of sourdoughs, pastries, and custom celebration cakes to add freshly baked treats to your order!
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-bakery-chocolate text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Browse Menu
                </button>
              </div>
            )}

            {/* Cart Utilities (Only shows if items present) */}
            {cart.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-bakery-clay/30">
                
                {/* Fulfillment Picker */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-bakery-brown-light block">
                    Fulfillment Mode
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setDeliveryType('pickup')}
                      className={`py-2 rounded-xl text-xs font-bold uppercase border transition-all ${
                        deliveryType === 'pickup'
                          ? 'border-bakery-chocolate bg-bakery-chocolate text-white'
                          : 'border-bakery-clay bg-white text-bakery-brown-dark hover:bg-bakery-cream'
                      }`}
                    >
                      🏪 Store Pickup
                    </button>
                    <button
                      onClick={() => setDeliveryType('delivery')}
                      className={`py-2 rounded-xl text-xs font-bold uppercase border transition-all flex items-center justify-center space-x-1 ${
                        deliveryType === 'delivery'
                          ? 'border-bakery-chocolate bg-bakery-chocolate text-white'
                          : 'border-bakery-clay bg-white text-bakery-brown-dark hover:bg-bakery-cream'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Delivery (+$5)</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-bakery-brown-light leading-relaxed font-light italic">
                    {deliveryType === 'pickup'
                      ? `Pick up your warm baked goods at our physical bakery location during business hours.`
                      : `Get delivery directly to your home within our 5-mile radius.`}
                  </p>
                </div>

                {/* Promo Code Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-bakery-brown-light block">
                    Promo / Coupon Code
                  </label>
                  <form onSubmit={handleApplyPromoSubmit} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. FRESHSTART"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-grow px-3.5 py-2 border border-bakery-clay rounded-xl text-xs uppercase font-mono text-bakery-chocolate focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-bakery-chocolate text-white text-xs font-bold uppercase rounded-xl hover:bg-bakery-gold hover:text-bakery-chocolate transition-all"
                    >
                      Apply
                    </button>
                  </form>
                  {appliedPromo && (
                    <div className="text-[11px] text-green-700 font-bold flex items-center space-x-1 bg-green-50 border border-green-200 p-2 rounded-lg mt-1">
                      <Tag className="w-3 h-3 text-green-600" />
                      <span>Code "{appliedPromo}" Applied Successfully!</span>
                    </div>
                  )}
                  {promoError && (
                    <p className="text-[10px] text-red-600 font-medium">{promoError}</p>
                  )}
                </div>

                {/* Chef Notes input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-bakery-brown-light block">
                    Special Chef Instructions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Allergies, packaging instructions, custom icing notes..."
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-bakery-clay rounded-xl text-xs text-bakery-chocolate bg-white focus:outline-none placeholder:text-bakery-brown-light/40"
                  />
                </div>

              </div>
            )}
          </div>

          {/* Checkout / Pricing footer block */}
          {cart.length > 0 && (
            <div className="bg-white border-t border-bakery-clay/35 px-6 py-6 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-bakery-brown-light">
                  <span>Subtotal:</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Discount:</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                {deliveryType === 'delivery' && (
                  <div className="flex justify-between text-bakery-brown-light">
                    <span>Delivery Fee:</span>
                    <span className="font-mono">+$5.00</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-bakery-chocolate pt-2 border-t border-dashed border-bakery-clay/40">
                  <span>Estimated Total:</span>
                  <span className="font-mono text-lg">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Order via WhatsApp API anchor */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wide text-xs transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Pre-Order via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center space-x-1 text-[10px] text-bakery-brown-light">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                <span>Payments handled securely upon delivery/pickup</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
