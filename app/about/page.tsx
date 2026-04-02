import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Info, Building2, Users, Target, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Shear3D Consulting",
  description: "Learn about Shear3D Consulting — founded in 1991 in Bangalore, India.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: Info,
    content: "Welcome to Shear3D Consulting. We are a team of passionate structural engineers and software developers dedicated to creating powerful, user-friendly software tools that empower structural engineering professionals worldwide.",
  },
  {
    id: "company",
    title: "Our Company",
    icon: Building2,
    content: "Founded in 1991 as an engineering services company in Bangalore, India. We evolved from providing structural engineering consulting services into developing specialized software products. Over 30 years of experience helping engineers deliver quality structural designs efficiently.",
  },
  {
    id: "people",
    title: "Our People",
    icon: Users,
    content: "Our team comprises experienced structural engineers and skilled software developers who understand both the technical demands of engineering practice and the need for intuitive, reliable software tools.",
  },
  {
    id: "mission",
    title: "Our Mission",
    icon: Target,
    content: "Enable structural engineers to incorporate their engineering judgement to model, analyse, design and generate drawings with confidence.",
  },
  {
    id: "solutions",
    title: "Our Solutions",
    icon: Layers,
    content: "We offer both software products (ICODE, DXFMOD, ANAPRO, STRIP, SLAM, SLIDE) available for purchase, lease, or on-demand, as well as structural consulting and advanced CAE/FEA services.",
  },
];

const milestones = [
  { value: "1991", label: "Founded" },
  { value: "30+ Years", label: "Experience" },
  { value: "6 Products", label: "Software Suite" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">About Shear3D</h1>
          <p className="text-white/70 text-lg">Structural engineering excellence since 1991</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-sm text-[#605f5f] dark:text-gray-400">
            <Link href="/" className="hover:text-[#c52100] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#2b2b2b] dark:text-gray-100 font-medium">About</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-950">
        <div className="flex gap-12">
          {/* Sticky sidebar */}
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
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {/* Milestone cards */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {milestones.map((m) => (
                <div key={m.label} className="bg-[#c52100]/5 border border-[#c52100]/20 rounded-lg p-4">
                  <div className="text-xl font-bold text-[#c52100]">{m.value}</div>
                  <div className="text-xs text-gray-500">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-16">
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
                  </section>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
