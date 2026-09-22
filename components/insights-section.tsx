"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    category: "Market Views",
    title: "Connected Retail in 2026: Turning Frontline Data into Faster Decisions",
    description: "Explore how connected devices, real-time inventory data and intelligent workflows are helping retailers respond faster across stores, warehouses and fulfillment operations.",
    date: "2026.08.08",
    dateTime: "2026-08-08",
    image: "/images/design/news.webp",
    imageAlt: "Modern architecture representing connected retail innovation",
  },
  {
    id: 2,
    category: "Customer Story",
    title: "From Shelf to Stockroom: Building a More Visible Retail Operation",
    description: "A connected retail workflow gives frontline teams a clearer view of stock, replenishment and customer demand while reducing manual checks and avoidable delays.",
    date: "2026.07.24",
    dateTime: "2026-07-24",
    image: "/images/design/retail.webp",
    imageAlt: "Retail team using connected UROVO devices in a store",
  },
  {
    id: 3,
    category: "Industry Insight",
    title: "Smarter Warehousing Starts with Reliable Data Capture",
    description: "Mobile computers, barcode scanning and RFID bring greater accuracy to receiving, picking and dispatch, helping warehouse teams keep goods and information moving together.",
    date: "2026.07.10",
    dateTime: "2026-07-10",
    image: "/images/design/watsons.webp",
    imageAlt: "Frontline worker handling inventory with a mobile device",
  },
  {
    id: 4,
    category: "Technology Insight",
    title: "How RFID and Edge AI Are Reshaping Frontline Work",
    description: "Combining fast item identification with on-device intelligence can reduce repetitive work, surface useful signals sooner and support more responsive daily operations.",
    date: "2026.06.26",
    dateTime: "2026-06-26",
    image: "/images/design/blog-rfid.webp",
    imageAlt: "Operator using RFID and mobile technology on the frontline",
  },
]

const blogs = ["blog-rfid", "blog-factory"]

export function InsightsSection() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(1)
  const activeNews = newsItems[activeNewsIndex]
  const showPreviousNews = () => setActiveNewsIndex((current) => (current - 1 + newsItems.length) % newsItems.length)
  const showNextNews = () => setActiveNewsIndex((current) => (current + 1) % newsItems.length)

  return <section id="insights" className="insights-section page-container">
    <div data-reveal className="insights-heading"><h2 className="section-title">Insights &amp; News</h2><a href="#news-list">View All <span className="arrow-badge"><ArrowRight className="arrow-current" /><ArrowRight className="arrow-incoming" /></span></a></div>
    <div data-reveal data-reveal-delay="1" className="featured-news">
      <div key={`image-${activeNews.id}`} className="featured-news-image image-zoom-frame"><img src={activeNews.image} alt={activeNews.imageAlt} /></div>
      <div key={`copy-${activeNews.id}`} className="news-copy">
        <span className="news-category">{activeNews.category}</span>
        <h3><a href="#news-list">{activeNews.title}</a></h3>
        <p>{activeNews.description}</p>
        <time dateTime={activeNews.dateTime}>{activeNews.date}</time>
        <div className="news-controls">
          <button type="button" aria-label="Previous news" onClick={showPreviousNews}>
            <span className="product-control-arrow product-control-arrow--previous" aria-hidden="true"><ArrowRight className="product-control-arrow__current" /><ArrowRight className="product-control-arrow__incoming" /></span>
          </button>
          <span aria-live="polite">{String(activeNewsIndex + 1).padStart(2, "0")}/{String(newsItems.length).padStart(2, "0")}</span>
          <button type="button" aria-label="Next news" onClick={showNextNews}>
            <span className="product-control-arrow" aria-hidden="true"><ArrowRight className="product-control-arrow__current" /><ArrowRight className="product-control-arrow__incoming" /></span>
          </button>
        </div>
      </div>
    </div>
    <div data-reveal data-reveal-delay="2" id="news-list" className="blog-grid">{blogs.map((image) => <article key={image}><div className="blog-image image-zoom-frame"><img src={`/images/design/${image}.webp`} alt={image === "blog-rfid" ? "Operator using a handheld device on the factory floor" : "Connected manufacturing with a tablet"} /></div><div><span className="news-category">BLOG</span><h4><a href="#news-list">Bringing End-to-End Traceability to Wine: UROVO&apos;s RFID Solution in Action</a></h4><time dateTime="2026-08-08">2026.08.08</time></div></article>)}</div>
  </section>
}
