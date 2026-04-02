"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Download, X, ChevronRight } from "lucide-react";

const brochures = [
  { name: "ICODE™", slug: "icode", img: "/images/icode_brochure.png", pdf: "/brochures/SHEAR3D_ICODE_Brochure.pdf" },
  { name: "DXFMOD™", slug: "dxfmod", img: "/images/dxfmod_brochure.png", pdf: "/brochures/SHEAR3D_DXFMOD_Brochure.pdf" },
  { name: "ANAPRO™", slug: "anapro", img: "/images/anapro_brochure.png", pdf: "/brochures/SHEAR3D_ANAPRO_Brochure.pdf" },
  { name: "STRIP™", slug: "strip", img: "/images/strip_brochure.png", pdf: "/brochures/SHEAR3D_STRIP_Brochure.pdf" },
  { name: "SLAM™", slug: "slam", img: "/images/slam_brochure.png", pdf: "/brochures/SHEAR3D_SLAM_Brochure.pdf" },
  { name: "SLIDE™", slug: "slide", img: "/images/slide_brochure.png", pdf: "/brochures/SHEAR3D_SLIDE_Brochure.pdf" },
];

const softwarePackages = [
  {
    name: "SCP",
    full: "Structural Component Package",
    desc: "Quick design of individual structural components.",
    includes: "Includes: ICODE",
  },
  {
    name: "GSP",
    full: "General Structure Package",
    desc: "Modeling and analysis of general structures.",
    includes: "Includes: DXFMOD, ANAPRO, STRIP",
  },
  {
    name: "BLP",
    full: "Building Layout Package",
    desc: "Complete RC building design workflow.",
    includes: "Includes: SLAM, ANAPRO, SLIDE",
  },
];

export default function DownloadPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState("");

  function openModal(pkgName: string) {
    setSelectedPkg(pkgName);
    setModalOpen(true);
  }

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Downloads</h1>
          <p className="text-white/70 text-lg">Brochures, demos, and software packages</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-sm text-[#605f5f] dark:text-gray-400">
            <Link href="/" className="hover:text-[#c52100] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#2b2b2b] dark:text-gray-100 font-medium">Downloads</span>
          </nav>
        </div>
      </div>

      {/* Brochures */}
      <section className="py-16 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-2">Product Brochures</h2>
            <p className="text-[#605f5f] dark:text-gray-400 mb-8">Download detailed brochures for each product</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brochures.map((b, i) => (
                <div key={b.slug} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <Image src={b.img} alt={b.name} width={206} height={58} className="w-full h-auto" />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-[#2b2b2b] dark:text-gray-100 mb-2">{b.name}</p>
                    <a
                      href={b.pdf}
                      download
                      className="flex items-center gap-1 text-xs text-[#c52100] font-medium hover:underline"
                    >
                      <Download size={12} />
                      Download PDF
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Packages */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-2">Software Packages</h2>
            <p className="text-[#605f5f] dark:text-gray-400 mb-8">Request a download for your chosen package</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwarePackages.map((pkg, i) => (
                <div key={pkg.name} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="h-1 bg-[#c52100]" />
                  <div className="p-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-[#c52100]">{pkg.name}</span>
                      <span className="text-sm text-[#605f5f] dark:text-gray-400">{pkg.full}</span>
                    </div>
                    <p className="text-[#2b2b2b] dark:text-gray-100 mb-2 text-sm">{pkg.desc}</p>
                    <p className="text-xs text-[#605f5f] dark:text-gray-400 mb-6 font-medium">{pkg.includes}</p>
                    <button
                      onClick={() => openModal(pkg.name)}
                      className="w-full bg-[#c52100] hover:bg-[#a01900] text-white font-semibold py-2 rounded-lg transition-colors text-sm"
                    >
                      Request Download
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#605f5f] dark:text-gray-400 hover:text-[#2b2b2b] dark:hover:text-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-2">Request Download — {selectedPkg}</h3>
            <p className="text-[#605f5f] dark:text-gray-400 mb-4">
              Please contact us to request your download link for the <strong>{selectedPkg}</strong> package.
            </p>
            <p className="text-[#2b2b2b] dark:text-gray-100 font-medium">
              Email:{" "}
              <a href="mailto:sales@shear3d.com" className="text-[#c52100] hover:underline">
                sales@shear3d.com
              </a>
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 w-full bg-[#c52100] hover:bg-[#a01900] text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
