"use client"

import { useState } from "react"
import { ArrowRight, Minus, Plus } from "lucide-react"

const faqs = [
  {
    question: "What is the difference between a mobile computer and a smartphone?",
    answer: "Enterprise mobile computers combine Android, professional barcode scanning, enterprise-grade connectivity, and rugged durability in one purpose-built device.",
  },
  {
    question: "How do I choose the right mobile computer for my business?",
    answer: "Start with your primary workflow, environment, and scanning volume, then compare form factor, display size, connectivity, battery life, and operating system.",
  },
  {
    question: "How do I choose the right barcode scanner?",
    answer: "Match the scan engine to your barcode types, scanning distance, throughput, and the conditions where the device will be used.",
  },
  {
    question: "How long does the battery last?",
    answer: "Battery life depends on the device and usage pattern. Many UROVO models support extended or hot-swappable batteries for continuous operation.",
  },
  {
    question: "How long can UROVO mobile computers be used?",
    answer: "Rugged construction, long-term Android support, and enterprise management help UROVO devices deliver a long service life.",
  },
]

export function Product1FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="product1-faq">
      <div className="page-container product1-faq__layout">
        <div className="product1-faq__list" data-reveal>
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <article key={faq.question} className={`product1-faq__item${isOpen ? " is-open" : ""}`}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}>
                  <span className="product1-faq__number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="product1-faq__question">{faq.question}</span>
                  <span className="product1-faq__toggle" aria-hidden="true">
                    {isOpen ? <Minus /> : <Plus />}
                  </span>
                </button>
                {isOpen && <div className="product1-faq__answer"><p>{faq.answer}</p></div>}
              </article>
            )
          })}
        </div>

        <aside className="product1-faq__contact" data-reveal data-reveal-delay="1">
          <div className="product1-faq__contact-inner">
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <p>Our enterprise team will help you match the right device to your workflow and deployment needs.</p>
            <a href="#footer">
              Contact our support team <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
