import { Check, Zap, Target } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Keyword Matching',
    description:
      'Automatically incorporates crucial keywords from the job description to pass through applicant tracking systems (ATS).',
  },
  {
    icon: Zap,
    title: 'Experience Highlighting',
    description:
      "Rephrases your accomplishments to directly address the needs and requirements of the specific role you're applying to.",
  },
  {
    icon: Check,
    title: 'One-Click Applications',
    description:
      'Apply directly on hh.ru with your newly tailored resume, saving you time and effort on every application.',
  },
]

export function FeaturesSection() {
  return (
    <section id='features' className='py-20 bg-muted/50'>
      <div className='container px-4 md:px-6'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-balance'>
            AI That Tailors Your Resume to Perfection
          </h2>
          <p className='text-lg text-muted-foreground text-pretty'>
            Stop sending generic resumes. Our AI analyzes job descriptions from
            hh.ru and rewrites your resume to highlight the skills and
            experience recruiters are looking for, dramatically increasing your
            interview chances.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm border'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-[#D6001C]/10'>
                <feature.icon className='h-6 w-6 text-[#D6001C]' />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
