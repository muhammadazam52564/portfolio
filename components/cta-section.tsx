import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title,
  description,
  buttonText = 'Get Started',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 bg-card border border-border rounded-lg text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
