export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  duration: string;
  comment: string;
  achievement: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "harish-tiwari",
    name: "Harish Tiwari",
    role: "Local Business Owner, Ramnagar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    duration: "Member for 2 Years",
    comment:
      "ACE GYM completely changed the standard of fitness in Ramnagar. The equipment is Olympic-grade, the air is clean, and the brotherhood here pushes you to your absolute best every single morning.",
    achievement: "Down 16kg & Bench pressed 120kg",
  },
  {
    id: "sneha-rawat",
    name: "Sneha Rawat",
    role: "Teacher & Marathon Runner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    duration: "Member for 1 Year",
    comment:
      "As a woman in Bharatpuri, finding a gym where you feel 100% safe, supported, and taken seriously as an athlete was tough until ACE GYM opened. Coach Pooja and the staff are world-class.",
    achievement: "Completed Corbett Half-Marathon with PR",
  },
  {
    id: "kunal-verma",
    name: "Kunal Verma",
    role: "Software Engineer (Remote)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    duration: "Member for 10 Months",
    comment:
      "The energy when you walk through the door at 6 PM is electric. Heavy metal, chalk flying, no egos, pure focus. The 4:30 AM early morning slot is a godsend for beating desk stiffness.",
    achievement: "Built 7kg lean mass & cured sciatica",
  },
  {
    id: "deepak-pandey",
    name: "Deepak Pandey",
    role: "Hospitality Executive",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    duration: "Member for 18 Months",
    comment:
      "Hands down the cleanest gym in Nainital district. Machine cables are always smooth, weights are racked, and the personal training blueprint will push past any plateau you have.",
    achievement: "Deadlift jumped from 100kg to 190kg",
  },
];
