import { Phone, ArrowRight } from "lucide-react";
import { CUSTOM_CAKES, BUSINESS } from "@/data/bakersGloveData";

export default function CustomCakes() {
  return (
    <section
      id="custom"
      data-testid="custom-cakes-section"
      className="relative py-24 lg:py-32 bg-[#3B1F0A] text-[#FFF8F0] overflow-hidden bg-grain"
    >
      {/* Subtle decorative gold rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-48 w-[560px] h-[560px] rounded-full border border-[#C9962C]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-60 w-[720px] h-[720px] rounded-full border border-[#C9962C]/10"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 reveal">
            <span className="divider-flourish" style={{ color: "#E1B658" }}>
              Custom Cakes
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              We sketch, you approve,
              <br />
              <span className="italic font-serif-soft text-[#E1B658]">
                then we bake.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal">
            <p className="text-[#FFF8F0]/80 text-base lg:text-lg leading-relaxed">
              From surprise birthdays to three-tier weddings, every custom
              order begins with a conversation. Share your idea — a reference
              photo, a colour palette, even just a feeling — and we'll bring
              it to the table.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CUSTOM_CAKES.map((cake, idx) => (
            <article
              key={cake.id}
              data-testid={`custom-card-${cake.id}`}
              className="group relative overflow-hidden rounded-[22px] border border-[#C9962C]/20 bg-[#2A1606] card-lift reveal"
              style={{ transitionDelay: `${idx * 90}ms` }}
            >
              <div className="grid grid-cols-5">
                <div className="col-span-2 aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    loading="lazy"
                    className="w-full h-full object-cover img-grow"
                  />
                </div>
                <div className="col-span-3 p-7 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                      {cake.title}
                    </h3>
                    <p className="mt-3 text-[#FFF8F0]/75 text-sm leading-relaxed">
                      {cake.description}
                    </p>
                  </div>
                  <div className="mt-6 text-[#E1B658] text-sm font-semibold tracking-wide">
                    {cake.priceFrom}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
          <p className="font-serif-soft italic text-xl text-[#E8B4A0]">
            "Give us the idea. We'll give you the centrepiece."
          </p>
          <a
            href={BUSINESS.phoneTel}
            data-testid="custom-cta-plan"
            className="btn-pill btn-primary"
          >
            <Phone size={18} strokeWidth={2.2} />
            Plan Your Cake
            <ArrowRight size={16} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
