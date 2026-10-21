"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Flame, ShieldCheck } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/Icons";
import { trainersData } from "@/data/trainers";

export function TrainersSection() {
  return (
    <section id="trainers" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#FF2D2D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <Award className="w-3.5 h-3.5" /> MASTER COACHING CORPS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            CERTIFIED <span className="text-[#FF2D2D]">IRON MENTORS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3">
            No self-proclaimed influencers. Our coaches hold globally recognized CSCS, K11, and ACE certifications with proven track records in Ramnagar.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer) => (
            <motion.div
              key={trainer.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-[#FF2D2D]/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame with Grayscale to Color Transition on Hover */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0A0A0A]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                  {trainer.experience}
                </div>

                {/* Social Links on Hover */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {trainer.socials.instagram && (
                    <a
                      href={trainer.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A0A0A]/90 border border-white/10 flex items-center justify-center text-white hover:text-[#FF2D2D] transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.facebook && (
                    <a
                      href={trainer.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A0A0A]/90 border border-white/10 flex items-center justify-center text-white hover:text-[#FF2D2D] transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.youtube && (
                    <a
                      href={trainer.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A0A0A]/90 border border-white/10 flex items-center justify-center text-white hover:text-[#FF2D2D] transition-colors"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Trainer Meta Details */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2D2D] font-bold">
                    {trainer.role}
                  </span>
                  <h3 className="font-display text-2xl font-black text-white group-hover:text-[#FF2D2D] transition-colors mt-0.5">
                    {trainer.name}
                  </h3>

                  {/* Quote */}
                  <p className="text-zinc-400 text-xs italic mt-2 line-clamp-2">
                    &ldquo;{trainer.quote}&rdquo;
                  </p>

                  {/* Certifications Tag */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                    {trainer.certifications.slice(0, 2).map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties List */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-1">
                    Specialties:
                  </div>
                  <div className="text-xs text-zinc-300 font-medium">
                    {trainer.specialties.join(" • ")}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
