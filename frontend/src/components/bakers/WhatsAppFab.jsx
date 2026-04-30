import { BUSINESS } from "@/data/bakersGloveData";

export default function WhatsAppFab() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Order on WhatsApp"
      className="fixed bottom-20 right-6 lg:bottom-6 lg:right-6 z-40 anim-float"
      style={{ filter: "drop-shadow(0 12px 24px rgba(37, 211, 102, 0.35))" }}
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"
        />
        <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-105 transition-transform">
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="#FFFFFF"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.67a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.88-5.32 11.88-11.87 0-3.17-1.23-6.15-3.43-8.44ZM12.06 21.8h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.77.99 1-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.13 1.03 7 2.9a9.85 9.85 0 0 1 2.9 7c0 5.46-4.44 9.93-9.85 9.93Zm5.45-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.45 0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.14-.27-.22-.57-.37Z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
