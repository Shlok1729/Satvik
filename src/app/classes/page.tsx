"use client";

import SectionHeading from "@/components/SectionHeading";
import ClassCard from "@/components/ClassCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageCarousel from "@/components/ImageCarousel";
import { classes } from "@/data/classes";

export default function ClassesPage() {
  return (
    <>


      {/* ── Class Formats ── */}
      <section className="py-16 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                Choose Your <span className="text-primary">Perfect Format</span>
              </h2>
              <p className="text-text-light text-lg leading-relaxed">
                Whether you thrive in the collective energy of a group or prefer the focused, personalized attention of a private instructor, we have the ideal setting for your yoga journey.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Group Classes */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-cream rounded-3xl p-6 md:p-8 shadow-sm border border-primary/5 hover:border-primary/20 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-8">
                  <ImageCarousel
                    images={[
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782996993/db7aa06c-96a1-4762-a674-8789ca699085.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997106/9ca4c805-8baa-44a1-bf79-00a57f20897c.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997157/1e32d7dc-8c06-4bd7-9a25-72d783818298.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997198/80adedf9-f644-4c7c-b937-d78a9f0b16a5.png",


                    ]}
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">Group Classes</h3>
                <p className="text-text-light leading-relaxed mb-8 flex-grow">
                  Join our vibrant community. Experience the shared energy, motivation, and joy of practicing alongside others in our welcoming studio or open gardens.
                </p>
                <div className="mt-auto">

                </div>
              </div>
            </AnimateOnScroll>

            {/* Individual Classes */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-text-dark rounded-3xl p-6 md:p-8 shadow-lg border border-white/10 hover:border-accent/30 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-8">
                  <ImageCarousel
                    images={[
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997257/dbaafaab-4b80-4e46-b3c1-81910b05fdd6.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997303/a17acf94-15ca-43a3-823b-ae88cb761999.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997353/24e20fe8-9a35-4fcc-b0aa-8a53e259050e.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997368/b8bc2399-6238-499e-a045-5a35e1710e1f.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997424/4ee664e7-5ea6-4122-af05-766016f2c8f4.png",
                      "https://res.cloudinary.com/dhqqj1ehx/image/upload/v1782997481/de534b98-7e0a-4df8-b77c-556ebfb6ed77.png"


                    ]}
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-accent mb-4">Individual Classes</h3>
                <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                  Tailored specifically to your body and goals. Receive 1-on-1 guidance, posture correction, and custom therapeutic routines at your own pace.
                </p>
                <div className="mt-auto">

                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-0 bg-gradient-to-b from-secondary to-cream">
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
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((yogaClass, i) => (
              <AnimateOnScroll key={yogaClass.id} delay={i * 0.02}>
                <ClassCard yogaClass={yogaClass} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-16 bg-white">
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
