import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-primary/5 hover:shadow-lg transition-all duration-500 relative">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-accent/30 absolute top-6 right-6" />

      {/* Quote text */}
      <p className="text-text-light leading-relaxed mb-6 italic text-sm md:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-heading font-semibold text-text-dark text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-text-light">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
