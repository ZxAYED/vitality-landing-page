import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import InteractiveGrid from "@/components/InteractiveGrid";
import FeatureShowcase from "@/components/FeatureShowcase";
import PhysicalHealth from "@/components/PhysicalHealth";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import WaitlistCTA from "@/components/WaitlistCTA";
import BrandWordmark from "@/components/BrandWordmark";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <InteractiveGrid />
      <CursorGlow />
      <Navbar />
      <FeatureShowcase />
      <PhysicalHealth />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <WaitlistCTA />
      <BrandWordmark />
      <Footer />
    </>
  );
}

