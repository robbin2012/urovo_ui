"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const industries = [
  ["Mobile Retail", "Retail Operations", "Bring together mobile computers, barcode scanners, RFID devices, payment terminals, printers and software to support connected retail operations. From inventory and fulfillment to customer service and checkout, UROVO helps teams capture accurate information, respond faster and keep work moving across stores and distribution environments.", "/images/retail.png"],
  ["Logistics & Transportation", "Connected Logistics", "Connect teams, goods and information across warehouses, transportation networks and last-mile delivery with rugged devices, reliable data capture and mobile printing.", "/images/design/watsons.webp"],
  ["Manufacturing", "Manufacturing Visibility", "Connect production teams with enterprise devices and data capture tools for greater visibility, accuracy and control across manufacturing operations.", "/images/design/blog-factory.webp"],
  ["Hospitality", "Connected Hospitality", "Support frontline service teams with connected mobile technology and secure payment tools that keep guest experiences moving.", "/images/design/miniso.webp"],
  ["Utilities", "Field Operations", "Keep field operations connected with rugged mobile computers and reliable access to work orders, asset information and operational data.", "/images/hero-manufacturing.jpg"],
  ["Financial Technology", "Connected Finance", "Bring secure payment technology and mobile devices to customer-facing financial operations and modern transaction workflows.", "/images/design/banks.webp"],
] as const

export function Home3IndustrySolutions() {
  const [active, setActive] = useState(0)
  const item = industries[active]
  return <section className="home3-industry-solutions" id="industries">
    <div className="page-container home3-industry-solutions__head"><h2>Industry Solutions</h2><p>From stores and warehouses to factories and field operations, UROVO combines enterprise devices, data capture technologies and software to help frontline teams work with greater speed, accuracy and visibility.</p></div>
    <div className="home3-industry-solutions__tabs">{industries.map(([tab], index) => <button key={tab} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}>{tab}</button>)}</div>
    <article className="page-container home3-industry-solutions__card" key={item[0]}><div className="home3-industry-solutions__image"><img src={item[3]} alt={item[1]} /></div><div className="home3-industry-solutions__copy"><h3>{item[1]}</h3><p>{item[2]}</p><a href="#contact">Explore <ArrowRight /></a></div></article>
  </section>
}
