export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "membership" | "timings" | "training" | "facilities";
}

export const faqsData: FAQItem[] = [
  {
    id: "free-trial",
    question: "How do I claim my 1-Day Free Trial pass?",
    answer:
      "Simply fill out the 'Book Free Trial' form on this page or message us directly on WhatsApp (+91 78965 233120). You will receive an instant digital guest pass for full floor access, including trainer orientation and locker usage.",
    category: "membership",
  },
  {
    id: "timings-breakup",
    question: "What are ACE GYM's exact operating hours?",
    answer:
      "We operate two high-energy slots to suit every schedule: Morning from 4:30 AM to 10:00 AM (ideal for early birds beating the heat) and Evening from 4:00 PM to 10:00 PM (for post-work intensity). On Sundays, we are open 6:00 AM to 12:00 PM for active recovery & cardio.",
    category: "timings",
  },
  {
    id: "beginners-welcome",
    question: "I have never lifted weights before. Is ACE GYM beginner friendly?",
    answer:
      "Absolutely! While our atmosphere is hardcore and motivating, every single beginner receives a complimentary movement screening and machine orientation. Our trainers guide you on proper biomechanics and safety so you never feel lost.",
    category: "training",
  },
  {
    id: "freeze-membership",
    question: "Can I freeze or pause my membership if I travel or fall sick?",
    answer:
      "Yes. Annual and Pro members can pause their membership for up to 30 days per year with prior notice. We understand unexpected life events and ensure your hard-earned membership days are protected.",
    category: "membership",
  },
  {
    id: "personal-training-options",
    question: "Do you offer dedicated 1-on-1 personal trainers?",
    answer:
      "Yes! Our Elite Master Coaches specialize in competitive bodybuilding, rapid fat loss, athletic conditioning, and injury rehabilitation. You can enroll in our Elite VIP plan or choose flexible 1-on-1 PT packages.",
    category: "training",
  },
  {
    id: "lockers-parking",
    question: "Are lockers, showers, and vehicle parking available?",
    answer:
      "Yes, we provide secure digital code lockers, clean hot/cold rainforest shower suites, separate changing rooms for men and women, and a dedicated parking area for two-wheelers and four-wheelers right at our Bharatpuri facility.",
    category: "facilities",
  },
];
