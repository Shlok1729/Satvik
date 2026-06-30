"use client";

import { Sparkles, Heart, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-cream to-secondary overflow-hidden">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <AnimateOnScroll>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl">🕉️</span>
                    </div>
                    <p className="text-sm text-text-light">
                      Founders image placeholder
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/20 -z-10" />
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <AnimateOnScroll delay={0.15}>
              <div>
                <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">
                  Est. 2018
                </span>
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

      {/* ── Our Values ── */}
      <section className="py-20 md:py-28 bg-cream">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Our Space"
              subtitle="A serene, sunlit studio designed for comfort and focus — your sanctuary from the everyday hustle."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { label: "Main Studio Hall", emoji: "🏛️" },
              { label: "Meditation Room", emoji: "🕯️" },
              { label: "Garden Area", emoji: "🌿" },
              { label: "Changing Rooms", emoji: "🚿" },
              { label: "Tea Lounge", emoji: "☕" },
              { label: "Reception", emoji: "🪷" },
            ].map((space, i) => (
              <AnimateOnScroll key={space.label} delay={i * 0.08}>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-primary/5">
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl block mb-2 group-hover:scale-110 transition-transform duration-300">
                      {space.emoji}
                    </span>
                    <span className="text-xs md:text-sm text-text-light font-medium">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-accent to-accent-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Come Visit Us
            </h2>
            <p className="text-white/80 mb-8">
              Experience the space in person. Book a trial class and see why our
              students keep coming back.
            </p>
            <WhatsAppButton
              size="lg"
              variant="outline"
              message="Hi, I'd like to book a trial class at Satvik Yoga"
              className="border-white text-white hover:bg-white hover:text-accent"
            >
              Book a Trial Class
            </WhatsAppButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
