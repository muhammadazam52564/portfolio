'use client'

import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, Linkedin, ExternalLink, MessageCircle, Briefcase } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance animate-slide-up" style={{ animationDelay: '0ms' }}>
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up" style={{ animationDelay: '100ms' }}>
                Have a project in mind? Want to discuss your technical needs? I'm here to help.
                Reach out through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-background p-8 rounded-lg border border-border text-center hover:border-primary/50 hover:shadow-md transition-smooth animate-scale-in" style={{ animationDelay: '0ms' }}>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:muhammadazam52564@gmail.com"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  muhammadazam52564@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-background p-8 rounded-lg border border-border text-center hover:border-primary/50 hover:shadow-md transition-smooth animate-scale-in" style={{ animationDelay: '75ms' }}>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/mazam5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  Connect with me
                </a>
              </div>

              {/* Upwork */}
              <div className="bg-background p-8 rounded-lg border border-border text-center hover:border-primary/50 hover:shadow-md transition-smooth animate-scale-in" style={{ animationDelay: '150ms' }}>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Upwork</h3>
                <a
                  href="https://upwork.com/freelancers/azam1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  View my profile
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="max-w-2xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8 text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Chat</h2>
              <p className="text-muted-foreground mb-6">
                Prefer quick conversations? Reach out on WhatsApp for immediate responses on project inquiries.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-smooth active:scale-95"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Response Time */}
            <div className="max-w-2xl mx-auto mt-12 p-6 bg-card border border-border rounded-lg">
              <p className="text-center text-muted-foreground">
                <span className="font-semibold text-foreground">Response Time:</span> I typically respond within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
