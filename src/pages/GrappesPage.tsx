import Navbar from "@/components/Navbar";
import GrappesSection from "@/components/GrappesSection";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/grappes-esms");

const GrappesPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <GrappesSection />
    </PageMain>
    <FooterSection />
  </div>
);

export default GrappesPage;
