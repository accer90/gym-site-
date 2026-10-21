"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Sparkles, Flame, HelpCircle } from "lucide-react";
import { membershipPlans } from "@/data/plans";
import { contactData } from "@/data/contact";

interface PlansSectionProps {
  onSelectPlan: (planName: string) => void;
}

export function PlansSection({ onSelectPlan }: PlansSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="plans" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF2D2D]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <Shield className="w-3.5 h-3.5" /> NO HIDDEN FEES • PURE RESULTS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            MEMBERSHIP <span className="text-[#FF2D2D]">TIERS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Flexible enrollment plans designed for beginners to competitive athletes. All plans include full access to Ramnagar&apos;s best lifting floor.
          </p>

          {/* Billing Interval Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#141414] border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#FF2D2D] text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-[#FF2D2D] text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Annual Pass</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                SAVE 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Tiers) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {membershipPlans.map((plan) => {
            const isHighlighted = plan.popular;
            const currentPrice = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const currentPeriod = billingCycle === "monthly" ? plan.monthlyPeriod : plan.yearlyPeriod;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? "bg-[#161616] border-2 border-[#FF2D2D] shadow-[0_0_45px_rgba(255,45,45,0.3)] lg:-translate-y-2"
                    : "bg-[#141414] border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular Badge */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF2D2D] text-white text-xs font-mono font-black uppercase tracking-widest shadow-[0_0_15px_#FF2D2D] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-wide">
                        {plan.name}
                      </h3>
                      <p className="text-zinc-400 text-xs mt-1">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight">
                        {currentPrice}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 uppercase">
                        / {currentPeriod}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      *Official rates are finalized at our Bharatpuri desk based on ongoing offers.
                    </p>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                      What&apos;s Included:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <div className="w-4 h-4 rounded-full bg-[#FF2D2D]/20 text-[#FF2D2D] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.unavailableFeatures && plan.unavailableFeatures.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-40">
                        {plan.unavailableFeatures.map((unfeat, uIdx) => (
                          <div key={uIdx} className="flex items-start gap-2.5 text-xs text-zinc-500 line-through">
                            <X className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                            <span>{unfeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isHighlighted
                        ? "bg-[#FF2D2D] hover:bg-[#E02020] text-white shadow-[0_0_25px_rgba(255,45,45,0.4)]"
                        : "bg-[#0A0A0A] hover:bg-[#FF2D2D] text-white border border-white/10 hover:border-[#FF2D2D]"
                    }`}
                  >
                    <Flame className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                  </button>

                  <p className="text-center text-[10px] text-zinc-500 mt-2 font-mono">
                    Instant onboarding • Free induction session included
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Pricing & Customization */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            Looking for corporate group discounts or student passes?{" "}
            <a
              href={`https://wa.me/91${contactData.whatsapp}?text=${encodeURIComponent(
                "Hi ACE GYM! I would like to inquire about Student / Corporate membership discounts."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2D2D] hover:underline"
            >
              Inquire via WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
