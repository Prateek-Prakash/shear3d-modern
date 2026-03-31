"use client";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect } from "react";

const slides = [
  {
    title: "Welcome to Shear3D Consulting",
    subtitle: "Home to Structural Engineering Professionals",
    cta: { label: "Explore Products", href: "/products" },
    bg: "from-slate-900 to-slate-700",
  },
  {
    title: "Powerful Structural Engineering Software",
    subtitle: "From modeling to analysis to design — all in one place",
    cta: { label: "View Solutions", href: "/solutions" },
    bg: "from-blue-900 to-slate-800",
  },
  {
    title: "30+ Years of Engineering Excellence",
    subtitle: "Trusted by structural engineers since 1991",
    cta: { label: "Contact Us", href: "/contact" },
    bg: "from-slate-800 to-blue-950",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`min-w-full h-[480px] bg-gradient-to-br ${slide.bg} flex items-center justify-center relative`}
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
  );
}
