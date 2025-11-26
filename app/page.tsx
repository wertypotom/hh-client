import { Header } from "@/app/components/header";
import { HeroSection } from "@/app/components/hero-section";
import { FeaturesSection } from "@/app/components/features-section";
import { HowItWorksSection } from "@/app/components/how-it-works-section";
import { TestimonialsSection } from "@/app/components/testimonials-section";
import { CTASection } from "@/app/components/cta-section";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
