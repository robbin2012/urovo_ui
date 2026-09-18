"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const loop = [
  {
    label: "Capture",
    title: "Capture Accurate Data at the Frontline",
    description: "Use mobile computers, wearables, barcode scanners and RFID devices to collect the information your operations depend on.",
    cta: "Explore Industry",
    href: "#industries",
  },
  {
    label: "Connect",
    title: "Keep Devices and Operations Connected",
    description: "Cloud platforms and device management services help deploy, connect and support device fleets while keeping information moving across frontline operations.",
    cta: "Explore Device Management",
    href: "#software",
  },
  {
    label: "Process",
    title: "Turn Data into Useful Information",
    description: "Software and AI applications help organize and interpret frontline data so teams can understand what is happening and make more informed decisions.",
    cta: "Explore AI Applications",
    href: "#software",
  },
  {
    label: "Act",
    title: "Put Information into Action",
    description: "Device applications deliver tasks, instructions and tools directly to frontline workers, helping them respond, complete work and create the next data signal.",
    cta: "Explore Device Applications",
    href: "#software",
  },
]

export function DataActionSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="software" className="data-section">
      <div className="page-container">
        <h2 data-reveal className="section-title">From Data Capture to Business Action</h2>
        <p data-reveal data-reveal-delay="1" className="section-description">UROVO devices, software and cloud services work together in one continuous operational loop.</p>
        <div data-reveal data-reveal-delay="2" className="data-grid">
          <div className="data-loop" aria-label="Operational loop: Capture, Connect, Process, Act">
            <div className={`loop-ring loop-ring--step-${activeStep + 1}`}><div className="loop-center"><img src="/images/design/capture-icon.png" alt="" /></div>{loop.map((step, index) => <i key={step.label} className={activeStep === index ? "is-active" : ""} aria-hidden="true" />)}</div>
            {loop.map((step, index) => <button key={step.label} type="button" aria-pressed={activeStep === index} className={`loop-step step-${index + 1} ${activeStep === index ? "is-active" : ""}`} onClick={() => setActiveStep(index)}><span>0{index + 1}</span>{step.label}</button>)}
          </div>
          <div className="data-card">
            <img src="/images/design/capture.webp" alt="A parcel label being verified using a handheld device" />
            <div className="data-caption">
              <h3>{loop[activeStep].title}</h3>
              <p>{loop[activeStep].description}</p>
              <a href={loop[activeStep].href}>{loop[activeStep].cta} <ArrowRight /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
