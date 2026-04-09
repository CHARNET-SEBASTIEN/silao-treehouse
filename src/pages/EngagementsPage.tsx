import Navbar from "@/components/Navbar";
import EngagementsSection from "@/components/EngagementsSection";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/engagements");

const EngagementsPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <EngagementsSection />
    </PageMain>
    <FooterSection />
  </div>
);

export default EngagementsPage;
