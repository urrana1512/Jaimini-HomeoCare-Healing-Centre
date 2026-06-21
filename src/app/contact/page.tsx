"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, Mail, MapPin, Calendar, Clock, Send, CheckCircle, Star, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    modality: "Homeopathy Consultation",
    message: "",
    date: "",
    timeSlot: "Morning (10:00 AM - 1:00 PM)"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formulate the mailto URL to send to doctor's email by user's email client
    const subject = encodeURIComponent(`Booking Request: ${formData.name} - ${formData.modality}`);
    const body = encodeURIComponent(
      `Booking Details:\n` +
      `---------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Modality: ${formData.modality}\n` +
      `Preferred Date: ${formData.date}\n` +
      `Preferred Time Slot: ${formData.timeSlot}\n\n` +
      `Health Concern / Message:\n${formData.message}\n` +
      `---------------------------------\n` +
      `Submitted via Jaimini Healing Centre Portal.`
    );

    // Open mail client
    window.location.href = `mailto:nrrana2002@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-left">
      <div className="text-center space-y-4 mb-16">
        <ScrollReveal direction="down">
          <span className="text-xs font-semibold tracking-widest text-forest-green uppercase block">Connect With Us</span>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-charcoal">
            Book Your Healing Consultation
          </h1>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="text-xs md:text-sm text-medium-gray max-w-xl mx-auto mt-4">
            Have questions or ready to schedule your intake? Complete the booking form below or reach out via WhatsApp for immediate priority scheduling.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* CONTACT DATA */}
        <div className="lg:col-span-5 space-y-8">
          <ScrollReveal direction="right" className="bg-white border border-light-gray/40 rounded-3xl p-8 shadow-premium-soft space-y-6">
            <h3 className="font-heading text-xl font-bold text-forest-green">Contact Details</h3>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4 text-xs">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-charcoal">Clinic Location</h4>
                  <p className="text-medium-gray leading-relaxed mt-1">
                    C-108 Saujanya Apartment, Nr. Anupam Cinema, Khokhra road, Ahmedabad - 380021
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-xs">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-charcoal">Phone & Support</h4>
                  <p className="text-medium-gray mt-1">
                    <a href="tel:+919316356317" className="hover:text-forest-green transition-colors">+91 93163 56317</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-xs">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-charcoal">WhatsApp Line</h4>
                  <p className="text-medium-gray mt-1">
                    <a 
                      href="https://wa.me/919316356317" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-forest-green transition-colors font-medium text-forest-green"
                    >
                      Connect on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-xs">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-charcoal">Email Communication</h4>
                  <p className="text-medium-gray mt-1">
                    <a href="mailto:nrrana2002@gmail.com" className="hover:text-forest-green transition-colors">nrrana2002@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Opening hours */}
          <ScrollReveal direction="right" delay={0.1} className="bg-white border border-light-gray/40 rounded-3xl p-8 shadow-premium-soft space-y-4 text-xs">
            <h3 className="font-heading text-lg font-bold text-deep-charcoal flex items-center space-x-2">
              <Clock size={18} className="text-warm-gold" />
              <span>Consultation Timings</span>
            </h3>
            <div className="divide-y divide-light-gray/30 text-medium-gray">
              <div className="flex justify-between py-2.5">
                <span>Monday - Friday</span>
                <span className="font-medium text-deep-charcoal">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span>Saturday</span>
                <span className="font-medium text-deep-charcoal">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span>Sunday</span>
                <span className="font-bold text-forest-green">Emergency Only</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* BOOKING FORM */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left" className="bg-white border border-light-gray/40 rounded-3xl p-8 md:p-10 shadow-premium-soft relative">
            {isSuccess ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-deep-charcoal">Booking Request Received</h3>
                  <p className="text-xs text-medium-gray max-w-sm mx-auto">
                    Thank you! Your scheduling request has been registered. Dr. Niyati Rana&apos;s coordinator will contact you shortly to confirm your consultation slot.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-forest-green text-cream-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-forest-green/95 transition-all"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs md:text-sm">
                <h3 className="font-heading text-xl font-bold text-deep-charcoal mb-4">Request An Appointment</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="font-semibold text-deep-charcoal">Full Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyesh Patel"
                      className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="phone" className="font-semibold text-deep-charcoal">Phone Number</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 99000 99000"
                      className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="font-semibold text-deep-charcoal">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. priyesh@example.com"
                      className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                    />
                  </div>

                  {/* Service interest */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="modality" className="font-semibold text-deep-charcoal">Therapy Modality</label>
                    <select
                      id="modality"
                      name="modality"
                      value={formData.modality}
                      onChange={handleChange}
                      className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-white focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                    >
                      <option>Homeopathy Consultation</option>
                      <option>Reiki Healing</option>
                      <option>Lama Fera Healing</option>
                      <option>Tarot Card Reading</option>
                      <option>Crystal Bracelets</option>
                      <option>General Intake/Unsure</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pref Date */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="date" className="font-semibold text-deep-charcoal">Preferred Date</label>
                    <input
                      required
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                    />
                  </div>

                  {/* Pref Time */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="timeSlot" className="font-semibold text-deep-charcoal">Preferred Time Slot</label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-white focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                    >
                      <option>Morning (10:00 AM - 1:00 PM)</option>
                      <option>Afternoon (2:00 PM - 5:00 PM)</option>
                      <option>Evening (5:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Health concern message */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message" className="font-semibold text-deep-charcoal">Brief Health Concern / Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your health symptoms or specific questions..."
                    className="border border-light-gray/60 focus:border-forest-green rounded-xl p-3 bg-off-white/20 focus:outline-none focus:ring-1 focus:ring-forest-green text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-forest-green text-cream-white font-bold p-3.5 rounded-full hover:bg-forest-green/95 shadow-premium-soft transition-all duration-300 disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? "Registering..." : "Submit Booking Request"}</span>
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      {/* MOCK MAP DISPLAY */}
      <section className="mt-20">
        <ScrollReveal direction="up" className="bg-white border border-light-gray/40 rounded-3xl p-6 shadow-premium-soft overflow-hidden space-y-4">
          <h3 className="font-heading text-xl font-bold text-deep-charcoal">Our Healing Sanctuary</h3>
          
          <div className="relative w-full h-[350px] bg-sage-green/10 rounded-2xl overflow-hidden flex items-center justify-center border border-light-gray/35">
            {/* Visual representation of a beautiful abstract map */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0b6b4f_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            <div className="relative text-center p-6 space-y-4 max-w-sm">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center mx-auto shadow-premium-glow-green animate-bounce">
                <MapPin size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading text-sm font-bold text-deep-charcoal">Jaimini Homeocare & Healing</h4>
                <p className="text-[11px] text-medium-gray">
                  C-108 Saujanya Apartment, Nr. Anupam Cinema, Khokhra road, Ahmedabad - 380021
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/XqBzotc1ssKFNdrEA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-1 bg-white text-forest-green border border-forest-green/30 text-[10px] font-bold px-4 py-2 rounded-full hover:bg-sage-green/10 transition-colors"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* GOOGLE REVIEW SECTION (TASK 3) */}
      <section className="mt-20">
        <ScrollReveal direction="up" className="bg-gradient-to-r from-forest-green to-indigo-950 rounded-[2.5rem] p-10 md:p-14 text-cream-white relative overflow-hidden shadow-premium-medium flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          <div className="space-y-4 text-center md:text-left max-w-xl relative z-10">
            <div className="flex justify-center md:justify-start space-x-1 text-warm-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">Share Your Healing Journey</h2>
            <p className="text-xs text-sage-green leading-relaxed max-w-lg">
              Your stories help others discover natural, constitutional healing pathways. If Dr. Niyati Rana has guided you toward balance and vitality, we would be deeply grateful for your Google review.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="https://share.google/KuAHjNg9r2FbYYUJN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-warm-gold text-deep-charcoal font-bold px-8 py-4 rounded-full hover:bg-yellow-500 hover:scale-102 shadow-premium-soft hover:shadow-premium-medium transition-all duration-300"
            >
              <span>Write a Google Review</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
