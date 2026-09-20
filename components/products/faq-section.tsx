"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the difference between a mobile computer and a smartphone?",
    answer:
      "Enterprise mobile computers combine Android, professional barcode scanning, enterprise-grade connectivity, and rugged durability in one purpose-built device. Unlike consumer smartphones, they are designed for continuous frontline use and demanding business environments.",
  },
  {
    question: "How do I choose the right mobile computer for my business?",
    answer:
      "Start with your primary workflow, environment, and scanning volume. Consider form factor, display size, connectivity, battery life, and the operating system, then match those requirements to a device built for your industry.",
  },
  {
    question: "How do I choose the right barcode scanner?",
    answer:
      "Match the scan engine to your barcode types (1D or 2D), scanning distance, and throughput. High-volume or long-range operations benefit from advanced imagers, while general retail use is well served by standard 2D engines.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "Battery life depends on the device, usage pattern, and connectivity. UROVO mobile computers are engineered for full-shift operation, and many models support hot-swappable or extended batteries for continuous multi-shift use.",
  },
  {
    question: "How long can UROVO mobile computers be used?",
    answer:
      "UROVO devices are built for a long service life with rugged construction, long-term Android support, and enterprise device management, helping organizations maximize return on investment over years of deployment.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq">
      <div className="page-container">
        <h2 data-reveal className="section-title faq__title">Frequently Asked Questions</h2>
        <div className="faq__list" data-reveal data-reveal-delay="1">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.question} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" />
                </button>
                <div className="faq__answer" hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
