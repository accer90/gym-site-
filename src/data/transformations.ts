export interface Transformation {
  id: string;
  name: string;
  age: number;
  duration: string;
  weightLoss: string;
  bodyFatChange: string;
  program: string;
  trainer: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
  story: string;
}

export const transformationsData: Transformation[] = [
  {
    id: "rahul-kandpal",
    name: "Rahul Kandpal",
    age: 28,
    duration: "16 Weeks",
    weightLoss: "-18 kg",
    bodyFatChange: "29% → 13%",
    program: "Weight Loss Shred & Heavy Lifting",
    trainer: "Coach Vikram",
    quote: "I used to get exhausted climbing the stairs in Ramnagar market. ACE GYM completely rebuilt my lifestyle and mental discipline.",
    // Moody transformation fitness photos
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    story: "Rahul was struggling with high blood pressure and fatigue. Through disciplined progressive overload, clean macros, and unwavering consistency, he achieved a chiseled six-pack physique in just 4 months.",
  },
  {
    id: "meenakshi-joshi",
    name: "Meenakshi Joshi",
    age: 32,
    duration: "20 Weeks",
    weightLoss: "-14 kg",
    bodyFatChange: "33% → 19%",
    program: "Female Recomposition & Functional Strength",
    trainer: "Coach Pooja",
    quote: "As a working mom, I never thought I could lift heavy weights. Coach Pooja made me realize women belong in the squat rack!",
    beforeImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    story: "Meenakshi reversed chronic lower back pain by strengthening her posterior chain and glutes, dropping 3 dress sizes while increasing her deadlift to 85kg.",
  },
  {
    id: "amit-bisht",
    name: "Amit Bisht",
    age: 24,
    duration: "24 Weeks",
    weightLoss: "+8 kg Lean Muscle",
    bodyFatChange: "11% Lean Bulk",
    program: "Pro Athlete Hypertrophy Blueprint",
    trainer: "Coach Aarav",
    quote: "I was a skinny teenager with zero confidence. ACE GYM gave me the structure, environment, and grit to pack on real muscle.",
    beforeImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    story: "Starting at 58 kg with difficulty gaining size, Amit followed a surplus calorie plan and high-intensity volume split to build an imposing 66 kg athletic frame.",
  },
];
