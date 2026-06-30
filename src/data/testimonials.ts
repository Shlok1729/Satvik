export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Hatha Yoga Student",
    quote:
      "Satvik Yoga has completely transformed my mornings. The instructors are incredibly patient and attentive. I started as a complete beginner and now I can't imagine a day without my practice.",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Ashtanga Yoga Student",
    quote:
      "The Ashtanga classes pushed me in ways I never expected. Beyond the physical strength, I've gained mental clarity that helps me in my work and personal life every single day.",
    avatar: "RM",
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Prenatal Yoga Student",
    quote:
      "As a first-time mom, I was nervous about exercising during pregnancy. The Prenatal Yoga class at Satvik was exactly what I needed — supportive, safe, and deeply calming.",
    avatar: "AD",
  },
  {
    id: 4,
    name: "Vikram Joshi",
    role: "Meditation & Breathwork",
    quote:
      "The breathwork sessions are life-changing. I came in struggling with anxiety, and the pranayama techniques I learned here have given me tools I use every day to stay centred.",
    avatar: "VJ",
  },
];
