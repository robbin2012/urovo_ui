"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const products = [
  { title: "Mobile Computers", image: "DT610.png", description: "Rugged handheld computers that connect frontline teams with reliable data capture, real-time workflows and business applications." },
  { title: "Wearables", image: "SR5750.png", description: "Hands-free wearable devices that keep workers connected while improving mobility, accuracy and productivity across daily tasks." },
  { title: "Tablets", image: "upad.png", description: "Rugged tablets with larger displays for field service, inventory, dispatch and other workflows that need more information at a glance." },
  { title: "RFID Devices", image: "RFG91.png", description: "RFID readers and solutions that help teams identify, track and manage high volumes of tagged items with speed and confidence." },
  { title: "Barcode Scanners", image: "K180.png", description: "Handheld and presentation scanners designed to capture 1D and 2D barcodes quickly and accurately in fast-paced environments." },
  { title: "Printers", image: "K388Pro.png", description: "Mobile and desktop printing solutions that produce clear, dependable labels and receipts wherever frontline work takes place." },
  { title: "Smart Payment Terminals", image: "i9600.png", description: "Secure smart payment terminals that support flexible checkout, payment acceptance and connected customer experiences." },
  { title: "Smart Mobile Terminals", image: "i9200（非金版）.png", description: "All-in-one mobile terminals that combine communication, payment and business applications in a single connected device." },
]

export function Home3Products() {
  const [active, setActive] = useState(0)
  const product = products[active]

  return (
    <section id="products" className="home3-products">
      <div className="home3-products__layout page-container">
        <header className="home3-products__header">
          <h2>UROVO Devices for<br /><span>Every Frontline Task</span></h2>
        </header>

        <div className="home3-products__details" key={`copy-${product.title}`}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <a className="projects-arrow-button" href="#contact"><span>Explore</span><ArrowRight className="projects-arrow" aria-hidden="true" /></a>
        </div>

        <div className="home3-products__art" aria-live="polite">
          {products.map((item, index) => <img
            key={item.title}
            src={`/images/${item.image}`}
            alt={index === active ? item.title : ""}
            className={index === active ? "is-active" : ""}
            aria-hidden={index !== active}
          />)}
        </div>

        <nav className="home3-products__tabs" aria-label="Product categories">
          {products.map((item, index) => <button
            type="button"
            key={item.title}
            className={index === active ? "is-active" : ""}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >{item.title}</button>)}
        </nav>
      </div>
    </section>
  )
}
