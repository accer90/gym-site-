export interface PlanTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: string; // "₹ XXX" placeholder for owner to set
  yearlyPrice: string;  // "₹ XXX" placeholder for owner to set
  monthlyPeriod: string;
  yearlyPeriod: string;
  description: string;
  features: string[];
  unavailableFeatures?: string[];
  ctaText: string;
}

export const membershipPlans: PlanTier[] = [
  {
    id: "basic",
    name: "BASIC",
    tagline: "Essential Access for Consistent Gains",
    monthlyPrice: "₹ XXX",
    yearlyPrice: "₹ XXX",
    monthlyPeriod: "per month",
    yearlyPeriod: "billed annually",
    description: "Ideal for self-motivated lifters who need premium equipment and solid workout atmosphere.",
    features: [
      "Full access to Heavy Weight & Cardio Floor",
      "Morning & Evening flexible entry",
      "Locker & shower facilities access",
      "Basic induction & machine guidance",
      "Free high-speed Gym Wi-Fi & Water Station",
      "Mobile App workout tracking",
    ],
    unavailableFeatures: [
      "Group CrossFit & HIIT studio classes",
      "Personalized diet & nutrition blueprint",
      "Dedicated 1-on-1 personal coach sessions",
      "Steam & Recovery lounge access",
    ],
    ctaText: "Start Basic Plan",
  },
  {
    id: "pro",
    name: "PRO ATHLETE",
    tagline: "Most Popular Choice for Fast Results",
    badge: "MOST POPULAR",
    popular: true,
    monthlyPrice: "₹ XXX",
    yearlyPrice: "₹ XXX",
    monthlyPeriod: "per month",
    yearlyPeriod: "billed annually (Save 25%)",
    description: "The complete transformation package with coach supervision, classes, and personalized guidance.",
    features: [
      "Unlimited 24/7 priority floor & machine access",
      "All Group HIIT, CrossFit & Functional classes included",
      "Complete Body Composition (InBody) analysis monthly",
      "Custom Macro & Nutrition Meal Plan tailored for Ramnagar diet",
      "2 Monthly 1-on-1 Personal Trainer assessment sessions",
      "Full access to Steam & Cold Recovery Lounge",
      "Free ACE Gym Shaker & Workout Merchandise",
      "Locker room & private towel service",
    ],
    unavailableFeatures: [
      "Daily unlimited 1-on-1 personal training",
    ],
    ctaText: "Claim Pro Membership",
  },
  {
    id: "elite",
    name: "ELITE VIP",
    tagline: "Maximum Transformation with 1-on-1 Coaching",
    badge: "VIP EXPERIENCE",
    monthlyPrice: "₹ XXX",
    yearlyPrice: "₹ XXX",
    monthlyPeriod: "per month",
    yearlyPeriod: "billed annually (VIP Perks)",
    description: "For individuals demanding elite personal coaching, bespoke training programs, and priority VIP amenities.",
    features: [
      "All PRO tier benefits with zero restrictions",
      "Dedicated 1-on-1 Senior Master Trainer (12 sessions/mo)",
      "Weekly tailored nutrition adjustments & progress audits",
      "Reserved VIP Locker with personalized kit",
      "Complementary Pre-workout & Whey Protein bar allowance",
      "Injury rehabilitation & mobility assessment",
      "Priority equipment booking during peak hours",
      "Unlimited guest day-passes (bring a training buddy)",
    ],
    ctaText: "Join Elite VIP",
  },
];
