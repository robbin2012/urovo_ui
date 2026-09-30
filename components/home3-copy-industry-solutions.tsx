"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const industries = [
  ["Retail", "Retail Operations", "Bring together mobile computers, barcode scanners, RFID devices, payment terminals, printers and software to support connected retail operations. From inventory and fulfillment to customer service and checkout, UROVO helps teams capture accurate information, respond faster and keep work moving.", "/images/design/retail.webp"],
  ["Logistics & Transportation", "Connected Logistics", "Connect teams, goods and information across warehouses, transportation networks and last-mile delivery with rugged devices, reliable data capture and mobile printing.", "/images/design/watsons.webp"],
  ["Manufacturing", "Manufacturing Visibility", "Connect production teams with enterprise devices and data capture tools for greater visibility, accuracy and control across manufacturing operations.", "/images/design/blog-factory.webp"],
  ["Utilities", "Field Operations", "Keep field operations connected with rugged mobile computers and reliable access to work orders, asset information and operational data.", "/images/hero-manufacturing.jpg"],
  ["Healthcare", "Connected Healthcare", "Give care teams reliable mobile access to patient information, identification and clinical workflows.", "/images/design/blog-rfid.webp"],
  ["Financial Technology", "Connected Finance", "Bring secure payment technology and mobile devices to customer-facing financial operations and modern transaction workflows.", "/images/design/banks.webp"],
] as const

export function Home3CopyIndustrySolutions() {
  const [active, setActive] = useState(0)
  const item = industries[active]

  return (
    <section id="industries" className="home3-industry-stage">
      <div className="home3-industry-stage__backgrounds" aria-hidden="true">
        {industries.map((industry, index) => <img key={industry[0]} src={industry[3]} alt="" className={active === index ? "is-active" : ""} />)}
      </div>
      <div className="home3-industry-stage__shade" aria-hidden="true" />
      <div className="page-container home3-industry-stage__inner">
        <header className="home3-industry-stage__header">
          <h2>Industry Solutions</h2>
        </header>
        <div className="home3-industry-stage__rule" aria-hidden="true" />
        <div className="home3-industry-stage__content" key={item[0]}>
          <h3>{item[1]}</h3>
          <p>{item[2]}</p>
          <a className="cta-button hero-fill-button" href="#contact"><span>Explore Industry</span><ArrowRight aria-hidden="true" /></a>
        </div>
        <nav className="home3-industry-stage__tabs" aria-label="Industry solutions">
          {industries.map(([label], index) => <button type="button" key={label} className={active === index ? "is-active" : ""} aria-pressed={active === index} onPointerEnter={(event) => { if (event.pointerType === "mouse" || event.pointerType === "pen") setActive(index) }} onClick={() => setActive(index)}><span>{label}</span></button>)}
        </nav>
      </div>
    </section>
  )
}
