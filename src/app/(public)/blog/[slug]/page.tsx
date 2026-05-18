import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Calendar, Tag, Share2, Globe, BookOpen, Sparkles } from "lucide-react"
import { ReadingProgress } from "@/components/atoms/reading-progress"
import { TableOfContents } from "@/components/atoms/table-of-contents"
import { FloatingOrbs } from "@/components/atoms/floating-orbs"

const posts: Record<string, {
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  categorySlug: string
  tags: { name: string; slug: string }[]
  image: string
}> = {
  "construir-academia-online-nextjs-threejs": {
    title: "Cómo construir una academia online con Next.js 16 y Three.js",
    excerpt: "Guía completa para crear una plataforma educativa interactiva con modelado 3D, animaciones fluidas y un sistema de diseño oscuro premium.",
    content: `
      <h2>Stack tecnológico</h2>
      <p>Next.js 16 con App Router, TypeScript strict, TailwindCSS v4 para estilos, Three.js con React Three Fiber para el modelo 3D interactivo, y Framer Motion 12 para animaciones fluidas. Esta combinación permite crear una experiencia educativa inmersiva que se siente premium.</p>
      <h2>Arquitectura</h2>
      <p>La aplicación sigue una arquitectura de diseño atómico: átomos, moléculas y organismos. Los componentes se organizan en grupos de características: marketing, dashboard y auth. Esto facilita el mantenimiento y la escalabilidad del proyecto.</p>
      <h3>Estructura de carpetas</h3>
      <p>Cada grupo de características tiene su propio layout y componentes. Los componentes compartidos viven en el directorio raíz de components, mientras que los específicos de cada feature están dentro de su grupo.</p>
      <h2>Lecciones aprendidas</h2>
      <p>Construir una plataforma educativa desde cero implica desafíos únicos: gestión de progreso del usuario, diseño responsivo para contenido educativo, y renderizado 3D optimizado. La clave está en iterar rápido y escuchar el feedback de los usuarios.</p>
    `,
    date: "May 15, 2026",
    readTime: "12 min",
    category: "Desarrollo Web",
    categorySlug: "desarrollo-web",
    tags: [
      { name: "Next.js", slug: "nextjs" },
      { name: "Three.js", slug: "threejs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "TailwindCSS", slug: "tailwindcss" },
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
  },
  "automatizacion-qa-playwright-cicd": {
    title: "Automatización QA con Playwright: De cero a CI/CD",
    excerpt: "Aprende a configurar Playwright desde cero, escribir tests robustos e integrarlos en tu pipeline de CI/CD para despliegues sin errores.",
    content: `
      <h2>Instalación y configuración</h2>
      <p>Playwright se ha convertido en una de las herramientas más poderosas para automatización de pruebas end-to-end. Comienza instalando Playwright con <code>npm init playwright@latest</code>. Esto configura todo lo necesario: test runner, navegadores y configuración base.</p>
      <h2>Escribiendo tu primer test</h2>
      <p>Los tests en Playwright son intuitivos. Usa <code>page.goto()</code> para navegar, <code>page.locator()</code> para encontrar elementos, y <code>expect()</code> para verificar resultados. El auto-waiting de Playwright elimina la necesidad de sleeps y timeouts manuales.</p>
      <h3>Buenas prácticas</h3>
      <p>Organiza tus tests por funcionalidad, usa fixtures para datos compartidos, y aprovecha el tracing de Playwright para depurar fallos en CI.</p>
      <h2>Integración CI/CD</h2>
      <p>Playwright se integra perfectamente con GitHub Actions. Configura un workflow que instale dependencias, ejecute tests y genere reportes HTML automáticamente en cada push.</p>
    `,
    date: "May 10, 2026",
    readTime: "8 min",
    category: "QA Automation",
    categorySlug: "qa-automation",
    tags: [
      { name: "Playwright", slug: "playwright" },
      { name: "QA", slug: "qa" },
      { name: "CI/CD", slug: "cicd" },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  },
  "guia-hardening-linux": {
    title: "Guía de hardening en Linux para principiantes",
    excerpt: "Las mejores prácticas para asegurar un servidor Linux: hardening de SSH, firewalls, fail2ban, y monitoreo de intrusiones.",
    content: `
      <h2>Hardening de SSH</h2>
      <p>El hardening de servidores Linux es una habilidad fundamental. Comienza deshabilitando el login como root, cambia el puerto por defecto, usa autenticación por llaves, y configura fail2ban para proteger contra ataques de fuerza bruta.</p>
      <h2>Firewall con UFW</h2>
      <p>UFW (Uncomplicated Firewall) facilita la gestión de reglas de firewall. Permite solo los puertos necesarios y deniega el resto por defecto. Configura reglas específicas para SSH, HTTP y HTTPS.</p>
      <h3>Reglas recomendadas</h3>
      <p>Además de los puertos estándar, considera rate limiting en SSH con <code>ufw limit ssh</code> para bloquear IPs con demasiados intentos fallidos.</p>
      <h2>Monitoreo con auditd</h2>
      <p>auditd permite rastrear eventos del sistema. Configura reglas para monitorear archivos críticos, accesos no autorizados y cambios de configuración. Revisa los logs regularmente con <code>ausearch</code>.</p>
    `,
    date: "May 5, 2026",
    readTime: "10 min",
    category: "Ciberseguridad",
    categorySlug: "ciberseguridad",
    tags: [
      { name: "Linux", slug: "linux" },
      { name: "Hardening", slug: "hardening" },
      { name: "Seguridad", slug: "seguridad" },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  },
  "typescript-strict-seguro": {
    title: "TypeScript Strict: Cómo escribir código más seguro",
    excerpt: "Configuración y buenas prácticas para aprovechar TypeScript al máximo con modo estricto, tipos avanzados y pattern matching.",
    content: `
      <h2>Configuración strict</h2>
      <p>TypeScript strict mode no es solo una configuración — es una filosofía de desarrollo que previene errores en tiempo de compilación. Activa <code>strict: true</code> en <code>tsconfig.json</code> para habilitar noImplicitAny, strictNullChecks, strictFunctionTypes y más.</p>
      <h2>Tipos avanzados</h2>
      <p>Utiliza tipos condicionales, mapped types, template literal types y discriminated unions para modelar datos complejos de manera segura y expresiva.</p>
      <h3>Pattern matching</h3>
      <p>TypeScript 5.5+ introduce mejoras significativas en inferencia de tipos. Aprovecha los discriminated unions con switch exhaustivos para cubrir todos los casos posibles.</p>
      <h2>Buenas prácticas</h2>
      <p>Prefiere tipos explícitos en las fronteras del sistema (APIs, bases de datos), usa satisfies para validar tipos sin perder especificidad, y evita any a toda costa.</p>
    `,
    date: "Abr 28, 2026",
    readTime: "6 min",
    category: "Desarrollo Web",
    categorySlug: "desarrollo-web",
    tags: [
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Buenas prácticas", slug: "buenas-practicas" },
    ],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
  },
  "docker-guia-practica-desarrolladores": {
    title: "Docker para desarrolladores: Guía práctica",
    excerpt: "Todo lo que necesitas saber para contenerizar tus aplicaciones: Dockerfile, docker-compose, volúmenes, redes y mejores prácticas.",
    content: `
      <h2>Dockerfile eficiente</h2>
      <p>Docker ha revolucionado la forma en que desarrollamos y desplegamos software. Esta guía cubre desde conceptos básicos hasta prácticas avanzadas. Usa builds multi-stage para reducir el tamaño de las imágenes drásticamente.</p>
      <h3>Multi-stage builds</h3>
      <p>Separa la etapa de build de la etapa de producción. La imagen final solo contiene lo necesario para ejecutar la aplicación, reduciendo el tamaño de cientos de MB a solo unos pocos.</p>
      <h2>Docker Compose</h2>
      <p>Orquesta múltiples servicios con <code>docker-compose.yml</code>. Define redes, volúmenes y dependencias entre servicios para entornos de desarrollo reproducibles.</p>
    `,
    date: "Abr 20, 2026",
    readTime: "15 min",
    category: "DevOps",
    categorySlug: "devops",
    tags: [
      { name: "Docker", slug: "docker" },
      { name: "DevOps", slug: "devops" },
      { name: "Contenedores", slug: "contenedores" },
    ],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&q=80",
  },
  "writeup-hackthebox-easy": {
    title: "Writeup: Máquina Easy de HackTheBox",
    excerpt: "Resolución paso a paso de una máquina Easy de HackTheBox. Enumeración, explotación y escalada de privilegios documentada.",
    content: `
      <h2>Enumeración</h2>
      <p>En este writeup documentaré el proceso completo para resolver una máquina Easy de HackTheBox, desde la enumeración inicial hasta la escalada de privilegios. Comienza con un escaneo de puertos con Nmap para identificar servicios abiertos.</p>
      <h3>Escaneo de puertos</h3>
      <p>Usa <code>nmap -sC -sV -p- &lt;target&gt;</code> para un escaneo completo. Identifica versiones de software que puedan tener vulnerabilidades conocidas.</p>
      <h2>Explotación</h2>
      <p>Identifica vulnerabilidades en los servicios encontrados. Busca exploits públicos en searchsploit o combina técnicas para ganar acceso inicial al sistema.</p>
      <h2>Escalada de privilegios</h2>
      <p>Una vez dentro, enumera el sistema en busca de permisos SUID, crons mal configurados, o capabilities de Linux inseguras para escalar privilegios a root.</p>
    `,
    date: "Abr 12, 2026",
    readTime: "20 min",
    category: "Ciberseguridad",
    categorySlug: "ciberseguridad",
    tags: [
      { name: "HackTheBox", slug: "hackthebox" },
      { name: "CTF", slug: "ctf" },
      { name: "Pentesting", slug: "pentesting" },
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
  },
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://farchodev-blog.vercel.app/blog/${slug}`
  const text = encodeURIComponent(title)

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground flex items-center gap-1">
        <Share2 className="h-4 w-4" />
        Compartir
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-cyan-400"
        title="Compartir en Twitter"
      >
        <Globe className="h-4 w-4" />
      </a>
      <a
        href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-cyan-400"
        title="Compartir en LinkedIn"
      >
        <Globe className="h-4 w-4" />
      </a>
    </div>
  )
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <article className="relative noise-overlay">
      <div className="dot-grid absolute inset-0" />
      <FloatingOrbs />
      <ReadingProgress />

      <div className="relative py-12">
        {/* Back link */}
        <div className="container mx-auto px-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
        </div>

        {/* Header */}
        <header className="container mx-auto px-4 mb-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-cyan-400 mb-4">
              <Sparkles className="h-3 w-3" />
              Artículo
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Link
                href={`/categoria/${post.categorySlug}`}
                className="inline-flex text-xs font-medium text-cyan-400 hover:underline"
              >
                {post.category}
              </Link>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="h-3 w-3" />
                {post.content.split(" ").length > 200 ? "Artículo completo" : "Lectura rápida"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Cover Image */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[2/1] rounded-2xl overflow-hidden border border-white/5">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content + TOC */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
            {/* Article Body */}
            <div
              className="prose prose-invert prose-cyan max-w-none
                prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:scroll-mt-24
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:scroll-mt-24
                prose-p:text-muted-foreground prose-p:leading-[1.75] prose-p:text-base
                prose-strong:text-foreground
                prose-code:text-cyan-400 prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
                prose-pre:bg-card prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl
                prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents content={post.content} />
              </div>
            </aside>
          </div>
        </div>

        {/* Tags & Share */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.slug}
                    href={`/tag/${tag.slug}`}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/5 bg-card/50 backdrop-blur-sm px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:text-cyan-400 hover:bg-card"
                  >
                    <Tag className="h-3 w-3" />
                    {tag.name}
                  </Link>
                ))}
              </div>
              <ShareButtons title={post.title} slug={slug} />
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glow-card rounded-xl border border-white/5 bg-card p-6 flex flex-col sm:flex-row items-start gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                FP
              </div>
              <div>
                <h3 className="font-semibold mb-1">Farley Piedrahita Orozco</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Desarrollador de software y entusiasta de la ciberseguridad. Apasionado por crear herramientas educativas
                  que hagan la programación accesible para todos.
                </p>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://github.com/FARLEY-PIEDRAHITA-OROZCO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/farley-piedrahita-orozco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-cyan-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
