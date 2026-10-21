"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Flame, Clock, Dumbbell } from "lucide-react";
import { contactData } from "@/data/contact";

interface NavbarProps {
  onOpenTrial: () => void;
}

export function Navbar({ onOpenTrial }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Results", href: "#results" },
    { label: "Plans", href: "#plans" },
    { label: "Gallery", href: "#gallery" },
    { label: "Timings", href: "#timings" },
    { label: "Calculator", href: "#calculator" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5"
              : "bg-transparent py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 select-none"
              aria-label="ACE GYM Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FF2D2D] flex items-center justify-center text-white font-black shadow-[0_0_20px_rgba(255,45,45,0.5)] group-hover:scale-105 transition-transform">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-white">
                    ACE
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-[#FF2D2D]">
                    GYM
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-[0.25em] text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase">
                  Ramnagar • Nainital
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-xs tracking-wider uppercase font-semibold text-zinc-300 hover:text-white transition-colors group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF2D2D] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${contactData.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF2D2D]" />
                <span>{contactData.phoneFormatted}</span>
              </a>

              <button
                onClick={onOpenTrial}
                className="relative group px-5 py-2.5 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,45,45,0.4)] hover:shadow-[0_0_30px_rgba(255,45,45,0.7)] flex items-center gap-1.5 cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                <span>Free Trial</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF2D2D] flex items-center justify-center text-white">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <span className="font-display text-2xl tracking-wider text-white">
                  ACE <span className="text-[#FF2D2D]">GYM</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4 py-8 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="font-display text-3xl tracking-wide text-zinc-200 hover:text-[#FF2D2D] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full py-4 rounded-xl bg-[#FF2D2D] text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,45,45,0.4)]"
              >
                <Flame className="w-4 h-4" /> Book 1-Day Free Trial
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pt-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF2D2D]" /> 4:30 AM – 10 PM
                </span>
                <a
                  href={`tel:${contactData.phone}`}
                  className="flex items-center gap-1 text-[#FF2D2D] font-bold"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Gym
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
