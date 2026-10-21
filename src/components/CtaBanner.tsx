"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, ChevronRight, ShieldCheck, Dumbbell } from "lucide-react";

export function CtaBanner({ onOpenTrial }: { onOpenTrial: () => void }) {
  // Editable headline as requested in requirements
  const headline = "YOUR FIRST DAY IS FREE";
  const subtext =
    "Zero excuses. Step onto the floor, feel the electric energy of Ramnagar's elite gym, test the iron, and meet the trainers before paying a single rupee.";

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1E0D0D] via-[#141414] to-[#1E0D0D] border-2 border-[#FF2D2D]/60 p-8 sm:p-16 shadow-[0_0_60px_rgba(255,45,45,0.3)]">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop"
              alt="ACE Gym Weights Floor"
              fill
              className="object-cover object-center filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-[#141414]" />
          </div>

          {/* Glowing Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF2D2D]/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF2D2D]/20 border border-[#FF2D2D] text-[#FF2D2D] text-xs font-mono font-bold uppercase tracking-widest mb-4">
              <Flame className="w-3.5 h-3.5 animate-pulse" /> LIMITED FREE PASSES TODAY
            </div>

            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none uppercase">
              {headline}
            </h2>

            <p className="mt-4 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {subtext}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_30px_rgba(255,45,45,0.6)] hover:shadow-[0_0_45px_rgba(255,45,45,0.9)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Flame className="w-5 h-5" />
                <span>Claim Free 1-Day Pass</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF2D2D]" /> No Card Required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-[#FF2D2D]" /> Full Floor Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
