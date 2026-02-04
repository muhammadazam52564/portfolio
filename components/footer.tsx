import Link from 'next/link'
import { Mail, Linkedin, ExternalLink, MessageCircle, Briefcase } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Azam</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full stack developer and consultant specializing in DevOps, Web Development, and AI Integration. Building scalable systems for real-world impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:muhammadazam52564@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  muhammadazam52564@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/mazam5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-primary flex-shrink-0" />
                <a
                  href="https://upwork.com/freelancers/azam1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Upwork Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Azam. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Crafted with engineering mindset.
          </p>
        </div>
      </div>
    </footer>
  )
}
