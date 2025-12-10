import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
