"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  { name: "Capture", title: "Capture accurate data at the frontline", description: "Collect barcodes, RFID reads, images and task inputs right where work happens.", image: "/images/workflow/data-capture.jpg", alt: "Frontline worker capturing operational data with a UROVO device" },
  { name: "Connect", title: "Connect devices, people and operations", description: "Keep device fleets, cloud services and business systems connected as information moves.", image: "/images/workflow/data-connect.jpg", alt: "Connected UROVO devices and business systems" },
  { name: "Process", title: "Process data into useful insight", description: "Software and cloud services turn frontline inputs into clear, actionable information.", image: "/images/workflow/data-process.jpg", alt: "Operational information being processed into useful insight" },
  { name: "Act", title: "Put the right information into action", description: "Deliver tasks and guidance to frontline teams, then feed every completed action back into the loop.", image: "/images/workflow/data-act.jpg", alt: "Frontline worker taking action with a UROVO mobile computer" },
  { name: "Optimize", title: "Optimize every operational decision", description: "Use real-world performance data to refine workflows, remove friction and improve every cycle.", image: "/images/workflow/data-process.jpg", alt: "Operational insight helping teams optimize frontline workflows" },
]

export function DataActionSection() {
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
    <section id="software" className="data-section workflow-section" aria-labelledby="workflow-title">
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
                      <h3>{step.title}</h3><p>{step.description}</p>
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
