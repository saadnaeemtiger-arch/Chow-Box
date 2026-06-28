/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, Quote, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function CustomerReviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const userReview: Review = {
      id: `review-${Date.now()}`,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Today',
      role: 'Valued Guest',
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150` // high quality default avatar
    };

    setReviewsList([userReview, ...reviewsList]);
    setNewReview({ name: '', comment: '', rating: 5 });
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 3000);
  };

  return (
    <section id="reviews" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-64 h-64 bg-[#F5E6D3]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-x-12 w-80 h-80 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Chow Box Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#3E2723]">
            Our Customer Reviews
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-[#8D6E63] font-light leading-relaxed">
            Discover why our community loves Chow Box. We take pride in building long-lasting smiles with premium butter, organic grains, and warm hospitality.
          </p>
        </div>

        {/* Reviews Deck & Input Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Block: Interactive Review Submitter Deck (Styled as Bento Card) */}
          <div className="lg:col-span-4 bg-white rounded-[2rem] p-8 border border-[#E0D5C1] shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider bg-[#FDFBF7] px-3 py-1 rounded-full border border-[#E0D5C1]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let Us Know Your Thoughts</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3E2723]">Write a Review</h3>
              <p className="text-xs text-[#8D6E63] leading-relaxed">
                Your feedback inspires our pastry chefs and baristas to perfect their craft every single morning.
              </p>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#8D6E63] block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E0D5C1] bg-white text-xs text-[#3E2723] focus:outline-none focus:ring-1.5 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Rating Star selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#8D6E63] block">Select Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReview.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-[#E0D5C1]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-[#8D6E63]">({newReview.rating}/5 Stars)</span>
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#8D6E63] block">Your Review</label>
                <textarea
                  required
                  rows={4}
                  placeholder="The pain au chocolat was extremely airy, and the staff was so warm!"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E0D5C1] bg-white text-xs text-[#3E2723] focus:outline-none focus:ring-1.5 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#3E2723] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-all duration-300 shadow-sm"
              >
                Submit Review
              </button>
            </form>

            {successMsg && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Thank you! Your 5-star review has been compiled on the wall.</span>
              </div>
            )}
          </div>

          {/* Right Block: Live Testimonials Deck Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsList.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-[2rem] p-8 border border-[#E0D5C1] hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Upper row: Quote indicator, stars */}
                <div className="flex justify-between items-start mb-6">
                  {/* Star row */}
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-slate-100'
                        }`}
                      />
                    ))}
                  </div>
                  {/* Icon Quote decorator */}
                  <Quote className="w-8 h-8 text-[#D4AF37]/15 rotate-180" />
                </div>

                {/* Testimonial Core Comment */}
                <p className="text-sm sm:text-base text-[#3E2723]/95 font-light leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>

                {/* Reviewer Details Footer */}
                <div className="flex items-center space-x-3.5 pt-4 border-t border-[#E0D5C1]/50">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37] bg-[#FDFBF7]">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#3E2723]">{review.name}</h4>
                    <div className="flex items-center space-x-1.5 text-[9px] text-[#8D6E63] font-bold uppercase tracking-wider">
                      <span>{review.role || 'Guest'}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
