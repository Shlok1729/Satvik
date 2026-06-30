"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Subhash Chowk, Sector 47", "Gurugram, Haryana 122018"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 99927 25545"],
    href: "tel:+919992725545",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["ajkumar2725@gmail.com"],
    href: "mailto:ajkumar2725@gmail.com",
  },

];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const text = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/919992725545?text=${encodeURIComponent(text)}`;
    
    // Open in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-8 md:pt-14 md:pb-0 bg-gradient-to-b from-secondary to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Get in Touch"
              subtitle="We'd love to hear from you. Reach out with any questions about our classes, schedules, or studio."
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="py-12 md:py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-text-dark mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, j) =>
                      item.href ? (
                        <a
                          key={j}
                          href={item.href}
                          className="block text-sm text-text-light hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={j} className="text-sm text-text-light">
                          {detail}
                        </p>
                      )
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* ── Main Content Grid ── */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Inquiry Form */}
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-primary/5">
                <h2 className="font-heading text-2xl font-bold text-text-dark mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-text-light mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={handleFormSubmit}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl border border-primary/15 bg-cream/50 text-text-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-primary/15 bg-cream/50 text-text-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 rounded-xl border border-primary/15 bg-cream/50 text-text-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-text-dark mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border border-primary/15 bg-cream/50 text-text-dark placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-heading font-semibold hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Right: WhatsApp CTA + Map */}
            <div className="space-y-8">
              <AnimateOnScroll delay={0.15}>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      Prefer to Chat?
                    </h3>
                    <p className="text-white/80 mb-6">
                      Get instant answers to your questions by chatting with our
                      friendly yoga assistant on WhatsApp. No waiting, no
                      formality — just a quick conversation.
                    </p>
                    <WhatsAppButton
                      size="lg"
                      variant="outline"
                      message="Hi, I have a question about Satvik Yoga Classes"
                      className="border-white text-white hover:bg-white hover:text-yellow-500"
                    >
                      Chat on WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Map placeholder */}
              <AnimateOnScroll delay={0.25}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5">
                  <div className="aspect-[4/3] w-full bg-cream">
                    <iframe
                      src="https://maps.google.com/maps?q=Subhash%20Chowk,%20Sector%2047,%20Gurugram,%20Haryana%20122018&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Satvik Yoga Location"
                    ></iframe>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
