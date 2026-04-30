import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/bakersGloveData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 lg:py-32 bg-[#FFF8F0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl reveal">
          <span className="divider-flourish">Love Letters</span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-[#3B1F0A] leading-[1.02]">
            Kind words from{" "}
            <span className="italic font-serif-soft text-[#C9962C]">
              our regulars
            </span>
            .
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${idx}`}
              className="reveal bg-[#FBEEDC] rounded-[22px] p-8 lg:p-10 relative border border-[#C9962C]/15"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <Quote
                size={36}
                className="text-[#C9962C]/60"
                strokeWidth={1.2}
                aria-hidden="true"
              />
              <blockquote className="mt-5 font-serif-soft text-[#3B1F0A] text-xl lg:text-[22px] leading-snug italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[#3B1F0A]/10">
                <div className="font-semibold text-[#3B1F0A] text-sm">
                  {t.name}
                </div>
                <div className="text-xs tracking-[0.18em] uppercase text-[#C9962C] mt-1">
                  {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
