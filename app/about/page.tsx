import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { Heart, Target, Lightbulb, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Azam - My mission, values, and commitment to building scalable, secure, and AI-powered digital systems.',
  openGraph: {
    title: 'About | Azam',
    description:
      'Discover my mission and values as an independent consultant.',
    url: 'https://azamtech.dev/about',
    type: 'website',
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description:
        'We pursue excellence in every line of code, every architecture decision, and every project delivery.',
    },
    {
      icon: Heart,
      title: 'Reliability',
      description:
        'Your systems need to work. We build with reliability, security, and scalability as non-negotiable principles.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We stay ahead of technology trends and leverage cutting-edge solutions to solve your business challenges.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description:
        'We are not just vendors. We are your technical partners invested in your long-term success.',
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance animate-slide-up" style={{ animationDelay: '0ms' }}>
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up" style={{ animationDelay: '100ms' }}>
              I'm an independent consultant dedicated to helping organizations transform how they approach technology and digital
              innovation through engineering excellence and trusted partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-left" style={{ animationDelay: '0ms' }}>
              <h2 className="text-4xl font-bold text-foreground mb-4 animate-in" style={{ animationDelay: '50ms' }}>
                My Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                To empower organizations by delivering scalable, secure, and AI-powered digital
                systems that drive real business growth and innovation.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                I believe that great technology should solve real problems, be built to last, and
                adapt to future needs. My mission is to help you achieve that.
              </p>
            </div>

            <div className="animate-slide-right" style={{ animationDelay: '100ms' }}>
              <h2 className="text-4xl font-bold text-foreground mb-4 animate-in" style={{ animationDelay: '150ms' }}>
                My Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                A world where engineering teams have access to world-class technical expertise,
                trusted partners, and solutions that scale seamlessly.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                I envision organizations focused on their core business while their technology infrastructure
                works reliably behind the scenes, delivered by experts they can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              My Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              These principles guide every decision I make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-smooth animate-scale-in"
                  style={{ animationDelay: `${idx * 75}ms` }}
                >
                  <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            My Approach to Engineering
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Engineering-First
              </h3>
              <p className="text-muted-foreground">
                I make technical decisions with scalability, security, and maintainability as
                top priorities. No shortcuts, no compromises.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Transparent Communication
              </h3>
              <p className="text-muted-foreground">
                I keep you informed every step of the way. No jargon, no surprises—just clear,
                honest communication about progress and challenges.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Continuous Improvement
              </h3>
              <p className="text-muted-foreground">
                Technology evolves. So do I. I stay current with industry trends and constantly
                improve my processes and practices.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Quality & Reliability
              </h3>
              <p className="text-muted-foreground">
                I build systems that you can depend on. Comprehensive testing, monitoring, and
                support ensure your systems run smoothly.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Scalability First
              </h3>
              <p className="text-muted-foreground">
                I design systems that grow with your business. Whether you're managing thousands
                or millions of requests, your systems will perform.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Security & Compliance
              </h3>
              <p className="text-muted-foreground">
                Security is integrated into every layer. I follow best practices and ensure
                compliance with industry standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            My Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                DevOps & Infrastructure
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Cloud architecture and migration (AWS, GCP, Azure)
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Kubernetes and container orchestration
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    CI/CD pipeline design and implementation
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Infrastructure as Code (Terraform, CloudFormation)
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Web Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Full-stack web application development
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Scalable API design and development
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Database architecture and optimization
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Performance optimization and security hardening
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                AI & Machine Learning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Large Language Model integration
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    RAG (Retrieval-Augmented Generation) systems
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Business process automation with AI
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Intelligent application development
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Consulting & Strategy
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Digital transformation strategy
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Technology assessment and recommendations
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Team augmentation and technical mentoring
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p className="text-muted-foreground">
                    Architecture design and optimization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Professional Experience
          </h2>

          <div className="space-y-8 mb-16">
            {/* Current Role */}
            <div className="border-l-2 border-primary pl-8 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Senior Software Engineer
                  </h3>
                  <p className="text-primary font-medium">Power Match</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Apr 2025 – Present | Remote (Denmark)
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Working on AI-driven enterprise platforms, integrating intelligent solutions into production systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Leading full-stack and DevOps initiatives, including scalable backend services and CI/CD automation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Designing cloud infrastructure and improving performance, reliability, and deployment efficiency</span>
                </li>
              </ul>
            </div>

            {/* DMechs */}
            <div className="border-l-2 border-primary/50 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Senior Software Engineer
                  </h3>
                  <p className="text-primary font-medium">DMechs Pvt Ltd</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Jun 2024 – Mar 2025 | Pakistan
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Designed and developed backend services using Node.js, Docker, Linux, and cloud technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Improved system reliability and deployment workflows through automation and containerization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Contributed to microservices architecture and API design for scalable applications</span>
                </li>
              </ul>
            </div>

            {/* PROGSITS */}
            <div className="border-l-2 border-primary/50 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Associate → Senior Software Engineer
                  </h3>
                  <p className="text-primary font-medium">PROGSITS</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Mar 2021 – May 2024 | Pakistan
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Promoted from Associate to Senior based on performance and leadership</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Architected and implemented scalable backend services using NestJS, Node.js, and TypeScript</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Led CI/CD automation, Dockerization, and cloud deployments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Managed caching strategies (Redis, Memcached) for high-traffic applications</span>
                </li>
              </ul>
            </div>

            {/* StepInnSolution */}
            <div className="border-l-2 border-primary/50 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Junior Software Engineer
                  </h3>
                  <p className="text-primary font-medium">StepInnSolution</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Sep 2019 – Feb 2021 | Pakistan
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Built client-facing modules using HTML, CSS, JavaScript, PHP, and jQuery</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Applied clean code practices and foundational architecture principles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-card p-8 rounded-lg border border-border mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Core Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Backend & DevOps</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js, NestJS, Express.js, REST APIs, WebSockets, Docker, Kubernetes, AWS, CI/CD Pipelines, GitHub Actions, Linux, Nginx
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Databases & Caching</h4>
                <p className="text-sm text-muted-foreground">
                  MySQL, PostgreSQL, MongoDB, Redis, Memcached, Query Optimization, Performance Tuning
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Frontend & Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  React.js, Next.js, JavaScript, TypeScript, Microservices, Distributed Systems, API Security
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">Specializations</h4>
                <p className="text-sm text-muted-foreground">
                  Production System Debugging, Performance Optimization, Cloud Cost Reduction, AI-Powered Systems
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Career Advancement</h4>
              <p className="text-sm text-muted-foreground">
                Promoted to Senior Software Engineer within one year at PROGSITS based on technical excellence and leadership capabilities
              </p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Cost Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Reduced AWS monthly costs by ~25% on production AI platform through infrastructure optimization
              </p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Deployment Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Migrated manual deployments to CI/CD pipelines, reducing deployment errors by ~40%
              </p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Global Experience</h4>
              <p className="text-sm text-muted-foreground">
                Delivered scalable systems for clients across EU, US, and Middle East regions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Let's Build Something Great Together"
            description="Whether you need technical expertise, strategic guidance, or hands-on implementation, I'm ready to help you succeed."
            buttonText="Get in Touch"
            buttonHref="/contact"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
