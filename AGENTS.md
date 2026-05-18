<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Farchódev Blog — Documentación Completa

## 1. Descripción General

Blog técnico personal de Farley Piedrahita Orozco sobre programación moderna,
automatización QA, ciberseguridad y desarrollo de software.

Comparte el **mismo ADN visual** que Farchódev Academy: modo oscuro como
predeterminado, acentos cyan `#22D3EE`, glassmorphism, glows y tipografía
Inter + JetBrains Mono.

| Propiedad | Valor |
|---|---|
| **Repo** | `github.com/FARLEY-PIEDRAHITA-OROZCO/farchodev-blog` |
| **Framework** | Next.js 16.2.6 (App Router) |
| **CMS** | Sanity.io v5 (headless) |
| **Despliegue** | Vercel (preview + production) |
| **Idioma** | Español (es_CO) |

---

## 2. Arquitectura

### 2.1 Estructura de directorios

```
farchodev-blog/
├── sanity/
│   ├── schemas/          # Sanity CMS schemas
│   │   ├── post.ts       #   Post content document
│   │   ├── category.ts   #   Category taxonomy
│   │   ├── tag.ts        #   Tag taxonomy
│   │   ├── author.ts     #   Author profile
│   │   ├── blockContent.ts  # Rich text blocks
│   │   └── index.ts      # Schema registry
│   └── sanity.config.ts  # Sanity Studio config
├── src/
│   ├── app/
│   │   ├── globals.css   # Design system + utilities
│   │   ├── layout.tsx    # Root layout (fonts, theme, transitions)
│   │   └── (public)/     # Route group: public pages
│   │       ├── layout.tsx      # Navbar + Footer wrapper
│   │       ├── page.tsx        # Home / blog index
│   │       ├── about/page.tsx  # About the author
│   │       ├── blog/
│   │       │   ├── page.tsx         # All posts listing
│   │       │   └── [slug]/page.tsx  # Individual post
│   │       ├── categoria/
│   │       │   └── [slug]/page.tsx  # Posts by category
│   │       └── tag/
│   │           └── [slug]/page.tsx  # Posts by tag
│   ├── components/
│   │   ├── atoms/        # Smallest reusable components
│   │   │   ├── floating-orbs.tsx    # Decorative background orbs
│   │   │   ├── page-transition.tsx  # Route transition wrapper
│   │   │   ├── reading-progress.tsx # Scroll progress bar
│   │   │   └── table-of-contents.tsx # TOC with scroll spy
│   │   ├── molecules/    # Composite components
│   │   │   └── post-card.tsx        # Blog post card
│   │   ├── organisms/    # Page-level sections
│   │   │   ├── navbar.tsx # Top navigation
│   │   │   └── footer.tsx # Site footer
│   │   ├── providers/    # React context providers
│   │   │   └── theme-provider.tsx # Dark/light theme
│   │   └── ui/           # Design system primitives
│   │       └── button.tsx # Shadcn/ui Button
│   └── lib/
│       ├── fonts.ts      # next/font configuration
│       ├── utils.ts      # cn() utility
│       ├── sanity.ts     # Sanity client + image builder
│       └── queries.ts    # GROQ queries + fetch helpers
├── next.config.ts        # Image remote patterns
├── sanity.config.ts      # Sanity Studio config
├── sanity.cli.ts         # Sanity CLI config
├── .env.example          # Environment variables template
├── AGENTS.md             # This file
├── CLAUDE.md             # AI assistant rules
└── package.json
```

### 2.2 Patrón de diseño

**Atomic Design** — los componentes se organizan por complejidad creciente:

| Nivel | Propósito | Ejemplos |
|---|---|---|
| `atoms/` | Componentes atómicos, sin lógica de negocio | Button, PageTransition, ReadingProgress |
| `molecules/` | Combinación de átomos | PostCard |
| `organisms/` | Secciones completas de página | Navbar, Footer |
| `providers/` | Contextos de React | ThemeProvider |
| `ui/` | Primitivas del sistema de diseño (shadcn/ui) | Button |

### 2.3 Route groups

Next.js App Router route groups (`(public)/`) organizan las páginas sin
afectar la URL:

```
(public)/page.tsx          → /
(public)/blog/page.tsx     → /blog
(public)/blog/[slug]/page  → /blog/:slug
(public)/categoria/[slug]  → /categoria/:slug
(public)/tag/[slug]        → /tag/:slug
(public)/about/page.tsx    → /about
```

El layout del grupo `(public)` envuelve todas las rutas con `Navbar` + `Footer`.

---

## 3. Tech Stack

| Dependencia | Versión | Propósito |
|---|---|---|
| `next` | 16.2.6 | Framework React con App Router |
| `react` / `react-dom` | 19.2.4 | UI library |
| `typescript` | ^5 | Tipado estático |
| `tailwindcss` | ^4 | Utility-first CSS |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin para Tailwind v4 |
| `framer-motion` | ^12.39.0 | Animaciones y transiciones |
| `lucide-react` | ^1.16.0 | Iconos SVG |
| `sanity` | ^5.25.1 | CMS headless + Studio |
| `@sanity/client` | ^6.29.1 | Cliente Sanity para GROQ |
| `@sanity/image-url` | ^1.2.0 | URLs optimizadas de imágenes |
| `@sanity/code-input` | ^7.1.1 | Code blocks en Portable Text |
| `@portabletext/react` | ^3.2.4 | Renderizado de Portable Text |
| `groq` | ^5.25.1 | Tagged template para queries |
| `class-variance-authority` | ^0.7.1 | Variantes de componentes |
| `clsx` | ^2.1.1 | Clases condicionales |
| `tailwind-merge` | ^3.6.0 | Merge de clases Tailwind |
| `tailwindcss-animate` | ^1.0.7 | Animaciones Tailwind |
| `@radix-ui/react-slot` | ^1.2.4 | Composición de componentes |

---

## 4. Sistema de Diseño

### 4.1 Paleta de colores (modo oscuro)

| Token | HSL | Hex |
|---|---|---|
| `--background` | `222 47% 4%` | `#05070E` |
| `--foreground` | `210 40% 98%` | `#F8FAFC` |
| `--primary` | `189 94% 55%` | `#22D3EE` (cyan) |
| `--card` | `222 47% 6%` | `#080C17` |
| `--muted` | `217 33% 14%` | `#171F2E` |
| `--muted-foreground` | `215 20% 65%` | `#9CA3AF` |
| `--border` | `217 33% 20%` | `#22304A` |
| `--radius` | `0.75rem` | `12px` |

### 4.2 Modo claro

Se activa añadiendo la clase `.theme-day` al `<html>`. Los valores HSL se
invierten manteniendo la misma estructura de tokens.

### 4.3 Tipografía

| Familia | CSS Variable | Pesos |
|---|---|---|
| **Inter** | `--font-inter` | 300, 400, 500, 600, 700 |
| **JetBrains Mono** | `--font-jetbrains-mono` | 300, 400, 500, 600 |

Cargadas via `next/font/google` en `src/lib/fonts.ts`. Las variables CSS se
exponen en el `<html>` y se referencian en el `@theme` de Tailwind.

### 4.4 Animaciones CSS (`@keyframes`)

| Nombre | Duración | Descripción |
|---|---|---|
| `fade-in` | 0.6s | Opacidad 0 → 1 con easing suave |
| `fade-up` | 0.8s | Opacidad 0 → 1 + translateY(28px → 0) |
| `glow-pulse` | 4s | Pulso de borde y sombra glow |
| `float` | 8s | Flotación 3D: translateY + scale |
| `float-slow` | 12s | Versión más lenta de float |
| `float-slower` | 16s | Versión más lenta aún |
| `progress` | 2s | Animación de entrada para barra de progreso |
| `accordion-down/up` | 0.2s | Animaciones de acordeón Radix |

### 4.5 CSS Utilities personalizadas

| Clase | Descripción |
|---|---|
| `.noise-overlay` | Textura de grano SVG con opacidad 0.03 sobre el fondo completo |
| `.dot-grid` | Patrón de puntos con `radial-gradient` cada 32px |
| `.glow-orb` | Elemento decorativo circular con blur(80px) |
| `.reading-progress` | Barra fija de 2px en el top con gradiente cyan |
| `.glow-card` | Efecto de resplandor radial que sigue el cursor del mouse |

### 4.6 Easing por defecto

Todas las transiciones CSS y de Framer Motion usan:
```
cubic-bezier(0.22, 1, 0.36, 1)
```

---

## 5. Componentes

### 5.1 Átomos

#### `FloatingOrbs`
- Decoración de fondo: 3 esferas de luz con blur, colores cyan/azul
- Animaciones `float` con diferentes duraciones (8s, 12s, 16s)
- `pointer-events: none`, `aria-hidden`

#### `PageTransition`
- Envuelve children en `AnimatePresence` con `mode="popLayout"`
- Detecta cambios de ruta con `usePathname()`
- Animación: fade + translateY (0.25s, easing custom)

#### `ReadingProgress`
- Barra de progreso de lectura fija en el top de la página
- Calcula el porcentaje basado en `scrollTop / (docHeight - windowHeight)`
- Usa `passive: true` para rendimiento
- Ancho controlado via `style={{ width }}`

#### `TableOfContents`
- Parsea el HTML del contenido con `DOMParser` para extraer `h2` y `h3`
- Genera IDs únicos (`heading-0`, `heading-1`, ...)
- `IntersectionObserver` con `rootMargin: "-80px 0px -60% 0px"` para detectar
  el heading activo
- Scroll suave al hacer clic en un enlace
- Renderizado condicional: no se muestra si no hay headings
- `useMemo` para derivar headings del contenido (evita re-renders)

### 5.2 Moléculas

#### `PostCard`
- Props: `title`, `excerpt`, `slug`, `category`, `categorySlug`, `readTime`,
  `date`, `image`, `featured?`
- Efecto `glow-card` con seguimiento del mouse (CSS custom properties `--x`, `--y`)
- Escala de imagen en hover (`scale-105`, `brightness-110`)
- Categoría clicable (detiene propagación con `e.stopPropagation()`)
- Variante `featured`: borde primary, gradiente de fondo, texto más grande

### 5.3 Organismos

#### `Navbar`
- Logo: icono `PenLine` en gradiente cyan → azul + "Farchódev**Blog**"
- Links: Inicio, Blog, Sobre mí
- Botón de toggle de tema (Sol/Luna)
- Menú responsive con animación de altura (`max-h-0` ↔ `max-h-80`)
- `backdrop-blur-xl` + `bg-background/80` para efecto glassmorphism

#### `Footer`
- Logo + descripción del blog
- Enlaces a redes sociales (GitHub, LinkedIn)
- Columnas: "Blog" (Inicio, Todos los posts, Sobre mí) y "Proyectos"
  (Academy, Portfolio)
- Copyright + "Hecho con ❤️" signature

### 5.4 UI (shadcn/ui adaptado)

#### `Button`
- Variantes: `default` (con glow), `destructive`, `outline`, `secondary`,
  `ghost`, `link`
- Tamaños: `default`, `sm`, `lg`, `xl`, `icon`
- `asChild` para composición con `Slot` de Radix
- Transiciones de 300ms

### 5.5 Providers

#### `ThemeProvider`
- Contexto React con `theme` (dark/light) y `toggle()`
- Estado inicial desde `localStorage` via lazy initializer `getInitialTheme`
- Sincroniza clase `.theme-day` en `<html>` y `localStorage`
- Tema por defecto: `"dark"`

### 5.6 Utilidades

#### `cn()` (`lib/utils.ts`)
- Combina `clsx` + `tailwind-merge` para merge inteligente de clases

---

## 6. Páginas

### 6.1 Home (`/`)

| Sección | Descripción |
|---|---|
| **Hero** | Badge "Blog técnico personal", título con gradiente "Desarrollo, QA y Ciberseguridad", tags clicables con glassmorphism |
| **Featured Post** | Post destacado en grid 2 columnas: info + imagen, badge "Destacado", botón CTA |
| **Recent Posts** | Grid 3 columnas de `PostCard` con los últimos 5 artículos |
| **Categories** | 5 tarjetas con iconos gradiente: Desarrollo Web, QA Automation, Ciberseguridad, DevOps, Carrera Tech |

Fondo: `noise-overlay` + `dot-grid` + `FloatingOrbs`.

### 6.2 Blog listing (`/blog`)

- Badge "Todos los artículos" + título "Blog"
- Filtros de categoría como pills clicables
- Grid 3 columnas de `PostCard`

### 6.3 Post detail (`/blog/[slug]`)

- `ReadingProgress` en el top
- Header con badge "Artículo", categoría, fecha, tiempo de lectura
- Imagen de portada 2:1 con bordes redondeados
- Grid 2 columnas: contenido + `TableOfContents` sticky sidebar
- Etiquetas (tags) + botones de compartir (Twitter, LinkedIn)
- Author bio con avatar + enlaces sociales

### 6.4 Categoría (`/categoria/[slug]`)

- Header con nombre + descripción de la categoría
- Lista vertical de posts con flecha decorativa
- Mensaje "No hay artículos" si está vacío

### 6.5 Tag (`/tag/[slug]`)

- Header con `#nombretag` + contador de artículos
- Lista vertical de posts con categoría visible y flecha decorativa

### 6.6 About (`/about`)

- Avatar con iniciales "FP" en gradiente
- Nombre + subtítulo + bio
- Grid 2 columnas de habilidades con nivel (Avanzado/Intermedio)
- Tarjetas de proyectos (Academy, Portfolio) con link externo
- Botones de contacto (GitHub, LinkedIn)

---

## 7. Flujo de Datos

### 7.1 Mock data (actual)

Actualmente todas las páginas usan **mock data** definida directamente en los
archivos de página. Los datos se organizan en arrays y records dentro de cada
página:

```
(page).tsx
├── posts[]           → Array de objetos post
├── categories[]      → Array de categorías
├── featuredTags[]    → Tags del hero
└── postsByTag/ByCategory  → Records para filtrado
```

### 7.2 Sanity CMS (futuro)

Cuando se configure Sanity:

1. Crear proyecto en sanity.io
2. Copiar `NEXT_PUBLIC_SANITY_PROJECT_ID` a `.env.local`
3. Usar `npm run sanity-dev` para abrir el Studio
4. Crear contenido (posts, categorías, tags, autor)
5. Las páginas usarán `src/lib/queries.ts` para fetch

### 7.3 GROQ Queries disponibles

| Función | Query | Uso |
|---|---|---|
| `getPosts()` | Todos los posts, ordenados por fecha descendente | Blog listing |
| `getPost(slug)` | Post individual por slug | Post detail |
| `getCategories()` | Todas las categorías | Filtros |
| `getTags()` | Todos los tags | Tags |
| `getPostsByCategory(slug)` | Posts filtrados por categoría | Página de categoría |
| `getPostsByTag(slug)` | Posts filtrados por tag | Página de tag |
| `getPostSlugs()` | Solo slugs para SSG | Static generation |

---

## 8. Sanity CMS (Studio)

### 8.1 Configuración

- `sanity.config.ts` — Define el proyecto en la raíz
- `sanity.cli.ts` — CLI config para comandos `sanity`
- Base path: `/admin`
- Plugins: `structureTool` + `codeInput`

### 8.2 Schemas

#### `post`
| Campo | Tipo | Validación |
|---|---|---|
| `title` | `string` | required |
| `slug` | `slug` (source: title) | required |
| `excerpt` | `text` (rows: 3) | — |
| `body` | `blockContent` | — |
| `coverImage` | `image` (hotspot) | — |
| `categories` | `array<reference category>` | — |
| `tags` | `array<reference tag>` | — |
| `author` | `reference author` | — |
| `publishedAt` | `datetime` | — |
| `readingTime` | `string` | — |
| `featured` | `boolean` (default: false) | — |

#### `category`
| Campo | Tipo | Validación |
|---|---|---|
| `title` | `string` | required |
| `slug` | `slug` (source: title) | required |
| `description` | `text` (rows: 2) | — |

#### `tag`
| Campo | Tipo | Validación |
|---|---|---|
| `name` | `string` | required |
| `slug` | `slug` (source: name) | required |

#### `author`
| Campo | Tipo |
|---|---|
| `name` | `string` (required) |
| `slug` | `slug` (source: name) |
| `image` | `image` |
| `bio` | `text` (rows: 3) |

#### `blockContent`
Tipo de bloque para el cuerpo del post. Soporta:
- **Estilos**: normal, h2, h3, h4, blockquote
- **Listas**: bullet, numbered
- **Decoradores**: strong, em, code
- **Anotaciones**: link (URL)
- **Tipos adicionales**: image (hotspot), code (syntax highlighting)

### 8.3 Comandos

```bash
npm run sanity-dev    # Inicia Sanity Studio en localhost:3333
npx sanity deploy     # Despliega Studio en sanity.studio
```

---

## 9. Convenciones y Patrones

### 9.1 Convenciones de código

- **Componentes**: `"use client"` cuando usan hooks o eventos del DOM
- **Páginas**: server components por defecto, solo mock data
- **Transiciones**: usar `cubic-bezier(0.22, 1, 0.36, 1)` siempre
- **Framer Motion**: `mode="popLayout"` (obligatorio en v12), NO `mode="wait"`
- **Clases condicionales**: usar `cn()` de `@/lib/utils`
- **Iconos**: siempre de `lucide-react`, importar por nombre
- **Imágenes**: external images con `<img>`, optimizadas con `next/image` si
  son propias
- **Tipado**: interfaz siempre exportada para props de componentes
- **Rutas**: usar `Link` de `next/link` para navegación interna

### 9.2 Patrones de componentes

- **Mouse tracking**: CSS custom properties para efecto glow que sigue al cursor
- **Lazy initialization**: `useState(getInitialTheme)` para leer localStorage
- **useMemo para derivación**: headings del TOC se derivan del contenido
- **IntersectionObserver**: scroll spy limpio con cleanup en useEffect
- **Event listeners**: siempre con `{ passive: true }` para scroll

### 9.3 Convenciones de nombres

- Archivos: `kebab-case.ts` / `kebab-case.tsx`
- Componentes: `PascalCase`
- Funciones: `camelCase`
- Constantes: `SCREAMING_SNAKE_CASE` o `camelCase`
- Tipos/Interfaces: `PascalCase` con sufijo descriptivo

---

## 10. Entorno de Desarrollo

### 10.1 Primeros pasos

```bash
git clone https://github.com/FARLEY-PIEDRAHITA-OROZCO/farchodev-blog.git
cd farchodev-blog
npm install
cp .env.example .env.local    # Configurar Sanity
npm run dev                    # http://localhost:3000
```

### 10.2 Variables de entorno

| Variable | Obligatoria | Descripción |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sí | ID del proyecto Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | No (default: "production") | Dataset de Sanity |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No (default: "2026-05-18") | Versión de API |

### 10.3 Scripts disponibles

```bash
npm run dev          # Next.js dev server (localhost:3000)
npm run build        # Production build + type-check
npm run start        # Production server
npm run lint         # ESLint check
npm run sanity-dev   # Sanity Studio (localhost:3333)
```

### 10.4 Stack de herramientas

- **Node.js**: v24.13.0
- **npm**: 11.6.2
- **Editor**: VS Code
- **Terminal**: PowerShell 5.1 (Windows)
- **Control de versiones**: Git + GitHub

---

## 11. Despliegue

### 11.1 Vercel (recomendado)

1. Importar repo `farchodev-blog` en Vercel
2. Framework preset: Next.js
3. Variables de entorno desde `.env.example`
4. Build command: `npm run build` (por defecto)
5. Output directory: `.next` (por defecto)

### 11.2 GitHub Pages (alternativa)

No recomendado porque Next.js App Router requiere un servidor Node.js para
rutas dinámicas (`/blog/[slug]`, `/categoria/[slug]`, `/tag/[slug]`).

---

## 12. Mock Data

### 12.1 Posts de ejemplo (6)

| Slug | Categoría | Tags |
|---|---|---|
| `construir-academia-online-nextjs-threejs` | Desarrollo Web | Next.js, Three.js, TypeScript, TailwindCSS |
| `automatizacion-qa-playwright-cicd` | QA Automation | Playwright, QA, CI/CD |
| `guia-hardening-linux` | Ciberseguridad | Linux, Hardening, Seguridad |
| `typescript-strict-seguro` | Desarrollo Web | TypeScript, JavaScript, Buenas prácticas |
| `docker-guia-practica-desarrolladores` | DevOps | Docker, DevOps, Contenedores |
| `writeup-hackthebox-easy` | Ciberseguridad | HackTheBox, CTF, Pentesting |

### 12.2 Categorías disponibles

| Nombre | Slug | Icono | Gradiente | Posts |
|---|---|---|---|---|
| Desarrollo Web | `desarrollo-web` | `Code` | cyan → blue | 12 |
| QA Automation | `qa-automation` | `Terminal` | green → emerald | 8 |
| Ciberseguridad | `ciberseguridad` | `Shield` | red → rose | 15 |
| DevOps | `devops` | `Server` | purple → violet | 5 |
| Carrera Tech | `carrera-tech` | `TrendingUp` | amber → orange | 6 |

---

## 13. Roadmap / Mejoras Pendientes

### 13.1 Inmediatas
- [ ] Configurar proyecto Sanity y conectar variables de entorno
- [ ] Desplegar en Vercel (producción + preview)

### 13.2 Corto plazo
- [ ] Migrar de mock data a Sanity CMS
- [ ] Implementar búsqueda con Cmd+K (modal)
- [ ] Syntax highlighting en code blocks (rehype/shiki)
- [ ] RSS feed (`/rss.xml`)
- [ ] Sitemap dinámico

### 13.3 Medio plazo
- [ ] Páginas estáticas con ISR (revalidate on content change)
- [ ] Newsletter / suscripción
- [ ] Post relacionados al final de cada artículo
- [ ] Imagen Open Graph por post
- [ ] Analytics (Vercel Analytics o Plausible)
- [ ] Comentarios (giscus o similar)

---

## 14. Build

```bash
# Build de producción + type-check
npm run build

# Lint
npm run lint

# Build exitoso: 0 errores, warnings solo de <img> (external images)
```

Rutas generadas en build:
```
┌ ○ /                    (estática)
├ ○ /_not-found          (estática)
├ ○ /about               (estática)
├ ○ /blog                (estática)
├ ƒ /blog/[slug]         (dinámica)
├ ƒ /categoria/[slug]    (dinámica)
└ ƒ /tag/[slug]          (dinámica)
```

`○` = prerendered as static content
`ƒ` = server-rendered on demand
