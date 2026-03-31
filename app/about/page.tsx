import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Shear3D Consulting",
  description: "Learn about Shear3D Consulting — founded in 1991 in Bangalore, India.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: "Welcome to Shear3D Consulting. We are a team of passionate structural engineers and software developers dedicated to creating powerful, user-friendly software tools that empower structural engineering professionals worldwide.",
  },
  {
    id: "company",
    title: "Our Company",
    content: "Founded in 1991 as an engineering services company in Bangalore, India. We evolved from providing structural engineering consulting services into developing specialized software products. Over 30 years of experience helping engineers deliver quality structural designs efficiently.",
  },
  {
    id: "people",
    title: "Our People",
    content: "Our team comprises experienced structural engineers and skilled software developers who understand both the technical demands of engineering practice and the need for intuitive, reliable software tools.",
  },
  {
    id: "mission",
    title: "Our Mission",
    content: "Enable structural engineers to incorporate their engineering judgement to model, analyse, design and generate drawings with confidence.",
  },
  {
    id: "solutions",
    title: "Our Solutions",
    content: "We offer both software products (ICODE, DXFMOD, ANAPRO, STRIP, SLAM, SLIDE) available for purchase, lease, or on-demand, as well as structural consulting and advanced CAE/FEA services.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">About Shear3D</h1>
          <p className="text-white/70 text-lg">Structural engineering excellence since 1991</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-950">
        <div className="flex gap-12">
          {/* Sticky sidebar */}
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
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 space-y-16">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-4 pb-2 border-b border-[#e8e8e8] dark:border-gray-700">{s.title}</h2>
                <p className="text-[#605f5f] dark:text-gray-300 leading-relaxed text-lg">{s.content}</p>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
