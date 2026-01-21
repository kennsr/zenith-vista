import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import FloorPlanExplorer from "@/components/FloorPlanExplorer";
import AspirationGallery from "@/components/AspirationGallery";
import PerspectiveSection from "@/components/PerspectiveSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingNav />
      <main>
        <HeroSection />
        <FloorPlanExplorer />
        <AspirationGallery />
        <PerspectiveSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
