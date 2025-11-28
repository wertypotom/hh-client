"use client";

import { Header } from "@/app/components/header";
import { HeroSection } from "@/app/components/hero-section";
import { FeaturesSection } from "@/app/components/features-section";
import { HowItWorksSection } from "@/app/components/how-it-works-section";
import { TestimonialsSection } from "@/app/components/testimonials-section";
import { CTASection } from "@/app/components/cta-section";
import { Footer } from "@/app/components/footer";
import { useSearchParams } from "next/navigation";
import { useAuthCallback } from "@/shared/hooks/auth/use-auth-callback";

export default function Home() {
  const searchParams = useSearchParams();
  const hasCode = !!searchParams.get("code") && !!searchParams.get("state");
  const error = searchParams.get("error");

  const { isLoading, error: callbackError } = useAuthCallback();

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-destructive">
            Access denied
          </h1>
          <p className="mt-2 text-muted-foreground">
            You cancelled authorization on HeadHunter.
          </p>
        </div>
      </div>
    );
  }

  if (hasCode) {
    // We are in the middle of callback processing
    if (callbackError) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-destructive">
              Authorization failed
            </h1>
            <p className="mt-2 text-muted-foreground">
              {(callbackError as any).message ?? "Unknown error"}
            </p>
          </div>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-lg">Finalizing authorization...</p>
        </div>
      );
    }
  }

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
