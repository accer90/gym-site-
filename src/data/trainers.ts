export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  certifications: string[];
  quote: string;
  image: string;
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export const trainersData: Trainer[] = [
  {
    id: "vikram-singh",
    name: "Vikram Rawat",
    role: "Head Coach & Master Trainer",
    experience: "10+ Years",
    specialties: ["Powerlifting", "Hypertrophy Programming", "Contest Prep"],
    certifications: ["CSCS Certified", "K11 Master Trainer", "ISSA Sports Nutrition"],
    quote: "Discipline is doing what must be done even when motivation leaves you.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "aarav-negi",
    name: "Aarav Negi",
    role: "Senior Strength & Conditioning Coach",
    experience: "7+ Years",
    specialties: ["Olympic Weightlifting", "Functional Mobility", "Athletic Speed"],
    certifications: ["CrossFit Level 2", "ACE Certified Personal Trainer"],
    quote: "Form precedes weight. Master the technique, and the numbers will follow.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
  {
    id: "pooja-sharma",
    name: "Pooja Sharma",
    role: "Head of Female Transformation & HIIT",
    experience: "6+ Years",
    specialties: ["Body Recomposition", "Postpartum Rehab", "Core & Glute Sculpt"],
    certifications: ["GGS Women's Coaching", "NASM CPT", "Precision Nutrition Level 1"],
    quote: "Fitness is not about shrinking yourself; it is about discovering how powerful you are.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "rohan-bisht",
    name: "Rohan Bisht",
    role: "HIIT Specialist & Calisthenics Coach",
    experience: "5+ Years",
    specialties: ["Metabolic Conditioning", "Calisthenics", "Fat Shred Protocols"],
    certifications: ["ASCA Level 1", "REPS India Registered Trainer"],
    quote: "Every single drop of sweat on this floor is an investment into your future self.",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
    },
  },
];
