import { Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/data/bakersGloveData";

export default function Visit() {
  return (
    <section
      id="visit"
      data-testid="visit-section"
      className="relative py-24 lg:py-32 bg-[#FBEEDC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl reveal">
          <span className="divider-flourish">Order & Visit</span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-[#3B1F0A] leading-[1.02]">
            Come say hello — or let us{" "}
            <span className="italic font-serif-soft text-[#C9962C]">
              bring dessert
            </span>{" "}
            to your doorstep.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Info column */}
          <div className="lg:col-span-5 flex flex-col gap-6 reveal">
            <ContactCard
              testid="contact-phone"
              icon={Phone}
              label="Call to order"
              primary={BUSINESS.phone}
              href={BUSINESS.phoneTel}
              cta="Tap to dial"
            />
            <ContactCard
              testid="contact-address"
              icon={MapPin}
              label="Visit the bakery"
              primary={BUSINESS.address}
              href={BUSINESS.mapsLink}
              external
              cta="Open in Maps"
            />
            <ContactCard
              testid="contact-hours"
              icon={Clock}
              label="Open hours"
              primary={BUSINESS.hours}
              footnote="Walk-ins welcome · Orders taken till 11 PM"
            />

            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-btn"
              className="mt-2 btn-pill btn-primary w-full justify-center"
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              WhatsApp an Order
            </a>
          </div>

          {/* Map column */}
          <div className="lg:col-span-7 reveal">
            <div
              className="relative w-full h-[460px] lg:h-full min-h-[460px] rounded-[22px] overflow-hidden border border-[#3B1F0A]/10 shadow-[0_24px_60px_-30px_rgba(59,31,10,0.35)]"
              data-testid="visit-map"
            >
              <iframe
                title="Baker's Glove on Google Maps"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  testid,
  icon: Icon,
  label,
  primary,
  href,
  cta,
  external,
  footnote,
}) {
  const Wrapper = href ? "a" : "div";
  const extra = href
    ? external
      ? { target: "_blank", rel: "noopener noreferrer", href }
      : { href }
    : {};
  return (
    <Wrapper
      {...extra}
      data-testid={testid}
      className={`block bg-[#FFF8F0] rounded-[20px] p-7 border border-[#3B1F0A]/8 card-lift ${
        href ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex items-start gap-5">
        <div className="w-11 h-11 shrink-0 rounded-full bg-[#3B1F0A] flex items-center justify-center">
          <Icon size={18} color="#E1B658" strokeWidth={1.8} />
        </div>
        <div className="min-w-0">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#C9962C] font-semibold">
            {label}
          </div>
          <div className="mt-2 font-display text-xl text-[#3B1F0A] leading-snug">
            {primary}
          </div>
          {footnote && (
            <div className="mt-2 text-sm text-[#6F5A46]">{footnote}</div>
          )}
          {cta && (
            <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B1F0A] group-hover:text-[#C9962C]">
              {cta}
              {external && <ExternalLink size={13} strokeWidth={2} />}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
