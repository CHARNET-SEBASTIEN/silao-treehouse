import Navbar from "@/components/Navbar";
import SONSComplianceSection from "@/components/SONSComplianceSection";
import FooterSection from "@/components/FooterSection";

const SONSCompliancePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <SONSComplianceSection />
    </main>
    <FooterSection />
  </div>
);

export default SONSCompliancePage;
