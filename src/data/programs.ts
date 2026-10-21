export interface Program {
  id: string;
  title: string;
  tagline: string;
  category: string;
  intensity: "Moderate" | "High" | "Extreme";
  duration: string;
  description: string;
  benefits: string[];
  image: string;
  suitableFor: string;
}

export const programsData: Program[] = [
  {
    id: "strength-training",
    title: "HEAVY STRENGTH & HYPERTROPHY",
    tagline: "Build Raw Power, Thick Muscle Density & Peak Resilience",
    category: "Bodybuilding & Powerlifting",
    intensity: "Extreme",
    duration: "60 - 75 Mins",
    description:
      "Progressive overload programming utilizing calibrated Olympic barbells, custom dumbells up to 60kg, power cages, and biomechanically aligned pin & plate-loaded machines.",
    benefits: [
      "Significant gains in lean muscle mass & structural strength",
      "Increases bone density and metabolic burn rate",
      "Corrects posture and joint alignment under load",
      "Mastery of compound lifts: Squat, Bench, Deadlift, Overhead Press",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    suitableFor: "Beginners to Advanced Lifters wanting pure size and power",
  },
  {
    id: "hiit-blitz",
    title: "HIIT METABOLIC BLITZ",
    tagline: "Torch 800+ Calories in Short, High-Intensity Rounds",
    category: "Fat Loss & Conditioning",
    intensity: "Extreme",
    duration: "45 Mins",
    description:
      "Explosive interval circuits pairing assault bikes, battle ropes, plyometrics, and kettlebell complexes to ignite the afterburn effect (EPOC) for 36 hours post-workout.",
    benefits: [
      "Maximum calorie expenditure in minimal session time",
      "Dramatically increases VO2 Max & heart endurance",
      "Rapidly strips stubborn abdominal fat while preserving muscle",
      "High adrenaline group workout vibe to push past failure",
    ],
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1200&auto=format&fit=crop",
    suitableFor: "Time-strapped individuals looking for rapid fat burning",
  },
  {
    id: "crossfit-functional",
    title: "CROSS TRAINING & FUNCTIONAL ATHLETICISM",
    tagline: "Unchain Real-World Agility, Stamina & Mental Fortitude",
    category: "Functional Fitness",
    intensity: "High",
    duration: "50 Mins",
    description:
      "Designed for all-round functional dominance. Tire flips, sled pushes on artificial turf, gymnastics rings, medicine ball slams, and farmer walks.",
    benefits: [
      "Multi-planar functional movement applicable to sports and daily life",
      "High core stability and spine protection",
      "Explosive rotational power and balance",
      "Team-driven WOD (Workout of the Day) culture",
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    suitableFor: "Athletes, youth, and anyone who despises boring workouts",
  },
  {
    id: "cardio-endurance",
    title: "CARDIO ENDURANCE & PERFORMANCE",
    tagline: "Fortify Heart Health, Stamina & Lung Capacity",
    category: "Cardiovascular Health",
    intensity: "Moderate",
    duration: "45 - 60 Mins",
    description:
      "Our cardio cinema deck features commercial incline treadmills, curved self-powered runners, stairmasters, water rowers, and spin bikes with live heart rate telemetry.",
    benefits: [
      "Lowers resting heart rate and reduces cardiovascular disease risk",
      "Boosts daily stamina and reduces fatigue",
      "Joint-friendly low impact and incline walking protocols",
      "Enhanced serotonin and stress relief after a long workday",
    ],
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=1200&auto=format&fit=crop",
    suitableFor: "Heart health seekers, endurance runners, and general fitness",
  },
  {
    id: "weight-loss-shred",
    title: "WEIGHT LOSS & BODY RECOMPOSITION",
    tagline: "Science-Backed Fat Loss with Zero Gimmicks or Starvation",
    category: "Transformation",
    intensity: "High",
    duration: "60 Mins",
    description:
      "Structured fat-loss protocol combining resistance circuits, steady-state cardio, and individualized calorie counting guidance. We focus on preserving muscle while melting stubborn body fat.",
    benefits: [
      "Sustainable lifestyle-based calorie deficit management",
      "Weekly body fat caliper & measurement progress tracking",
      "Tightens loose skin and tones target areas",
      "Dedicated habit coaching to prevent rebound weight gain",
    ],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop",
    suitableFor: "Anyone with 5kg to 30kg+ weight loss goals",
  },
  {
    id: "personal-training",
    title: "1-ON-1 ELITE PERSONAL COACHING",
    tagline: "Your Private Fitness Blueprint with a Dedicated Master Coach",
    category: "Custom Coaching",
    intensity: "Extreme",
    duration: "60 Mins",
    description:
      "Every rep scrutinized, every set calculated. Your dedicated coach designs your tailored split, demonstrates exact posture, pushes you through mental plateaus, and monitors your nutrition daily.",
    benefits: [
      "100% personalized roadmap tailored to your specific biomechanics",
      "Zero guesswork — strict accountability and encouragement",
      "Injury prevention and corrective exercise integration",
      "Fastest measurable progress: achieve 12-month results in 16 weeks",
    ],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
    suitableFor: "Lifters seeking fastest results, VIPs, or injury-rehab cases",
  },
];
