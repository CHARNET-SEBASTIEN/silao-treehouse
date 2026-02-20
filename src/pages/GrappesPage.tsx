import Navbar from "@/components/Navbar";
import GrappesSection from "@/components/GrappesSection";
import FooterSection from "@/components/FooterSection";

const GrappesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <GrappesSection />
    </main>
    <FooterSection />
  </div>
);

export default GrappesPage;
