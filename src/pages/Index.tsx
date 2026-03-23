import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import KeyFiguresSection from "@/components/KeyFiguresSection";
import FilieresSection from "@/components/FilieresSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import WhyChooseSection from "@/components/WhyChooseSection";
import BenefitsByTeamSection from "@/components/BenefitsByTeamSection";
import CompanyStorySection from "@/components/CompanyStorySection";
import ContactHubSection from "@/components/ContactHubSection";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/");

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <HeroSection />
        <KeyFiguresSection />
        <section id="services">
          <FeaturesSection />
        </section>
        <FilieresSection />
        <WhyChooseSection />
        <BenefitsByTeamSection />
        <CompanyStorySection />
        <section id="references">
          <TestimonialsSection />
        </section>
        <PartnersSection />
        <section id="actualites">
          <BlogSection />
        </section>
        <FAQSection />
        <ContactHubSection />
        <CTASection />
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default Index;
