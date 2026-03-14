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
import FilieresSection from "@/components/FilieresSection";
import InfographieParcours from "@/components/InfographieParcours";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/");

const Index = () => {
  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <HeroSection />
        <AxesSummary />
        <KeyFiguresSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <FilieresSection />
        <InfographieParcours />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <BlogSection />
        <FAQSection />
        <PartnersSection />
        <CTASection />
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default Index;
