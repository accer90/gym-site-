"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, Target, Flame, Users, CheckCircle, MapPin, Dumbbell } from "lucide-react";
import { contactData } from "@/data/contact";

function CounterItem({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // ms

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      // easeOutExpo
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeVal * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start p-4">
      <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight flex items-center">
        <span>{count.toLocaleString()}</span>
        <span className="text-[#FF2D2D] ml-0.5">{suffix}</span>
      </div>
      <p className="text-zinc-400 text-xs sm:text-sm font-medium uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}

export function AboutSection({ onOpenTrial }: { onOpenTrial: () => void }) {
  const features = [
    "Biomechanical Precision & Olympic Lifting Platforms",
    "Certified K11 & CSCS Strength Coaches on the floor",
    "Tailored Diet & Macro Blueprint for Uttarakhand lifters",
    "Hygienic, Fully Air-Conditioned High-Ceiling Facility",
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background glow & noise */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF2D2D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF2D2D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <Flame className="w-3.5 h-3.5" /> OUR ORIGIN & PHILOSOPHY
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase text-center sm:text-left">
            BUILT FOR THOSE WHO <span className="text-[#FF2D2D]">NEVER SETTLE</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl mt-3 text-center sm:text-left">
            ACE GYM was forged in Bharatpuri, Ramnagar to disrupt mediocre workouts. We built a hardcore yet luxury haven where work ethic meets world-class iron.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            {/* Main Image Frame */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                alt="ACE GYM Training Floor in Ramnagar"
                fill
                className="object-cover filter contrast-[1.1] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              {/* Float Card over image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF2D2D] flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_#FF2D2D]">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Ramnagar&apos;s Heavy Iron Hub</h4>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      Dumbbells up to 60 kg • 5 Power Racks • Sled Turf
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent badge decorative element */}
            <div className="absolute -top-4 -right-4 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-2xl bg-[#FF2D2D] text-white p-3 shadow-[0_0_30px_rgba(255,45,45,0.5)] rotate-3">
              <span className="font-display text-3xl font-black leading-none">EST.</span>
              <span className="font-display text-3xl font-black leading-none">2018</span>
              <span className="text-[10px] uppercase font-mono tracking-wider mt-1">Ramnagar</span>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase mb-4">
              WHERE DISCIPLINE CONQUERS <span className="text-[#FF2D2D]">EVERY EXCUSE</span>
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              Located in the heart of Bharatpuri (Ramnagar, Nainital), ACE GYM is not your casual social lounge. We are an obsession-driven community of lifters, athletes, working professionals, and newcomers who show up day after day to demand more of themselves.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              Whether your mission is cutting 20 kg of stubborn body fat, adding 50 kg to your deadlift, or reclaiming the vitality to dominate your daily career, our coaching staff provides the roadmap, intensity, and brotherhood to guarantee your results.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF2D2D]/15 border border-[#FF2D2D] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF2D2D]" />
                  </div>
                  <span className="text-zinc-200 text-xs sm:text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,45,45,0.4)] cursor-pointer"
              >
                Experience ACE GYM Free
              </button>
              <a
                href={contactData.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#FF2D2D]" />
                Get Directions (Bharatpuri)
              </a>
            </div>
          </div>
        </div>

        {/* Animated Stats Banner */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#141414]/70 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8">
            <CounterItem end={1200} suffix="+" label="Active Lifters" />
            <CounterItem end={15} suffix="+" label="Certified Coaches" />
            <CounterItem end={8} suffix="+" label="Years of Grit" />
            <CounterItem end={950} suffix="+" label="Transformations" />
          </div>
        </div>
      </div>
    </section>
  );
}
