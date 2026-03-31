"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/download", label: "Download" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"} border-b border-gray-200 dark:border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/shear3d_logo.gif" alt="Shear3D" width={120} height={40} className="h-10 w-auto" />
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? "text-[#c52100] border-b-2 border-[#c52100]"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#c52100] dark:hover:text-[#c52100]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <DarkModeToggle />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            {/* Mobile hamburger */}
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium ${isActive ? "text-[#c52100]" : "text-gray-700 dark:text-gray-300"}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
