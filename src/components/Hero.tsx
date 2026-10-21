"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Flame, Shield, MapPin, ChevronRight, Dumbbell } from "lucide-react";
import { contactData } from "@/data/contact";

interface HeroProps {
  onOpenTrial: () => void;
}

export function Hero({ onOpenTrial }: HeroProps) {
  // Staggered words for "NEVER GIVE UP"
  const headlineWords = ["NEVER", "GIVE", "UP"];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#0A0A0A] pt-24 pb-10 sm:pb-14">
      {/* Background Image with slow cinematic zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
            alt="ACE GYM Ramnagar Iron Floor"
            fill
            priority
            quality={90}
            className="object-cover object-center filter brightness-[0.38] contrast-[1.15]"
          />
        </motion.div>

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        
        {/* Soft Electric Red Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D2D]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF2D2D]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Film grain / grid noise overlay */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      </div>

      {/* Top Location & Credibility Chip */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex justify-center mt-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141414]/90 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2D2D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2D2D]" />
          </span>
          <MapPin className="w-3.5 h-3.5 text-[#FF2D2D]" />
          <span className="text-xs font-mono font-medium tracking-wide text-zinc-300">
            BHARATPURI, RAMNAGAR (NAINITAL) • UTTARAKHAND
          </span>
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center">
        {/* Sub-headline badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-400 mb-3"
        >
          <Dumbbell className="w-4 h-4 text-[#FF2D2D]" />
          <span>RAMNAGAR&apos;S PREMIER LUXURY & HARDCORE GYM</span>
        </motion.div>

        {/* Huge Headline: NEVER GIVE UP (staggered word reveal) */}
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tight leading-[0.88] text-white my-2 select-none">
          {headlineWords.map((word, idx) => (
            <span key={word} className="inline-block overflow-hidden mx-1 sm:mx-2 md:mx-3">
              <motion.span
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + idx * 0.15,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`inline-block ${
                  idx === 2
                    ? "text-[#FF2D2D] drop-shadow-[0_0_40px_rgba(255,45,45,0.7)]"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Narrative description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed text-balance"
        >
          Transform your body, forge unstoppable mental grit, and train with world-class equipment in Ramnagar. No shortcuts. Just raw dedication.
        </motion.p>

        {/* Call to Actions with Magnetic Glow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Book Free Trial */}
          <button
            onClick={onOpenTrial}
            className="w-full sm:w-auto group relative px-8 py-4 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,45,45,0.45)] hover:shadow-[0_0_45px_rgba(255,45,45,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Flame className="w-5 h-5 text-white animate-pulse" />
            <span>Book Free 1-Day Trial</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Membership Plans */}
          <a
            href="#plans"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#141414]/90 hover:bg-[#1A1A1A] border border-white/15 hover:border-white/30 text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            <Shield className="w-4 h-4 text-zinc-400 group-hover:text-[#FF2D2D] transition-colors" />
            <span>View Membership Plans</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400 font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]" />
            <span>1200+ Active Members</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]" />
            <span>Morning & Evening Slots</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]" />
            <span>Olympic Grade Barbells</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-2 select-none"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-zinc-400 hover:text-white transition-colors uppercase"
          aria-label="Scroll to about section"
        >
          <span>SCROLL TO CONQUER</span>
          <div className="w-6 h-10 rounded-full border border-white/20 group-hover:border-[#FF2D2D] flex items-start justify-center p-1.5 transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
