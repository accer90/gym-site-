"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Flame, Dumbbell, Activity, CheckCircle, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function BmiCalculatorSection({ onOpenTrial }: { onOpenTrial: () => void }) {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(9);
  const [weightLbs, setWeightLbs] = useState<number>(165);
  const [age, setAge] = useState<number>(26);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<number>(1.55); // moderate

  const [bmiResult, setBmiResult] = useState<{
    bmi: number;
    category: string;
    categoryColor: string;
    tdee: number;
    idealWeightMin: number;
    idealWeightMax: number;
    recommendedProgram: string;
  } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();

    let hM = 0;
    let wKg = 0;

    if (unit === "metric") {
      hM = heightCm / 100;
      wKg = weightKg;
    } else {
      const totalInches = heightFeet * 12 + heightInches;
      hM = (totalInches * 2.54) / 100;
      wKg = weightLbs * 0.453592;
    }

    if (hM <= 0 || wKg <= 0) return;

    const bmi = parseFloat((wKg / (hM * hM)).toFixed(1));

    let category = "Normal weight";
    let categoryColor = "#10B981"; // green
    let recommendedProgram = "HEAVY STRENGTH & HYPERTROPHY";

    if (bmi < 18.5) {
      category = "Underweight (Need Lean Bulk)";
      categoryColor = "#3B82F6"; // blue
      recommendedProgram = "PRO ATHLETE HYPERTROPHY & MASS GAIN";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Optimal Athletic Range";
      categoryColor = "#10B981"; // emerald
      recommendedProgram = "FUNCTIONAL ATHLETICISM & STRENGTH";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight (Shred Potential)";
      categoryColor = "#F59E0B"; // amber
      recommendedProgram = "HIIT METABOLIC BLITZ & FAT LOSS";
    } else {
      category = "High Body Fat (Need Recomposition)";
      categoryColor = "#FF2D2D"; // red
      recommendedProgram = "1-ON-1 WEIGHT LOSS & BODY RECOMPOSITION";
    }

    // Mifflin-St Jeor equation for BMR
    let bmr = 10 * wKg + 6.25 * (hM * 100) - 5 * age;
    bmr = gender === "male" ? bmr + 5 : bmr - 161;
    const tdee = Math.round(bmr * activity);

    // Ideal weight based on BMI 18.5 to 24.9
    const idealWeightMin = Math.round(18.5 * hM * hM);
    const idealWeightMax = Math.round(24.9 * hM * hM);

    setBmiResult({
      bmi,
      category,
      categoryColor,
      tdee,
      idealWeightMin,
      idealWeightMax,
      recommendedProgram,
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#FF2D2D", "#FFFFFF", "#10B981"],
    });
  };

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#FF2D2D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF2D2D] mb-3">
            <Calculator className="w-3.5 h-3.5" /> SCIENCE-DRIVEN PHYSIQUE METRICS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            CALCULATE YOUR <span className="text-[#FF2D2D]">STARTING POINT</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Get an instant breakdown of your Body Mass Index (BMI), daily maintenance calories (TDEE), and our recommended training split.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Unit Toggle & Gender */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-zinc-400">Unit:</span>
              <div className="inline-flex p-1 rounded-xl bg-[#0A0A0A] border border-white/10">
                <button
                  type="button"
                  onClick={() => setUnit("metric")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${
                    unit === "metric" ? "bg-[#FF2D2D] text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("imperial")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${
                    unit === "imperial" ? "bg-[#FF2D2D] text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Imperial (ft / lbs)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-zinc-400">Gender:</span>
              <div className="inline-flex p-1 rounded-xl bg-[#0A0A0A] border border-white/10">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${
                    gender === "male" ? "bg-[#FF2D2D] text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${
                    gender === "female" ? "bg-[#FF2D2D] text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>

          {/* Form Grid */}
          <form onSubmit={calculate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Height Input */}
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-2">
                  Height {unit === "metric" ? "(cm)" : "(ft & in)"}
                </label>
                {unit === "metric" ? (
                  <input
                    type="number"
                    min="100"
                    max="250"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-[#FF2D2D]"
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      min="3"
                      max="7"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(Number(e.target.value))}
                      placeholder="ft"
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3 py-3 text-white font-mono text-center focus:outline-none focus:border-[#FF2D2D]"
                    />
                    <input
                      type="number"
                      min="0"
                      max="11"
                      value={heightInches}
                      onChange={(e) => setHeightInches(Number(e.target.value))}
                      placeholder="in"
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3 py-3 text-white font-mono text-center focus:outline-none focus:border-[#FF2D2D]"
                    />
                  </div>
                )}
              </div>

              {/* Weight Input */}
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-2">
                  Weight {unit === "metric" ? "(kg)" : "(lbs)"}
                </label>
                {unit === "metric" ? (
                  <input
                    type="number"
                    min="30"
                    max="220"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-[#FF2D2D]"
                  />
                ) : (
                  <input
                    type="number"
                    min="60"
                    max="450"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-[#FF2D2D]"
                  />
                )}
              </div>

              {/* Age Input */}
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-2">
                  Age (Years)
                </label>
                <input
                  type="number"
                  min="14"
                  max="90"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-[#FF2D2D]"
                />
              </div>
            </div>

            {/* Activity Level Selector */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-zinc-400 mb-2">
                Daily Activity Level
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF2D2D]"
              >
                <option value={1.2}>Sedentary (Desk job, minimal exercise)</option>
                <option value={1.375}>Lightly Active (Light exercise 1-3 days/week)</option>
                <option value={1.55}>Moderately Active (Gym workouts 3-5 days/week)</option>
                <option value={1.725}>Very Active (Hard heavy lifting 6-7 days/week)</option>
                <option value={1.9}>Extra Active (Intense athlete training & physical job)</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(255,45,45,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Activity className="w-4 h-4" /> Calculate My Metrics & Target Plan
            </button>
          </form>

          {/* Results Display */}
          {bmiResult && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* BMI Card */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-zinc-500 text-xs font-mono uppercase">BMI Score</div>
                  <div
                    className="font-display text-5xl font-black mt-1"
                    style={{ color: bmiResult.categoryColor }}
                  >
                    {bmiResult.bmi}
                  </div>
                  <div
                    className="text-xs font-bold uppercase mt-1"
                    style={{ color: bmiResult.categoryColor }}
                  >
                    {bmiResult.category}
                  </div>
                </div>

                {/* Maintenance Calories (TDEE) */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-zinc-500 text-xs font-mono uppercase">Daily Calories (TDEE)</div>
                  <div className="font-display text-5xl font-black text-white mt-1">
                    {bmiResult.tdee}
                  </div>
                  <div className="text-xs text-zinc-400 uppercase mt-1">
                    Calories / Day to Maintain
                  </div>
                </div>

                {/* Ideal Weight Range */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-zinc-500 text-xs font-mono uppercase">Ideal Target Weight</div>
                  <div className="font-display text-5xl font-black text-white mt-1">
                    {bmiResult.idealWeightMin} - {bmiResult.idealWeightMax}
                  </div>
                  <div className="text-xs text-zinc-400 uppercase mt-1">
                    kg (Healthy BMI Range)
                  </div>
                </div>
              </div>

              {/* Recommended ACE GYM Program */}
              <div className="bg-gradient-to-r from-[#1E1111] to-[#141414] border border-[#FF2D2D]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2D2D] font-bold">
                    RECOMMENDED ACE PROGRAM FOR YOU
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl text-white mt-0.5">
                    {bmiResult.recommendedProgram}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-1">
                    Designed to accelerate your metabolic output and achieve your ideal frame.
                  </p>
                </div>
                <button
                  onClick={onOpenTrial}
                  className="px-6 py-3 rounded-xl bg-[#FF2D2D] hover:bg-[#E02020] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_#FF2D2D] shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Start This Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
