import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ProblemStatement from "@/components/landing/ProblemStatement";
import StepsSection from "@/components/landing/StepsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TailoredTests from "@/components/landing/TailoredTests";
import FinalCTA from "@/components/landing/FinalCTA";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatement />
        <StepsSection />
        <FeaturesSection />
        <TailoredTests />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
