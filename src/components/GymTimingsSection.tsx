"use client";

import React, { useState, useEffect } from "react";
import { Clock, Sun, Moon, Calendar, Flame, AlertCircle } from "lucide-react";
import { contactData } from "@/data/contact";

interface StatusInfo {
  isOpen: boolean;
  sessionName: string;
  nextSessionText: string;
  istTimeString: string;
}

export function GymTimingsSection({ onOpenTrial }: { onOpenTrial: () => void }) {
  const [status, setStatus] = useState<StatusInfo>({
    isOpen: false,
    sessionName: "Checking...",
    nextSessionText: "Morning Session opens at 4:30 AM IST",
    istTimeString: "--:--:-- IST",
  });

  useEffect(() => {
    const checkGymStatus = () => {
      // Get current date/time converted to Asia/Kolkata
      const now = new Date();
      const istDate = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      const dayOfWeek = istDate.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const timeFormatter = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const istTimeString = `${timeFormatter.format(now)} IST`;

      // Sunday logic: 06:00 to 12:00
      if (dayOfWeek === 0) {
        const sunOpen = 6 * 60; // 360
        const sunClose = 12 * 60; // 720
        if (currentMinutes >= sunOpen && currentMinutes < sunClose) {
          setStatus({
            isOpen: true,
            sessionName: "Sunday Active Recovery & Cardio",
            nextSessionText: "Closes at 12:00 PM today",
            istTimeString,
          });
          return;
        } else {
          setStatus({
            isOpen: false,
            sessionName: "Closed for Sunday Rest",
            nextSessionText: "Monday Morning Session opens at 4:30 AM",
            istTimeString,
          });
          return;
        }
      }

      // Monday to Saturday:
      // Morning: 04:30 to 10:00 (270 min to 600 min)
      // Evening: 16:00 to 22:00 (960 min to 1320 min)
      const morningOpen = 4 * 60 + 30; // 270
      const morningClose = 10 * 60; // 600
      const eveningOpen = 16 * 60; // 960
      const eveningClose = 22 * 60; // 1320

      if (currentMinutes >= morningOpen && currentMinutes < morningClose) {
        setStatus({
          isOpen: true,
          sessionName: "Morning Prime Session",
          nextSessionText: "Floor closes at 10:00 AM (Re-opens 4:00 PM)",
          istTimeString,
        });
      } else if (currentMinutes >= eveningOpen && currentMinutes < eveningClose) {
        setStatus({
          isOpen: true,
          sessionName: "Evening High-Energy Session",
          nextSessionText: "Floor closes at 10:00 PM tonight",
          istTimeString,
        });
      } else if (currentMinutes < morningOpen) {
        setStatus({
          isOpen: false,
          sessionName: "Early Hours Pre-Open",
          nextSessionText: "Morning Session opens at 4:30 AM today",
          istTimeString,
        });
      } else if (currentMinutes >= morningClose && currentMinutes < eveningOpen) {
        setStatus({
          isOpen: false,
          sessionName: "Mid-Day Deep Cleaning & Rest",
          nextSessionText: "Evening Session opens at 4:00 PM today",
          istTimeString,
        });
      } else {
        setStatus({
          isOpen: false,
          sessionName: "Night Facility Maintenance",
          nextSessionText: "Morning Session opens tomorrow at 4:30 AM",
          istTimeString,
        });
      }
    };

    checkGymStatus();
    const interval = setInterval(checkGymStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timings" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <Clock className="w-3.5 h-3.5" /> OPERATIONAL HOURS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            GYM <span className="text-[#FF2D2D]">TIMINGS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Built for peak schedules. Start early at 4:30 AM before the town wakes up, or power through our evening 4:00 PM to 10:00 PM block.
          </p>
        </div>

        {/* Live Status Header Banner */}
        <div className="max-w-3xl mx-auto mb-10 bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF2D2D] to-transparent" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              {/* Pulsing beacon */}
              <div
                className={`relative flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 ${
                  status.isOpen ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" : "bg-[#FF2D2D]/10 border border-[#FF2D2D]/30 text-[#FF2D2D]"
                }`}
              >
                <span
                  className={`animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-60 ${
                    status.isOpen ? "bg-emerald-500" : "bg-[#FF2D2D]"
                  }`}
                />
                <span
                  className={`relative w-4 h-4 rounded-full ${
                    status.isOpen ? "bg-emerald-500 shadow-[0_0_12px_#10B981]" : "bg-[#FF2D2D] shadow-[0_0_12px_#FF2D2D]"
                  }`}
                />
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      status.isOpen
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-[#FF2D2D]/20 text-[#FF2D2D] border border-[#FF2D2D]/30"
                    }`}
                  >
                    {status.isOpen ? "● OPEN NOW IN RAMNAGAR" : "● CURRENTLY CLOSED"}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                  {status.sessionName}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-0.5 font-mono">
                  {status.nextSessionText}
                </p>
              </div>
            </div>

            {/* Live Clock Digital Badge */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-center shrink-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Current Time (Asia/Kolkata)
              </div>
              <div className="font-mono text-base sm:text-lg font-bold text-white tracking-wider mt-0.5 text-[#FF2D2D]">
                {status.istTimeString}
              </div>
            </div>
          </div>
        </div>

        {/* Timings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Morning Slot */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#FF2D2D]/40 transition-colors group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Sun className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                Monday – Saturday
              </span>
              <h3 className="font-display text-3xl font-black text-white mt-1">
                MORNING SESSION
              </h3>
              <div className="font-display text-4xl text-[#FF2D2D] tracking-tight my-4">
                4:30 AM – 10:00 AM
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Ideal for sunrise lifters, corporate executives, and students wanting peak cognitive focus before starting their day.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#FF2D2D]" /> Heavy Compound Lifts & Cardio
            </div>
          </div>

          {/* Evening Slot */}
          <div className="bg-[#161616] border-2 border-[#FF2D2D]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(255,45,45,0.2)] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FF2D2D]/10 border border-[#FF2D2D]/30 text-[#FF2D2D] flex items-center justify-center mb-6">
                <Moon className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF2D2D] font-bold">
                  Monday – Saturday
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FF2D2D]/20 text-[#FF2D2D]">
                  PEAK ENERGY
                </span>
              </div>
              <h3 className="font-display text-3xl font-black text-white mt-1">
                EVENING SESSION
              </h3>
              <div className="font-display text-4xl text-white tracking-tight my-4">
                4:00 PM – 10:00 PM
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                High octane pumping atmosphere. Complete coach guidance on the floor, high-tempo playlists, and post-work sweat sessions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#FF2D2D]" /> Group HIIT & Cross Training
            </div>
          </div>

          {/* Sunday Active Recovery */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                Sunday Slot
              </span>
              <h3 className="font-display text-3xl font-black text-white mt-1">
                SUNDAY RECOVERY
              </h3>
              <div className="font-display text-4xl text-zinc-200 tracking-tight my-4">
                6:00 AM – 12:00 PM
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Dedicated half-day session focused on mobility drills, light cardio, steam room therapy, and mental preparation for the week.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-zinc-500" /> Evening Closed for Maintenance
            </div>
          </div>
        </div>

        {/* CTA Banner inside Timings */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenTrial}
            className="px-8 py-3.5 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,45,45,0.4)] cursor-pointer"
          >
            Schedule Your Visit For Next Slot
          </button>
        </div>
      </div>
    </section>
  );
}
