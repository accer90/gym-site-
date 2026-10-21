"use client";

import React from "react";

export function MarqueeStrip() {
  const marqueeItems = [
    "NEVER GIVE UP",
    "HEAVY STRENGTH",
    "CROSSFIT ARENA",
    "HIIT BLITZ",
    "RAMNAGAR NAINITAL",
    "OLYMPIC LIFTING",
    "FAT LOSS & SHRED",
    "1-ON-1 COACHING",
    "DISCIPLINE OVER MOTIVATION",
    "ACE GYM",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#141414] border-y border-white/10 py-4 select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center">
        {/* Repeating set twice for infinite continuous scroll */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center mx-5 sm:mx-8">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl text-white tracking-widest font-black uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D2D] shadow-[0_0_10px_#FF2D2D] ml-5 sm:ml-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
