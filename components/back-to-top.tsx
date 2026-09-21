"use client"

import { ArrowUp } from "lucide-react"

export function BackToTop() {
  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })
  }

  return (
    <button className="back-to-top" type="button" aria-label="Back to top" onClick={scrollToTop}>
      <span className="back-to-top__arrow" aria-hidden="true">
        <ArrowUp size={22} strokeWidth={1.5} />
      </span>
      <span className="back-to-top__label" aria-hidden="true">TOP</span>
    </button>
  )
}
