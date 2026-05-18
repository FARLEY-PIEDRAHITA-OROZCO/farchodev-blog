"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState<string>("")
  const observerRef = useRef<IntersectionObserver | null>(null)

  const headings: TOCItem[] = useMemo(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const elements = doc.querySelectorAll("h2, h3")
    const items: TOCItem[] = []

    elements.forEach((el, i) => {
      const id = `heading-${i}`
      el.id = id
      items.push({
        id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      })
    })

    return items
  }, [content])

  useEffect(() => {
    if (headings.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    )

    for (const item of headings) {
      const el = document.getElementById(item.id)
      if (el) observerRef.current.observe(el)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="space-y-1" aria-label="Table of contents">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        En este artículo
      </p>
      {headings.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault()
            const el = document.getElementById(item.id)
            if (el) {
              el.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className={cn(
            "block text-sm transition-colors py-1 border-l-2 pl-3",
            item.level === 3 ? "pl-6" : "",
            activeId === item.id
              ? "text-cyan-400 border-cyan-400"
              : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground"
          )}
        >
          {item.text}
        </a>
      ))}
    </nav>
  )
}
