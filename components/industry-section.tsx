"use client"

import { useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { ArrowLeft, ArrowRight } from "lucide-react"

const cards = [
  { tab: "Retail", title: "Retail Operations", body: "Bring together mobile computers, barcode scanners, RFID devices, payment terminals, printers and software to support connected retail operations. From inventory and fulfillment to customer service and checkout, UROVO helps teams capture accurate information, respond faster and keep work moving across stores and distribution environments.", image: "design/retail.webp" },
  { tab: "Logistics & Transportation", title: "Logistics & Transportation", body: "Connect teams, goods and information across warehouses, transportation networks and last-mile delivery. Rugged mobile computers, barcode and RFID capture, mobile printing and device software help improve visibility, reduce manual errors and support reliable execution from receiving through final delivery.", image: "design/watsons.webp" },
  { tab: "Manufacturing", title: "Manufacturing", body: "Connect production teams with enterprise devices and data capture tools for greater visibility across manufacturing operations.", image: "design/blog-factory.webp" },
  { tab: "Hospitality", title: "Hospitality", body: "Support frontline service teams with connected mobile devices and reliable payment and data capture tools.", image: "design/retail.webp" },
  { tab: "Utilities", title: "Utilities", body: "Keep field operations connected with rugged mobile computers and reliable access to operational information.", image: "hero-manufacturing.jpg" },
  { tab: "Financial Technology", title: "Financial Technology", body: "Bring connected payment technology and mobile devices to customer-facing financial operations.", image: "design/miniso.webp" },
]

export function IndustrySection() {
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const [viewportRef, carousel] = useEmblaCarousel({
    align: "center",
    loop: true,
    duration: 28,
    skipSnaps: false,
    breakpoints: {
      "(prefers-reduced-motion: reduce)": { duration: 0 },
    },
  }, [WheelGesturesPlugin({ forceWheelAxis: "x" })])

  useEffect(() => {
    if (!carousel) return
    const select = () => setActive(carousel.selectedScrollSnap())
    const grab = () => setDragging(true)
    const release = () => {
      setDragging(false)
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        carousel.scrollTo(carousel.selectedScrollSnap(), true)
      }
    }
    select()
    carousel.on("select", select).on("reInit", select).on("pointerDown", grab).on("pointerUp", release)
    return () => {
      carousel.off("select", select).off("reInit", select).off("pointerDown", grab).off("pointerUp", release)
    }
  }, [carousel])

  useEffect(() => {
    const tabs = tabsRef.current
    const tab = tabs?.children[active] as HTMLElement | undefined
    if (!tabs || !tab) return
    const bounds = tabs.getBoundingClientRect()
    const item = tab.getBoundingClientRect()
    if (item.left < bounds.left || item.right > bounds.right) {
      tabs.scrollTo({ left: tabs.scrollLeft + item.left - bounds.left - (tabs.clientWidth - item.width) / 2, behavior: "instant" })
    }
  }, [active])

  return <section id="industries" className="industry-section">
    <div className="page-container">
      <h2 data-reveal className="section-title">Industry Solutions</h2>
      <p data-reveal data-reveal-delay="1" className="section-description">From stores and warehouses to factories and field operations, UROVO combines enterprise devices, data capture technologies and software to help frontline teams work with greater speed, accuracy and visibility.</p>
      <div data-reveal data-reveal-delay="2" ref={tabsRef} className="pill-tabs" aria-label="Industries">{cards.map((card, index) => <button type="button" key={card.tab} onClick={() => carousel?.scrollTo(index)} aria-pressed={active === index} className={active === index ? "active" : ""}>{card.tab}</button>)}</div>
    </div>
    <div
      ref={viewportRef}
      className={`industry-viewport${dragging ? " is-dragging" : ""}`}
      data-reveal
      data-reveal-delay="3"
      role="region"
      aria-roledescription="carousel"
      aria-label="Industry solutions"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault()
          if (event.key === "ArrowRight") carousel?.scrollNext()
          else carousel?.scrollPrev()
        }
      }}
    >
      <div className="industry-track">
        {cards.map((card, index) => <div className="industry-slide" key={card.tab}>
          <article className="industry-card" aria-hidden={active !== index || undefined}>
            <div className="industry-copy"><h3>{card.title}</h3><p>{card.body}</p><a href="#contact" tabIndex={active === index ? 0 : -1}>Explore Industry <span className="arrow-badge"><ArrowRight aria-hidden="true" /></span></a></div>
            <div className="industry-image image-zoom-frame"><img src={`/images/${card.image}`} alt={card.title} draggable={false} /></div>
          </article>
        </div>)}
      </div>
    </div>
    <div className="industry-controls page-container">
      <button type="button" aria-label="Previous industry" onClick={() => carousel?.scrollPrev()}><ArrowLeft aria-hidden="true" /></button>
      <button type="button" aria-label="Next industry" onClick={() => carousel?.scrollNext()}><ArrowRight aria-hidden="true" /></button>
    </div>
    <p className="sr-only" aria-live="polite" aria-atomic="true">{cards[active].title}, {active + 1} of {cards.length}</p>
  </section>
}
