"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  { name: "CAPTURE", description: "Capture barcode, RFID, voice, and other frontline data with UROVO devices. Turn information from products, assets, and everyday operations into digital data your business can use.", image: "/images/workflow/data-capture.jpg", alt: "Frontline worker capturing operational data with a UROVO device" },
  { name: "CONNECT", description: "Connect people, devices, and business systems through seamless connectivity and system integration. Move data where it is needed, when it is needed.", image: "/images/workflow/data-connect.jpg", alt: "Connected UROVO devices and business systems" },
  { name: "INTELLIGENCE", description: "Transform operational data into actionable intelligence with AI and analytics. Reveal patterns, identify exceptions, and gain real-time visibility into what is happening across your operations.", image: "/images/workflow/data-process.jpg", alt: "Operational data transformed into actionable intelligence" },
  { name: "ACTION", description: "Turn intelligence into decisions and action. Trigger workflows, assign tasks, print labels, process payments, and help frontline teams move work forward.", image: "/images/workflow/data-act.jpg", alt: "Frontline worker taking action with a UROVO mobile computer" },
]

export function DataActionSection({ variant = "default" }: { variant?: "default" | "home1a" }) {
  const [activeStep, setActiveStep] = useState(0)
  const [previousStep, setPreviousStep] = useState<number | null>(null)
  const [cycle, setCycle] = useState(0)

  const selectStep = (index: number) => {
    if (index === activeStep) return
    setPreviousStep(activeStep)
    setActiveStep(index)
    setCycle((value) => value + 1)
  }

  useEffect(() => {
    const timeout = window.setTimeout(() => selectStep((activeStep + 1) % steps.length), 4600)
    return () => window.clearTimeout(timeout)
  }, [activeStep])

  useEffect(() => {
    if (previousStep === null) return
    const timeout = window.setTimeout(() => setPreviousStep(null), 760)
    return () => window.clearTimeout(timeout)
  }, [previousStep])

  return (
    <section id="software" className={`data-section workflow-section${variant === "home1a" ? " workflow-section--home1a" : ""}`} aria-labelledby="workflow-title">
      <div className="page-container">
        <header data-reveal className="workflow-header">
          <h2 id="workflow-title" className="section-title">From Data Capture to Business Action</h2>
          <p className="section-description">UROVO devices, software and cloud services work together in one continuous operational loop.</p>
        </header>

        <div data-reveal data-reveal-delay="1" className="workflow-layout">
          <div className="workflow-visual" aria-live="polite">
            {steps.map((step, index) => (
              <figure key={step.name} className={`workflow-visual__slide${activeStep === index ? " is-active" : ""}${previousStep === index ? " is-leaving" : ""}`} aria-hidden={activeStep !== index}>
                <img src={step.image} alt={activeStep === index ? step.alt : ""} />
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.name}</strong></figcaption>
              </figure>
            ))}
          </div>

          <div className="workflow-accordion" aria-label="Operational workflow steps">
            {steps.map((step, index) => {
              const isActive = activeStep === index
              return (
                <article key={`${step.name}-${isActive ? cycle : "idle"}`} className={`workflow-step${isActive ? " is-active" : ""}`}>
                  <div className="workflow-step__progress" aria-hidden="true"><i /></div>
                  <button type="button" className="workflow-step__trigger" aria-expanded={isActive} aria-controls={`workflow-panel-${index}`} onClick={() => selectStep(index)}>
                    <span>{String(index + 1).padStart(2, "0")}</span><strong>{step.name}</strong><i aria-hidden="true">{isActive ? "−" : "+"}</i>
                  </button>
                  <div id={`workflow-panel-${index}`} className="workflow-step__panel" aria-hidden={!isActive}>
                    <div className="workflow-step__content">
                      <p>{step.description}</p>
                      <button type="button" onClick={() => selectStep((index + 1) % steps.length)}>Explore Industry<ArrowRight aria-hidden="true" /></button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
