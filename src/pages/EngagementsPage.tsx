import Navbar from "@/components/Navbar";
import EngagementsSection from "@/components/EngagementsSection";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";

const EngagementsPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Engagements SILAO | Support, SLA, pérennité et indépendance"
      description="Consultez les engagements SILAO sur la durée : support, SLA, pérennité produit, portabilité des données et relation durable avec les ESSMS."
      canonicalPath="/engagements"
    />
    <Navbar />
    <main className="pt-16">
      <EngagementsSection />
    </main>
    <FooterSection />
  </div>
);

export default EngagementsPage;
