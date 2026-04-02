import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ShoppingCart, RefreshCw, Zap, HardHat, Cpu, LayoutGrid, Wrench, BarChart2, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | Shear3D Consulting",
  description: "Shear3D software and consulting solutions for structural engineers.",
};

const sections = [
  {
    id: "purchase",
    title: "Software for Purchase",
    icon: ShoppingCart,
    content: "Purchase perpetual licenses for any of our software products. Licenses are per-user and include one year of support and updates. Contact us for volume pricing. Products available: ICODE (free), DXFMOD, ANAPRO, STRIP, SLAM, SLIDE.",
  },
  {
    id: "lease",
    title: "Software for Lease / Rent",
    icon: RefreshCw,
    content: "Flexible lease arrangements for project-based usage. Monthly and annual lease options available for DXFMOD, ANAPRO, STRIP, SLAM, and SLIDE. Ideal for firms with variable project loads.",
  },
  {
    id: "ondemand",
    title: "Software On-Demand",
    icon: Zap,
    content: "Pay-per-use access to our software tools. No long-term commitment required. Suitable for occasional users who need powerful structural analysis tools without ongoing license costs.",
  },
  {
    id: "consulting",
    title: "Structural Consulting Services",
    icon: HardHat,
    content: "Our experienced structural engineers provide consulting services for building structures, bridges, industrial structures, and special structures. We deliver comprehensive structural analysis, design, and drawing packages.",
  },
  {
    id: "cae",
    title: "Advanced CAE / FEA Services",
    icon: Cpu,
    content: "Advanced finite element analysis services for complex structural problems. We use industry-leading FEA tools to analyze static, dynamic, thermal, and nonlinear structural problems for engineering firms worldwide.",
  },
];

const packages = [
  {
    name: "SCP",
    full: "Structural Component Package",
    icon: Wrench,
    badge: "Free Included",
    products: ["ICODE"],
    suitedFor: "Quick component design and verification",
  },
  {
    name: "GSP",
    full: "General Structure Package",
    icon: BarChart2,
    badge: "Most Popular",
    products: ["DXFMOD", "ANAPRO", "STRIP"],
    suitedFor: "General structural modeling and analysis",
  },
  {
    name: "BLP",
    full: "Building Layout Package",
    icon: Building2,
    badge: "Complete Suite",
    products: ["SLAM", "ANAPRO", "SLIDE"],
    suitedFor: "Complete RC building design workflow",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Solutions</h1>
          <p className="text-white/70 text-lg">Software and consulting solutions tailored to your needs</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-sm text-[#605f5f] dark:text-gray-400">
            <Link href="/" className="hover:text-[#c52100] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#2b2b2b] dark:text-gray-100 font-medium">Solutions</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-950">
        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <nav className="space-y-1">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-[#605f5f] dark:text-gray-400 hover:text-[#c52100] dark:hover:text-[#c52100] hover:bg-[#fafafa] dark:hover:bg-gray-800 rounded transition-colors"
                    >
                      <Icon size={14} />
                      {s.title}
                    </a>
                  );
                })}
                <a href="#packages" className="flex items-center gap-2 px-3 py-2 text-sm text-[#605f5f] dark:text-gray-400 hover:text-[#c52100] dark:hover:text-[#c52100] hover:bg-[#fafafa] dark:hover:bg-gray-800 rounded transition-colors">
                  <LayoutGrid size={14} />
                  Package Comparison
                </a>
              </nav>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 space-y-16">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#e8e8e8] dark:border-gray-700">
                    <div className="w-10 h-10 rounded-lg bg-[#c52100]/10 text-[#c52100] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100">{s.title}</h2>
                  </div>
                  <p className="text-[#605f5f] dark:text-gray-300 leading-relaxed text-lg">{s.content}</p>
                  <p className="mt-4 text-sm text-[#605f5f] dark:text-gray-400">
                    <Link href="/contact" className="text-[#c52100] font-semibold hover:underline">Contact us</Link> for pricing and availability.
                  </p>
                </section>
              );
            })}

            {/* Package comparison */}
            <section id="packages" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#e8e8e8] dark:border-gray-700">
                <div className="w-10 h-10 rounded-lg bg-[#c52100]/10 text-[#c52100] flex items-center justify-center shrink-0">
                  <LayoutGrid size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100">Package Comparison</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg) => {
                  const Icon = pkg.icon;
                  return (
                    <div key={pkg.name} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
                      {/* Top */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#c52100]/10 text-[#c52100] flex items-center justify-center shrink-0">
                          <Icon size={20} />
                        </div>
                        <span className="text-2xl font-bold text-[#c52100]">{pkg.name}</span>
                        <span className="ml-auto text-xs font-medium bg-[#c52100]/10 text-[#c52100] px-2 py-1 rounded-full whitespace-nowrap">{pkg.badge}</span>
                      </div>
                      {/* Middle */}
                      <div className="mb-4 flex-1">
                        <p className="font-semibold text-[#2b2b2b] dark:text-gray-100 mb-1">{pkg.full}</p>
                        <p className="text-sm text-[#605f5f] dark:text-gray-400">{pkg.suitedFor}</p>
                      </div>
                      {/* Product tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {pkg.products.map((p) => (
                          <span key={p} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">{p}</span>
                        ))}
                      </div>
                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="block text-center text-sm font-semibold text-[#c52100] border border-[#c52100] rounded-lg px-4 py-2 hover:bg-[#c52100]/5 transition-colors"
                      >
                        Contact for Pricing
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
