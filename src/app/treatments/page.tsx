"use client";

import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { classes } from "@/data/classes";
import { CheckCircle2, HeartPulse } from "lucide-react";

// IDs of classes that are considered "treatments"
const TREATMENT_IDS = [
  "knee-pain-yoga",
  "cervical-yoga",
  "sciatica-pain-yoga",
  "anxiety-yoga",
  "bp-yoga",
  "old-age-yoga",
  "pregnancy-yoga",
  "postnatal-yoga",
  "back-pain-yoga",
  "pain-relief-yoga",
  "pcod-pcos-yoga",
  "mental-disorder-yoga",
  "sexual-disease-yoga",
  "anger-yoga"
];

export default function TreatmentsPage() {
  const treatments = classes.filter(c => TREATMENT_IDS.includes(c.id));

  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 bg-text-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782846181/8de24e12-7b52-4c84-a3da-1029c8fe348e.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-text-dark/50 to-text-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent font-semibold text-sm mb-6 backdrop-blur-md">
              <HeartPulse className="w-4 h-4" />
              <span>Therapeutic Yoga</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Healing Through <span className="text-accent">Movement</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Yoga isn't just exercise—it is profound medicine. Discover how our targeted, therapeutic yoga sessions address root causes of pain and disease to restore your body's natural harmony.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Treatments List ── */}
      <section className="py-16 md:py-8 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {treatments.map((treatment, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimateOnScroll key={treatment.id} delay={0.1}>
                <div className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-primary/10 hover:shadow-2xl transition-all duration-500 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                  {/* Image Section */}
                  <div className="w-full md:w-5/12 shrink-0 relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
                    <div className="aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-2 border-white relative z-10">
                      <img src={treatment.image} alt={treatment.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="w-full md:w-7/12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                      {treatment.title}
                    </h2>

                    <p className="text-text-light text-lg leading-relaxed mb-6">
                      {treatment.description}
                    </p>

                    <div className="bg-cream/50 rounded-2xl p-6 mb-8 border border-primary/5">
                      <h4 className="font-bold text-text-dark mb-4">How This Therapy Benefits You:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-text-dark/80 text-sm md:text-base">Addresses the root cause of discomfort rather than masking symptoms.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-text-dark/80 text-sm md:text-base">Enhances targeted blood flow and stimulates natural cellular healing.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-text-dark/80 text-sm md:text-base">Safe, guided movements tailored to your body's current limitations.</span>
                        </li>
                      </ul>
                    </div>

                    <WhatsAppButton
                      size="lg"
                      message={`Hi, I need help managing my health. I am interested in learning more about the ${treatment.title} treatment.`}
                      className="w-full sm:w-auto justify-center shadow-md hover:shadow-xl"
                    >
                      Book Us Now
                    </WhatsAppButton>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782818892/d8f69ec7-9a78-4437-980d-fba319248880.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Not sure which <span className="text-accent">treatment</span> is right for you?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Every body is different, and healing requires a personalized approach. Send us a message describing your condition, and our expert instructors will recommend the best therapeutic yoga plan for you.
            </p>
            <WhatsAppButton size="lg" message="Hi, I have a specific health condition and need a personalized yoga treatment plan. Can you guide me?" className="bg-accent text-text-dark hover:bg-white border-none mx-auto hover:text-yellow-500">
              Consult a Yoga Expert Free
            </WhatsAppButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
