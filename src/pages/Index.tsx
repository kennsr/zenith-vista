import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import FloorPlanExplorer from "@/components/FloorPlanExplorer";
import AspirationGallery from "@/components/AspirationGallery";
import PerspectiveSection from "@/components/PerspectiveSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";

const Index = () => {
  // Enable arrow key navigation between sections
  useSectionNavigation();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingNav />
      <main>
        <section data-section="hero">
          <HeroSection />
        </section>
        <section data-section="floorplan">
          <FloorPlanExplorer />
        </section>
        <section data-section="gallery">
          <AspirationGallery />
        </section>
        <section data-section="perspective">
          <PerspectiveSection />
        </section>
        <section data-section="contact">
          <ContactSection />
        </section>
      </main>
      <section data-section="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
