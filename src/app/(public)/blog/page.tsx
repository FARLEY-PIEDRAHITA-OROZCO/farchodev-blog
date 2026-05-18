import Link from "next/link"
import { Sparkles } from "lucide-react"
import { PostCard } from "@/components/molecules/post-card"
import { FloatingOrbs } from "@/components/atoms/floating-orbs"

const posts = [
  {
    title: "Cómo construir una academia online con Next.js 16 y Three.js",
    excerpt: "Guía completa para crear una plataforma educativa interactiva con modelado 3D, animaciones fluidas y un sistema de diseño oscuro premium.",
    slug: "construir-academia-online-nextjs-threejs",
    category: "Desarrollo Web",
    categorySlug: "desarrollo-web",
    readTime: "12 min",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
  {
    title: "Automatización QA con Playwright: De cero a CI/CD",
    excerpt: "Aprende a configurar Playwright desde cero, escribir tests robustos e integrarlos en tu pipeline de CI/CD para despliegues sin errores.",
    slug: "automatizacion-qa-playwright-cicd",
    category: "QA Automation",
    categorySlug: "qa-automation",
    readTime: "8 min",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    title: "Guía de hardening en Linux para principiantes",
    excerpt: "Las mejores prácticas para asegurar un servidor Linux: hardening de SSH, firewalls, fail2ban, y monitoreo de intrusiones.",
    slug: "guia-hardening-linux",
    category: "Ciberseguridad",
    categorySlug: "ciberseguridad",
    readTime: "10 min",
    date: "May 5, 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    title: "TypeScript Strict: Cómo escribir código más seguro",
    excerpt: "Configuración y buenas prácticas para aprovechar TypeScript al máximo con modo estricto, tipos avanzados y pattern matching.",
    slug: "typescript-strict-seguro",
    category: "Desarrollo Web",
    categorySlug: "desarrollo-web",
    readTime: "6 min",
    date: "Abr 28, 2026",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
  },
  {
    title: "Docker para desarrolladores: Guía práctica",
    excerpt: "Todo lo que necesitas saber para contenerizar tus aplicaciones: Dockerfile, docker-compose, volúmenes, redes y mejores prácticas.",
    slug: "docker-guia-practica-desarrolladores",
    category: "DevOps",
    categorySlug: "devops",
    readTime: "15 min",
    date: "Abr 20, 2026",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
  },
  {
    title: "Writeup: Máquina Easy de HackTheBox",
    excerpt: "Resolución paso a paso de una máquina Easy de HackTheBox. Enumeración, explotación y escalada de privilegios documentada.",
    slug: "writeup-hackthebox-easy",
    category: "Ciberseguridad",
    categorySlug: "ciberseguridad",
    readTime: "20 min",
    date: "Abr 12, 2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  },
]

const categories = [
  { name: "Desarrollo Web", slug: "desarrollo-web" },
  { name: "QA Automation", slug: "qa-automation" },
  { name: "Ciberseguridad", slug: "ciberseguridad" },
  { name: "DevOps", slug: "devops" },
]

export default function BlogPage() {
  return (
    <div className="relative noise-overlay">
      <div className="dot-grid absolute inset-0" />
      <FloatingOrbs />

      <div className="relative py-12 space-y-10">
        {/* Header */}
        <section className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-4">
              <Sparkles className="h-3 w-3" />
              Todos los artículos
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Blog
            </h1>
            <p className="text-muted-foreground">
              Explora {posts.length} artículos sobre desarrollo web, QA automation, ciberseguridad y más.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categoria/${cat.slug}`}
                className="rounded-lg border border-white/5 bg-card/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:text-cyan-400 hover:bg-card"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Posts Grid */}
        <section className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
