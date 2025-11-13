import Image from 'next/image'

const testimonials = [
  {
    quote:
      'The hh.ru integration is seamless. Tailoring my resume for each job used to take hours. Now, it takes a single click. I got three interview requests in the first week!',
    author: 'Anna Petrova',
    role: 'Senior Marketing Manager',
    avatar: '/professional-woman-diverse.png',
  },
  {
    quote:
      'I was skeptical about AI, but this is a game-changer. It identified the exact keywords I was missing on hh.ru. I got the interview!',
    author: 'Dmitri Ivanov',
    role: 'Lead Software Engineer',
    avatar: '/professional-man.jpg',
  },
]

export function TestimonialsSection() {
  return (
    <section id='testimonials' className='py-20 bg-muted/50'>
      <div className='container px-4 md:px-6'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-balance'>
            Trusted by Professionals on hh.ru
          </h2>
          <p className='text-lg text-muted-foreground text-pretty'>
            See how our users have transformed their careers and landed their
            dream jobs.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 max-w-5xl mx-auto'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className='flex flex-col gap-6 rounded-lg bg-background p-8 shadow-sm border'
            >
              <p className='text-lg leading-relaxed italic text-muted-foreground'>
                "{testimonial.quote}"
              </p>
              <div className='flex items-center gap-4'>
                <Image
                  src={testimonial.avatar || '/placeholder.svg'}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className='rounded-full'
                />
                <div>
                  <div className='font-semibold'>{testimonial.author}</div>
                  <div className='text-sm text-muted-foreground'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
