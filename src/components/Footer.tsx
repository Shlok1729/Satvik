import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Heart,
  Play,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/classes", label: "Our Classes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const classLinks = [
  { href: "/classes", label: "Ashtanga Yoga" },
  { href: "/classes", label: "Hatha Yoga" },
  { href: "/classes", label: "Prenatal Yoga" },
  { href: "/classes", label: "Meditation" },
  { href: "/classes", label: "Power Yoga" },
];

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white/80">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/image.png"
                alt="Satvik Yoga"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg tracking-wide text-white">
                  SATVIK
                </span>
                <span className="font-heading text-[10px] tracking-[0.2em] text-white/60 uppercase">
                  Yoga Classes
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Embrace the Sattvic path — pure, balanced, and harmonious. Join our
              community and discover the transformative power of yoga.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: "Instagram", href: "#" },
                { icon: Heart, label: "Facebook", href: "#" },
                { icon: Play, label: "YouTube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Classes ── */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Our Classes
            </h4>
            <ul className="space-y-2.5">
              {classLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <span className="text-white/60">
                  123 Serenity Lane,
                  <br />
                  Andheri West, Mumbai 400053
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-white/60 hover:text-primary-light transition-colors"
                >
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a
                  href="mailto:hello@satvikyoga.in"
                  className="text-white/60 hover:text-primary-light transition-colors"
                >
                  hello@satvikyoga.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/1234567890?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Satvik%20Yoga%20Classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-green-400 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Satvik Yoga Classes. All rights reserved.</p>
          <p>
            Crafted with 🧡 for wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
