import { Link2, Wand2, Send } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Link2,
    title: "Connect Your hh.ru Account",
    description: "Securely link your hh.ru profile. We'll import your resume and job application history instantly.",
  },
  {
    number: "2",
    icon: Wand2,
    title: "Select a Job & Let AI Work",
    description: "Choose a job listing on hh.ru. Our AI will analyze the description and tailor your resume to match.",
  },
  {
    number: "3",
    icon: Send,
    title: "Apply with One Click",
    description: "Submit your perfectly polished application directly through our platform to hh.ru.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-balance">
            From Profile to Interview in 3 Steps
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our streamlined process connects your hh.ru profile to your next career opportunity.
          </p>
        </div>

        <div className="grid gap-12 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D6001C] text-white text-xl font-bold">
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="h-6 w-6 text-[#D6001C]" />
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
