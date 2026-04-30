import { Phone, Star } from "lucide-react";
import { BUSINESS } from "@/data/bakersGloveData";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#2A1606]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2400&q=85"
          alt="A beautifully decorated chocolate layer cake"
          className="w-full h-full object-cover anim-slow-zoom"
        />
        {/* Rich warm overlay — dark chocolate veil, not muddy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,11,2,0.55) 0%, rgba(42,22,6,0.45) 35%, rgba(42,22,6,0.78) 75%, rgba(26,11,2,0.92) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 bg-grain"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 lg:pt-40 pb-24 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl reveal">
          <span className="divider-flourish mb-8" data-testid="hero-eyebrow">
            Artisan Pâtisserie · Jayanagar
          </span>

          <h1
            className="font-display text-[#FFF8F0] text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.98] tracking-tight"
            data-testid="hero-heading"
          >
            Where every
            <br />
            occasion gets{" "}
            <span className="italic text-[#E1B658] font-serif-soft">sweeter</span>.
          </h1>

          <p
            className="mt-8 text-[#FFF8F0]/85 text-lg lg:text-xl leading-relaxed max-w-2xl"
            data-testid="hero-subheading"
          >
            Handcrafted cakes and pastries in the heart of Jayanagar, baked
            through the day and into the night — so the sweetest moments
            never have to wait.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={BUSINESS.phoneTel}
              data-testid="hero-cta-order"
              className="btn-pill btn-primary text-base"
            >
              <Phone size={18} strokeWidth={2.2} />
              Order Your Cake
            </a>
            <a
              href="#bestsellers"
              data-testid="hero-cta-explore"
              className="btn-pill btn-ghost-cream text-base"
            >
              Taste the bestsellers
            </a>
          </div>

          {/* Rating badge */}
          <div
            className="mt-14 flex items-center gap-5 text-[#FFF8F0]/90"
            data-testid="hero-rating"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < 4 ? "#E1B658" : "transparent"}
                  stroke="#E1B658"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <div className="text-sm tracking-wide">
              <span className="text-[#E1B658] font-semibold">
                {BUSINESS.rating}★
              </span>{" "}
              · {BUSINESS.reviews} reviews on Google
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#FFF8F0]/60 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.32em] uppercase">
          Scroll to savour
        </span>
        <span
          className="block w-[1px] h-8 bg-gradient-to-b from-[#FFF8F0]/70 to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
