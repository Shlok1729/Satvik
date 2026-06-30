"use client";

import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Heart,
  Users,
  Award,
  Sparkles,
  Sun,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeading from "@/components/SectionHeading";
import ClassCard from "@/components/ClassCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { classes } from "@/data/classes";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

const benefits = [
  {
    icon: Leaf,
    title: "Flexibility & Strength",
    description:
      "Develop a balanced body through mindful movement that builds both flexibility and functional strength.",
  },
  {
    icon: Heart,
    title: "Stress Relief",
    description:
      "Release tension, calm your nervous system, and find lasting peace through breath-centred practice.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Join a warm, inclusive community of practitioners who encourage and inspire each other daily.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description:
      "Learn from certified instructors with years of experience in traditional and modern yoga methods.",
  },
];

export default function HomePage() {
  const featuredClasses = classes.slice(0, 3);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="/back1.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Heavy overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Subtle gradient on top of overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Leaf className="w-4 h-4" />
              Pure · Balanced · Harmonious
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Find Your{" "}
              <span className="text-accent relative">
                Inner Peace
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent/50"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q50 0 100 6 Q150 12 200 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>
              <br />
              with{" "}
              <span className="text-primary-dark relative">
                Satvik Yoga
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary-dark"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q50 0 100 6 Q150 12 200 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>


            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Embrace the ancient wisdom of yoga with
              Expert-led classes for every body, every level, every journey.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/classes"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Our Classes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <WhatsAppButton size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-500">
                Enquire Now
              </WhatsAppButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════ WELCOME ═══════════════════ */}
      <section className="py-20 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <AnimateOnScroll>
              <div>
                <span className="text-accent font-heading font-semibold text-sm uppercase tracking-wider">
                  Welcome to Satvik Yoga
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-6">
                  Where Ancient Wisdom Meets Modern Wellness
                </h2>
                <div className="w-16 h-1 rounded-full bg-accent mb-6" />
                <p className="text-text-light leading-relaxed mb-4">
                  &ldquo;Sattvic&rdquo; means pure, clean, and harmonious. At Satvik Yoga, we
                  embody this philosophy in everything we do — from the classes
                  we teach to the space we've created for your practice.
                </p>
                <p className="text-text-light leading-relaxed mb-6">
                  Whether you&apos;re stepping onto a yoga mat for the first time or
                  deepening an established practice, our certified instructors
                  will guide you with patience, expertise, and genuine care.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Image placeholder */}
            <AnimateOnScroll delay={0.2}>
              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-primary/5">
                  <img
                    src="/welcome.jpeg"
                    alt="Satvik Yoga Studio Space"


                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Decorative frame (kept from your original code) */}
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      {/* ═══════════════════ WHAT WE TEACH ═══════════════════ */}
      <section className="py-16 md:py-16 bg-white border-t border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="What We Teach"
              subtitle="Specialized therapeutic and traditional yoga practices tailored to your specific health needs and goals."
            />
          </AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto mt-10">
            {classes.map((c, i) => (
              <AnimateOnScroll key={c.id} delay={i * 0.02}>
                <div className="px-5 py-2.5 rounded-full bg-cream border border-primary/10 text-text-dark font-medium text-sm md:text-base hover:bg-primary hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  {c.title}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED CLASSES ═══════════════════ */}
      <section className="py-20 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Our Featured Classes"
              subtitle="Explore our most popular sessions designed to nurture your body, mind, and spirit."
            />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClasses.map((yogaClass, i) => (
              <AnimateOnScroll key={yogaClass.id} delay={i * 0.1}>
                <ClassCard yogaClass={yogaClass} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/classes"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-heading font-semibold hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                View All Classes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════ CORPORATE YOGA ═══════════════════ */}
      <section className="py-20 md:py-16 bg-text-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <AnimateOnScroll>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-accent font-semibold text-sm mb-8 backdrop-blur-md">
                  <Sparkles className="w-4 h-4" />
                  <span>For Businesses & Teams</span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Elevate Your Workplace with <br />
                  <span className="text-accent relative inline-block mt-2">
                    Corporate Yoga
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/50" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0 6 Q50 0 100 6 Q150 12 200 6" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                  </span>
                </h2>
                <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
                  Boost employee morale, reduce burnout, and increase productivity. We bring tailored yoga, meditation, and desk-relief sessions directly to your office or virtually to your remote team.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Stress Relief & Mindfulness",
                    "Posture Correction & Desk Ergonomics",
                    "Team Building & Bonding",
                    "Customizable Timings & Schedules"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/80">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Leaf className="w-3.5 h-3.5 text-primary-light" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton
                    size="lg"
                    message="Hi, I'm interested in booking Corporate Yoga sessions for my team."
                    className="bg-accent text-text-dark hover:bg-white border-none hover:text-yellow-500"
                  >
                    Enquire for Your Team
                  </WhatsAppButton>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Image Grid */}
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6 mt-12 md:mt-24">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src="https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782846181/8de24e12-7b52-4c84-a3da-1029c8fe348e.png" alt="Corporate Yoga Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src="https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782818892/d8f69ec7-9a78-4437-980d-fba319248880.png" alt="Office Wellness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BENEFITS ═══════════════════ */}
      <section className="py-20 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Why Choose Satvik Yoga?"
              subtitle="More than a class — it's a path to holistic well-being."
            />
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <AnimateOnScroll key={benefit.title} delay={i * 0.1}>
                  <div className="text-center p-6 rounded-2xl hover:bg-cream transition-colors duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-text-dark mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-20 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="What Our Students Say"
              subtitle="Real stories from real practitioners who found their practice at Satvik."
            />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <AnimateOnScroll key={testimonial.id} delay={i * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="py-20 md:py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Take the first step towards a healthier, calmer, more balanced
              life. We&apos;d love to welcome you to the Satvik family.
            </p>
            <WhatsAppButton size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Chat With Us on WhatsApp
            </WhatsAppButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
