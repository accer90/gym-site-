"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dumbbell, ArrowUp, Send, CheckCircle2, MapPin, Phone, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/components/Icons";
import { contactData } from "@/data/contact";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-white/10 pt-20 pb-12 overflow-hidden text-zinc-400">
      {/* Top red glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF2D2D] to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF2D2D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 select-none mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF2D2D] flex items-center justify-center text-white font-black shadow-[0_0_20px_rgba(255,45,45,0.4)]">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-display text-3xl font-black text-white">ACE</span>
                  <span className="font-display text-3xl font-black text-[#FF2D2D]">GYM</span>
                </div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-zinc-400 uppercase">
                  Ramnagar • Nainital
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              Ramnagar&apos;s ultimate temple for heavy iron, hypertrophy, CrossFit, and total body transformation. We forge unbreakable discipline.
            </p>

            <div className="font-display text-2xl text-white tracking-widest uppercase mb-6">
              TAGLINE: <span className="text-[#FF2D2D]">NEVER GIVE UP</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={contactData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#FF2D2D] hover:border-[#FF2D2D] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#FF2D2D] hover:border-[#FF2D2D] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#FF2D2D] hover:border-[#FF2D2D] transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">Our Coaches</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">Member Transformations</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">Membership Tiers</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gym Facilities</a>
              </li>
            </ul>
          </div>

          {/* Timings & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-4">
              Timings & Hub
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF2D2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Morning:</span> 4:30 AM – 10:00 AM<br />
                  <span className="text-white font-medium">Evening:</span> 4:00 PM – 10:00 PM<br />
                  <span className="text-zinc-500">Sunday: 6:00 AM – 12:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <MapPin className="w-4 h-4 text-[#FF2D2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Bharatpuri</span>, Ramnagar (Nainital)<br />
                  Uttarakhand 244715, India
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#FF2D2D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-mono font-medium">{contactData.phoneFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-4">
              VIP Workout Drops
            </h4>
            <p className="text-xs text-zinc-400 mb-4">
              Get monthly nutrition guides, lifting tips, and special membership discounts delivered to your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#FF2D2D]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#FF2D2D] hover:bg-[#E02020] text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-zinc-600 font-mono">
                  Zero spam. Unsubscribe anytime.
                </span>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>You&apos;re subscribed to ACE Gym VIP updates!</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 <span className="text-zinc-200">ACE GYM</span>. Never Give Up. Ramnagar, Bharatpuri (Nainital).
          </div>

          <div className="flex items-center gap-6">
            <span>Built for Elite Performance</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
