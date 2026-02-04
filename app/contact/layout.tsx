import React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Azam Tech Labs. We\'re here to discuss your project and how we can help.',
  openGraph: {
    title: 'Contact Us | Azam Tech Labs',
    description:
      'Get in touch with Azam Tech Labs.',
    url: 'https://azamtechlabs.com/contact',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
