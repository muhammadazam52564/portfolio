import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Azam - Proof of Work and case studies showcasing full stack development, DevOps, and AI integration projects.",
  openGraph: {
    title: "Portfolio | Azam",
    description:
      "Full stack development and infrastructure projects built for real-world impact.",
    url: "https://azamtech.dev/work",
    type: "website",
  },
};

const projects = [
  {
    id: "jaspi",
    title: "Jaspi.io — AI Hiring Platform",
    role: "Backend & Cloud Engineer",
    timeline: "Jul 2025 – Present",
    client: "Power Match",
    challenge:
      "Hiring platforms break easily when AI, data pipelines, and real users collide. Jaspi needed a backend that could support AI-driven workflows, scale reliably, and stay cost-efficient — all while being production-ready from day one.",
    solution: [
      "Designed and maintained backend services supporting AI-powered hiring flows",
      "Built secure, scalable APIs for real-world production usage",
      "Improved infrastructure reliability and reduced operational risks",
      "Collaborated closely with product, ML, and infrastructure teams",
    ],
    impact:
      "Production-grade backend powering AI hiring workflows with stable system capable of scaling with user growth and clean infrastructure foundation ready for future AI expansion.",
    tech: ["Node.js", "NestJS", "AWS", "Docker", "CI/CD"],
    highlights: [
      "Production-ready from day one",
      "AI workflow integration",
      "Scalable infrastructure",
    ],
  },
  {
    id: "bookt",
    title: "Bookt.dk — Booking Platform Stabilization",
    role: "Backend Engineer",
    timeline: "Sep 2024 – Jul 2025",
    client: "Power Match",
    challenge:
      "Bookt was already live — but live systems come with real problems: deployment risks, performance bottlenecks, and reliability issues that directly affect paying users.",
    solution: [
      "Took ownership of production backend stability",
      "Fixed performance and reliability issues affecting bookings",
      "Improved backend workflows and database efficiency",
      "Helped transition the platform toward a more modern, maintainable setup",
    ],
    impact:
      "Safer and more predictable releases with fewer production incidents. Backend now capable of supporting real salon businesses without downtime.",
    tech: ["Laravel", "Node.js", "MySQL", "CI/CD", "Cloud Infrastructure"],
    highlights: [
      "Reduced deployment risks",
      "Improved booking performance",
      "Production stability focused",
    ],
  },
  {
    id: "consentio",
    title: "Consentio — Compliance System Backend",
    role: "Backend Engineer",
    timeline: "Dec 2022 – May 2023",
    company: "Progsits",
    challenge:
      "Compliance systems aren't about flashy features — they're about trust, correctness, and security. Consentio needed a backend that could safely handle regulated data without compromise.",
    solution: [
      "Built and maintained backend services for compliance workflows",
      "Ensured secure handling of consent and regulatory data",
      "Focused on correctness, auditability, and maintainable architecture",
      "Worked within strict data-handling requirements",
    ],
    impact:
      "Reliable backend handling sensitive compliance data with reduced risk of data integrity and regulatory issues. Enterprise-grade compliance operations foundation.",
    tech: ["Node.js", "PHP", "MySQL", "Secure APIs"],
    highlights: [
      "Enterprise compliance",
      "Data security focus",
      "Regulatory compliance",
    ],
  },
  {
    id: "condo-bridge",
    title: "Condo Bridge — Property Management Platform",
    role: "Backend Engineer",
    timeline: "Nov 2021 – Jun 2022",
    challenge:
      "Property management platforms must handle multiple stakeholders — owners, managers, tenants — without breaking under operational complexity.",
    solution: [
      "Developed backend services supporting property and condo management workflows",
      "Built scalable APIs for managing properties, tenants, and operations",
      "Focused on system reliability and long-term maintainability",
      "Supported real-world business use cases in Calgary, Canada",
    ],
    impact:
      "Stable backend used by property management companies with clear data flows for operational and administrative tasks. Reduced friction for daily property management operations.",
    tech: ["Backend Services", "Scalable APIs", "Database Design"],
    highlights: [
      "Multi-stakeholder platform",
      "Operational efficiency",
      "Real-world deployment",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-in">
              <h1
                className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance animate-slide-up"
                style={{ animationDelay: "0ms" }}
              >
                Proof of Work
              </h1>
              <p
                className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                Case studies showcasing full stack development, infrastructure,
                and AI integration for production systems.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  id={project.id}
                  className="border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-smooth animate-scale-in scroll-mt-32"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Project Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">
                        {project.role}
                      </span>
                      <span>•</span>
                      <span>{project.timeline}</span>
                      <span>•</span>
                      <span>{project.client || project.company}</span>
                    </div>
                  </div>

                  {/* Challenge Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      What I Did
                    </h3>
                    <ul className="space-y-2">
                      {project.solution.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary font-bold mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      The Impact
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-border pt-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Key Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1.5 bg-card border border-border rounded text-xs text-foreground"
                        >
                          ✓ {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <CTASection
              title="Ready to Start Your Project?"
              description="Interested in collaborating on your next project? I'm available for full stack development, DevOps, and AI integration work."
              buttonText="Get in Touch"
              buttonHref="/contact"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
