import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download } from "lucide-react";
import { notFound } from "next/navigation";

const products = [
  {
    slug: "icode",
    name: "ICODE™",
    tagline: "Interactive Component Designer",
    desc: "ICODE is a free interactive component designer providing design modules for individual structural components. It offers a user-friendly tabbed interface for quick verification of structural component designs including beams, columns, slabs, and various types of footings per BS and IS codes.",
    features: ["Beam design per BS/IS codes", "Column and slab design", "Isolated and combined footings", "User-friendly tabbed interface", "Detailed calculation output", "Free to use"],
    img: "/images/icode_img.jpg",
  },
  {
    slug: "dxfmod",
    name: "DXFMOD™",
    tagline: "DXF Structural Modeler",
    desc: "DXFMOD allows you to import AutoCAD DXF files and create precise 2D/3D structural models ready for finite element analysis. It supports a wide range of element types including truss, beam, and plate/shell elements, making it suitable for any structural system.",
    features: ["Import AutoCAD DXF files", "2D and 3D structural modeling", "Truss, beam, plate/shell elements", "Node and element editing tools", "Material and section assignment", "Export to ANAPRO for analysis"],
    img: "/images/dxfmod_img.jpg",
  },
  {
    slug: "anapro",
    name: "ANAPRO™",
    tagline: "Analysis Processor",
    desc: "ANAPRO is a powerful FEM solver for linear static analysis of structural systems. It handles multiple element types, multiple load cases and combinations, and generates comprehensive output including reaction forces, member forces, and stress results.",
    features: ["FEM linear static analysis", "Multiple element types", "Multiple load cases and combinations", "Reaction forces and stress output", "Seismic analysis per IS 1893", "Wind load analysis"],
    img: "/images/anapro_img.jpg",
  },
  {
    slug: "strip",
    name: "STRIP™",
    tagline: "Structural Investigation Processor",
    desc: "STRIP is an advanced post-processor for visualizing and interpreting FEM analysis results from ANAPRO. It provides rich visualization tools including deflected shapes, stress contour plots, force and moment diagrams, and animated results.",
    features: ["Deflected shape visualization", "Stress contour plots", "Force and moment diagrams", "Animation of results", "Color-coded result display", "Report generation"],
    img: "/images/strip_img.jpg",
  },
  {
    slug: "slam",
    name: "SLAM™",
    tagline: "Structural Layout Modeler",
    desc: "SLAM is a 3D building structure modeler designed for complete RC frame and slab systems. It features level-based and grid-based design workflows, automatic load generation, and seismic load analysis per IS codes.",
    features: ["3D building structure modeling", "Seismic load analysis per IS code", "Level-based and grid-based design", "Auto-load generation", "Slab and beam layout tools", "Integration with ANAPRO"],
    img: "/images/slam_img.jpg",
  },
  {
    slug: "slide",
    name: "SLIDE™",
    tagline: "Structural Integrated Designer",
    desc: "SLIDE is an integrated design and detailing software per Indian Standards for complete RC structures. It supports interactive and automated design of beams, columns, slabs, and footings, and auto-generates production-quality structural drawings.",
    features: ["Design per Indian Standards", "Interactive and automated design", "Auto-generated structural drawings", "RC beam, column, slab, footing design", "Reinforcement detailing", "DXF/DWG export"],
    img: "/images/slide_img.jpg",
  },
];

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Shear3D Consulting`,
    description: product.desc,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-sm text-[#605f5f] dark:text-gray-400">
            <Link href="/" className="hover:text-[#c52100] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/products" className="hover:text-[#c52100] transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-[#2b2b2b] dark:text-gray-100 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-white/70 text-xl">{product.tagline}</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
            {/* Image header — matches products listing card style */}
            <div className="relative w-full h-24 bg-gray-100 dark:bg-gray-800">
              <Image src={product.img} alt={product.name} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" style={{ filter: "contrast(1.1) brightness(1.02)" }} priority />
            </div>
            <div className="h-1 bg-[#c52100]" />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-4">Overview</h2>
              <p className="text-[#605f5f] dark:text-gray-300 leading-relaxed mb-6">{product.desc}</p>
              <h3 className="text-lg font-semibold text-[#2b2b2b] dark:text-gray-100 mb-3">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#605f5f] dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-[#c52100] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-[#c52100] hover:bg-[#a01900] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                >
                  <Download size={16} />
                  Download Brochure
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border border-[#c52100] text-[#c52100] hover:bg-[#c52100] hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-6">Other Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.filter(p => p.slug !== product.slug).slice(0, 3).map(p => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-[#c52100] hover:shadow-md transition-all group">
                <p className="font-bold text-[#c52100] group-hover:underline">{p.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{p.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
