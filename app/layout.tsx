import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: 'Mouhamed Bakhoum - Developpeur Full Stack',
    description: 'Mon portfolio: Experience, Projets Realisés, Tech Stacks',
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
  }