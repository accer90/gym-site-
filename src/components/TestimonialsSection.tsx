"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const item = testimonialsData[currentIdx];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" /> REPUTATION IN RAMNAGAR
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            WHAT THE <span className="text-[#FF2D2D]">TRIBE SAYS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Real stories from local professionals, athletes, and fitness enthusiasts who train at ACE GYM Bharatpuri every day.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-4xl mx-auto relative"
        >
          <div className="relative bg-[#141414] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[340px] flex flex-col justify-between">
            {/* Top red glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2D2D]/10 rounded-full blur-[100px] pointer-events-none" />

            <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FF2D2D] text-[#FF2D2D]" />
                    ))}
                    <span className="ml-2 px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-zinc-300">
                      Verified Google Review
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-white text-lg sm:text-2xl font-medium leading-relaxed italic mb-8">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Member Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF2D2D] shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display text-2xl font-bold text-white tracking-wide">
                          {item.name}
                        </h4>
                        <CheckCircle2 className="w-4 h-4 text-[#FF2D2D]" />
                      </div>
                      <p className="text-zinc-400 text-xs">{item.role}</p>
                      <span className="text-[10px] font-mono text-zinc-500">{item.duration}</span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="bg-[#0A0A0A] border border-white/10 px-4 py-2 rounded-xl text-left sm:text-right">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF2D2D] font-bold">
                      Personal Milestone
                    </div>
                    <div className="text-xs text-white font-medium mt-0.5">
                      {item.achievement}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIdx === idx ? "w-8 bg-[#FF2D2D]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#141414] border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#141414] border border-white/10 hover:border-[#FF2D2D] hover:bg-[#FF2D2D] text-white flex items-center justify-center transition-all cursor-pointer shadow-[0_0_15px_rgba(255,45,45,0.2)]"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
