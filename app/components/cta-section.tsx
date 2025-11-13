import { Button } from '@/shared/ui'

export function CTASection() {
  return (
    <section className='py-20'>
      <div className='container px-4 md:px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-balance'>
            Ready to Dominate Your Job Search?
          </h2>
          <p className='text-lg text-muted-foreground mb-8 text-pretty'>
            Connect your hh.ru account and let our AI create the perfect,
            job-winning resume for you. It's fast, easy, and free to get
            started.
          </p>
          <Button
            size='lg'
            className='bg-[#D6001C] text-white hover:bg-[#B8001A] px-8'
          >
            Connect hh.ru for Free
          </Button>
        </div>
      </div>
    </section>
  )
}
