"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  CheckCircle,
  MessageCircle,
  Flame,
  User,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { contactData } from "@/data/contact";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("Morning (4:30 AM - 10:00 AM)");
  const [goal, setGoal] = useState("Weight Loss & Shred");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FF2D2D", "#FFFFFF", "#25D366"],
      });
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi ACE GYM! My name is ${name}.\nPhone: ${phone}\nSlot: ${slot}\nGoal: ${goal}\nMessage: ${message || "I want to visit the gym."}`
    );
    window.open(`https://wa.me/91${contactData.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF2D2D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <MapPin className="w-3.5 h-3.5" /> BHARATPURI, RAMNAGAR
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            CONNECT WITH <span className="text-[#FF2D2D]">ACE GYM</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Visit our training floor in Bharatpuri, Ramnagar or drop a direct inquiry for membership and personal coaching.
          </p>
        </div>

        {/* Content Grid (Contact Info & Map on Left, Form on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Google Map (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location Card */}
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF2D2D]/10 border border-[#FF2D2D]/30 text-[#FF2D2D] flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-xl text-white">FACILITY LOCATION</h4>
                  <p className="text-zinc-300 text-xs mt-1 leading-relaxed">
                    {contactData.address.fullAddress}
                  </p>
                  <p className="text-zinc-500 text-[11px] font-mono mt-1">
                    Landmark: {contactData.address.landmark}
                  </p>
                </div>
                <a
                  href={contactData.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#FF2D2D] hover:underline flex items-center gap-1"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-xl text-white">DIRECT LINE</h4>
                  <p className="text-zinc-300 text-xs mt-1">
                    Call: <span className="font-mono text-white">{contactData.phoneFormatted}</span>
                  </p>
                  <p className="text-zinc-300 text-xs mt-1">
                    WhatsApp: <span className="font-mono text-white">+{contactData.whatsapp}</span>
                  </p>
                  <p className="text-zinc-500 text-[11px] font-mono mt-1">
                    Desk hours: 4:30 AM – 10:00 PM
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <a
                    href={`tel:${contactData.phone}`}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/91${contactData.whatsapp}?text=${encodeURIComponent(
                      contactData.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Timings Snapshot Card */}
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF2D2D]/10 text-[#FF2D2D] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold uppercase">Daily Training Shifts</div>
                  <div className="text-zinc-400 text-xs mt-0.5">
                    Morning: <span className="text-[#FF2D2D] font-mono font-bold">4:30 AM – 10:00 AM</span> | Evening: <span className="text-white font-mono font-bold">4:00 PM – 10:00 PM</span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase font-bold">
                Mon – Sat Regular
              </span>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="ACE GYM Ramnagar Google Map"
                src={contactData.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 text-xs font-mono text-white flex items-center gap-2 pointer-events-none">
                <MapPin className="w-4 h-4 text-[#FF2D2D]" />
                <span>ACE GYM • Bharatpuri, Ramnagar (Nainital)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Visit Form (5 Cols) */}
          <div className="lg:col-span-5 bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF2D2D]" />

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#FF2D2D] uppercase tracking-widest font-bold">
                    GET IN TOUCH
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-white mt-1">
                    BOOK A TOUR OR INQUIRE
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1">
                    Leave your contact info and our training team will reach out within 2 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-1.5">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Rawat"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2D2D] text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 7896523312"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2D2D] text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-1.5">
                      Preferred Workout Shift
                    </label>
                    <select
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF2D2D]"
                    >
                      <option value="Morning (4:30 AM - 10:00 AM)">Morning Session (4:30 AM – 10:00 AM)</option>
                      <option value="Evening (4:00 PM - 10:00 PM)">Evening Session (4:00 PM – 10:00 PM)</option>
                      <option value="Sunday Recovery (6:00 AM - 12:00 PM)">Sunday Recovery Slot</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-1.5">
                      Fitness Target
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF2D2D]"
                    >
                      <option value="Weight Loss & Shred">Weight Loss & Fat Shred</option>
                      <option value="Muscle Hypertrophy">Muscle Hypertrophy & Bulking</option>
                      <option value="Powerlifting & Raw Strength">Powerlifting & Strength</option>
                      <option value="CrossFit / HIIT Stamina">CrossFit & Athletic Stamina</option>
                      <option value="1-on-1 Personal Training">1-on-1 Personal Coaching</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-1.5">
                      Message / Question (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask about membership pricing, trainer availability, or gym tour..."
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2D2D] text-xs sm:text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(255,45,45,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#FF2D2D]/20 border border-[#FF2D2D] flex items-center justify-center mx-auto mb-4 text-[#FF2D2D]">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-white">MESSAGE RECEIVED!</h3>
                <p className="text-zinc-300 text-sm mt-2 max-w-xs mx-auto">
                  Thank you, <span className="text-white font-bold">{name}</span>. Our desk manager will contact you at {phone}.
                </p>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                  >
                    <MessageCircle className="w-4 h-4" /> Send Direct Copy to WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
