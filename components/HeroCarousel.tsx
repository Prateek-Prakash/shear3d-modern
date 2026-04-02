"use client";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    title: "Welcome to Shear3D Consulting",
    subtitle: "Home to Structural Engineering Professionals",
    cta: { label: "Explore Products", href: "/products" },
  },
  {
    title: "Powerful Structural Engineering Software",
    subtitle: "From modeling to analysis to design — all in one place",
    cta: { label: "View Solutions", href: "/solutions" },
  },
  {
    title: "30+ Years of Engineering Excellence",
    subtitle: "Trusted by structural engineers since 1991",
    cta: { label: "Contact Us", href: "/contact" },
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full h-[480px] bg-slate-900 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">{slide.subtitle}</p>
                <Link
                  href={slide.cta.href}
                  className="inline-block bg-[#c52100] hover:bg-[#a01900] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  {slide.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all ${
              i === selectedIndex
                ? "bg-[#c52100] w-3 h-3"
                : "bg-white/50 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
