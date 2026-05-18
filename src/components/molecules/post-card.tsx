"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface PostCardProps {
  title: string
  excerpt: string
  slug: string
  category: string
  categorySlug: string
  readTime: string
  date: string
  image: string
  featured?: boolean
}

export function PostCard({
  title,
  excerpt,
  slug,
  category,
  categorySlug,
  readTime,
  date,
  image,
  featured,
}: PostCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article
        className={cn(
          "glow-card rounded-xl border overflow-hidden transition-all duration-500",
          featured
            ? "border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
            : "border-white/5 bg-card hover:border-primary/20"
        )}
        style={
          {
            "--x": `${mousePos.x}%`,
            "--y": `${mousePos.y}%`,
          } as React.CSSProperties
        }
        onMouseMove={handleMouseMove}
      >
        <div
          className={cn(
            "overflow-hidden",
            featured ? "aspect-[16/9] md:aspect-auto" : "aspect-[16/9]"
          )}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            loading="lazy"
          />
        </div>
        <div className={cn("space-y-3", featured ? "p-8 md:p-12" : "p-5")}>
          <div className="flex items-center justify-between">
            <Link
              href={`/categoria/${categorySlug}`}
              className="inline-flex text-xs font-medium text-cyan-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {category}
            </Link>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>
          <h3
            className={cn(
              "font-bold leading-snug group-hover:text-cyan-400 transition-colors",
              featured ? "text-2xl md:text-3xl" : "text-lg"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-muted-foreground leading-relaxed",
              featured ? "text-base" : "text-sm line-clamp-2"
            )}
          >
            {excerpt}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">{date}</span>
            <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              Leer <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
