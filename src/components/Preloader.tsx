"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-[#0A0A0A] p-8 select-none overflow-hidden"
        >
          {/* Subtle background red glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2D2D]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top tag */}
          <div className="w-full max-w-6xl flex justify-between items-center text-xs tracking-widest text-zinc-500 font-mono">
            <span>RAMNAGAR • UTTARAKHAND</span>
            <span className="text-[#FF2D2D] font-bold">EST. 2018</span>
          </div>

          {/* Center Brand and Tagline */}
          <div className="flex flex-col items-center text-center my-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h1 className="font-display text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-white leading-none">
                ACE <span className="text-[#FF2D2D] drop-shadow-[0_0_35px_rgba(255,45,45,0.6)]">GYM</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-2 flex items-center gap-3"
            >
              <span className="h-[1px] w-8 sm:w-16 bg-[#FF2D2D]" />
              <p className="font-display tracking-[0.25em] text-lg sm:text-2xl text-zinc-300 font-semibold uppercase">
                NEVER GIVE UP
              </p>
              <span className="h-[1px] w-8 sm:w-16 bg-[#FF2D2D]" />
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
              <span className="tracking-widest uppercase">HARDCORE FITNESS SANCTUARY</span>
              <span className="text-[#FF2D2D] font-bold">{progress}%</span>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#FF2D2D] shadow-[0_0_12px_#FF2D2D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
