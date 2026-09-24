"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const stats = [
  ["Since 2002", "Focused on AIDC and Enterprise Mobility"],
  ["100+", "Countries and Regions Worldwide"],
  ["Top 3", "Global Rugged Handheld Vendor"],
  ["400+", "R&D Professionals"],
]

const categories = ["Mobile Computers", "Wearables", "Tablets", "RFID Devices", "Barcode Scanners", "Printers", "Smart Payment Terminals", "Smart Mobile Terminals"]
const categoryImages = ["/images/DT610.png", "/images/revised_images/1x/资源 2.png", "/images/upad.png", "/images/RFG91.png", "/images/SR5750.png", "/images/K388Pro.png", "/images/i9600.png", "/images/i9200（非金版）.png"]
const categoryDescriptions = [
  "Handheld and presentation scanners designed to capture 1D and 2D barcodes quickly and accurately in fast-paced environments.",
  "Hands-free wearable devices that keep workers connected while improving mobility, accuracy and productivity.",
  "Rugged tablets with larger displays for field service, inventory, dispatch and connected frontline workflows.",
  "RFID readers and solutions that help teams identify, track and manage high volumes of tagged items.",
  "Reliable barcode capture for retail counters, warehouses, production lines and logistics workflows.",
  "Mobile and desktop printing solutions for clear, dependable labels and receipts wherever work happens.",
  "Secure smart payment terminals supporting flexible checkout and connected customer experiences.",
  "All-in-one mobile terminals combining communication, payment and business applications.",
]

const workflow = [
  ["Capture", "Capture barcode, RFID, voice and frontline data.", "/images/workflow/data-capture.jpg"],
  ["Connect", "Connect people, devices and business systems.", "/images/workflow/data-connect.jpg"],
  ["Intelligence", "Transform operational data into actionable intelligence.", "/images/workflow/data-process.jpg"],
  ["Action", "Turn intelligence into decisions and action.", "/images/workflow/data-act.jpg"],
]

const industries = [
  ["Mobile Retail", "Retail Operations", "Bring together mobile computers, barcode scanners, RFID devices, payment terminals, printers and software to support connected retail operations.", "/images/design/retail.webp"],
  ["Logistics & Transportation", "Connected Logistics", "Connect teams, goods and information across warehouses, transportation networks and last-mile delivery.", "/images/design/watsons.webp"],
  ["Manufacturing", "Manufacturing Visibility", "Connect production teams with enterprise devices and data capture tools for greater visibility and control.", "/images/design/blog-factory.webp"],
  ["Hospitality", "Connected Hospitality", "Support frontline service teams with dependable mobile technology and secure payment tools.", "/images/design/miniso.webp"],
]

const stories = [
  ["Watsons China", "UROVO helps Watsons China distribute applications and manage mobile devices remotely.", "/images/design/watsons.webp"],
  ["Three Southern European Banks", "Payment terminals, SDK tools and device management support modern payment operations.", "/images/design/banks.webp"],
  ["MINISO", "Connected retail devices support faster checkout and accurate product information.", "/images/design/miniso.webp"],
]

const news = [
  ["MARKET VIEWS", "Connected Retail in 2026: Turning Frontline Data into Faster Decisions", "/images/design/news.webp"],
  ["CUSTOMER STORY", "From Shelf to Stockroom: Building a More Visible Retail Operation", "/images/design/retail.webp"],
  ["INDUSTRY INSIGHT", "Smarter Warehousing Starts with Reliable Data Capture", "/images/design/watsons.webp"],
]

export function Home1Page() {
  const [category, setCategory] = useState(0)
  const [workflowStep, setWorkflowStep] = useState(1)
  const [industry, setIndustry] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setWorkflowStep((current) => (current + 1) % workflow.length), 4200)
    return () => window.clearInterval(timer)
  }, [])

  return <>
    <section className="home1-hero">
      <div className="page-container home1-hero__inner">
        <div className="home1-hero__copy">
          <h1>Devices and Software for<br /><span>Frontline Operations</span></h1>
          <p>UROVO combines enterprise-grade devices and software to help teams capture data, connect workflows and keep operations moving.</p>
          <div className="home1-hero__points"><span>Powerful Performance</span><span>Flexible Connectivity</span><span>Enterprise Ready</span></div>
          <a href="#home1-products">Explore Solutions <ArrowRight /></a>
        </div>
        <div className="home1-hero__art" aria-hidden="true">
          <span className="home1-orbit home1-orbit--one" /><span className="home1-orbit home1-orbit--two" />
          <img src="/images/DT610.png" alt="" />
          <img src="/images/revised_images/1x/资源 2.png" alt="" />
        </div>
      </div>
    </section>

    <section className="home1-stats page-container" aria-label="UROVO at a glance">
      {stats.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
    </section>

    <section id="home1-products" className="home1-products">
      <div className="page-container home1-products__grid">
        <div className="home1-products__copy">
          <h2>UROVO Devices for Every<br />Frontline Task</h2>
          <p>Explore UROVO mobile computers, data capture devices, payment terminals and printers designed for the way frontline teams work.</p>
          <div className="home1-product-detail"><h3>{categories[category]}</h3><p>{categoryDescriptions[category]}</p><a href="/products/">Explore <ArrowRight /></a></div>
        </div>
        <div className="home1-products__art"><img src={categoryImages[category]} alt={categories[category]} /></div>
        <nav className="home1-products__nav" aria-label="Product categories">
          {categories.map((item, index) => <button key={item} className={index === category ? "is-active" : ""} onClick={() => setCategory(index)}>{item}</button>)}
        </nav>
      </div>
    </section>

    <section className="home1-workflow">
      <div className="page-container home1-section-heading"><h2>From Data Capture to Business Action</h2><p>UROVO devices, software and cloud services work together in one continuous operational loop.</p></div>
      <div className="home1-workflow__stage">
        {workflow.map(([title, description, image], index) => <button key={title} className={`home1-workflow__item${workflowStep === index ? " is-active" : ""}`} onClick={() => setWorkflowStep(index)}>
          <img src={image} alt="" /><span className="home1-workflow__shade" /><span className="home1-workflow__content"><b>{String(index + 1).padStart(2, "0")}</b><strong>{title}</strong><small>{description}</small></span>
        </button>)}
      </div>
    </section>

    <section className="home1-ecosystem"><div className="page-container"><h2>UROVO Technology Ecosystem</h2><div>{["StayLinked", "Springdel", "ivanti", "android", "EMVCo", "Qualcomm"].map((name) => <img key={name} src={`/images/${name === "android" ? "android.svg" : name === "ivanti" ? "ivanti.svg" : name === "EMVCo" ? "EMVCO.svg" : name + ".svg"}`} alt={name} />)}</div></div></section>

    <section className="home1-industries">
      <div className="page-container home1-section-heading"><h2>Industry Solutions</h2><p>From stores and warehouses to factories and field operations, UROVO connects frontline teams with reliable devices, data and workflows.</p></div>
      <div className="home1-industries__tabs">{industries.map(([tab], index) => <button key={tab} className={index === industry ? "is-active" : ""} onClick={() => setIndustry(index)}>{tab}</button>)}</div>
      <article className="page-container home1-industry-card"><img src={industries[industry][3]} alt="" /><div><h3>{industries[industry][1]}</h3><p>{industries[industry][2]}</p><a href="#contact">Explore <ArrowRight /></a></div></article>
    </section>

    <section className="home1-stories"><div className="page-container"><h2>Real Customer Stories</h2><div className="home1-stories__grid">{stories.map(([title, description, image]) => <article key={title}><img src={image} alt="" /><div><h3>{title}</h3><p>{description}</p><a href="#home1-news">Read Customer Story <ArrowRight /></a></div></article>)}</div></div></section>

    <section id="contact" className="home1-cta"><div className="page-container"><div><h2>Find the Right Technology for<br /><span>Your Operations</span></h2><p>With 24+ years in data acquisition, Seuic empowers global enterprises digital transformation with durable tools and AI technology.</p><a href="#footer">Contact us <ArrowRight /></a></div><img src="/images/products/mobile-cta-bg.png" alt="UROVO enterprise mobile technology" /></div></section>

    <section id="home1-news" className="home1-news page-container"><div className="home1-news__head"><h2>Insights &amp; News</h2><div><button aria-label="Previous"><ChevronLeft /></button><button aria-label="Next"><ChevronRight /></button></div></div><div className="home1-news__grid">{news.map(([tag, title, image]) => <article key={title}><img src={image} alt="" /><span>{tag}</span><time>2026.08.08</time><h3>{title}</h3></article>)}</div></section>
  </>
}
