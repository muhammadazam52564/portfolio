import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://azamtech.dev'),
  title: {
    default: 'Azam | DevOps Engineer, Web Developer & AI Consultant',
    template: '%s | Azam'
  },
  description: 'Independent consultant specializing in DevOps, Web Development, and AI Integration. I help organizations build scalable, secure, and AI-powered digital systems.',
  keywords: [
    'DevOps Consultant',
    'Cloud Engineering',
    'Web Development',
    'AI Integration',
    'CI/CD',
    'Kubernetes',
    'AWS',
    'RAG Systems',
    'Business Automation',
    'Freelance Engineer'
  ],
  authors: [{ name: 'Azam' }],
  creator: 'Azam',
  publisher: 'Azam',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azamtech.dev',
    siteName: 'Azam',
    title: 'Azam | DevOps Engineer, Web Developer & AI Consultant',
    description: 'Independent consultant specializing in DevOps, Web Development, and AI Integration.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Azam',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://azamtech.dev',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Azam',
              url: 'https://azamtech.dev',
              jobTitle: 'DevOps Engineer, Web Developer & AI Consultant',
              description: 'Independent consultant specializing in DevOps, Web Development, and AI Integration.',
              sameAs: [
                'https://twitter.com/azamtech',
                'https://linkedin.com/in/azam'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@azamtech.dev'
              }
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
