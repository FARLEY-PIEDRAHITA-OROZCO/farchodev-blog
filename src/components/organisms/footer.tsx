import Link from "next/link"
import { PenLine, Globe, Heart } from "lucide-react"

const footerLinks = {
  Blog: [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Todos los posts" },
    { href: "/about", label: "Sobre mí" },
  ],
  Proyectos: [
    { href: "https://farchodev-academy.vercel.app", label: "Farchódev Academy" },
    { href: "https://farchodev.vercel.app", label: "Portfolio" },
  ],
}

const socialLinks = [
  { href: "https://github.com/FARLEY-PIEDRAHITA-OROZCO", icon: Globe, label: "GitHub" },
  { href: "https://linkedin.com/in/farley-piedrahita-orozco", icon: Globe, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                <PenLine className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Farchódev<span className="text-cyan-400">Blog</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Blog técnico sobre programación moderna, automatización QA, ciberseguridad y desarrollo de software.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Farchódev Blog. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-3 w-3 text-red-400" /> por Farley Piedrahita
          </p>
        </div>
      </div>
    </footer>
  )
}
