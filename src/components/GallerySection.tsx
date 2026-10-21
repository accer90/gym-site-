"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";

export function GallerySection() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "weights", label: "Free Weights" },
    { id: "functional", label: "Functional Turf" },
    { id: "cardio", label: "Cardio Arena" },
    { id: "amenities", label: "Locker & Steam" },
  ];

  const filteredItems =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
              <Camera className="w-3.5 h-3.5" /> INSIDE OUR ARENA
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
              WORLD-CLASS <span className="text-[#FF2D2D]">FACILITIES</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Inspect our high-ceiling, air-purified training grounds in Bharatpuri, Ramnagar. Built with the finest steel, biomechanics, and luxury amenities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat.id
                    ? "bg-[#FF2D2D] text-white shadow-[0_0_15px_#FF2D2D]"
                    : "bg-[#141414] text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIdx(idx)}
                className="group relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 cursor-pointer shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Corner Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#FF2D2D]" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2D2D] font-bold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white tracking-wide mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
            {/* Close */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 z-50 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-[#FF2D2D] z-50 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-white/10 hover:bg-[#FF2D2D] z-50 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image & Caption */}
            <div className="max-w-5xl w-full flex flex-col items-center">
              <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src={filteredItems[lightboxIdx].image}
                  alt={filteredItems[lightboxIdx].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-[#FF2D2D] text-xs font-mono uppercase tracking-widest font-bold">
                  {filteredItems[lightboxIdx].categoryLabel}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white mt-1">
                  {filteredItems[lightboxIdx].title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mt-1">
                  {filteredItems[lightboxIdx].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
