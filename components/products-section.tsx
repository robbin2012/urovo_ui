"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const tabs = [
  "Mobile Computers",
  "Tables",
  "Wearables",
  "RFID Devices",
  "Barcode Scanners",
  "Printers",
  "Smart Payment Terminals",
  "Smart Mobile Terminals",
]

export function ProductsSection() {
  const [active, setActive] = useState("Mobile Computers")

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">UROVO Devices for Every Frontline Task</h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === tab
                ? "bg-brand text-white"
                : "bg-secondary text-foreground/70 hover:bg-secondary/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#eaf1ff] to-[#f6f9ff]">
        <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="text-3xl font-bold text-brand-navy sm:text-4xl">Barcode Scanners</h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Handheld and presentation scanners designed to capture 1D and 2D barcodes quickly and accurately in
              fast-paced environments.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Explore Barcode Scanners
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>

            <div className="mt-10 flex gap-3">
              <button
                aria-label="Previous"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground/70 transition-colors hover:text-brand"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground/70 transition-colors hover:text-brand"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/images/barcode-scanner.png"
              alt="Rugged handheld barcode scanner"
              className="max-h-80 w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
