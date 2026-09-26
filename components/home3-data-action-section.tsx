"use client"

import { useState } from "react"

const steps = [
  { name: "CAPTURE", description: "Capture barcode, RFID, voice, and other frontline data with UROVO devices. Turn information from products, assets, and everyday operations into digital data your business can use.", image: "/images/workflow/data-capture.jpg", alt: "Frontline worker capturing operational data with a UROVO device" },
  { name: "CONNECT", description: "Connect people, devices, and business systems through seamless connectivity and system integration. Move data where it is needed, when it is needed.", image: "/images/workflow/data-connect.jpg", alt: "Connected UROVO devices and business systems" },
  { name: "INTELLIGENCE", description: "Transform operational data into actionable intelligence with AI and analytics. Reveal patterns, identify exceptions, and gain real-time visibility into what is happening across your operations.", image: "/images/workflow/data-process.jpg", alt: "Operational data transformed into actionable intelligence" },
  { name: "ACTION", description: "Turn intelligence into decisions and action. Trigger workflows, assign tasks, print labels, process payments, and help frontline teams move work forward.", image: "/images/workflow/data-act.jpg", alt: "Frontline worker taking action with a UROVO mobile computer" },
]

export function Home3DataActionSection() {
  const [active, setActive] = useState(0)

  return <section id="software" className="data-action-cards-section" aria-labelledby="workflow-title">
    <div className="page-container">
      <header data-reveal className="data-action-cards-header">
        <h2 id="workflow-title" className="section-title">From Data Capture to Business Action</h2>
        <p>UROVO devices, software and cloud services work together in one continuous operational loop.</p>
      </header>
      <div data-reveal data-reveal-delay="1" className="data-action-cards" onPointerLeave={(event) => { if (event.pointerType === "mouse" || event.pointerType === "pen") setActive(0) }}>
        {steps.map((step, index) => <article key={step.name} className={`data-action-card${active === index ? " is-active" : ""}`} onPointerEnter={(event) => { if (event.pointerType === "mouse" || event.pointerType === "pen") setActive(index) }} onClick={() => setActive(index)}>
          <img src={step.image} alt={active === index ? step.alt : ""} />
          <div className="data-action-card__shade" />
          <span className="data-action-card__number">{String(index + 1).padStart(2, "0")}</span>
          <div className="data-action-card__compact"><strong>{step.name}</strong></div>
          <div className="data-action-card__content"><h3>{step.name}</h3><p>{step.description}</p></div>
        </article>)}
      </div>
    </div>
  </section>
}
