"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const tabs = [
  "Retail",
  "Logistics & Transportation",
  "Manufacturing",
  "Hospitality",
  "Utilities",
  "Financial Technology",
]

const cards = [
  {
    title: "Retail Operations",
    body: "Bring together mobile computers, barcode scanners, RFID devices, payment terminals, printers and software to support connected retail operations. From inventory and fulfillment to customer service and checkout, UROVO helps teams capture accurate information, respond faster and keep work moving across stores and distribution environments.",
    image: "/images/retail.png",
  },
  {
    title: "Logistics & Transportation",
    body: "Connect teams, goods and information across warehouses, transportation networks and last-mile delivery. Rugged mobile computers, barcode and RFID capture, mobile printing and device software help improve visibility, reduce manual errors and support reliable execution from receiving through final delivery.",
    image: "/images/story-watsons.png",
  },
]

export function IndustrySection() {
  const [active, setActive] = useState("Retail")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-[#0b2fb0]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 0% 100%, rgba(0,0,0,0.4), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 py-24">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Industry Solutions</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
          From stores and warehouses to factories and field operations, UROVO combines enterprise devices, data capture
          technologies and software to help frontline teams work with greater speed, accuracy and visibility.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === tab ? "bg-white text-brand-navy" : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title} className="grid gap-6 rounded-2xl bg-white p-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-4 flex-1 text-[13px] leading-relaxed text-muted-foreground">{card.body}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore Industry
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={card.image} alt={card.title} className="h-full min-h-[220px] w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
