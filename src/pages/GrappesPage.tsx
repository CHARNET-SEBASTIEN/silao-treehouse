import Navbar from "@/components/Navbar";
import GrappesSection from "@/components/GrappesSection";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";

const GrappesPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Grappes multi-ESMS SILAO | DUI mutualisé pour associations et multi-sites"
      description="Découvrez comment SILAO permet de mutualiser un DUI entre plusieurs établissements tout en conservant les spécificités métier et la confidentialité."
      canonicalPath="/grappes-esms"
    />
    <Navbar />
    <main className="pt-16">
      <GrappesSection />
    </main>
    <FooterSection />
  </div>
);

export default GrappesPage;
