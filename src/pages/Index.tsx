import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import OurVision from "@/components/OurVision";
import OurMission from "@/components/OurMission";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <OurVision />
        <OurMission />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;