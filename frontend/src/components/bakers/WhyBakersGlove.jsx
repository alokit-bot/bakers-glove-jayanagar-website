import { Star, Cake, Moon, Home } from "lucide-react";
import { TRUST_SIGNALS } from "@/data/bakersGloveData";

const ICON_MAP = {
  star: Star,
  cake: Cake,
  moon: Moon,
  home: Home,
};

export default function WhyBakersGlove() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative py-24 lg:py-32 bg-[#FBEEDC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl reveal">
          <span className="divider-flourish">Why Baker's Glove</span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-[#3B1F0A] leading-[1.02]">
            A bakery built on{" "}
            <span className="italic font-serif-soft text-[#C9962C]">
              butter, patience
            </span>{" "}
            & a full heart.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {TRUST_SIGNALS.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Star;
            return (
              <div
                key={item.title}
                data-testid={`trust-card-${item.icon}`}
                className="reveal bg-[#FFF8F0] rounded-[20px] p-8 border border-[#3B1F0A]/8 card-lift"
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#3B1F0A] flex items-center justify-center mb-6">
                  <Icon size={20} color="#E1B658" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl text-[#3B1F0A] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#6F5A46] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
