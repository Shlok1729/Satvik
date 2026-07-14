"use client";

import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Briefcase, HeartHandshake, Zap, BrainCircuit, MonitorUp } from "lucide-react";

export default function CorporateYogaPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-text-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-text-dark via-text-dark/80 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent font-semibold text-sm mb-6 backdrop-blur-md">
              <Briefcase className="w-4 h-4" />
              <span>For Business & Teams</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your Workplace with <span className="text-accent">Corporate Yoga</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Boost productivity, reduce burnout, and foster a culture of wellness. Our specialized corporate yoga programs are designed for modern professionals to counteract the physical and mental stress of office life.
            </p>
            <WhatsAppButton size="lg" message="Hi, I am interested in exploring Corporate Yoga for my company. Can we schedule a quick chat?" className="bg-accent text-text-dark hover:bg-white border-none mx-auto shadow-lg shadow-accent/20">
              Request a Corporate Proposal
            </WhatsAppButton>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── The Business Case for Yoga ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Why Invest in Corporate Wellness?"
              subtitle="Healthy employees are the foundation of a successful business. Our programs deliver measurable benefits to both your team's wellbeing and your company's bottom line."
            />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "Stress Reduction",
                desc: "Mindfulness and breathwork techniques significantly lower workplace anxiety and prevent employee burnout.",
                icon: BrainCircuit,
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                title: "Posture Correction",
                desc: "Targeted stretches relieve neck, back, and shoulder pain caused by prolonged desk sitting and screen time.",
                icon: MonitorUp,
                color: "text-primary",
                bg: "bg-primary/10"
              },
              {
                title: "Higher Energy",
                desc: "Physical movement stimulates blood flow, eliminating the afternoon slump and keeping the team sharp and focused.",
                icon: Zap,
                color: "text-amber-500",
                bg: "bg-amber-500/10"
              },
              {
                title: "Team Bonding",
                desc: "Shared wellness activities foster a positive workplace culture, improving communication and team morale.",
                icon: HeartHandshake,
                color: "text-rose-500",
                bg: "bg-rose-500/10"
              }
            ].map((benefit, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start group">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3">{benefit.title}</h3>
                  <p className="text-text-light leading-relaxed text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flexible Formats ── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image side */}
            <AnimateOnScroll>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
                <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                    alt="Corporate Yoga Session" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Floating stat card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-primary/10 max-w-[200px] z-20 animate-bounce-slow hidden md:block">
                  <div className="text-4xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-text-light font-medium">Customizable for your office needs</div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text side */}
            <AnimateOnScroll delay={0.2}>
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Seamlessly Fits Into Your <span className="text-primary">Corporate Schedule</span>
                </h2>
                <p className="text-text-light text-lg mb-10 leading-relaxed">
                  We understand that corporate environments are fast-paced. Our sessions are highly flexible and designed to accommodate your company's unique workflow.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-cream border border-primary/5 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className="font-bold text-primary text-xl">01</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-text-dark mb-1">On-Site Office Sessions</h4>
                      <p className="text-text-light text-sm">We bring the studio to your office floor, cafeteria, or conference room. Minimal space required.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-cream border border-primary/5 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className="font-bold text-primary text-xl">02</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-text-dark mb-1">Virtual / Remote Teams</h4>
                      <p className="text-text-light text-sm">Perfect for distributed workforces. Live, interactive online sessions via Zoom, Teams, or Google Meet.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-cream border border-primary/5 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className="font-bold text-primary text-xl">03</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-text-dark mb-1">Executive 1-on-1s</h4>
                      <p className="text-text-light text-sm">Discrete, highly personalized therapeutic sessions designed for busy executives and leadership teams.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your <span className="text-accent">Workplace?</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Contact us today to discuss your company's needs. We'll design a bespoke wellness program that aligns perfectly with your corporate culture and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" message="Hi, I'd like to arrange a trial Corporate Yoga session for my team." className="bg-accent text-text-dark hover:bg-white border-none">
                Book a Trial Session
              </WhatsAppButton>
              <WhatsAppButton size="lg" message="Hi, can you send me your Corporate Yoga brochure and pricing details?" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                Get Pricing Details
              </WhatsAppButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
