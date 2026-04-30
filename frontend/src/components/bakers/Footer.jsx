import { Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/data/bakersGloveData";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#2A1606] text-[#FFF8F0] pt-20 pb-10 overflow-hidden bg-grain"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-[#C9962C]/20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <svg
                width="42"
                height="42"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18.5"
                  stroke="#FFF8F0"
                  strokeWidth="1"
                />
                <path
                  d="M13 23c2-4 5-6 7-6s5 2 7 6"
                  stroke="#FFF8F0"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M11 24c3 1.2 6 1.8 9 1.8s6-.6 9-1.8"
                  stroke="#FFF8F0"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="14.5" r="1.6" fill="#E1B658" />
                <path
                  d="M20 12.8V10"
                  stroke="#E1B658"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl">{BUSINESS.name}</span>
                <span className="text-[10px] tracking-[0.28em] uppercase mt-1 text-[#E1B658]">
                  Est. Jayanagar
                </span>
              </div>
            </div>
            <p className="mt-6 font-serif-soft italic text-[#E8B4A0] text-xl leading-snug max-w-sm">
              {BUSINESS.tagline}
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            <FooterBlock
              icon={Phone}
              label="Call"
              lines={[
                <a
                  key="tel"
                  href={BUSINESS.phoneTel}
                  data-testid="footer-phone"
                  className="hover:text-[#E1B658] transition-colors"
                >
                  {BUSINESS.phone}
                </a>,
              ]}
            />
            <FooterBlock
              icon={MapPin}
              label="Visit"
              lines={[BUSINESS.addressShort, "560041, Bengaluru"]}
            />
            <FooterBlock
              icon={Clock}
              label="Hours"
              lines={["Daily", "10:00 AM – 11:30 PM"]}
            />
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#FFF8F0]/55 tracking-wide">
            © {new Date().getFullYear()} Baker's Glove · Handcrafted in
            Jayanagar, Bengaluru.
          </p>
          <p className="text-xs text-[#FFF8F0]/55 tracking-wide">
            Small batch · Never mass-produced · Always warm.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterBlock({ icon: Icon, label, lines }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[#E1B658]">
        <Icon size={14} strokeWidth={2} />
        <span className="text-[11px] tracking-[0.28em] uppercase font-semibold">
          {label}
        </span>
      </div>
      <div className="mt-3 space-y-1 text-[#FFF8F0]/85 text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}
