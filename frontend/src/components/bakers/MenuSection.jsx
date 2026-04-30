import { Phone } from "lucide-react";
import { MENU, BUSINESS } from "@/data/bakersGloveData";

export default function MenuSection() {
  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="relative py-24 lg:py-32 bg-[#3B1F0A] text-[#FFF8F0] overflow-hidden bg-grain"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 reveal">
            <span className="divider-flourish" style={{ color: "#E1B658" }}>
              Menu & Price List
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Everything on our
              <br />
              <span className="italic font-serif-soft text-[#E1B658]">
                counter today.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal">
            <p className="text-[#FFF8F0]/75 text-base lg:text-lg leading-relaxed">
              Prices are indicative and refreshed regularly. For tiered cakes,
              corporate orders or anything bespoke, please call us — we love a
              good brief.
            </p>
          </div>
        </div>

        {/* Menu grid — editorial price list */}
        <div className="mt-16 border-t border-[#C9962C]/25">
          {MENU.map((row, idx) => (
            <div
              key={row.category}
              data-testid={`menu-row-${idx}`}
              className="reveal group grid grid-cols-[1fr_auto] items-baseline gap-6 py-6 lg:py-7 border-b border-[#C9962C]/20 transition-colors hover:bg-[#2A1606]/60"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-baseline gap-4 lg:gap-6 min-w-0">
                <span className="font-display text-sm text-[#E1B658] tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#FFF8F0] truncate">
                  {row.category}
                </h3>
              </div>
              <span className="text-[#E1B658] font-serif-soft italic text-lg sm:text-xl lg:text-2xl whitespace-nowrap">
                {row.range}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center reveal">
          <p className="font-serif-soft italic text-[#E8B4A0] text-lg mb-6">
            Want something that's not on the list? We probably bake that too.
          </p>
          <a
            href={BUSINESS.phoneTel}
            data-testid="menu-cta-call"
            className="btn-pill btn-primary"
          >
            <Phone size={18} strokeWidth={2.2} />
            Ask us anything — {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
