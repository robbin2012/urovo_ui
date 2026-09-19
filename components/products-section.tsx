"use client"

import { useRef, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const tabs = ["Mobile Computers", "Tablets", "Wearables", "RFID Devices", "Barcode Scanners", "Printers", "Smart Payment Terminals", "Smart Mobile Terminals"]
const products = [
  { title: "Barcode Scanners", image: "资源 9.png", description: "Handheld and presentation scanners designed to capture 1D and 2D barcodes quickly and accurately in fast-paced environments." },
  { title: "Mobile Computers", image: "资源 1.png", description: "Enterprise mobile computers that bring reliable data capture and connected workflows to your frontline teams." },
  { title: "Tablets", image: "资源 10.png", description: "Rugged tablets that keep teams connected to the information they need in demanding working environments." },
]

export function ProductsSection() {
  const [active, setActive] = useState(products[0].title)
  const [index, setIndex] = useState(0)
  const [draggingTabs, setDraggingTabs] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ pointerId: -1, startX: 0, scrollLeft: 0, moved: false })
  const changeProduct = (direction: number) => {
    const next = (index + direction + products.length) % products.length
    setIndex(next)
    setActive(products[next].title)
  }
  return (
    <section id="products" className="products-section">
      <div className="page-container">
        <h2 data-reveal className="section-title">UROVO Devices for Every Frontline Task</h2>
        <div
          data-reveal
          data-reveal-delay="1"
          ref={tabsRef}
          className={`pill-tabs${draggingTabs ? " is-dragging" : ""}`}
          aria-label="Product categories"
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse" || event.button !== 0) return
            const tabsElement = tabsRef.current
            if (!tabsElement) return
            dragRef.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: tabsElement.scrollLeft, moved: false }
          }}
          onPointerMove={(event) => {
            const tabsElement = tabsRef.current
            const drag = dragRef.current
            if (!tabsElement || drag.pointerId !== event.pointerId) return
            const distance = event.clientX - drag.startX
            if (!drag.moved && Math.abs(distance) > 4) {
              drag.moved = true
              tabsElement.setPointerCapture(event.pointerId)
              setDraggingTabs(true)
            }
            if (!drag.moved) return
            tabsElement.scrollLeft = drag.scrollLeft - distance
          }}
          onPointerUp={(event) => {
            if (dragRef.current.pointerId !== event.pointerId) return
            if (tabsRef.current?.hasPointerCapture(event.pointerId)) tabsRef.current.releasePointerCapture(event.pointerId)
            dragRef.current.pointerId = -1
            setDraggingTabs(false)
          }}
          onPointerCancel={() => {
            dragRef.current.pointerId = -1
            setDraggingTabs(false)
          }}
          onClickCapture={(event) => {
            if (!dragRef.current.moved) return
            event.preventDefault()
            event.stopPropagation()
            dragRef.current.moved = false
          }}
        >
          {tabs.map((tab) => <button key={tab} aria-pressed={active === tab} className={active === tab ? "active" : ""} onClick={() => {
            setActive(tab)
            const next = products.findIndex((item) => item.title === tab)
            if (next >= 0) setIndex(next)
          }}>{tab}</button>)}
        </div>
        <div data-reveal data-reveal-delay="2" className="product-feature">
          <div className="product-copy">
            <div className="product-details">
              {products.map((product, productIndex) => <div
                key={product.title}
                className={`product-detail${index === productIndex ? " is-active" : ""}`}
                aria-hidden={index !== productIndex || undefined}
                inert={index !== productIndex}
              >
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href="#contact" className="product-link">Explore {product.title}<span className="arrow-badge"><ArrowRight /></span></a>
              </div>)}
            </div>
            <div className="product-controls">
              <button aria-label="Previous product" onClick={() => changeProduct(-1)}><ChevronLeft /></button>
              <button aria-label="Next product" onClick={() => changeProduct(1)}><ChevronRight /></button>
            </div>
          </div>
          <div className="product-art">
            <img className="product-mark" src="/images/revised_images/SVG/logo背景.svg" alt="" />
            {products.map((product, productIndex) => <img
              key={product.title}
              className={`product-image${index === productIndex ? " is-active" : ""}`}
              src={`/images/revised_images/1x/${product.image}`}
              alt={product.title}
              aria-hidden={index !== productIndex || undefined}
            />)}
          </div>
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{products[index].title}</p>
      </div>
    </section>
  )
}
