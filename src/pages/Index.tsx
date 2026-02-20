import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";
import AxesSummary from "@/components/AxesSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AxesSummary />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <PartnersSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
