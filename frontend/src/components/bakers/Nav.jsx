import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/data/bakersGloveData";

const NAV_LINKS = [
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "Custom Cakes", href: "#custom" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF8F0]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(59,31,10,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a
            href="#top"
            data-testid="nav-logo"
            className="flex items-center gap-3 group"
          >
            <LogoMark scrolled={scrolled} />
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-xl tracking-tight ${
                  scrolled ? "text-[#3B1F0A]" : "text-[#FFF8F0]"
                }`}
              >
                Baker's Glove
              </span>
              <span
                className={`text-[10px] tracking-[0.28em] uppercase mt-1 ${
                  scrolled ? "text-[#C9962C]" : "text-[#E1B658]"
                }`}
              >
                Est. Jayanagar
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#3B1F0A] hover:text-[#C9962C]"
                    : "text-[#FFF8F0]/85 hover:text-[#E1B658]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.phoneTel}
              data-testid="nav-call-btn"
              className={`btn-pill text-sm ${
                scrolled ? "btn-primary" : "btn-ghost-cream"
              }`}
            >
              <Phone size={16} strokeWidth={2.2} />
              Call to Order
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={26} color={scrolled ? "#3B1F0A" : "#FFF8F0"} />
            ) : (
              <MenuIcon size={26} color={scrolled ? "#3B1F0A" : "#FFF8F0"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden bg-[#FFF8F0] border-t border-[#3B1F0A]/10"
          data-testid="nav-mobile-menu"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#3B1F0A] text-lg font-display"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BUSINESS.phoneTel}
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-call-btn"
              className="btn-pill btn-primary w-full mt-2"
            >
              <Phone size={16} strokeWidth={2.2} />
              Call to Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark({ scrolled }) {
  const stroke = scrolled ? "#3B1F0A" : "#FFF8F0";
  const fill = scrolled ? "#C9962C" : "#E1B658";
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18.5" stroke={stroke} strokeWidth="1" />
      <path
        d="M13 23c2-4 5-6 7-6s5 2 7 6"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M11 24c3 1.2 6 1.8 9 1.8s6-.6 9-1.8"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="14.5" r="1.6" fill={fill} />
      <path
        d="M20 12.8V10"
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
