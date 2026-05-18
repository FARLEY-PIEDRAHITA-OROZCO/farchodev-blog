import Link from "next/link"
import { ArrowRight, TrendingUp, BookOpen, Code, Terminal, Shield, Server, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PostCard } from "@/components/molecules/post-card"
import { FloatingOrbs } from "@/components/atoms/floating-orbs"

const featuredTags = [
  { label: "Next.js", href: "/tag/nextjs" },
  { label: "QA Automation", href: "/tag/qa-automation" },
  { label: "Ciberseguridad", href: "/tag/ciberseguridad" },
  { label: "TypeScript", href: "/tag/typescript" },
  { label: "TailwindCSS", href: "/tag/tailwindcss" },
  { label: "Playwright", href: "/tag/playwright" },
]

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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
  },
]

const categories = [
  { name: "Desarrollo Web", count: 12, slug: "desarrollo-web", icon: Code, gradient: "from-cyan-400 to-blue-500" },
  { name: "QA Automation", count: 8, slug: "qa-automation", icon: Terminal, gradient: "from-green-400 to-emerald-500" },
  { name: "Ciberseguridad", count: 15, slug: "ciberseguridad", icon: Shield, gradient: "from-red-400 to-rose-500" },
  { name: "DevOps", count: 5, slug: "devops", icon: Server, gradient: "from-purple-400 to-violet-500" },
  { name: "Carrera Tech", count: 6, slug: "carrera-tech", icon: TrendingUp, gradient: "from-amber-400 to-orange-500" },
]

export default function HomePage() {
  const featured = posts.find((p) => p.featured)
  const recent = posts.filter((p) => !p.featured)

  return (
    <div className="relative noise-overlay">
      <div className="dot-grid absolute inset-0" />
      <FloatingOrbs />

      <div className="relative space-y-20 py-12">
        {/* ── Hero ── */}
        <section className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-cyan-400 mb-6 animate-fade-in">
              <Sparkles className="h-3 w-3" />
              Blog técnico personal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
              Desarrollo, QA y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 animate-fade-in">
                Ciberseguridad
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Artículos técnicos sobre programación moderna, automatización de pruebas, seguridad informática y más.
              Por Farley Piedrahita Orozco.
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredTags.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="rounded-lg border border-white/5 bg-card/50 backdrop-blur-sm px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:text-cyan-400 hover:bg-card"
                >
                  #{tag.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Post ── */}
        {featured && (
          <section className="container mx-auto px-4 relative">
            <div className="glow-card rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden animate-fade-up">
              <div className="grid md:grid-cols-2 gap-0 absolute inset-0">
                <div className="glow-orb" style={{
                  width: "300px", height: "300px",
                  top: "50%", left: "25%",
                  background: "hsl(189 94% 55% / 0.06)",
                  filter: "blur(60px)",
                }} />
              </div>
              <div className="grid md:grid-cols-2 gap-0 relative z-10">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-cyan-400 mb-4 w-fit">
                    <BookOpen className="h-3 w-3" />
                    Destacado
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs text-muted-foreground">{featured.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <BookOpen className="h-3 w-3" />
                      {featured.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">{featured.date}</span>
                  </div>
                  <div>
                    <Link href={`/blog/${featured.slug}`}>
                      <Button>
                        Leer artículo
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="aspect-[4/3] md:aspect-auto order-1 md:order-2">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Recent Posts ── */}
        <section className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Últimos artículos</h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              Ver todos <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>

        {/* ── Categories ── */}
        <section className="container mx-auto px-4 relative">
          <h2 className="text-2xl font-bold mb-8">Explora por categoría</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(({ name, count, slug, icon: Icon, gradient }) => (
              <Link
                key={slug}
                href={`/categoria/${slug}`}
                className="group relative rounded-xl overflow-hidden border border-white/5 bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_hsl(var(--primary)/0.06)]"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-[0.03] rounded-bl-full`} />
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradient}`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold group-hover:text-cyan-400 transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {count} artículo{count !== 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
