import Nav from "@/components/bakers/Nav";
import Hero from "@/components/bakers/Hero";
import Bestsellers from "@/components/bakers/Bestsellers";
import CustomCakes from "@/components/bakers/CustomCakes";
import WhyBakersGlove from "@/components/bakers/WhyBakersGlove";
import Testimonials from "@/components/bakers/Testimonials";
import MenuSection from "@/components/bakers/MenuSection";
import Visit from "@/components/bakers/Visit";
import Footer from "@/components/bakers/Footer";
import WhatsAppFab from "@/components/bakers/WhatsAppFab";

export default function BakersGlove() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1C0E04]" data-testid="bakers-glove-page">
      <Nav />
      <main>
        <Hero />
        <Bestsellers />
        <CustomCakes />
        <WhyBakersGlove />
        <Testimonials />
        <MenuSection />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
