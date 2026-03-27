import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import KeyFiguresSection from "@/components/KeyFiguresSection";
import FilieresSection from "@/components/FilieresSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import WhyChooseSection from "@/components/WhyChooseSection";
import CompanyStorySection from "@/components/CompanyStorySection";
import RnDInnovationSection from "@/components/RnDInnovationSection";
import ContactHubSection from "@/components/ContactHubSection";
import SectionDivider from "@/components/SectionDivider";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/");

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <HeroSection />
        <SectionDivider variant="wave" />
        <KeyFiguresSection />
        <SectionDivider variant="curve" />
        <section id="services">
          <FeaturesSection />
        </section>
        <SectionDivider variant="wave" flip />
        <FilieresSection />
        <SectionDivider variant="curve" flip />
        <WhyChooseSection />
        <SectionDivider variant="wave" />
        <section id="references">
          <TestimonialsSection />
        </section>
        <SectionDivider variant="wave" flip />
        <PartnersSection />
        <SectionDivider variant="wave" />
        <ContactHubSection />
        <SectionDivider variant="curve" />
        <CompanyStorySection />
        <SectionDivider variant="wave" />
        <RnDInnovationSection />
        <SectionDivider variant="curve" flip />
        <section id="actualites">
          <BlogSection />
        </section>
        <SectionDivider variant="wave" />
        <FAQSection />
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default Index;
