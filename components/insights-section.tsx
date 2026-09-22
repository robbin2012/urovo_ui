"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const newsItems = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  category: "Market Views",
  title: "Step into the Future of Retail with UROVO at NRF 2026: Retail's Big Show!",
  description:
    "Customer story content is pending approval, including geography, deployed products, outcomes and the English story page.",
  date: "2026.08.08",
  dateTime: "2026-08-08",
  image: "/images/design/news.webp",
  imageAlt: "Modern geometric architecture building",
}))

const blogs = ["blog-rfid", "blog-factory"]

export function InsightsSection() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(1)
  const activeNews = newsItems[activeNewsIndex]
  const showPreviousNews = () => setActiveNewsIndex((current) => (current - 1 + newsItems.length) % newsItems.length)
  const showNextNews = () => setActiveNewsIndex((current) => (current + 1) % newsItems.length)

  return <section id="insights" className="insights-section page-container">
    <div data-reveal className="insights-heading"><h2 className="section-title">Insights &amp; News</h2><a href="#news-list">View All <span className="arrow-badge"><ArrowRight className="arrow-current" /><ArrowRight className="arrow-incoming" /></span></a></div>
    <div data-reveal data-reveal-delay="1" className="featured-news">
      <div className="featured-news-image image-zoom-frame"><img src={activeNews.image} alt={activeNews.imageAlt} /></div>
      <div className="news-copy">
        <span className="news-category">{activeNews.category}</span>
        <h3>{activeNews.title}</h3>
        <p>{activeNews.description}</p>
        <time dateTime={activeNews.dateTime}>{activeNews.date}</time>
        <div className="news-controls">
          <button type="button" aria-label="Previous news" onClick={showPreviousNews}><ArrowLeft /></button>
          <span aria-live="polite">{String(activeNewsIndex + 1).padStart(2, "0")} / {String(newsItems.length).padStart(2, "0")}</span>
          <button type="button" aria-label="Next news" onClick={showNextNews}><ArrowRight /></button>
        </div>
      </div>
    </div>
    <div data-reveal data-reveal-delay="2" id="news-list" className="blog-grid">{blogs.map((image) => <article key={image}><div className="blog-image image-zoom-frame"><img src={`/images/design/${image}.webp`} alt={image === "blog-rfid" ? "Operator using a handheld device on the factory floor" : "Connected manufacturing with a tablet"} /></div><div><span className="news-category">BLOG</span><h4>Bringing End-to-End Traceability to Wine: UROVO&apos;s RFID Solution in Action</h4><time dateTime="2026-08-08">2026.08.08</time></div></article>)}</div>
  </section>
}
