import Navbar from "@/components/Navbar";
import EngagementsSection from "@/components/EngagementsSection";
import FooterSection from "@/components/FooterSection";

const EngagementsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <EngagementsSection />
    </main>
    <FooterSection />
  </div>
);

export default EngagementsPage;
