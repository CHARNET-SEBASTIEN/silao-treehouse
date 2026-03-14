import Navbar from "@/components/Navbar";
import AccompagnementSection from "@/components/AccompagnementSection";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/accompagnement");

const AccompagnementPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <AccompagnementSection />
    </PageMain>
    <FooterSection />
  </div>
);

export default AccompagnementPage;
