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
    name: "Neha Patel",
    role: "PCOD / PCOS Yoga Student",
    quote:
      "Struggling with PCOD was overwhelming until I found Satvik Yoga. The targeted practices and breathing techniques helped regulate my cycles and drastically reduced my stress levels.",
    avatar: "NP",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Back & Knee Pain Yoga Student",
    quote:
      "I had chronic lower back and knee pain for years. The therapeutic approach here is incredible. The instructors carefully modify poses for my condition, and I am finally living pain-free.",
    avatar: "RK",
  },
  {
    id: 3,
    name: "Simran Kaur",
    role: "Anxiety & Meditation Student",
    quote:
      "The anxiety yoga classes are a true sanctuary. Through mindful breathwork and gentle restorative poses, I have found a sense of inner peace that I thought I had lost forever.",
    avatar: "SK",
  },
  {
    id: 4,
    name: "Sanjay Gupta",
    role: "BP Management & Old Age Yoga",
    quote:
      "At 65, I was looking for a safe way to stay active and manage my blood pressure. The old age yoga sessions here are gentle yet effective, and my doctors are thrilled with my progress.",
    avatar: "SG",
  },
];
