import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | Shear3D Consulting",
  description: "Shear3D software and consulting solutions for structural engineers.",
};

const sections = [
  {
    id: "purchase",
    title: "Software for Purchase",
    content: "Purchase perpetual licenses for any of our software products. Licenses are per-user and include one year of support and updates. Contact us for volume pricing. Products available: ICODE (free), DXFMOD, ANAPRO, STRIP, SLAM, SLIDE.",
  },
  {
    id: "lease",
    title: "Software for Lease / Rent",
    content: "Flexible lease arrangements for project-based usage. Monthly and annual lease options available for DXFMOD, ANAPRO, STRIP, SLAM, and SLIDE. Ideal for firms with variable project loads.",
  },
  {
    id: "ondemand",
    title: "Software On-Demand",
    content: "Pay-per-use access to our software tools. No long-term commitment required. Suitable for occasional users who need powerful structural analysis tools without ongoing license costs.",
  },
  {
    id: "consulting",
    title: "Structural Consulting Services",
    content: "Our experienced structural engineers provide consulting services for building structures, bridges, industrial structures, and special structures. We deliver comprehensive structural analysis, design, and drawing packages.",
  },
  {
    id: "cae",
    title: "Advanced CAE / FEA Services",
    content: "Advanced finite element analysis services for complex structural problems. We use industry-leading FEA tools to analyze static, dynamic, thermal, and nonlinear structural problems for engineering firms worldwide.",
  },
];

const packages = [
  {
    name: "SCP",
    full: "Structural Component Package",
    products: ["ICODE"],
    suitedFor: "Quick component design and verification",
  },
  {
    name: "GSP",
    full: "General Structure Package",
    products: ["DXFMOD", "ANAPRO", "STRIP"],
    suitedFor: "General structural modeling and analysis",
  },
  {
    name: "BLP",
    full: "Building Layout Package",
    products: ["SLAM", "ANAPRO", "SLIDE"],
    suitedFor: "Complete RC building design workflow",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Solutions</h1>
          <p className="text-white/70 text-lg">Software and consulting solutions tailored to your needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-950">
        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block px-3 py-2 text-sm text-[#605f5f] dark:text-gray-400 hover:text-[#c52100] dark:hover:text-[#c52100] hover:bg-[#fafafa] dark:hover:bg-gray-800 rounded transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
                <a href="#packages" className="block px-3 py-2 text-sm text-[#605f5f] dark:text-gray-400 hover:text-[#c52100] dark:hover:text-[#c52100] hover:bg-[#fafafa] dark:hover:bg-gray-800 rounded transition-colors">
                  Package Comparison
                </a>
              </nav>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 space-y-16">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-4 pb-2 border-b border-[#e8e8e8] dark:border-gray-700">{s.title}</h2>
                <p className="text-[#605f5f] dark:text-gray-300 leading-relaxed text-lg">{s.content}</p>
                <p className="mt-4 text-sm text-[#605f5f] dark:text-gray-400">
                  <Link href="/contact" className="text-[#c52100] font-semibold hover:underline">Contact us</Link> for pricing and availability.
                </p>
              </section>
            ))}

            {/* Package comparison */}
            <section id="packages" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-6 pb-2 border-b border-[#e8e8e8] dark:border-gray-700">Package Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[#e8e8e8] dark:border-gray-700 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#2b2b2b] text-white">
                      <th className="px-4 py-3 text-left">Package</th>
                      <th className="px-4 py-3 text-left">Full Name</th>
                      <th className="px-4 py-3 text-left">Products Included</th>
                      <th className="px-4 py-3 text-left">Best For</th>
                      <th className="px-4 py-3 text-left">Pricing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages.map((pkg, i) => (
                      <tr key={pkg.name} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-[#fafafa] dark:bg-gray-950"}>
                        <td className="px-4 py-3 font-bold text-[#c52100]">{pkg.name}</td>
                        <td className="px-4 py-3 text-[#2b2b2b] dark:text-gray-100">{pkg.full}</td>
                        <td className="px-4 py-3 text-[#605f5f] dark:text-gray-400">{pkg.products.join(", ")}</td>
                        <td className="px-4 py-3 text-[#605f5f] dark:text-gray-400">{pkg.suitedFor}</td>
                        <td className="px-4 py-3 text-[#605f5f] dark:text-gray-400 font-medium">Contact for Pricing</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
