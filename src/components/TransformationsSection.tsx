"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, ArrowLeftRight, TrendingDown, Clock, User, Quote, Flame } from "lucide-react";
import { transformationsData } from "@/data/transformations";

export function TransformationsSection({ onOpenTrial }: { onOpenTrial: () => void }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentMember = transformationsData[activeStoryIdx];

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handlePointerMove(e.touches[0].clientX);
  };

  return (
    <section id="results" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF2D2D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <Trophy className="w-3.5 h-3.5" /> PROOF OVER PROMISES
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            REAL RAMNAGAR <span className="text-[#FF2D2D]">TRANSFORMATIONS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
            Interactive before & after proof. Real members who walked into our Bharatpuri doors and rebuilt their physique with blood, sweat, and iron.
          </p>
        </div>

        {/* Member Selector Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {transformationsData.map((member, idx) => (
            <button
              key={member.id}
              onClick={() => {
                setActiveStoryIdx(idx);
                setSliderPos(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeStoryIdx === idx
                  ? "bg-[#FF2D2D] text-white shadow-[0_0_20px_rgba(255,45,45,0.4)]"
                  : "bg-[#141414] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {member.name} ({member.duration})
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Slider Frame (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/5] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-white/15 select-none cursor-ew-resize shadow-2xl bg-zinc-950"
            >
              {/* AFTER Image (Full width background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={currentMember.afterImage}
                  alt={`${currentMember.name} After Transformation`}
                  fill
                  className="object-cover object-center filter contrast-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#FF2D2D] text-white font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_12px_#FF2D2D]">
                  AFTER
                </div>
              </div>

              {/* BEFORE Image (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
                  <Image
                    src={currentMember.beforeImage}
                    alt={`${currentMember.name} Before Transformation`}
                    fill
                    className="object-cover object-center filter grayscale contrast-125"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-zinc-900/90 border border-white/15 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest">
                    BEFORE
                  </div>
                </div>
              </div>

              {/* Divider Line & Draggable Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF2D2D] border-2 border-white text-white flex items-center justify-center shadow-2xl">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Interactive Help Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-400 pointer-events-none">
                DRAG SLIDER TO REVEAL TRANSFORMATION
              </div>
            </div>
          </div>

          {/* Member Transformation Stats & Story (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF2D2D] uppercase tracking-wider font-bold mb-1">
                <Clock className="w-3.5 h-3.5" /> {currentMember.duration} DEDICATION
              </div>

              <h3 className="font-display text-4xl sm:text-5xl font-black text-white uppercase leading-none">
                {currentMember.name}
              </h3>
              <p className="text-zinc-500 text-xs font-mono mt-1">
                Age {currentMember.age} • Program: {currentMember.program}
              </p>

              {/* Transformation Metrics Cards */}
              <div className="grid grid-cols-2 gap-3 my-6">
                <div className="bg-[#141414] border border-white/10 rounded-xl p-4">
                  <div className="text-zinc-400 text-xs font-mono uppercase">Total Shift</div>
                  <div className="font-display text-3xl font-bold text-[#FF2D2D] mt-1">
                    {currentMember.weightLoss}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Scale weight delta</div>
                </div>

                <div className="bg-[#141414] border border-white/10 rounded-xl p-4">
                  <div className="text-zinc-400 text-xs font-mono uppercase">Body Fat</div>
                  <div className="font-display text-3xl font-bold text-white mt-1">
                    {currentMember.bodyFatChange}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">InBody verified</div>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative bg-[#141414]/70 border-l-2 border-[#FF2D2D] rounded-r-xl p-4 mb-6">
                <Quote className="w-6 h-6 text-[#FF2D2D]/30 absolute top-2 right-3" />
                <p className="text-zinc-300 text-xs sm:text-sm italic leading-relaxed">
                  &ldquo;{currentMember.quote}&rdquo;
                </p>
                <div className="text-zinc-500 text-[11px] font-mono mt-2">
                  Mentored by: <span className="text-zinc-300">{currentMember.trainer}</span>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {currentMember.story}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenTrial}
              className="w-full py-4 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white font-bold uppercase tracking-wider text-xs transition-all shadow-[0_0_20px_rgba(255,45,45,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Flame className="w-4 h-4" /> Start Your Own Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
