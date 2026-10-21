"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { TrainersSection } from "@/components/TrainersSection";
import { TransformationsSection } from "@/components/TransformationsSection";
import { PlansSection } from "@/components/PlansSection";
import { GallerySection } from "@/components/GallerySection";
import { GymTimingsSection } from "@/components/GymTimingsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BmiCalculatorSection } from "@/components/BmiCalculatorSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FreeTrialModal } from "@/components/FreeTrialModal";

export default function Home() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedProgramOrPlan, setSelectedProgramOrPlan] = useState<string>("Weight Loss & Shred");

  const handleOpenTrial = (prefill?: string) => {
    if (prefill) {
      setSelectedProgramOrPlan(prefill);
    }
    setTrialModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden selection:bg-[#FF2D2D] selection:text-white">
      {/* Intro Preloader Curtain Reveal */}
      <Preloader />

      {/* Navigation Header */}
      <Navbar onOpenTrial={() => handleOpenTrial()} />

      {/* 1. Hero Section */}
      <Hero onOpenTrial={() => handleOpenTrial()} />

      {/* 2. Infinite Marquee Ticker */}
      <MarqueeStrip />

      {/* 3. About Section with Animated Counter Stats */}
      <AboutSection onOpenTrial={() => handleOpenTrial()} />

      {/* 4. Programs Interactive Cards */}
      <ProgramsSection onSelectProgram={(title) => handleOpenTrial(title)} />

      {/* 5. Trainers Corps */}
      <TrainersSection />

      {/* 6. Member Transformations (Interactive Before/After Slider) */}
      <TransformationsSection onOpenTrial={() => handleOpenTrial()} />

      {/* 7. Membership Plans (Basic, Pro, Elite with Monthly/Yearly toggle) */}
      <PlansSection onSelectPlan={(plan) => handleOpenTrial(plan)} />

      {/* 8. Facilities Gallery with Lightbox */}
      <GallerySection />

      {/* 9. Gym Timings with Live Asia/Kolkata Open/Closed Status Badge */}
      <GymTimingsSection onOpenTrial={() => handleOpenTrial()} />

      {/* 10. Member Testimonials Carousel */}
      <TestimonialsSection />

      {/* 11. BMI & Daily Calorie Calculator Widget */}
      <BmiCalculatorSection onOpenTrial={() => handleOpenTrial()} />

      {/* 12. FAQ Accordion */}
      <FaqSection />

      {/* 13. Final CTA Banner ("YOUR FIRST DAY IS FREE") */}
      <CtaBanner onOpenTrial={() => handleOpenTrial()} />

      {/* 14. Contact Form & Ramnagar Google Map */}
      <ContactSection />

      {/* 15. Footer */}
      <Footer />

      {/* Global Free Trial Booking Modal */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        defaultPlan={selectedProgramOrPlan}
      />
    </main>
  );
}
