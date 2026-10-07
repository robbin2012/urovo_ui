"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const steps = [
  { name: "CAPTURE", summary: "Collect frontline data", description: "Capture barcode, RFID, voice, and other frontline data with UROVO devices. Turn everyday activity into digital information your business can use.", image: "/images/workflow/data-capture.jpg", alt: "Frontline worker capturing operational data with a UROVO device" },
  { name: "CONNECT", summary: "Link people and systems", description: "Connect people, devices, and business systems through reliable networks and seamless integration. Move information where it is needed, when it is needed.", image: "/images/workflow/data-connect.jpg", alt: "Connected UROVO devices supporting frontline operations" },
  { name: "INTELLIGENCE", summary: "Create operational insight", description: "Transform operational data into actionable intelligence with analytics and AI. Reveal patterns, identify exceptions, and gain real-time visibility across your operations.", image: "/images/workflow/data-process.jpg", alt: "Operational data transformed into actionable intelligence" },
  { name: "ACTION", summary: "Move work forward", description: "Turn intelligence into decisions and action. Trigger workflows, assign tasks, print labels, process payments, and help frontline teams respond with speed and accuracy.", image: "/images/workflow/data-act.jpg", alt: "Frontline worker taking action with a UROVO mobile computer" },
]

export function Home7DataActionSection() {
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]

  return (
    <section id="software" className="home7-data-action" aria-labelledby="home7-data-action-title">
      <header className="home7-data-action__header">
        <h2 id="home7-data-action-title">From Data Capture to Business Action</h2>
        <p>One connected workflow turns frontline information into faster, more confident action.</p>
      </header>

      <div className="home7-data-action__layout">
        <nav className="home7-data-action__tabs" aria-label="Operational workflow steps">
          {steps.map((item, index) => {
            const isActive = index === activeStep
            return (
              <button key={item.name} type="button" className={isActive ? "is-active" : ""} aria-pressed={isActive} onClick={() => setActiveStep(index)} onMouseEnter={() => setActiveStep(index)} onFocus={() => setActiveStep(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span><strong>{item.name}</strong><small>{item.summary}</small></span>
              </button>
            )
          })}
        </nav>

        <article className="home7-data-action__stage" aria-live="polite">
          <Image key={step.image} src={step.image} alt={step.alt} fill sizes="(max-width: 900px) 100vw, 65vw" />
          <div className="home7-data-action__image-wash" aria-hidden="true" />
          <div key={step.name} className="home7-data-action__panel">
            <div className="home7-data-action__step"><span>{String(activeStep + 1).padStart(2, "0")}</span><strong>{step.name}</strong></div>
            <p>{step.description}</p>
            <a href="#industries"><span>Explore Industry</span><ArrowRight aria-hidden="true" /></a>
          </div>
        </article>
      </div>
    </section>
  )
}
