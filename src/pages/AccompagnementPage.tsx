import Navbar from "@/components/Navbar";
import AccompagnementSection from "@/components/AccompagnementSection";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";

const AccompagnementPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Accompagnement SILAO | Gouvernance, conduite du changement et déploiement"
      description="Découvrez l'accompagnement SILAO : cadrage projet, gouvernance, formation, conduite du changement et suivi des usages dans les ESSMS."
      canonicalPath="/accompagnement"
    />
    <Navbar />
    <main className="pt-16">
      <AccompagnementSection />
    </main>
    <FooterSection />
  </div>
);

export default AccompagnementPage;
