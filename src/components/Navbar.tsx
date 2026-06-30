"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-primary/10"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Satvik Yoga Home"
          >
            <img
              src="/image.png"
              alt="Satvik Yoga"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-lg md:text-xl tracking-wide text-primary-dark">
                SATVIK
              </span>
              <span className="font-heading text-[10px] md:text-xs tracking-[0.2em] text-text-light uppercase">
                Yoga Classes
              </span>
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${isActive
                        ? "bg-primary/10 text-primary"
                        : "text-text-light hover:text-text-dark hover:bg-secondary"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop WhatsApp CTA ── */}
          <div className="hidden md:block">
            <WhatsAppButton size="sm" variant="icon">
              WhatsApp Us
            </WhatsAppButton>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-text-dark hover:bg-secondary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-secondary">
          <span className="font-heading font-bold text-lg text-text-dark">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-text-dark hover:bg-secondary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-light hover:text-text-dark hover:bg-secondary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-4 pt-4 border-t border-secondary">
            <WhatsAppButton size="md" className="w-full">
              WhatsApp Us
            </WhatsAppButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
