import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";
import AxesSummary from "@/components/AxesSummary";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import KeyFiguresSection from "@/components/KeyFiguresSection";
import InfographieGrappe from "@/components/InfographieGrappe";
import InfographieParcours from "@/components/InfographieParcours";

const Index = () => {
  return (
    <div className="min-h-screen bg-background paper-grain">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AxesSummary />
        <KeyFiguresSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <InfographieGrappe />
        <InfographieParcours />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <BlogSection />
        <FAQSection />
        <PartnersSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
