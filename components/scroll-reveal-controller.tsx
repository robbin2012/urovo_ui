"use client"

import { useEffect } from "react"

export function ScrollRevealController() {
  useEffect(() => {
    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))

    root.classList.add("reveal-enabled")

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-revealed")
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" })

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      root.classList.remove("reveal-enabled")
    }
  }, [])

  return null
}
