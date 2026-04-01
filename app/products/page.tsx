import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Shear3D Consulting",
  description: "Structural engineering software products: ICODE, DXFMOD, ANAPRO, STRIP, SLAM, SLIDE.",
};

const products = [
  {
    slug: "icode",
    name: "ICODE™",
    tagline: "Interactive Component Designer",
    desc: "Free design modules for individual structural components including beams, columns, slabs, and footings.",
    features: ["Beam design per BS/IS codes", "Column and slab design", "Isolated and combined footings", "User-friendly tabbed interface"],
    img: "/images/icode_img.jpg",
  },
  {
    slug: "dxfmod",
    name: "DXFMOD™",
    tagline: "DXF Structural Modeler",
    desc: "Import AutoCAD DXF files and create precise 2D/3D structural models for analysis.",
    features: ["Import AutoCAD DXF files", "2D and 3D structural modeling", "Truss, beam, plate/shell elements", "Node and element editing tools"],
    img: "/images/dxfmod_img.jpg",
  },
  {
    slug: "anapro",
    name: "ANAPRO™",
    tagline: "Analysis Processor",
    desc: "Powerful FEM solver for linear static analysis of structural systems.",
    features: ["FEM linear static analysis", "Multiple element types", "Multiple load cases and combinations", "Reaction forces and stress output"],
    img: "/images/anapro_img.jpg",
  },
  {
    slug: "strip",
    name: "STRIP™",
    tagline: "Structural Investigation Processor",
    desc: "Advanced post-processor for visualizing and interpreting FEM analysis results.",
    features: ["Deflected shape visualization", "Stress contour plots", "Force and moment diagrams", "Animation of results"],
    img: "/images/strip_img.jpg",
  },
  {
    slug: "slam",
    name: "SLAM™",
    tagline: "Structural Layout Modeler",
    desc: "3D building structure modeler for complete RC frame and slab systems.",
    features: ["3D building structure modeling", "Seismic load analysis per IS code", "Level-based and grid-based design", "Auto-load generation"],
    img: "/images/slam_img.jpg",
  },
  {
    slug: "slide",
    name: "SLIDE™",
    tagline: "Structural Integrated Designer",
    desc: "Integrated design and detailing software per Indian Standards for complete RC structures.",
    features: ["Design per Indian Standards", "Interactive and automated design", "Auto-generated structural drawings", "RC beam, column, slab, footing design"],
    img: "/images/slide_img.jpg",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Software Products</h1>
          <p className="text-white/70 text-lg">Powerful tools for every stage of structural engineering</p>
        </div>
      </div>

      <section className="py-16 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={p.slug} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative w-full h-24 bg-gray-100 dark:bg-gray-800">
                  <Image src={p.img} alt={p.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" style={{ filter: "contrast(1.1) brightness(1.02)" }} {...(i === 0 ? { priority: true } : i < 3 ? { loading: "eager" } : {})} />
                </div>
                <div className="h-1 bg-[#c52100]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-[#c52100]">{p.name}</h2>
                    <p className="text-[#605f5f] dark:text-gray-400 text-sm">{p.tagline}</p>
                  </div>
                  <p className="text-[#2b2b2b] dark:text-gray-100 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-1 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#605f5f] dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c52100] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/products/${p.slug}`} className="text-[#c52100] font-semibold hover:underline text-sm mt-auto">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
