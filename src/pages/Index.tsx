import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SONSComplianceSection from "@/components/SONSComplianceSection";
import GrappesSection from "@/components/GrappesSection";
import AccompagnementSection from "@/components/AccompagnementSection";
import EngagementsSection from "@/components/EngagementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="sons-compliance">
          <SONSComplianceSection />
        </section>
        <section id="grappes">
          <GrappesSection />
        </section>
        <section id="accompagnement">
          <AccompagnementSection />
        </section>
        <section id="engagements">
          <EngagementsSection />
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
