/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  // Dynamic open/closed hours checking
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeInMinutes = hours * 60 + minutes;
      const day = now.getDay(); // 0 is Sunday, 1-5 Mon-Fri, 6 Sat

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-bakery-warm-white relative overflow-hidden scroll-mt-10">
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-bakery-gold/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-bakery-clay/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-bakery-gold text-sm font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Connect & Find Us</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bakery-chocolate tracking-tight">
            Contact Chow Box
          </h2>
          <div className="w-20 h-1 bg-bakery-gold mx-auto rounded-full" />
          <p className="text-sm text-bakery-brown-light font-light leading-relaxed">
            Have questions about catering, private events, or custom order designs? Visit our boutique storefront or leave us a message.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details card, hours checker */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white rounded-3xl p-8 border border-bakery-clay/40 shadow-lg">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-bakery-clay/20 pb-4">
                <h3 className="font-serif text-2xl font-bold text-bakery-chocolate">Storefront Details</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${isOpenNow ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                  {isOpenNow ? '🟢 We are Open Now' : '🔴 Closed'}
                </span>
              </div>

              {/* Contact Icons rows */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-bakery-gold/15 rounded-xl text-bakery-chocolate shrink-0">
                    <MapPin className="w-5 h-5 text-bakery-brown-dark" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-bakery-brown-light">Our Location</h4>
                    <p className="text-sm text-bakery-chocolate mt-0.5 leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-bakery-gold/15 rounded-xl text-bakery-chocolate shrink-0">
                    <Phone className="w-5 h-5 text-bakery-brown-dark" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-bakery-brown-light">Phone / WhatsApp</h4>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-bakery-chocolate hover:text-bakery-gold transition-colors mt-0.5 block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-bakery-gold/15 rounded-xl text-bakery-chocolate shrink-0">
                    <Mail className="w-5 h-5 text-bakery-brown-dark" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-bakery-brown-light">Inquiries Email</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-bakery-chocolate hover:text-bakery-gold transition-colors mt-0.5 block">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business hours tracker block */}
              <div className="space-y-3 pt-6 border-t border-bakery-clay/20">
                <h4 className="text-xs uppercase font-bold tracking-widest text-bakery-brown-light flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Weekly Baking Schedule</span>
                </h4>
                <div className="space-y-2">
                  {CONTACT_INFO.hours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm text-bakery-chocolate">
                      <span className="font-medium text-bakery-brown-dark/95">{item.days}</span>
                      <span className="font-mono text-xs text-bakery-brown-light">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Google map inside left column footer */}
            <div className="rounded-2xl overflow-hidden h-44 shadow-inner border border-bakery-clay/35 relative">
              <iframe
                title="Google Maps Location for Chow Box"
                src={CONTACT_INFO.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Custom Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-bakery-clay/40 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-bakery-gold font-bold text-xs uppercase tracking-widest">
                <MessageSquare className="w-4 h-4" />
                <span>Online Correspondence Helper</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-bakery-chocolate">Send Us a Message</h3>
              <p className="text-xs sm:text-sm text-bakery-brown-light leading-relaxed">
                Whether you want to coordinate catering volumes, reserve desserts, or discuss specific wedding cake designs, we are here for you. Our team typically responds within 2 business hours.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 mt-6 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-bakery-brown-light block">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alice Cooper"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-bakery-clay bg-white text-xs text-bakery-chocolate focus:ring-1.5 focus:ring-bakery-gold"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-bakery-brown-light block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alice@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-bakery-clay bg-white text-xs text-bakery-chocolate focus:ring-1.5 focus:ring-bakery-gold"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-bakery-brown-light block">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Custom Birthday Cake inquiry, Large volume catering request"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-bakery-clay bg-white text-xs text-bakery-chocolate focus:ring-1.5 focus:ring-bakery-gold"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-bakery-brown-light block">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-bakery-clay bg-white text-xs text-bakery-chocolate focus:ring-1.5 focus:ring-bakery-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-bakery-chocolate text-white text-xs font-bold uppercase tracking-wider hover:bg-bakery-gold hover:text-bakery-chocolate transition-all duration-300 shadow flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Correspondence</span>
              </button>
            </form>

            {isSubmitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-xs flex items-center space-x-3 mt-4 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <div>
                  <span className="font-bold block">Inquiry Submitted successfully!</span>
                  <span className="text-[10px] text-green-700 font-light block">Our pastry team will send you an email confirmation shortly.</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
