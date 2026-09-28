"use client"

import { useEffect, useState } from "react"

const partners = [
  { name: "StayLinked", image: "/images/home3-ecosystem/staylinked.svg" },
  { name: "Springdel", image: "/images/home3-ecosystem/springdel.svg" },
  { name: "Ivanti", image: "/images/home3-ecosystem/ivanti.svg" },
  { name: "Android", image: "/images/home3-ecosystem/android.svg" },
  { name: "EMVCo", image: "/images/home3-ecosystem/emvco.svg" },
  { name: "Qualcomm", image: "/images/home3-ecosystem/qualcomm.svg" },
]

export function EcosystemSection() {
  const [offset, setOffset] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const interval = window.setInterval(() => setOffset((value) => value + 1), 2800)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (offset !== partners.length) return
    const timeout = window.setTimeout(() => {
      setAnimate(false)
      setOffset(0)
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => setAnimate(true)))
    }, 560)
    return () => window.clearTimeout(timeout)
  }, [offset])

  return <section id="partners" className="ecosystem-section">
    <div className="page-container">
      <h2 data-reveal className="section-title">UROVO Technology Ecosystem</h2>
      <div data-reveal data-reveal-delay="1" className="ecosystem-logos" aria-label="Technology ecosystem partners">
        <div className={`ecosystem-logo-track${animate ? " is-animated" : ""}`} style={{ transform: `translateX(-${offset * (100 / 12)}%)` }}>
          {[...partners, ...partners].map((partner, index) => <div key={`${partner.name}-${index}`} className="ecosystem-logo" aria-hidden={index >= partners.length}>
            <img src={partner.image} alt={index < partners.length ? partner.name : ""} />
          </div>)}
        </div>
      </div>
    </div>
  </section>
}
