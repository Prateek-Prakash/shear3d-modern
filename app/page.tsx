"use client";
import HeroCarousel from "@/components/HeroCarousel";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ShoppingCart, RefreshCw, Cloud, Building2, Cpu, MapPin, Mail, Send, Download } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "6", label: "Software Products" },
  { value: "3", label: "Solution Packages" },
  { value: "5", label: "Service Offerings" },
];

const products = [
  {
    name: "ICODE™",
    tagline: "Interactive Component Designer",
    desc: "Free design modules for beams, columns, slabs, and footings.",
    features: ["Beam & column design", "Slab design per IS/BS", "Footing design"],
    slug: "icode",
  },
  {
    name: "DXFMOD™",
    tagline: "DXF Structural Modeler",
    desc: "Import AutoCAD DXF files to build precise 2D/3D structural models.",
    features: ["AutoCAD DXF import", "2D/3D structural modeling", "Truss & shell elements"],
    slug: "dxfmod",
  },
  {
    name: "ANAPRO™",
    tagline: "Analysis Processor",
    desc: "FEM solver for linear static analysis of any structural system.",
    features: ["FEM linear static analysis", "Multiple load combinations", "Stress & reaction output"],
    slug: "anapro",
  },
  {
    name: "STRIP™",
    tagline: "Structural Investigation Processor",
    desc: "Advanced post-processor for visualizing FEM analysis results.",
    features: ["Deflected shape plots", "Stress contour visualization", "Force & moment diagrams"],
    slug: "strip",
  },
  {
    name: "SLAM™",
    tagline: "Structural Layout Modeler",
    desc: "3D building modeler for RC frames and slabs with seismic analysis.",
    features: ["3D building modeling", "Seismic load (IS code)", "Auto-load generation"],
    slug: "slam",
  },
  {
    name: "SLIDE™",
    tagline: "Structural Integrated Designer",
    desc: "Integrated RC design & detailing per Indian Standards.",
    features: ["Design per IS codes", "Auto-generated drawings", "Beam/column/slab/footing design"],
    slug: "slide",
  },
];

const packages = [
  {
    abbr: "SCP",
    name: "Structural Component Package",
    desc: "Quick design and verification of individual structural components.",
    products: ["ICODE"],
  },
  {
    abbr: "GSP",
    name: "General Structure Package",
    desc: "Comprehensive modeling and analysis of general structures including frames, shells, and trusses.",
    products: ["DXFMOD", "ANAPRO", "STRIP"],
  },
  {
    abbr: "BLP",
    name: "Building Layout Package",
    desc: "Complete end-to-end RC building design workflow from layout to construction drawings.",
    products: ["SLAM", "ANAPRO", "SLIDE"],
  },
];

const services = [
  {
    icon: ShoppingCart,
    title: "Software for Purchase",
    desc: "Perpetual licenses with one year of support and updates included.",
    href: "/solutions#purchase",
  },
  {
    icon: RefreshCw,
    title: "Software for Lease",
    desc: "Flexible monthly or annual subscriptions for project-based usage.",
    href: "/solutions#lease",
  },
  {
    icon: Cloud,
    title: "Software On-Demand",
    desc: "Pay-per-use cloud access — no installation, no commitment.",
    href: "/solutions#ondemand",
  },
  {
    icon: Building2,
    title: "Structural Consulting",
    desc: "Expert structural analysis, design, and detailing by our team.",
    href: "/solutions#consulting",
  },
  {
    icon: Cpu,
    title: "Advanced CAE/FEA",
    desc: "Complex finite element analysis for civil, mechanical, and industrial structures.",
    href: "/solutions#cae",
  },
];

const galleryPreview = [
  { src: "/gallery-images/90m_Steel_Dome.jpg", title: "90m Steel Dome" },
  { src: "/gallery-images/CircularOfficeBuilding.jpg", title: "Circular Office Building" },
  { src: "/gallery-images/IndoorStadium.jpg", title: "Indoor Stadium" },
  { src: "/gallery-images/Multi-Storey-Apartment-Building.jpg", title: "Multi Storey Apartment" },
  { src: "/gallery-images/40m_Double_Layer_Grid.jpg", title: "40m Double Layer Grid" },
  { src: "/gallery-images/SingleLayer_Steel_Dome.jpg", title: "Single Layer Steel Dome" },
];

export default function HomePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <>
      {/* SECTION 1: Hero */}
      <HeroCarousel />

      {/* SECTION 2: Stats Bar */}
      <section className="bg-gray-900 dark:bg-gray-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#c52100]">{s.value}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Products */}
      <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-3">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#c52100] to-orange-500 bg-clip-text text-transparent mb-2">
                  Our Products
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Powerful tools for every stage of structural engineering</p>
              </div>
              <Link href="/products" className="text-[#c52100] font-semibold hover:underline text-sm shrink-0">
                View All Products →
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="h-1 bg-[#c52100]" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="font-bold text-[#c52100] text-lg">{p.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{p.tagline}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{p.desc}</p>
                    <ul className="space-y-1.5 mb-6 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Packages */}
      <section id="packages" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#c52100] to-orange-500 bg-clip-text text-transparent mb-2">
              Solution Packages
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Bundle the right tools for your workflow</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.abbr} delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="h-1 bg-[#c52100]" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-[#c52100]">{pkg.abbr}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{pkg.name}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed flex-1">{pkg.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {pkg.products.map((prod) => (
                        <span key={prod} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full">
                          {prod}
                        </span>
                      ))}
                    </div>
                    <Link href="/solutions" className="text-[#c52100] font-semibold hover:underline text-sm">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: About */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-xs font-semibold text-[#c52100] uppercase tracking-widest mb-3">About Shear3D</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-5">Engineering Excellence Since 1991</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Shear3D Consulting was founded in 1991 as a structural engineering services company in Bangalore, India.
                Over three decades, we evolved from providing hands-on consulting services to developing specialized
                software tools that empower structural engineers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Our mission is to enable structural engineers to incorporate their engineering judgement to model,
                analyse, design and generate drawings with confidence.
              </p>
              <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Founded 1991</span>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <span className="font-medium">Bangalore, India</span>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <span className="font-medium">30+ Years</span>
              </div>
              <Link href="/about" className="text-[#c52100] font-semibold hover:underline text-sm">
                Learn More About Us →
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-7xl font-serif text-[#c52100] leading-none mb-4">&ldquo;</div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Enable structural engineers to incorporate their engineering judgement to model, analyse,
                  design and generate drawings with confidence.
                </p>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">— Shear3D Consulting Mission</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6: Services / Solutions */}
      <section id="solutions" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-3">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#c52100] to-orange-500 bg-clip-text text-transparent mb-2">
                  Our Solutions
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Software and consulting services for every need</p>
              </div>
              <Link href="/solutions" className="text-[#c52100] font-semibold hover:underline text-sm shrink-0">
                View All Solutions →
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <FadeIn key={svc.title} delay={i * 0.08}>
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col">
                    <div className="bg-[#c52100]/10 text-[#c52100] p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{svc.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{svc.desc}</p>
                    <Link href={svc.href} className="text-[#c52100] font-semibold hover:underline text-sm mt-4">
                      Learn More →
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: Gallery Preview */}
      <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-3">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#c52100] to-orange-500 bg-clip-text text-transparent mb-2">
                  Project Gallery
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Structural projects powered by Shear3D software</p>
              </div>
              <Link href="/gallery" className="text-[#c52100] font-semibold hover:underline text-sm shrink-0">
                View Full Gallery →
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((img, i) => (
              <FadeIn key={img.src} delay={i * 0.07}>
                <Link href="/gallery">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {img.title}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Contact */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#c52100] to-orange-500 bg-clip-text text-transparent mb-2">
              Get In Touch
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Have a question? We&apos;d love to hear from you.</p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name <span className="text-[#c52100]">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c52100]/30 focus:border-[#c52100] transition-all"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span className="text-[#c52100]">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c52100]/30 focus:border-[#c52100] transition-all"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
                  <input
                    {...register("company")}
                    placeholder="Your company (optional)"
                    className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c52100]/30 focus:border-[#c52100] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message <span className="text-[#c52100]">*</span>
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c52100]/30 focus:border-[#c52100] transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-500 font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c52100] hover:bg-[#a01900] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send size={16} />
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </FadeIn>

            {/* Contact Details */}
            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-[#c52100] mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Bangalore, Karnataka, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-[#c52100] shrink-0" />
                      <a href="mailto:enquiries@shear3d.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#c52100] transition-colors">
                        enquiries@shear3d.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-[#c52100] shrink-0" />
                      <a href="mailto:support@shear3d.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#c52100] transition-colors">
                        support@shear3d.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-[#c52100] shrink-0" />
                      <a href="mailto:sales@shear3d.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#c52100] transition-colors">
                        sales@shear3d.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#c52100] transition-colors">
                    <FacebookIcon size={20} />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#c52100] transition-colors">
                    <TwitterIcon size={20} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#c52100] transition-colors">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#c52100] transition-colors">
                    <YoutubeIcon size={20} />
                  </a>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Office Hours</h4>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>Mon – Fri: 9AM – 6PM IST</p>
                    <p>Sat: 10AM – 2PM IST</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-2">
                    <Download size={16} className="text-[#c52100]" />
                    Downloads
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    View our brochures and software packages.
                  </p>
                  <Link href="/download" className="text-[#c52100] font-semibold hover:underline text-sm">
                    Go to Downloads →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your structural engineering workflow?</h2>
            <p className="text-white/80 mb-8 text-lg">Join hundreds of structural engineers who trust Shear3D software.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#products" className="bg-[#c52100] hover:bg-[#a01900] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Get Started
              </Link>
              <Link href="#contact" className="border border-white text-white hover:bg-white hover:text-[#2b2b2b] font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
