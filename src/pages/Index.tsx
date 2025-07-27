import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import MockTestPreview from "@/components/MockTestPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <MockTestPreview />
    </div>
  );
};

export default Index;
