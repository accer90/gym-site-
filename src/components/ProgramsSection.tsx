"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Clock, Zap, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { programsData, Program } from "@/data/programs";

interface ProgramsSectionProps {
  onSelectProgram: (programTitle: string) => void;
}

export function ProgramsSection({ onSelectProgram }: ProgramsSectionProps) {
  const [activeId, setActiveId] = useState<string>(programsData[0].id);
  const [selectedModalProgram, setSelectedModalProgram] = useState<Program | null>(null);

  const activeProgram = programsData.find((p) => p.id === activeId) || programsData[0];

  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF2D2D]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
              <Zap className="w-3.5 h-3.5" /> ELITE CURRICULUM
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
              TRAIN WITH <span className="text-[#FF2D2D]">INTENT</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Six specialized training disciplines precision-engineered to build unstoppable strength, shred stubborn body fat, and elevate mental grit.
            </p>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-zinc-500">
            [ HOVER OR CLICK TO EXPLORE PROGRAMS ]
          </div>
        </div>

        {/* Interactive Program Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.map((prog, idx) => {
            const isCurrent = prog.id === activeId;
            return (
              <motion.div
                key={prog.id}
                onMouseEnter={() => setActiveId(prog.id)}
                className={`group relative rounded-2xl overflow-hidden bg-[#141414] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "border-[#FF2D2D]/60 shadow-[0_0_35px_rgba(255,45,45,0.25)] ring-1 ring-[#FF2D2D]/30"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Image Banner Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover object-center filter contrast-110 brightness-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

                  {/* Intensity Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-zinc-200">
                      {prog.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        prog.intensity === "Extreme"
                          ? "bg-[#FF2D2D] text-white shadow-[0_0_12px_#FF2D2D]"
                          : "bg-amber-500/90 text-black"
                      }`}
                    >
                      {prog.intensity} Intensity
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#FF2D2D]" /> {prog.duration}
                      </span>
                      <span>•</span>
                      <span className="text-zinc-500">Program 0{idx + 1}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF2D2D] transition-colors leading-tight mb-2">
                      {prog.title}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Quick Benefits Bullet List */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                      {prog.benefits.slice(0, 2).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-[#FF2D2D] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProgram(prog.title);
                      }}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,45,45,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Flame className="w-3.5 h-3.5" />
                      <span>Free Trial</span>
                    </button>
                    <button
                      onClick={() => setSelectedModalProgram(prog)}
                      className="p-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
                      aria-label="View program details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedModalProgram && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalProgram(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 p-6 sm:p-8"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[#FF2D2D] text-xs font-mono uppercase tracking-widest font-bold">
                    {selectedModalProgram.category} • {selectedModalProgram.duration}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-white mt-1">
                    {selectedModalProgram.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedModalProgram(null)}
                  className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/5"
                >
                  ✕
                </button>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {selectedModalProgram.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Key Transformational Outcomes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedModalProgram.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-[#0A0A0A] p-2.5 rounded-lg border border-white/5 text-xs text-zinc-200"
                    >
                      <Check className="w-4 h-4 text-[#FF2D2D] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0A0A0A] p-4 rounded-xl border border-white/5 mb-6 text-xs text-zinc-400">
                <span className="text-white font-semibold">Recommended for: </span>
                {selectedModalProgram.suitableFor}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    const title = selectedModalProgram.title;
                    setSelectedModalProgram(null);
                    onSelectProgram(title);
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-[#FF2D2D] text-white font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(255,45,45,0.4)] cursor-pointer"
                >
                  Book 1-Day Trial in this Program
                </button>
                <button
                  onClick={() => setSelectedModalProgram(null)}
                  className="px-5 py-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
