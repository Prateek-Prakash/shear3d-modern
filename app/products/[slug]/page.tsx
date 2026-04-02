import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download, Package } from "lucide-react";
import { notFound } from "next/navigation";

interface ContentSection {
  heading?: string;
  body?: string;
  features?: string[];
  images?: string[];
  fullWidth?: boolean;
  imageGrid?: boolean;
}

interface Product {
  slug: string;
  name: string;
  tagline: string;
  pricing: string;
  desc: string;
  img: string;
  headerImg: string;
  brochure: string;
  installer?: string;
  pkg: string;
  sections: ContentSection[];
}

const products: Product[] = [
  {
    slug: "icode",
    name: "ICODE™",
    tagline: "Interactive Component Designer",
    pricing: "Free",
    desc: "Interactive Component Designer (ICODE™) is a software application designed to enable engineers to carry out design of common structural engineering components on Windows operating systems. It provides modules for design of structural components as per IS456-2000 standards. The interface is designed as a single dialog based application with separate tabs for each design module.",
    img: "/images/icode_img.jpg",
    headerImg: "/images/icode_web_img2.jpg",
    brochure: "/brochures/SHEAR3D_ICODE_Brochure.pdf",
    installer: "/downloads/Shear3D_SCP_Install.zip",
    pkg: "Structural Component Package (SCP)",
    sections: [
      {
        heading: "Beam Design",
        fullWidth: true,
        features: [
          "Comprehensive and completely interactive beam design program. Accepts design loads and relevant parameters.",
          "Options to design Rectangular, T, and L beams per IS456-2000.",
        ],
      },
      {
        heading: "Column Design",
        images: ["/images/icode_ColumnDesignTab.png"],
        features: [
          "Interactive column design with Uniaxial and Biaxial options.",
          "Slender column design supported.",
          "Reinforcement details with stirrup exploded view per IS456.",
        ],
      },
      {
        heading: "Slab Design",
        images: ["/images/icode_SlabDesignTab.png"],
        features: [
          "Design slabs with various support conditions per IS456.",
          "One-way and Two-way slab designs with deflection provisions.",
          "Moment coefficients for defined panel type.",
          "Reinforcement details with cross section views.",
        ],
      },
      {
        heading: "Isolated Footing Design",
        images: ["/images/icode_IFDesignTab.png"],
        features: [
          "Auto-proportions square or rectangular flat or tapered slab footings.",
          "Handles biaxial moments and eccentrically located columns per IS456.",
          "Reinforcement details with plan and cross section view.",
        ],
      },
      {
        heading: "Combined Footing Design",
        images: ["/images/icode_CombFootTab1.png"],
        features: [
          "Supports footings for more than one column.",
          "Finite element procedure with subgrade reaction.",
          "Both flat slab and slab-beam type footings per IS456.",
          "Displays elastic curve, pressure, bending moment and shear force diagrams.",
        ],
      },
      {
        heading: "Common Features",
        fullWidth: true,
        features: [
          "Intuitive and easy to use user interface",
          "Separate sections for Input, Results and Drawing",
          "Ability to input data, design and get detailed drawings in one tool",
          "Input data validation to avoid input error and save time",
          "Display of results as numeric values and design drawings",
          "Ability to save design results to file for reference and reporting",
          "Design drawing print capability for site reference",
        ],
      },
    ],
  },
  {
    slug: "dxfmod",
    name: "DXFMOD™",
    tagline: "DXF Structural Modeler",
    pricing: "Contact for Pricing",
    desc: "DXF Structural Modeler (DXFMOD™) is a standalone application to convert 2D and 3D structures modeled in AutoCAD environment. The aim is to provide a graphical interface to model general structures, take away the laborious process of creating the model manually, generate numeric data automatically and for model verification. It can also be used as an independent structural modeler to model any structure either in 2D or 3D from scratch.",
    img: "/images/dxfmod_img.jpg",
    headerImg: "/images/dxfmod_web_img2.jpg",
    brochure: "/brochures/SHEAR3D_DXFMOD_Brochure.pdf",
    pkg: "General Structure Package (GSP)",
    sections: [
      {
        heading: "Structural Modeling",
        images: ["/images/dxfmod_app_img1.png", "/images/dxfmod_app_img2.png"],
        features: [
          "Conversion of DXF geometric models to structural model",
          "Create new nodes and offset and array copy of nodes",
          "Create new truss, beam and plate/shell elements and offset/array copy",
          "Modify element properties, match property and convert between element types",
          "Create nodal restraints and beam element end force releases",
          "Create multiple load cases, nodal, beam and plate/shell pressure loads",
          "Create analysis file for 3D finite element analysis",
          "Save data in neutral file format for interoperability",
        ],
      },
      {
        heading: "Model Visualization & Verification",
        images: ["/images/dxfmod_app_img3.png", "/images/dxfmod_app_img4.png"],
        features: [
          "Structural element activation for display by element attributes",
          "Element identification by multi-color display",
          "Element/Node numbering and information display",
          "Hidden line removal, shrunken element display",
          "Graphical restraint and force display",
          "Multiple window display",
          "Hard copy prints of graphical display",
        ],
      },
      {
        fullWidth: true,
        imageGrid: true,
        images: ["/images/dxfmod_app_img5.png", "/images/dxfmod_app_img6.png"],
      },
    ],
  },
  {
    slug: "anapro",
    name: "ANAPRO™",
    tagline: "Analysis Processor",
    pricing: "Contact for Pricing",
    desc: "Analysis Processor (ANAPRO™) is a software application designed to enable engineers to carry out analysis of structures to understand behavior under external forces. It is designed for Windows® operating systems. It can be used to analyze 3D structures modeled using Truss, Beam, Spring and Plate/Shell elements. Completely integrated with DXFMOD and SLAM for modeling and STRIP for post-processing.",
    img: "/images/anapro_img.jpg",
    headerImg: "/images/anapro_web_img.jpg",
    brochure: "/brochures/SHEAR3D_ANAPRO_Brochure.pdf",
    pkg: "General Structure Package (GSP) + Building Layout Package (BLP)",
    sections: [
      {
        heading: "Key Features",
        images: ["/images/anapro_app_img.png"],
        features: [
          "Linear Static Analysis",
          "Three dimensional Truss, Beam, Spring and Shell elements",
          "Joint and Element loads/pressure",
          "Multiple load cases and load combinations",
          "Extensive data checking and error handling",
          "Ability to control analysis result output",
          "Binary data files for graphical response visualization",
          "Integration of results with STRIP and SLIDE applications",
        ],
      },
    ],
  },
  {
    slug: "strip",
    name: "STRIP™",
    tagline: "Structural Investigation Processor",
    pricing: "Contact for Pricing",
    desc: "Structural Investigation Processor (STRIP™) is a software application designed to enable engineers to investigate structural modeling and behavior under external forces, and visualize induced internal forces. Designed for Windows® operating systems. Supports a neutral format to share model and analysis result data with third party structural applications.",
    img: "/images/strip_img.jpg",
    headerImg: "/images/strip_web_img2.jpg",
    brochure: "/brochures/SHEAR3D_STRIP_Brochure.pdf",
    pkg: "General Structure Package (GSP)",
    sections: [
      {
        heading: "Model Verification",
        images: ["/images/strip_app_img1.png", "/images/strip_app_img2.png"],
        features: [
          "Structural element activation for display by element attributes",
          "Element identification by multi-color display",
          "Element/Node numbering and information display",
          "Hidden line removal, shrunken element display",
          "Graphical restraint and force display",
          "Multiple window display",
        ],
      },
      {
        heading: "Response Visualization",
        images: ["/images/strip_app_img3.png", "/images/strip_app_img4.png"],
        features: [
          "Deflected shape of the structure",
          "Deflection and Stress contour diagrams",
          "Structure Animation",
          "Bending Moment and Shear Force diagrams",
          "Force fringes of Truss and Beam elements",
        ],
      },
      {
        heading: "Reporting & Export",
        images: ["/images/strip_app_img5.png", "/images/strip_app_img6.png"],
        features: [
          "Summary output of selective results",
          "Detailed results output for different load cases and combinations",
          "Results in DXF format for graphical presentation",
          "Hard copy prints of graphical display",
          "Neutral data format to support third party applications",
        ],
      },
    ],
  },
  {
    slug: "slam",
    name: "SLAM™",
    tagline: "Structural Layout Modeler",
    pricing: "Contact for Pricing",
    desc: "Structural Layout Modeler (SLAM™) is an application to model building structures in 3D with simple modeling concepts defined in 2D with 3D visualization capabilities. Takes advantage of general building designed in levels and plan laid out using grid lines. Also models lintels, chajjas, and provides comprehensive load generation including seismic and wind loads. Supports DXF import to combine space frames with building models.",
    img: "/images/slam_img.jpg",
    headerImg: "/images/slam_web_img2.jpg",
    brochure: "/brochures/SHEAR3D_SLAM_Brochure.pdf",
    pkg: "Building Layout Package (BLP)",
    sections: [
      {
        heading: "Structural Modeling",
        images: ["/images/slam_app_img1.png", "/images/slam_app_img2.png"],
        features: [
          "Simple modeling concept extending building levels and grids",
          "Create and manage structural properties with import/export across projects",
          "Automatic structural layout generation and selective copy across levels",
          "Create column, beam, slab, lintel and chajja elements",
          "Create and manage walls on beams and standard stair case types",
          "Auto load transfer from slabs, walls, lintels, chajjas and stairs",
          "Auto seismic and wind load generation",
          "Import DXF geometric models and convert to structural model",
          "Create multiple load cases and load combinations",
        ],
      },
      {
        heading: "Model Visualization",
        images: ["/images/slam_app_img3.png", "/images/slam_app_img4.png"],
        features: [
          "Structural element activation for display by element attributes",
          "Element identification by multi-color display",
          "Element/Node numbering and information display",
          "Hidden line removal, shrunken element display",
          "Graphical restraint and force display",
          "Multiple window display",
          "Hard copy prints of graphical display",
        ],
      },
      {
        fullWidth: true,
        imageGrid: true,
        images: ["/images/slam_app_img5.png", "/images/slam_app_img6.png"],
      },
    ],
  },
  {
    slug: "slide",
    name: "SLIDE™",
    tagline: "Structural Integrated Designer",
    pricing: "Contact for Pricing",
    desc: "Structural Integrated Designer (SLIDE™) is an application integrated with SLAM and ANAPRO to post-process results, visualize response, design and detail building structures as per Indian Standard. Provides extensive features for the structural engineer's design process. Allows flexibility to design elements interactively or in a fully automated process, and auto-generates production drawings.",
    img: "/images/slide_img.jpg",
    headerImg: "/images/slide_web_img2.jpg",
    brochure: "/brochures/SHEAR3D_SLIDE_Brochure.pdf",
    pkg: "Building Layout Package (BLP)",
    sections: [
      {
        heading: "Design Features",
        images: ["/images/slide_app_img1.png", "/images/slide_app_img2.png"],
        features: [
          "Design elements interactively or automatically",
          "Auto design by level or whole structure",
          "Design and detailing of elements individually, in groups, or auto",
          "Design of isolated and combined footings",
          "Design and detailing of beams as individual or continuous",
          "Design and detailing of columns as individual or across levels",
          "Auto detailing of footings, columns, beams, slabs and stairs",
          "Settings to control and fine tune reinforcement details",
          "Modification of auto-generated reinforcement details interactively",
        ],
      },
      {
        heading: "Drawing Generation",
        images: ["/images/slide_app_img3.png", "/images/slide_app_img4.png"],
        features: [
          "Generation of footing, beam and lintel layout drawings",
          "Generation of footing, column, beam, slab and stair detail drawings",
          "Design detail output to files for report generation",
          "Results in DXF format for graphical presentation",
        ],
      },
      {
        heading: "Response Visualization",
        images: ["/images/slide_app_img5.png", "/images/slide_app_img6.png"],
        features: [
          "Integrated with SLAM and ANAPRO for result post-processing",
          "Deflected shape of the structure",
          "Deflection and Stress contour diagrams",
          "Structure Animation",
          "Bending Moment and Shear Force diagrams",
          "Force fringes of Truss and Beam elements",
        ],
      },
      {
        fullWidth: true,
        imageGrid: true,
        images: ["/images/slide_app_img7.png"],
      },
    ],
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

function FeatureBullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-[#605f5f] dark:text-gray-300 text-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-[#c52100] shrink-0 mt-1.5" />
      {text}
    </li>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-[#c52100] text-[#2b2b2b] dark:text-gray-100">
      {children}
    </h2>
  );
}

function ContentSectionBlock({ section }: { section: ContentSection }) {
  const hasImages = section.images && section.images.length > 0;

  // Full-width image grid (e.g. extra screenshots at the bottom)
  if (section.imageGrid && hasImages) {
    return (
      <div className={`grid gap-4 ${section.images!.length === 1 ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3"}`}>
        {section.images!.map((src) => (
          <Image
            key={src}
            src={src}
            alt="Screenshot"
            width={800}
            height={500}
            unoptimized
            className="w-full h-auto rounded border border-gray-200 dark:border-gray-700"
          />
        ))}
      </div>
    );
  }

  // Full-width text section (no images)
  if (section.fullWidth || !hasImages) {
    return (
      <div>
        {section.heading && (
          <h3 className="text-lg font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">{section.heading}</h3>
        )}
        {section.body && (
          <p className="text-[#605f5f] dark:text-gray-300 leading-relaxed mb-4">{section.body}</p>
        )}
        {section.features && section.features.length > 0 && (
          <ul className="space-y-1.5">
            {section.features.map((f) => <FeatureBullet key={f} text={f} />)}
          </ul>
        )}
      </div>
    );
  }

  // Two-column: text left, screenshot(s) right
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        {section.heading && (
          <h3 className="text-lg font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">{section.heading}</h3>
        )}
        {section.body && (
          <p className="text-[#605f5f] dark:text-gray-300 leading-relaxed mb-4">{section.body}</p>
        )}
        {section.features && section.features.length > 0 && (
          <ul className="space-y-1.5">
            {section.features.map((f) => <FeatureBullet key={f} text={f} />)}
          </ul>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {section.images!.map((src) => (
          <Image
            key={src}
            src={src}
            alt={section.heading ? `${section.heading} screenshot` : "Screenshot"}
            width={800}
            height={500}
            unoptimized
            className="w-full h-auto rounded border border-gray-200 dark:border-gray-700"
          />
        ))}
      </div>
    </div>
  );
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const isFree = product.pricing === "Free";

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
      <div className="relative text-white bg-slate-900">
        <Image
          src={product.headerImg}
          alt={product.name}
          width={960}
          height={400}
          className="w-full h-auto"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col sm:flex-row sm:items-end gap-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-white/80 text-xl">{product.tagline}</p>
            </div>
            <span className={`self-start sm:self-auto shrink-0 inline-block text-sm font-semibold px-4 py-1.5 rounded-full ${isFree ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-200"}`}>
              {isFree ? "Free" : "Desktop Software"}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

          {/* Overview */}
          <section>
            <SectionHeading>Overview</SectionHeading>
            <p className="text-[#605f5f] dark:text-gray-300 leading-relaxed text-base">{product.desc}</p>
          </section>

          {/* Inline content sections */}
          {product.sections.map((section, i) => (
            <div key={i}>
              <hr className="border-gray-200 dark:border-gray-700 mb-12" />
              <ContentSectionBlock section={section} />
            </div>
          ))}

          {/* Package Info */}
          <section>
            <hr className="border-gray-200 dark:border-gray-700 mb-12" />
            <div className="bg-[#c52100]/5 border border-[#c52100]/20 rounded-xl p-6 flex items-start gap-4">
              <Package size={24} className="text-[#c52100] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2b2b2b] dark:text-gray-100 mb-1">Part of the {product.pkg}</p>
                <Link href="/solutions#packages" className="text-sm text-[#c52100] hover:underline">
                  View all packages →
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="flex flex-wrap gap-4">
              <a
                href={product.brochure}
                download
                className="flex items-center gap-2 bg-[#c52100] hover:bg-[#a01900] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                <Download size={16} />
                Download Brochure
              </a>
              {product.installer && (
                <a
                  href={product.installer}
                  download
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                >
                  <Download size={16} />
                  Download Software (ZIP, 3.8 MB)
                </a>
              )}
              <Link
                href="/contact"
                className="flex items-center gap-2 border border-[#c52100] text-[#c52100] hover:bg-[#c52100] hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Related Products */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
