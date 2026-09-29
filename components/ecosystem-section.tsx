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

const classicPartners = [
  { name: "StayLinked", tag: "TERMINAL EMULATION", asset: 8 },
  { name: "Springdel", tag: "DEVICE MANAGEMENT", asset: 7 },
  { name: "ivanti", tag: "ENTERPRISE PLATFORM", asset: 6 },
  { name: "android", tag: "CERTIFICATION", asset: 5 },
  { name: "EMVCo", tag: "CERTIFICATION", asset: 4 },
  { name: "Qualcomm", tag: "TECHNOLOGY PLATFORM", asset: 3 },
]

function ClassicPartnerSet({ hidden = false }: { hidden?: boolean }) {
  return <div className="partner-set" aria-hidden={hidden}>
    {classicPartners.map((partner) => <div key={`${hidden ? "clone-" : ""}${partner.name}`} className="partner">
      <img src={`/images/revised_images/SVG/资源 ${partner.asset}.svg`} alt={hidden ? "" : partner.name} />
      <p>{partner.tag}</p>
    </div>)}
  </div>
}

function ClassicEcosystemSection({ white = false }: { white?: boolean }) {
  return <section id="partners" className={`ecosystem-section ecosystem-section--classic${white ? " ecosystem-section--classic-white" : ""}`}>
    <h2 data-reveal className="section-title page-container">UROVO Technology Ecosystem</h2>
    <div data-reveal data-reveal-delay="1" className="partner-marquee" aria-label="Technology ecosystem partners">
      <div className="partner-track">
        <ClassicPartnerSet />
        <ClassicPartnerSet hidden />
      </div>
    </div>
  </section>
}

function MonoPartnerSet({ hidden = false }: { hidden?: boolean }) {
  return <div className="ecosystem-mono-set" aria-hidden={hidden}>
    {partners.map((partner) => <div key={`${hidden ? "clone-" : ""}${partner.name}`} className="ecosystem-mono-logo">
      <img src={partner.image} alt={hidden ? "" : partner.name} />
    </div>)}
  </div>
}

function MonoEcosystemSection() {
  return <section id="partners" className="ecosystem-section ecosystem-section--mono">
    <div className="page-container">
      <h2 className="section-title">UROVO Technology Ecosystem</h2>
    </div>
    <div className="ecosystem-mono-marquee" aria-label="Technology ecosystem partners">
      <div className="ecosystem-mono-track">
        <MonoPartnerSet />
        <MonoPartnerSet hidden />
      </div>
    </div>
  </section>
}

function CompactEcosystemSection() {
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

export function EcosystemSection({ variant = "compact" }: { variant?: "classic" | "classic-white" | "compact" | "mono" }) {
  if (variant === "classic") return <ClassicEcosystemSection />
  if (variant === "classic-white") return <ClassicEcosystemSection white />
  if (variant === "mono") return <MonoEcosystemSection />
  return <CompactEcosystemSection />
}
