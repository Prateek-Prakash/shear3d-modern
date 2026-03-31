"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeIn from "@/components/FadeIn";

const images = [
  { src: "/gallery-images/3Block-12UnitsComplex.jpg", title: "3-Block 12-Units Complex" },
  { src: "/gallery-images/3Block-12UnitsComplexDisplacement.jpg", title: "Displacement Analysis" },
  { src: "/gallery-images/40m_Double_Layer_Grid.jpg", title: "40m Double Layer Grid" },
  { src: "/gallery-images/90m_Steel_Dome.jpg", title: "90m Steel Dome" },
  { src: "/gallery-images/BlockApartment4-Animation.gif", title: "Block Apartment Animation" },
  { src: "/gallery-images/CircularOfficeBuilding.jpg", title: "Circular Office Building" },
  { src: "/gallery-images/Comm_Tower.gif", title: "Communication Tower" },
  { src: "/gallery-images/FlatSlab_Animation.gif", title: "Flat Slab Animation" },
  { src: "/gallery-images/Four Unit Apartment Block.jpg", title: "Four Unit Apartment Block" },
  { src: "/gallery-images/IndoorStadium.jpg", title: "Indoor Stadium" },
  { src: "/gallery-images/Multi Storey Apartment Building.jpg", title: "Multi Storey Apartment Building" },
  { src: "/gallery-images/RaftSlab.jpg", title: "Raft Slab Foundation" },
  { src: "/gallery-images/SingleLayer_Steel_Dome.jpg", title: "Single Layer Steel Dome" },
  { src: "/gallery-images/Unit3-Apartment Complex.jpg", title: "Unit 3 Apartment Complex" },
];

export default function GalleryPage() {
  const [photoIndex, setPhotoIndex] = useState(-1);

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Project Gallery</h1>
          <p className="text-white/70 text-lg">Structural projects powered by Shear3D software</p>
        </div>
      </div>

      <section className="py-16 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <FadeIn key={img.src} delay={i * 0.04}>
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  onClick={() => setPhotoIndex(i)}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="w-full px-4 py-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-semibold text-sm">{img.title}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
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
