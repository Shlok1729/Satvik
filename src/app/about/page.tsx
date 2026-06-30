"use client";

import { Sparkles, Heart, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

const team = [
  {
    name: "Yogacharya Ajay",
    designation: "Lead Instructor & Founder",
    experience: "10+ Years Experience",
    image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782813899/b663cdfa-3f6a-4339-8966-4fe91a015e24.png",
  },
  {
    name: "Pooja Tomar",
    designation: " Expertise in PCOS /PCOD, FEMALE DISORDER , Pre- natal/ post natal",
    experience: "10+ Years Experience",
    image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782814074/527928d2-1149-41d5-a4de-af9ef38680a5.png",
  },
  {
    name: "Tannu",
    designation: "Special Educator",
    experience: "8+ Years Experience",
    image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782814115/97095778-8ed4-4270-8064-2677e1718821.png",
  },

];

const spaces = [
  { label: "Corporate and Group yoga", image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782818892/d8f69ec7-9a78-4437-980d-fba319248880.png" },
  { label: "Open gardens", image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782846101/9d9b96d7-1a27-4a91-8cdb-ede93c36bfa1.png" },
  { label: "Pilates", image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782846181/8de24e12-7b52-4c84-a3da-1029c8fe348e.png" },
  { label: "Flexible Timings", image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782846253/85b68b6b-cce2-4d8e-b1e6-779d6a0f99b0.png" },
  { label: "Personalized Care", image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782847211/64328b66-e2ba-47bf-8353-52fa3e89ff19.png" },
  { label: "Interactive Online Classes", image: "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782847772/bc0b7e30-8760-4d44-95ac-e23f5107fec2.png" },
];

const values = [
  {
    icon: Sparkles,
    title: "Purity (Sattva)",
    description:
      "We believe in a practice free from ego and competition. Every class is a safe space to reconnect with your true self.",
  },
  {
    icon: Shield,
    title: "Discipline (Tapas)",
    description:
      "Consistent, dedicated practice is the foundation of growth. We cultivate discipline with compassion, never force.",
  },
  {
    icon: Heart,
    title: "Harmony (Ahimsa)",
    description:
      "Non-violence in thought, word, and deed. We honour every body and every journey, meeting you exactly where you are.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative py-20 md:py-20 bg-gradient-to-br from-primary/10 via-cream to-secondary overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mt-2 mb-6">
              The Heart Behind{" "}
              <span className="text-primary">Satvik Yoga</span>
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              What began as a small morning gathering in a quiet park has grown
              into a vibrant community united by the transformative power of
              yoga.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <AnimateOnScroll>
              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary/5">
                  <Image
                    src="/image.png" /* <-- Change this to your actual image file name */
                    alt="Satvik Yoga Founders"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Decorative offset border (kept from your original design) */}
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/20 -z-10" />
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <AnimateOnScroll delay={0.15}>
              <div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-6">
                  Born from a Love for Authentic Yoga
                </h2>
                <div className="w-16 h-1 rounded-full bg-accent mb-6" />

                <div className="space-y-4 text-text-light leading-relaxed">
                  <p>
                    Satvik Yoga was founded with a simple yet powerful vision: to
                    make the authentic, transformative power of yoga accessible
                    to everyone — regardless of age, fitness level, or
                    experience.
                  </p>
                  <p>
                    Our founders, trained in traditional Hatha and Ashtanga
                    lineages in Rishikesh, saw a growing disconnect between the
                    commercialisation of yoga and its true essence. They wanted
                    to create a space where the ancient teachings could thrive in
                    a modern context — a space that feels like home.
                  </p>
                  <p>
                    The word &ldquo;Sattvic&rdquo; comes from the Sanskrit concept of
                    &ldquo;Sattva&rdquo; — one of the three Gunas (qualities of nature) —
                    representing purity, goodness, and harmony. This philosophy
                    guides everything we do: from how we teach, to how we design
                    our studio, to how we welcome you through our doors.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="py-20 md:py-12 bg-white border-t border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Our Educators and Trainers"
              subtitle="Meet the experienced and dedicated team guiding your yoga journey."
            />
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="group bg-cream rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-500 overflow-hidden relative border border-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.designation}
                  </p>
                  <span className="inline-block bg-white text-text-light text-xs font-semibold px-3 py-1 rounded-full border border-primary/10">
                    {member.experience}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Our Core Values"
              subtitle="These principles are woven into every class, every interaction, and every breath we share."
            />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimateOnScroll key={value.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-primary/5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Space ── */}
      <section className="py-20 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Yoga Delivered to You"
              subtitle="We bring the peace and guidance of a studio directly to your living room. Join our interactive online sessions or book our expert instructors for private at-home training."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {spaces.map((space, i) => (
              <AnimateOnScroll key={space.label} delay={i * 0.08}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-primary/5">
                  <img
                    src={space.image}
                    alt={space.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 md:p-5">
                    <span className="text-sm md:text-base text-white font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      {space.label}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-16 bg-gradient-to-r from-accent to-accent-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-white/80 mb-8">
              Experience the convenience of personalized yoga from the comfort of your home. Book an online or at-home trial class.
            </p>
            <WhatsAppButton
              size="lg"
              variant="outline"
              message="Hi, I'd like to book a trial class at Satvik Yoga"
              className="border-white text-white hover:bg-white hover:text-yellow-500"
            >
              Book a Trial Class
            </WhatsAppButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
