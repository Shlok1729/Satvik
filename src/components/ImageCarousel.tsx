"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-cream group">
      {/* Images container */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full h-full shrink-0 relative">
            <img src={src} alt={`Slide ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/70 backdrop-blur-sm flex items-center justify-center text-black/80 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/70 backdrop-blur-sm flex items-center justify-center text-black/80 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === i 
                ? "bg-white w-6 h-2" 
                : "bg-white/50 w-2 h-2 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i}`}
          />
        ))}
      </div>
    </div>
  );
}
