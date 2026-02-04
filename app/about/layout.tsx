import React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Azam Tech Labs - Our mission, values, and commitment to building scalable, secure, and AI-powered digital systems.',
  openGraph: {
    title: 'About Us | Azam Tech Labs',
    description:
      'Discover our mission and values at Azam Tech Labs.',
    url: 'https://azamtechlabs.com/about',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
