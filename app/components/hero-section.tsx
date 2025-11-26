// app/components/hero-section.tsx
import { ConnectButton } from "@/shared/ui";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Your hh.ru Profile, Supercharged with AI
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[600px] text-pretty">
              Directly integrate with hh.ru to tailor your resume for any job
              description. Apply smarter, not harder, and get noticed by top
              recruiters.
            </p>
            <div>
              <ConnectButton
                integration="hh"
                size="lg"
                className="bg-[#D6001C] text-white hover:bg-[#B8001A] px-8"
              >
                Optimize My hh.ru Profile
              </ConnectButton>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-700/40 rounded-2xl" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-300 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="h-2 bg-gray-200 rounded flex-1" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-5/6" />
                    <div className="h-2 bg-gray-200 rounded w-4/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
