import Navbar from "@/components/Navbar";
import SONSComplianceSection from "@/components/SONSComplianceSection";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";

const SONSCompliancePage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Conformité SONS SILAO | INS, MSSanté, DMP et interopérabilité CI-SIS"
      description="Comprenez comment SILAO répond aux exigences SONS pour les ESSMS : INS qualifiée, MSSanté, DMP et interopérabilité."
      canonicalPath="/conformite-sons"
    />
    <Navbar />
    <main className="pt-16">
      <SONSComplianceSection />
    </main>
    <FooterSection />
  </div>
);

export default SONSCompliancePage;
