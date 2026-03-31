"use client";
import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import { Zap, Layers, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "6", label: "Software Products" },
  { value: "3", label: "Solution Packages" },
  { value: "5", label: "Service Offerings" },
];

const packages = [
  {
    name: "SCP",
    full: "Structural Component Package",
    desc: "Quick design of individual structural components. Ideal for verifying component designs rapidly.",
    includes: "Includes: ICODE",
    href: "/products",
  },
  {
    name: "GSP",
    full: "General Structure Package",
    desc: "Modeling and analysis of general structures. Comprehensive tools for structural modeling.",
    includes: "Includes: DXFMOD, ANAPRO, STRIP",
    href: "/solutions",
  },
  {
    name: "BLP",
    full: "Building Layout Package",
    desc: "Complete RC building design workflow. End-to-end solution from model to construction drawings.",
    includes: "Includes: SLAM, ANAPRO, SLIDE",
    href: "/solutions",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Easy to Use",
    desc: "Least learning curve with a familiar Windows interface and detailed online help documentation.",
  },
  {
    icon: Layers,
    title: "End-to-End Solution",
    desc: "From conceptual creation to structural drawings — everything you need in one integrated platform.",
  },
  {
    icon: Clock,
    title: "Reduce Turnaround",
    desc: "Eliminate tedious manual tasks and calculation errors, significantly speeding up project delivery.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Stats Bar */}
      <section className="bg-gray-900 dark:bg-gray-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#c52100]">{s.value}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#c52100] to-orange-500 bg-clip-text text-transparent">Software Packages</h2>
            <p className="text-center text-[#605f5f] dark:text-gray-400 mb-10">Choose the right package for your needs</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 0.1}>
                <div className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="h-1 bg-[#c52100]" />
                  <div className="p-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-[#c52100]">{pkg.name}</span>
                      <span className="text-sm text-[#605f5f] dark:text-gray-400">{pkg.full}</span>
                    </div>
                    <p className="text-[#2b2b2b] dark:text-gray-100 mb-4 leading-relaxed">{pkg.desc}</p>
                    <p className="text-sm text-[#605f5f] dark:text-gray-400 mb-6 font-medium">{pkg.includes}</p>
                    <Link href={pkg.href} className="text-[#c52100] font-semibold hover:underline text-sm">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shear3D */}
      <section className="py-16 bg-[#fafafa] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#c52100] to-orange-500 bg-clip-text text-transparent">Why Choose Shear3D?</h2>
            <p className="text-center text-[#605f5f] dark:text-gray-400 mb-12">Built by engineers, for engineers</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeIn key={b.title} delay={i * 0.15}>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="text-[#c52100]" size={36} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#2b2b2b] dark:text-gray-100">{b.title}</h3>
                    <p className="text-[#605f5f] dark:text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <blockquote className="text-xl italic text-[#2b2b2b] dark:text-gray-100 leading-relaxed mb-6">
              &quot;Shear3D software solutions provide amazing applications that simplify structural engineering design and saves significant time. Support provided by Shear3D is fabulous and show their commitment towards structural engineering community.&quot;
            </blockquote>
            <p className="text-[#c52100] font-semibold">— Meghal, Architects and Engineers, Bangalore</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your structural engineering workflow?</h2>
            <p className="text-white/80 mb-8 text-lg">Join hundreds of structural engineers who trust Shear3D software.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="bg-[#c52100] hover:bg-[#a01900] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Get Started
              </Link>
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-[#2b2b2b] font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
