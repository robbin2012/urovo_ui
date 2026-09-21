"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Mouse } from "lucide-react"

const stats = [
  { value: "Since 2002", label: "Focused on AIDC and Enterprise Mobility", icon: "q2" },
  { value: "100+", label: "Countries and Regions Worldwide", icon: "q3" },
  { value: "Top 3", label: "Global Rugged Handheld Vendor", icon: "q1" },
  { value: "400+", label: "R&D Professionals", icon: "q4" },
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
  const [activeStat, setActiveStat] = useState<string | null>(null)
  const [statAnimationCycle, setStatAnimationCycle] = useState(0)
  const [countdownCycle, setCountdownCycle] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const countdownRef = useRef<SVGCircleElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef(0)


  const changeSlide = (direction: number) => {
    setIsDragging(false)
    setDragOffset(0)
    setActiveSlide((current) => (current + direction + slides.length) % slides.length)
    setCountdownCycle((current) => current + 1)
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

const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) return
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
        className="hero-banner relative w-full cursor-default touch-pan-y select-none overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            aria-hidden={index !== activeSlide}
            draggable={false}
            className={`hero-background pointer-events-none absolute inset-0 h-full w-full object-cover${index === activeSlide ? " is-active" : ""}`}
          />
        ))}
        <div className="hero-shade absolute inset-0" />

        <div className="hero-content page-container">
          <h1 key={`title-${activeSlide}`} className="hero-copy-enter max-w-2xl text-balance text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
            Devices and Software for Frontline Operations
          </h1>
          <p key={`description-${activeSlide}`} className="hero-copy-enter hero-copy-enter--description mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80">
            UROVO combines enterprise-grade devices and software to help teams capture data, connect workflows and keep
            operations moving.
          </p>
          <div className="mt-8">
            <a
              href="#industries"
              className="cta-button hero-fill-button group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <a className="hero-scroll-cue" href="#products" aria-label="Scroll to explore our products">
          <Mouse size={26} strokeWidth={1.35} aria-hidden="true" />
          <span>SCROLL TO EXPLORE</span>
        </a>

        <div className="hero-pagination" role="group" aria-label="Banner slides">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              aria-label={`Show banner ${index + 1}`}
              aria-current={index === activeSlide}
              onClick={() => {
                setIsDragging(false)
                setDragOffset(0)
                setActiveSlide(index)
                setCountdownCycle((current) => current + 1)
              }}
              className={`hero-pagination__item${index === activeSlide ? " is-active" : ""}`}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {index === activeSlide && (
                <svg viewBox="0 0 48 48" className="hero-pagination__ring" fill="none" aria-hidden="true">
                  <circle cx="24" cy="24" r="22" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
                  <circle
                    ref={countdownRef}
                    cx="24"
                    cy="24"
                    r="22"
                    pathLength="100"
                    stroke="white"
                    strokeWidth="1.5"
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
            <div
              key={s.value}
              className={`hero-stat border-l border-border pl-5 first:border-l-0 first:pl-0 md:border-l md:first:border-l-0${activeStat === s.icon ? " is-animated" : ""}`}
              tabIndex={0}
              onMouseEnter={() => {
                setStatAnimationCycle((cycle) => cycle + 1)
                setActiveStat(s.icon)
              }}
              onMouseLeave={() => setActiveStat(null)}
              onFocus={() => {
                setStatAnimationCycle((cycle) => cycle + 1)
                setActiveStat(s.icon)
              }}
              onBlur={() => setActiveStat(null)}
            >
              <span className="hero-stat__icon" aria-hidden="true">
                <img className="hero-stat__icon-static" src={`/images/stats-icons/${s.icon}.svg`} alt="" />
                {activeStat === s.icon && <img key={`${s.icon}-${statAnimationCycle}`} className="hero-stat__icon-animated" src={`/images/stats-icons/${s.icon}-animated.svg?cycle=${statAnimationCycle}`} alt="" />}
              </span>
              <span className="hero-stat__copy">
                <span className="hero-stat__value text-2xl font-bold text-brand-navy">{s.value}</span>
                <span className="hero-stat__label mt-2 text-xs leading-snug text-muted-foreground">{s.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
