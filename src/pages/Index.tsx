import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import PromoSection from "@/components/PromoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <PromoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
