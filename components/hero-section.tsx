"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "Since 2002", label: "Focused on AIDC and Enterprise Mobility" },
  { value: "100+", label: "Countries and Regions Worldwide" },
  { value: "Top 3", label: "Global Rugged Handheld Vendor" },
  { value: "400+", label: "R&D Professionals" },
]

const slides = [
  {
    image: "/images/design/hero.webp",
    alt: "Warehouse worker in a hi-vis vest scanning boxes with a rugged handheld device",
  },
  {
    image: "/images/hero-tablet.jpg",
    alt: "Frontline operator reviewing data on a tablet",
  },
  {
    image: "/images/hero-manufacturing.jpg",
    alt: "Precision manufacturing equipment in operation",
  },
]

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [countdownCycle, setCountdownCycle] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const countdownRef = useRef<SVGCircleElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef(0)
  const slideTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const changeSlide = (direction: number) => {
    const bannerWidth = bannerRef.current?.offsetWidth ?? window.innerWidth
    setIsDragging(false)
    setDragOffset(direction > 0 ? -bannerWidth : bannerWidth)
    slideTimeoutRef.current = setTimeout(() => {
      setActiveSlide((current) => (current + direction + slides.length) % slides.length)
      setDragOffset(0)
      setCountdownCycle((current) => current + 1)
    }, 350)
  }

  useEffect(() => {
    const circle = countdownRef.current
    if (!circle || isDragging || dragOffset !== 0) return

    const countdown = circle.animate(
      [{ strokeDashoffset: "100" }, { strokeDashoffset: "0" }],
      { duration: 5500, easing: "linear", fill: "forwards" },
    )

    countdown.onfinish = () => {
      changeSlide(1)
    }

    return () => countdown.cancel()
  }, [activeSlide, countdownCycle, dragOffset, isDragging])

  useEffect(() => () => {
    if (slideTimeoutRef.current) clearTimeout(slideTimeoutRef.current)
  }, [])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) return
    if (slideTimeoutRef.current) clearTimeout(slideTimeoutRef.current)
    dragStartRef.current = event.clientX
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    setDragOffset(event.clientX - dragStartRef.current)
  }

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    const threshold = Math.min((bannerRef.current?.offsetWidth ?? 600) * 0.12, 100)

    if (Math.abs(dragOffset) >= threshold) {
      changeSlide(dragOffset < 0 ? 1 : -1)
    } else {
      setIsDragging(false)
      setDragOffset(0)
      setCountdownCycle((current) => current + 1)
    }
  }

  return (
    <section id="top" className="hero-section">
      <div
        ref={bannerRef}
        className={`hero-banner relative w-full touch-pan-y select-none overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        {[-1, 0, 1].map((position) => {
          const index = (activeSlide + position + slides.length) % slides.length
          const slide = slides[index]
          return (
          <img
            key={`${position}-${slide.image}`}
            src={slide.image}
            alt={slide.alt}
            aria-hidden={position !== 0}
            draggable={false}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${isDragging ? "" : "transition-transform duration-[350ms] ease-out"}`}
            style={{ transform: `translate3d(calc(${position * 100}% + ${dragOffset}px), 0, 0)` }}
          />
          )
        })}
        <div className="hero-shade absolute inset-0" />

        <div className="hero-content page-container">
          <h1 data-reveal className="max-w-2xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Devices and Software for Frontline Operations
          </h1>
          <p data-reveal data-reveal-delay="1" className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80">
            UROVO combines enterprise-grade devices and software to help teams capture data, connect workflows and keep
            operations moving.
          </p>
          <div data-reveal data-reveal-delay="2" className="mt-8">
            <a
              href="#industries"
              className="cta-button hero-fill-button group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-4 sm:right-10 lg:right-16" aria-label="Banner slides">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              aria-label={`Show banner ${index + 1}`}
              aria-current={index === activeSlide}
              onClick={() => {
                setActiveSlide(index)
                setCountdownCycle((current) => current + 1)
              }}
              className={`rounded-full transition-all duration-300 hover:scale-125 ${index === activeSlide ? "h-2.5 w-2.5 bg-transparent" : "h-1.5 w-1.5 bg-white/85 hover:bg-white"}`}
            >
              {index === activeSlide && (
                <svg viewBox="0 0 16 16" className="h-full w-full -rotate-90" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="white" strokeOpacity="0.3" strokeWidth="1.25" />
                  <circle
                    ref={countdownRef}
                    cx="8"
                    cy="8"
                    r="6.5"
                    pathLength="100"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      <div data-reveal data-reveal-delay="3" className="hero-stats page-container">
        <div className="grid grid-cols-2 gap-6 rounded-xl bg-white px-8 py-8 shadow-xl md:grid-cols-4 md:gap-4 md:px-10">
          {stats.map((s) => (
            <div key={s.value} className="border-l border-border pl-5 first:border-l-0 first:pl-0 md:border-l md:first:border-l-0">
              <div className="text-2xl font-bold text-brand-navy">{s.value}</div>
              <div className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
