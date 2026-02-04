import React from "react"
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import {
  Cloud,
  GitBranch,
  Database,
  BarChart3,
  Code2,
  Zap,
  Layers,
  Brain,
  Workflow,
  Lock,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Azam - Services in DevOps & Cloud Engineering, Web Development, and AI Integration consulting.',
  openGraph: {
    title: 'Services | Azam',
    description:
      'DevOps & Cloud Engineering, Web Development, and AI Integration expertise.',
    url: 'https://azamtech.dev/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  const devopsServices = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description:
        'Automated, reliable deployment pipelines using GitHub Actions, GitLab CI, or Jenkins for rapid, safe releases.',
    },
    {
      icon: Cloud,
      title: 'Docker & Kubernetes',
      description:
        'Containerization and orchestration solutions for scalable, reliable application deployment.',
    },
    {
      icon: Database,
      title: 'AWS Infrastructure',
      description:
        'Design, deployment, and management of AWS services including EC2, RDS, S3, Lambda, and VPC.',
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Optimization',
      description:
        'Comprehensive monitoring, logging, and cost optimization strategies for your cloud infrastructure.',
    },
  ]

  const webServices = [
    {
      icon: Layers,
      title: 'Backend Systems',
      description:
        'Scalable, maintainable backend architectures using Node.js, Python, Go, or Java.',
    },
    {
      icon: Code2,
      title: 'REST & GraphQL APIs',
      description:
        'Design and development of robust, well-documented APIs that power your applications.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description:
        'SQL and NoSQL database architecture, optimization, and migration strategies.',
    },
    {
      icon: Lock,
      title: 'Security & Performance',
      description:
        'Authentication, authorization, encryption, and performance optimization best practices.',
    },
  ]

  const aiServices = [
    {
      icon: Brain,
      title: 'RAG Systems',
      description:
        'Retrieval-Augmented Generation implementations for intelligent document processing and Q&A systems.',
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      description:
        'AI-powered automation for repetitive tasks, document processing, and workflow optimization.',
    },
    {
      icon: Zap,
      title: 'LLM Integration',
      description:
        'Integration of large language models (OpenAI, Anthropic, local models) into your applications.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Tools',
      description:
        'Custom AI tools and chatbots tailored to your specific business needs and use cases.',
    },
  ]

  const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
    <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group">
      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance animate-slide-up" style={{ animationDelay: '0ms' }}>
              My Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up" style={{ animationDelay: '100ms' }}>
              Expert consulting designed to accelerate your digital transformation and
              empower your engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* DevOps & Cloud Engineering */}
      <section id="devops" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                DevOps & Cloud Engineering
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I help you build reliable, scalable, and cost-effective cloud infrastructure. I specialize in
              CI/CD automation, containerization, AWS deployment, and continuous optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {devopsServices.map((service, idx) => (
              <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 75}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-md transition-smooth animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My DevOps Approach
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Infrastructure as Code</p>
                  <p className="text-muted-foreground text-sm">
                    Terraform, CloudFormation, and version-controlled infrastructure management.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Security & Compliance</p>
                  <p className="text-muted-foreground text-sm">
                    Security best practices, vulnerability scanning, and compliance automation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">24/7 Reliability</p>
                  <p className="text-muted-foreground text-sm">
                    Monitoring, alerting, incident response, and continuous improvement.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section id="web" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                Web Development
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I build modern, scalable web applications with cutting-edge technologies. From robust
              backend APIs to intuitive frontends, I deliver complete solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {webServices.map((service, idx) => (
              <div key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 75}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-md transition-smooth animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Tech Stack
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="font-semibold text-foreground mb-3">Backend</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Node.js / Express</li>
                  <li>Python / Django / FastAPI</li>
                  <li>Go / Rust</li>
                  <li>Java / Spring Boot</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-3">Frontend</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>React / Next.js</li>
                  <li>Vue.js / Nuxt</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-3">Databases</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>PostgreSQL / MySQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Elasticsearch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">
                AI Integration
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I help you harness the power of artificial intelligence to automate processes, enhance
              decision-making, and create intelligent applications that learn and adapt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {aiServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>

          <div className="bg-background border border-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My AI Implementation Process
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-foreground">Discovery & Strategy</p>
                  <p className="text-muted-foreground text-sm">
                    Identify use cases and develop an AI strategy aligned with your business goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-foreground">Data Preparation</p>
                  <p className="text-muted-foreground text-sm">
                    Gather, clean, and prepare data for model training and integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-foreground">Model Development</p>
                  <p className="text-muted-foreground text-sm">
                    Train, fine-tune, and validate AI models for your specific use cases.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold text-foreground">Integration & Deployment</p>
                  <p className="text-muted-foreground text-sm">
                    Seamlessly integrate AI into your applications and deploy at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to Get Started?"
            description="Let's discuss your project requirements and how I can help you achieve your technical goals."
            buttonText="Schedule a Consultation"
            buttonHref="/contact"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
