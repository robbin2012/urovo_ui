"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUp, Settings2, X } from "lucide-react"

const homeLinks = [
  { label: "Home 1", href: "/" },
  { label: "Home 2", href: "/home2" },
  { label: "Home 3", href: "/home3" },
  { label: "Home 4", href: "/home4" },
  { label: "Home 5", href: "/home5" },
  { label: "Home 6", href: "/home6" },
  { label: "Home 7", href: "/home7" },
]

export function BackToTop() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const toolsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return

    function closeOnOutsideClick(event: PointerEvent) {
      if (!toolsRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("pointerdown", closeOnOutsideClick)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [isOpen])

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })
  }

  return (
    <div ref={toolsRef} className="page-tools">
      <nav id="home-switcher" className={`page-tools__menu${isOpen ? " is-open" : ""}`} aria-label="Switch homepage" aria-hidden={!isOpen}>
        <span className="page-tools__menu-title">Homepage</span>
        <div className="page-tools__links">
          {homeLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link key={link.href} href={link.href} className={isActive ? "is-active" : ""} aria-current={isActive ? "page" : undefined} tabIndex={isOpen ? 0 : -1}>
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
      <button className={`page-tools__toggle${isOpen ? " is-open" : ""}`} type="button" aria-label={isOpen ? "Close homepage switcher" : "Open homepage switcher"} aria-expanded={isOpen} aria-controls="home-switcher" onClick={() => setIsOpen((value) => !value)}>
        {isOpen ? <X aria-hidden="true" /> : <Settings2 aria-hidden="true" />}
      </button>
      <button className="back-to-top" type="button" aria-label="Back to top" onClick={scrollToTop}>
        <span className="back-to-top__arrow" aria-hidden="true">
          <ArrowUp size={22} strokeWidth={1.5} />
        </span>
        <span className="back-to-top__label" aria-hidden="true">TOP</span>
      </button>
    </div>
  )
}
