import Navbar from "@/components/Navbar";
import SONSComplianceSection from "@/components/SONSComplianceSection";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/conformite-sons");

const SONSCompliancePage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <SONSComplianceSection />
    </PageMain>
    <FooterSection />
  </div>
);

export default SONSCompliancePage;
