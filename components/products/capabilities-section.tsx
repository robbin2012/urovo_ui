"use client"

import { useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"

const capabilities = [
  { icon: "/images/products/capabilities/accuracy.svg", title: "Accuracy", body: "Accurate data capture with fewer errors and less rework." },
  { icon: "/images/products/capabilities/productivity.svg", title: "Productivity", body: "Faster workflows and higher operational efficiency." },
  { icon: "/images/products/capabilities/visibility.svg", title: "Visibility", body: "Real-time data visibility for faster decisions." },
  { icon: "/images/products/capabilities/connectivity.svg", title: "Connectivity", body: "Seamless connectivity to systems and business applications." },
  { icon: "/images/products/capabilities/reliability.svg", title: "Reliability", body: "Built for demanding environments with minimal downtime." },
  { icon: "/images/products/capabilities/android-os.svg", title: "Android OS", body: "GMS-certified for intuitive use and essential applications." },
]

export function CapabilitiesSection() {
  const [activeCard, setActiveCard] = useState(-1)
  type Edge = "top" | "right" | "bottom" | "left"

  const updatePointer = (event: ReactPointerEvent<HTMLDivElement>, index: number) => {
    if (event.pointerType === "touch") return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100))
    const y = Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100))
    const distances: Array<[Edge, number]> = [
      ["top", y],
      ["right", 100 - x],
      ["bottom", 100 - y],
      ["left", x],
    ]
    const edge = distances.sort((a, b) => a[1] - b[1])[0][0]
    const starts = {
      top: "translate3d(0,-105%,0)",
      right: "translate3d(105%,0,0)",
      bottom: "translate3d(0,105%,0)",
      left: "translate3d(-105%,0,0)",
    }
    event.currentTarget.style.setProperty("--capability-mx", `${x}%`)
    event.currentTarget.style.setProperty("--capability-my", `${y}%`)
    event.currentTarget.style.setProperty("--capability-panel-start", starts[edge])
    setActiveCard(index)
  }

  return (
    <section className="capabilities">
      <div className="page-container">
        <h2 data-reveal className="section-title capabilities__title">Built for Smarter and Faster Frontline Operations</h2>
        <p data-reveal data-reveal-delay="1" className="capabilities__subtitle">
          Every capability supports faster work, fewer interruptions, and more dependable data.
        </p>
        <div className="capability-grid">
          {capabilities.map((item, index) => {
            return (
              <div
                key={item.title}
                className={`capability-card${index === activeCard ? " is-active" : ""}`}
                tabIndex={0}
                onPointerEnter={(event) => updatePointer(event, index)}
                onPointerMove={(event) => updatePointer(event, index)}
                onPointerLeave={() => setActiveCard(-1)}
                onFocus={() => {
                  setActiveCard(index)
                }}
                onBlur={() => setActiveCard(-1)}
              >
                <span className="capability-color-panel" aria-hidden="true"><span className="capability-cloud capability-cloud-one" /><span className="capability-cloud capability-cloud-two" /></span>
                <span className="capability-white-spot" aria-hidden="true" />
                <span className="capability-icon"><img src={item.icon} alt="" /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
