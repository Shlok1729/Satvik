import WhatsAppButton from "./WhatsAppButton";
import type { YogaClass } from "@/data/classes";

interface ClassCardProps {
  yogaClass: YogaClass;
}

export default function ClassCard({ yogaClass }: ClassCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/5">
      {/* Image placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-500">
              <span className="text-2xl">🧘</span>
            </div>
            <span className="text-sm text-primary/60 font-medium">
              {yogaClass.title}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
          {yogaClass.title}
        </h3>
        <p className="text-text-light text-sm leading-relaxed mb-4">
          {yogaClass.description}
        </p>


        {/* WhatsApp CTA */}
        <WhatsAppButton
          message={`Hi, I want to know more about ${yogaClass.title}`}
          size="sm"
          className="w-full"
        >
          Inquire on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
