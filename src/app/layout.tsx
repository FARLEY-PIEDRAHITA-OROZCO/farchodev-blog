import type { Metadata } from "next"
import "./globals.css"
import { inter, jetbrainsMono } from "@/lib/fonts"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { PageTransition } from "@/components/atoms/page-transition"

export const metadata: Metadata = {
  title: {
    default: "Farchódev Blog — Desarrollo, QA y Ciberseguridad",
    template: "%s | Farchódev Blog",
  },
  description:
    "Blog técnico sobre programación moderna, automatización QA, ciberseguridad y desarrollo de software. Por Farley Piedrahita Orozco.",
  keywords: [
    "programación",
    "desarrollo web",
    "QA automation",
    "ciberseguridad",
    "blog técnico",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Farley Piedrahita Orozco" }],
  openGraph: {
    title: "Farchódev Blog",
    description:
      "Blog técnico sobre programación moderna, QA y ciberseguridad.",
    type: "website",
    locale: "es_CO",
    siteName: "Farchódev Blog",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider><PageTransition>{children}</PageTransition></ThemeProvider>
      </body>
    </html>
  )
}
