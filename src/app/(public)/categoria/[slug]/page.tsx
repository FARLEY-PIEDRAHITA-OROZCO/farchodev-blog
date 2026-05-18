import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, ArrowRight } from "lucide-react"

const categories: Record<string, { name: string; description: string }> = {
  "desarrollo-web": { name: "Desarrollo Web", description: "Artículos sobre desarrollo web moderno: Next.js, React, TypeScript, TailwindCSS y más." },
  "qa-automation": { name: "QA Automation", description: "Automatización de pruebas con Playwright, Cypress, Selenium y mejores prácticas de calidad de software." },
  "ciberseguridad": { name: "Ciberseguridad", description: "Writeups de CTF, hardening, pentesting, y fundamentos de seguridad informática." },
  "devops": { name: "DevOps", description: "Docker, CI/CD, infraestructura como código, y prácticas de deployment." },
}

const postsByCategory: Record<string, Array<{ title: string; slug: string; excerpt: string; date: string; readTime: string }>> = {
  "desarrollo-web": [
    { title: "Cómo construir una academia online con Next.js 16 y Three.js", slug: "construir-academia-online-nextjs-threejs", excerpt: "Guía completa para crear una plataforma educativa interactiva.", date: "May 15, 2026", readTime: "12 min" },
    { title: "TypeScript Strict: Cómo escribir código más seguro", slug: "typescript-strict-seguro", excerpt: "Configuración y buenas prácticas para TypeScript strict.", date: "Abr 28, 2026", readTime: "6 min" },
  ],
  "qa-automation": [
    { title: "Automatización QA con Playwright: De cero a CI/CD", slug: "automatizacion-qa-playwright-cicd", excerpt: "Configura Playwright, escribe tests e intégralos en CI/CD.", date: "May 10, 2026", readTime: "8 min" },
  ],
  "ciberseguridad": [
    { title: "Guía de hardening en Linux para principiantes", slug: "guia-hardening-linux", excerpt: "Mejores prácticas para asegurar un servidor Linux.", date: "May 5, 2026", readTime: "10 min" },
    { title: "Writeup: Máquina Easy de HackTheBox", slug: "writeup-hackthebox-easy", excerpt: "Resolución paso a paso de una máquina Easy de HTB.", date: "Abr 12, 2026", readTime: "20 min" },
  ],
  "devops": [
    { title: "Docker para desarrolladores: Guía práctica", slug: "docker-guia-practica-desarrolladores", excerpt: "Conteneriza tus apps con Docker, docker-compose y mejores prácticas.", date: "Abr 20, 2026", readTime: "15 min" },
  ],
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = categories[slug]
  const posts = postsByCategory[slug] || []

  if (!category) {
    notFound()
  }

  return (
    <div className="py-12 space-y-8">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {category.name}
          </h1>
          <p className="text-muted-foreground">
            {category.description}
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div className="space-y-4">
          {posts.length === 0 && (
            <p className="text-muted-foreground">No hay artículos en esta categoría todavía.</p>
          )}
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-white/5 bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_hsl(var(--primary)/0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
              </div>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
