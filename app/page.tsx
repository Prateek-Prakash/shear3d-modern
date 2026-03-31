import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import { Zap, Layers, Clock } from "lucide-react";

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

      {/* Package Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#2b2b2b]">Software Packages</h2>
          <p className="text-center text-[#605f5f] mb-10">Choose the right package for your needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border border-[#e8e8e8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-1 bg-[#c52100]" />
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-[#c52100]">{pkg.name}</span>
                    <span className="text-sm text-[#605f5f]">{pkg.full}</span>
                  </div>
                  <p className="text-[#2b2b2b] mb-4 leading-relaxed">{pkg.desc}</p>
                  <p className="text-sm text-[#605f5f] mb-6 font-medium">{pkg.includes}</p>
                  <Link href={pkg.href} className="text-[#c52100] font-semibold hover:underline text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shear3D */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#2b2b2b]">Why Choose Shear3D?</h2>
          <p className="text-center text-[#605f5f] mb-12">Built by engineers, for engineers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="text-[#c52100]" size={36} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#2b2b2b]">{b.title}</h3>
                  <p className="text-[#605f5f] leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-xl italic text-[#2b2b2b] leading-relaxed mb-6">
            &quot;Shear3D software solutions provide amazing applications that simplify structural engineering design and saves significant time. Support provided by Shear3D is fabulous and show their commitment towards structural engineering community.&quot;
          </blockquote>
          <p className="text-[#c52100] font-semibold">— Meghal, Architects and Engineers, Bangalore</p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
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
        </div>
      </section>
    </>
  );
}
