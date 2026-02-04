import React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
