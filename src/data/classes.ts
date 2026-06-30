export interface YogaClass {
  id: string;
  title: string;
  description: string;
  schedule: string;
  duration: string;
  level: string;
  image: string;
}

export const classes: YogaClass[] = [
  {
    id: "ashtanga-yoga",
    title: "Ashtanga Yoga",
    description:
      "A dynamic, physically demanding practice that synchronises breath with a progressive series of postures — producing intense internal heat and a purifying sweat.",
    schedule: "Mon / Wed / Fri — 6:00 – 7:00 AM",
    duration: "60 min",
    level: "Intermediate",
    image: "/images/classes/ashtanga.jpg",
  },
  {
    id: "hatha-yoga",
    title: "Hatha Yoga",
    description:
      "A gentle yet powerful practice focusing on holding poses for longer durations, building strength, flexibility, and inner calm at your own pace.",
    schedule: "Tue / Thu — 7:00 – 8:00 AM",
    duration: "60 min",
    level: "All Levels",
    image: "/images/classes/hatha.jpg",
  },
  {
    id: "prenatal-yoga",
    title: "Prenatal Yoga",
    description:
      "Specially designed for expecting mothers, this class eases discomfort, improves breathing, and prepares the body and mind for childbirth.",
    schedule: "Mon / Wed — 10:00 – 11:00 AM",
    duration: "60 min",
    level: "Beginner",
    image: "/images/classes/prenatal.jpg",
  },
  {
    id: "meditation-breathwork",
    title: "Meditation & Breathwork",
    description:
      "Cultivate deep awareness through guided meditation and pranayama techniques. Perfect for stress relief, mental clarity, and emotional balance.",
    schedule: "Daily — 6:00 – 7:00 PM",
    duration: "60 min",
    level: "All Levels",
    image: "/images/classes/meditation.jpg",
  },
  {
    id: "power-yoga",
    title: "Power Yoga",
    description:
      "An energetic, fitness-based approach to vinyasa yoga. Build strength, endurance, and flexibility through fast-paced, flowing sequences.",
    schedule: "Sat / Sun — 8:00 – 9:00 AM",
    duration: "60 min",
    level: "Advanced",
    image: "/images/classes/power.jpg",
  },
  {
    id: "kids-yoga",
    title: "Kids Yoga",
    description:
      "Playful and imaginative yoga sessions for children aged 5–12, fostering body awareness, concentration, and confidence through fun poses and games.",
    schedule: "Sat — 10:00 – 11:00 AM",
    duration: "60 min",
    level: "Kids (5–12 yrs)",
    image: "/images/classes/kids.jpg",
  },
];
