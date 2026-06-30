"use client";

import SectionHeading from "@/components/SectionHeading";
import ClassCard from "@/components/ClassCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { classes } from "@/data/classes";

export default function ClassesPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-b from-secondary to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Our Yoga Classes"
              subtitle="From dynamic flows to gentle restorative sessions — find the practice that speaks to your body and soul."
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Class Grid ── */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((yogaClass, i) => (
              <AnimateOnScroll key={yogaClass.id} delay={i * 0.08}>
                <ClassCard yogaClass={yogaClass} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-4">
              Not Sure Which Class Is Right for You?
            </h2>
            <p className="text-text-light mb-8">
              No worries! Send us a message on WhatsApp and our team will help
              you choose the perfect class based on your experience level and
              goals.
            </p>
            <WhatsAppButton size="lg">
              Get Personalised Advice
            </WhatsAppButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
