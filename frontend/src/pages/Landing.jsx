import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import HowItWorks from "../components/landing/HowItWorks";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white">
      <Navbar />

      <main className="pt-[76px]">
        <HeroSection />

        <StatsSection />

        <HowItWorks />

        <FeaturesSection />

        <PricingSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
