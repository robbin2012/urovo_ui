"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { prefix: "Since ", value: 2002, suffix: "", label: "Focused on AIDC and Enterprise Mobility" },
  { prefix: "", value: 100, suffix: "+", label: "Countries and Regions Worldwide" },
  { prefix: "Top ", value: 3, suffix: "", label: "Global Rugged Handheld Vendor" },
  { prefix: "", value: 400, suffix: "+", label: "R&D Professionals" },
]

export function Home3Stats() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [values, setValues] = useState(stats.map(() => 0))

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setStarted(true)
      observer.disconnect()
    }, { threshold: .35 })
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1550
    const start = performance.now()
    let frame = 0
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setValues(stats.map((stat) => Math.round(stat.value * eased)))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started])

  return (
    <section className="home3-stats" aria-label="UROVO company statistics">
      <div ref={rootRef} className={`home3-stats__grid page-container${started ? " is-visible" : ""}`}>
        {stats.map((stat, index) => (
          <div className="home3-stat" key={stat.label} style={{ "--stat-delay": `${index * 90}ms` } as React.CSSProperties}>
            <strong><span>{stat.prefix}</span><b>{values[index]}</b><em>{stat.suffix}</em></strong>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
