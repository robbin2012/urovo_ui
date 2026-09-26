"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  ["BLOG", "2026.08.08", "Bringing End-to-End Traceability to Wine: UROVO's RFID Solution in Action", "/images/design/blog-rfid.webp"],
  ["BLOG", "2026.08.08", "UROVO and Synactive Partner to Revolutionize Retail Operation", "/images/design/blog-factory.webp"],
  ["NEWS", "2026.08.08", "Urovo Earns Ecovadis Silver Rating", "/images/design/watsons.webp"],
  ["INSIGHT", "2026.07.24", "Connected Retail Turns Frontline Data into Faster Decisions", "/images/design/retail.webp"],
] as const

export function Home3InsightsSection() {
  const [start, setStart] = useState(0)
  const visible = [0, 1, 2].map((offset) => items[(start + offset) % items.length])
  return <section id="insights" className="home3-insights page-container"><div className="home3-insights__heading"><h2 className="section-title">Insights &amp; News</h2><div><button aria-label="Previous news" onClick={() => setStart((value) => (value - 1 + items.length) % items.length)}><ChevronLeft /></button><button aria-label="Next news" onClick={() => setStart((value) => (value + 1) % items.length)}><ChevronRight /></button></div></div><div className="home3-insights__grid">{visible.map((item, index) => <article key={`${item[2]}-${start}`} style={{ animationDelay: `${index * 90}ms` }}><a className="home3-insights__image" href="#news-list"><img src={item[3]} alt="" /></a><div className="home3-insights__meta"><span>{item[0]}</span><time>{item[1]}</time></div><h3><a href="#news-list">{item[2]}</a></h3></article>)}</div></section>
}
