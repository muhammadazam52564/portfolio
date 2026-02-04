import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Code2, Cloud, Zap, Lock, Gauge, Layers, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Azam - Independent consultant building scalable, secure, and AI-powered digital systems. DevOps, Web Development, and AI Integration expertise.',
  openGraph: {
    title: 'Azam | Home',
    description:
      'Independent consultant specializing in DevOps, Web Development, and AI Integration.',
    url: 'https://azamtech.dev',
    type: 'website',
  },
}

export default function Home() {
  const services = [
    {
      id: 'devops',
      icon: Cloud,
      title: 'DevOps & Cloud Engineering',
      description: 'CI/CD pipelines, Docker & Kubernetes, AWS infrastructure, and cost optimization.',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'AWS Infrastructure', 'Cost Optimization'],
    },
    {
      id: 'web',
      icon: Layers,
      title: 'Web Development',
      description: 'Scalable backend systems, robust APIs, and modern frontend solutions.',
      features: ['Backend Systems', 'REST & GraphQL APIs', 'Scalable Architecture', 'Full-Stack Development'],
    },
    {
      id: 'ai',
      icon: Zap,
      title: 'AI Integration',
      description: 'RAG systems, business automation, and AI-powered intelligent tools.',
      features: ['RAG Systems', 'Business Automation', 'LLM Integration', 'AI-Powered Tools'],
    },
  ]

  const whyChooseUs = [
    {
      icon: Code2,
      title: 'Engineering-First Approach',
      description: 'Building with scalability, security, and performance at the core.',
    },
    {
      icon: Lock,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security practices and reliable systems you can trust.',
    },
    {
      icon: Gauge,
      title: 'Performance Optimized',
      description: 'Every system optimized for speed, efficiency, and cost-effectiveness.',
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-in">
            <div className="animate-slide-left" style={{ animationDelay: '0ms' }}>
              <div className="flex items-center gap-3 mb-4 animate-in" style={{ animationDelay: '100ms' }}>
                <p className="text-primary text-sm font-semibold">
                  Welcome
                </p>
                <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                  6+ Years Experience
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance animate-in" style={{ animationDelay: '150ms' }}>
                I Build Scalable Digital Systems
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty animate-in" style={{ animationDelay: '200ms' }}>
                I specialize in DevOps, Web Development, and AI Integration. I deliver
                secure, scalable, and AI-powered solutions for organizations ready to transform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in" style={{ animationDelay: '250ms' }}>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-smooth active:scale-95 text-center"
                >
                  Contact me
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-card hover:shadow-md transition-smooth active:scale-95 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Hero Visual - Tech Grid Pattern */}
            <div className="hidden md:block animate-slide-right" style={{ animationDelay: '300ms' }}>
              <div className="relative w-full h-96 bg-card rounded-lg border border-border overflow-hidden">
                {/* Grid pattern background */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="absolute border-l border-primary" style={{
                      width: 1,
                      height: '100%',
                      left: `${(i + 1) * (100 / 6)}%`,
                    }} />
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="absolute border-t border-primary" style={{
                      width: '100%',
                      height: 1,
                      top: `${(i + 1) * (100 / 5)}%`,
                    }} />
                  ))}
                </div>

                {/* Tech icons in grid */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8 opacity-40">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center" />
                    ))}
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              My Services
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Specialized expertise to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth active:scale-95 group animate-scale-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proof of Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance animate-slide-up" style={{ animationDelay: '0ms' }}>
              Proof of Work
            </h2>
            <p className="text-xl text-muted-foreground text-pretty animate-slide-up" style={{ animationDelay: '100ms' }}>
              Real projects, real impact. See what I've built in production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jaspi Project */}
            <Link
              href="/work#jaspi"
              className="group overflow-hidden rounded-lg border border-border bg-background hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth active:scale-95 animate-scale-in"
              style={{ animationDelay: '0ms' }}
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src="/projects/jaspi-thumbnail.jpg"
                  alt="Jaspi.io - AI Hiring Platform"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                  <span className="text-xs font-semibold text-primary">Featured</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Jaspi.io
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  AI-powered hiring platform with production-grade backend supporting complex workflows and seamless integrations.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  View Project
                  <ExternalLink size={16} />
                </div>
              </div>
            </Link>

            {/* Bookt Project */}
            <Link
              href="/work#bookt"
              className="group overflow-hidden rounded-lg border border-border bg-background hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth active:scale-95 animate-scale-in"
              style={{ animationDelay: '100ms' }}
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src="/projects/bookt-thumbnail.jpg"
                  alt="Bookt.dk - Booking Platform"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                  <span className="text-xs font-semibold text-primary">Featured</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Bookt.dk
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Production booking platform focused on stability and performance, serving real salons with reliable infrastructure.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  View Project
                  <ExternalLink size={16} />
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-smooth active:scale-95 animate-in"
              style={{ animationDelay: '200ms' }}
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Why Work With Me
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              I combine deep technical expertise with practical business understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-smooth animate-scale-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust & Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on principles of reliability, transparency, and deep technical expertise. I'm committed to long-term partnerships and delivering measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-smooth animate-slide-left" style={{ animationDelay: '0ms' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Engineering Mindset
              </h3>
              <p className="text-muted-foreground">
                Every solution is designed with scalability, security, and maintainability at the core. I believe in clean architecture and best practices.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-smooth animate-slide-right" style={{ animationDelay: '100ms' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                True Partnership
              </h3>
              <p className="text-muted-foreground">
                I'm not just a consultant—I'm your technical partner. Your success is my success, and I'm invested in your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to Transform Your Systems?"
            description="Let's discuss how I can help you build scalable, secure, and AI-powered digital systems. Reach out today and let's explore what's possible."
            buttonText="Get in Touch"
            buttonHref="/contact"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
