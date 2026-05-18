import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  { name: "Farchódev Academy", url: "https://farchodev-academy.vercel.app", description: "Plataforma educativa de programación moderna con 3D interactivo" },
  { name: "Portfolio", url: "https://farchodev.vercel.app", description: "Portfolio profesional con proyectos de QA y ciberseguridad" },
]

const skills = [
  { name: "Next.js / React", level: "Avanzado" },
  { name: "TypeScript", level: "Avanzado" },
  { name: "TailwindCSS", level: "Avanzado" },
  { name: "Playwright / Cypress", level: "Avanzado" },
  { name: "Docker / DevOps", level: "Intermedio" },
  { name: "Python", level: "Intermedio" },
  { name: "Linux / Bash", level: "Intermedio" },
  { name: "Ciberseguridad", level: "Intermedio" },
]

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Intro */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-2xl">
                FP
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Farley Piedrahita Orozco</h1>
                <p className="text-muted-foreground">Desarrollador de Software &amp; Entusiasta de Ciberseguridad</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Soy desarrollador de software apasionado por crear herramientas educativas que hagan la programación accesible para todos.
              Mi experiencia abarca desarrollo web full-stack, automatización QA, y ciberseguridad.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-card px-4 py-3"
                >
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-white/5 bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_hsl(var(--primary)/0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground mb-4">
              ¿Quieres colaborar o tienes alguna pregunta? No dudes en contactarme.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/FARLEY-PIEDRAHITA-OROZCO" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/farley-piedrahita-orozco" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
