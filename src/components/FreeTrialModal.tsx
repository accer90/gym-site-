"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Dumbbell, Phone, User, Calendar, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { contactData } from "@/data/contact";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function FreeTrialModal({ isOpen, onClose, defaultPlan }: FreeTrialModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [session, setSession] = useState("Morning (4:30 AM - 10:00 AM)");
  const [goal, setGoal] = useState(defaultPlan || "Weight Loss & Shred");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF2D2D", "#FFFFFF", "#FFA500"],
      });
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello ACE GYM! My name is ${name}. I just registered for a FREE Trial pass at your Bharatpuri facility.\nSession: ${session}\nGoal: ${goal}\nPhone: ${phone}. Please confirm my slot!`
    );
    window.open(`https://wa.me/91${contactData.whatsapp}?text=${text}`, "_blank");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
          >
            {/* Top red glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF2D2D]/20 via-[#FF2D2D] to-[#FF2D2D]/20" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FF2D2D]/20 rounded-full blur-[80px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2D2D]/10 border border-[#FF2D2D]/30 text-[#FF2D2D] text-xs font-bold uppercase tracking-wider mb-2">
                    <Flame className="w-3.5 h-3.5" /> 100% Free • No Commitments
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                    CLAIM YOUR FREE 1-DAY PASS
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Experience our Olympic lifting zone, cardio cinema, and elite coaching in Ramnagar with zero cost.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vikram Rawat"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2D2D] focus:ring-1 focus:ring-[#FF2D2D] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1.5">
                      Phone Number (WhatsApp preferred)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 7896523312"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2D2D] focus:ring-1 focus:ring-[#FF2D2D] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1.5">
                        Preferred Session
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <select
                          value={session}
                          onChange={(e) => setSession(e.target.value)}
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-white text-xs focus:outline-none focus:border-[#FF2D2D] transition-colors"
                        >
                          <option value="Morning (4:30 AM - 10:00 AM)">Morning (4:30 AM - 10:00 AM)</option>
                          <option value="Evening (4:00 PM - 10:00 PM)">Evening (4:00 PM - 10:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <div className="relative">
                        <Dumbbell className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <select
                          value={goal}
                          onChange={(e) => setGoal(e.target.value)}
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-white text-xs focus:outline-none focus:border-[#FF2D2D] transition-colors"
                        >
                          <option value="Weight Loss & Shred">Weight Loss & Shred</option>
                          <option value="Muscle Building / Hypertrophy">Muscle Building</option>
                          <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                          <option value="Cardio & Stamina">Cardio & Stamina</option>
                          <option value="Personal Coaching">1-on-1 Personal Coaching</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(255,45,45,0.4)] hover:shadow-[0_0_30px_rgba(255,45,45,0.6)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Lock In My Free Pass Now"
                    )}
                  </button>

                  <p className="text-center text-[11px] text-zinc-500">
                    Location: Bharatpuri, Ramnagar (Nainital). No credit card required.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#FF2D2D]/20 border border-[#FF2D2D] flex items-center justify-center mx-auto mb-4 text-[#FF2D2D]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display text-4xl text-white mb-2">PASS RESERVED!</h3>
                <p className="text-zinc-300 text-sm max-w-sm mx-auto mb-6">
                  Welcome to the ACE family, <span className="text-white font-semibold">{name}</span>! Your 1-Day VIP Pass is active for our Ramnagar gym.
                </p>

                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-4 text-left text-xs space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Location:</span>
                    <span className="text-zinc-200">Bharatpuri, Ramnagar (Nainital)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Selected Slot:</span>
                    <span className="text-[#FF2D2D] font-medium">{session}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Target Goal:</span>
                    <span className="text-zinc-200">{goal}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Confirm via WhatsApp (+91 {contactData.phone})
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 text-zinc-400 hover:text-white text-xs underline cursor-pointer"
                  >
                    Back to site
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
