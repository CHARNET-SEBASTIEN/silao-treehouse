import Navbar from "@/components/Navbar";
import AccompagnementSection from "@/components/AccompagnementSection";
import FooterSection from "@/components/FooterSection";

const AccompagnementPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-16">
      <AccompagnementSection />
    </main>
    <FooterSection />
  </div>
);

export default AccompagnementPage;
