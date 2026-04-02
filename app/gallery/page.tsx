"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/gallery-images/3Block-12UnitsComplex.jpg", title: "3-Block 12-Units Complex", software: "SLAM", type: "RC Building" },
  { src: "/gallery-images/3Block-12UnitsComplexDisplacement.jpg", title: "Displacement Analysis", software: "STRIP", type: "FEA Results" },
  { src: "/gallery-images/40m_Double_Layer_Grid.jpg", title: "40m Double Layer Grid", software: "ANAPRO", type: "Space Frame" },
  { src: "/gallery-images/90m_Steel_Dome.jpg", title: "90m Steel Dome", software: "ANAPRO", type: "Steel Structure" },
  { src: "/gallery-images/BlockApartment4-Animation.gif", title: "Block Apartment Animation", software: "SLIDE", type: "Animation" },
  { src: "/gallery-images/CircularOfficeBuilding.jpg", title: "Circular Office Building", software: "SLAM", type: "RC Building" },
  { src: "/gallery-images/Comm_Tower.gif", title: "Communication Tower", software: "ANAPRO", type: "Tower" },
  { src: "/gallery-images/FlatSlab_Animation.gif", title: "Flat Slab Animation", software: "SLIDE", type: "Animation" },
  { src: "/gallery-images/Four-Unit-Apartment-Block.jpg", title: "Four Unit Apartment Block", software: "SLAM", type: "RC Building" },
  { src: "/gallery-images/IndoorStadium.jpg", title: "Indoor Stadium", software: "ANAPRO", type: "Large Span" },
  { src: "/gallery-images/Multi-Storey-Apartment-Building.jpg", title: "Multi Storey Apartment Building", software: "SLAM", type: "RC Building" },
  { src: "/gallery-images/RaftSlab.jpg", title: "Raft Slab Foundation", software: "ANAPRO", type: "Foundation" },
  { src: "/gallery-images/SingleLayer_Steel_Dome.jpg", title: "Single Layer Steel Dome", software: "ANAPRO", type: "Steel Dome" },
  { src: "/gallery-images/Unit3-Apartment-Complex.jpg", title: "Unit 3 Apartment Complex", software: "SLAM", type: "RC Building" },
];

export default function GalleryPage() {
  const [photoIndex, setPhotoIndex] = useState(-1);

  return (
    <>
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Project Gallery</h1>
          <p className="text-white/70 text-lg">Structural projects powered by Shear3D software</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 text-sm text-[#605f5f] dark:text-gray-400">
            <Link href="/" className="hover:text-[#c52100] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#2b2b2b] dark:text-gray-100 font-medium">Project Gallery</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div
                key={img.src}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 40}ms` }}
                onClick={() => setPhotoIndex(i)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="w-full px-4 py-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold text-sm">{img.title}</p>
                    <div className="flex gap-2 mt-1.5">
                      <span className="bg-[#c52100] text-white text-xs font-semibold px-2 py-0.5 rounded-full">{img.software}</span>
                      <span className="bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-full">{img.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={photoIndex >= 0}
        close={() => setPhotoIndex(-1)}
        index={photoIndex}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </>
  );
}
