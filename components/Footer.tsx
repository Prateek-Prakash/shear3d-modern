"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-[#1f2937] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <Image src="/images/Shear3D-Transparent-Text-128-dark.png" alt="Shear3D" width={503} height={128} style={{ height: "40px", width: "auto", filter: "saturate(1.8) brightness(1.08)" }} className="mb-3" />
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Structural engineering software and consulting services based in Bangalore, India.
            </p>
            <div className="space-y-1 text-sm">
              <Link href="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-white transition-colors">Terms &amp; Disclaimer</Link>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <div className="space-y-1 text-sm">
              {["icode", "dxfmod", "anapro", "strip", "slam", "slide"].map((slug) => (
                <Link key={slug} href={`/products/${slug}`} className="block hover:text-white transition-colors uppercase">
                  {slug}™
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Subscribe */}
          <div>
            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
            {status === "success" ? (
              <p className="text-green-400 text-sm">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#374151] text-gray-100 placeholder-gray-500 rounded px-3 py-2 text-sm border border-gray-600 focus:outline-none focus:border-[#c52100]"
                />
                <input
                  type="email"
                  placeholder="Your email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#374151] text-gray-100 placeholder-gray-500 rounded px-3 py-2 text-sm border border-gray-600 focus:outline-none focus:border-[#c52100]"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#c52100] hover:bg-[#a01900] text-white text-sm font-semibold py-2 rounded transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
                {status === "error" && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#c52100] shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#c52100] shrink-0" />
                <a href="mailto:enquiries@shear3d.com" className="hover:text-white transition-colors">enquiries@shear3d.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#c52100] shrink-0" />
                <a href="mailto:support@shear3d.com" className="hover:text-white transition-colors">support@shear3d.com</a>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/S3DConsulting" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#c52100] transition-colors">
              <FacebookIcon size={18} />
              </a>
              <a href="https://twitter.com/Shear3D" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-[#c52100] transition-colors">
              <TwitterIcon size={18} />
              </a>
              <a href="http://in.linkedin.com/in/shear3d" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#c52100] transition-colors">
              <LinkedinIcon size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCVMH551hUv69exarEG5Lerw" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-[#c52100] transition-colors">
              <YoutubeIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Shear3D Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
