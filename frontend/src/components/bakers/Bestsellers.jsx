import { Phone } from "lucide-react";
import { BESTSELLERS, BUSINESS } from "@/data/bakersGloveData";

export default function Bestsellers() {
  return (
    <section
      id="bestsellers"
      data-testid="bestsellers-section"
      className="relative py-24 lg:py-32 bg-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section head */}
        <div className="max-w-3xl reveal">
          <span className="divider-flourish">Our Bestsellers</span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-[#3B1F0A] leading-[1.02]">
            The ones our <span className="italic font-serif-soft">regulars</span> come back for.
          </h2>
          <p className="mt-6 text-[#6F5A46] text-base lg:text-lg leading-relaxed">
            Small-batch, hand-finished, baked through the day. Here are the
            six we can't keep on the shelf.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {BESTSELLERS.map((item, idx) => (
            <article
              key={item.id}
              data-testid={`bestseller-card-${item.id}`}
              className="group card-lift reveal bg-white rounded-[20px] overflow-hidden border border-[#3B1F0A]/8 shadow-[0_10px_30px_-20px_rgba(59,31,10,0.25)]"
              style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover img-grow"
                />
                <span
                  data-testid={`bestseller-tag-${item.id}`}
                  className="absolute top-5 left-5 bg-[#FFF8F0] text-[#3B1F0A] text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-[#3B1F0A] leading-tight">
                  {item.name}
                </h3>
                <p className="mt-2 font-serif-soft italic text-[#C9962C] text-lg">
                  {item.tagline}
                </p>
                <p className="mt-4 text-[#6F5A46] text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 pt-5 border-t border-[#3B1F0A]/10 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[#3B1F0A] font-semibold text-lg">
                      {item.price}
                    </div>
                    {item.priceNote && (
                      <div className="text-[11px] tracking-wider uppercase text-[#6F5A46] mt-1">
                        {item.priceNote}
                      </div>
                    )}
                  </div>
                  <a
                    href={BUSINESS.phoneTel}
                    data-testid={`bestseller-order-${item.id}`}
                    className="text-[#3B1F0A] text-sm font-semibold inline-flex items-center gap-2 hover:text-[#C9962C] transition-colors"
                    aria-label={`Call to order ${item.name}`}
                  >
                    <Phone size={14} strokeWidth={2.2} />
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
