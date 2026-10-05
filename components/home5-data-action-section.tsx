"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    name: "CAPTURE",
    description: "Capture barcode, RFID, voice, and other frontline data with UROVO devices. Turn everyday activity into digital information your business can use.",
    image: "/images/workflow/data-capture.jpg",
    alt: "Frontline worker capturing operational data with a UROVO device",
  },
  {
    name: "CONNECT",
    description: "Connect people, devices, and business systems through reliable networks and seamless integration. Move information where it is needed, when it is needed.",
    image: "/images/workflow/data-connect.jpg",
    alt: "Connected UROVO devices supporting frontline operations",
  },
  {
    name: "INTELLIGENCE",
    description: "Transform operational data into actionable intelligence with analytics and AI. Reveal patterns, identify exceptions, and gain real-time visibility.",
    image: "/images/workflow/data-process.jpg",
    alt: "Operational data transformed into actionable intelligence",
  },
  {
    name: "ACTION",
    description: "Turn intelligence into decisions and action. Trigger workflows, assign tasks, print labels, process payments, and keep frontline work moving.",
    image: "/images/workflow/data-act.jpg",
    alt: "Frontline worker taking action with a UROVO mobile computer",
  },
]

export function Home5DataActionSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="software" className="home5-data-action" aria-labelledby="home5-data-action-title">
      <header className="home5-data-action__header">
        <h2 id="home5-data-action-title">From Data Capture to Business Action</h2>
        <p>One connected workflow turns frontline information into faster, more confident action.</p>
      </header>

      <div
        className="home5-data-action__cards"
        aria-label="Operational workflow steps"
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse" || event.pointerType === "pen") setActiveStep(null)
        }}
      >
        {steps.map((step, index) => {
          const isActive = activeStep === index
          const number = String(index + 1).padStart(2, "0")

          return (
            <button
              key={step.name}
              type="button"
              className={`home5-data-action__card${isActive ? " is-active" : ""}`}
              aria-pressed={isActive}
              onClick={() => setActiveStep(index)}
              onFocus={() => setActiveStep(index)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse" || event.pointerType === "pen") setActiveStep(index)
              }}
            >
              <Image className="home5-data-action__image" src={step.image} alt={isActive ? step.alt : ""} fill sizes={isActive ? "55vw" : "20vw"} />
              <span className="home5-data-action__overlay" aria-hidden="true" />
              <span className="home5-data-action__compact">
                <small>{number}</small>
                <strong>{step.name}</strong>
              </span>
              <span className="home5-data-action__content">
                <span className="home5-data-action__content-inner">
                  <small>{number}</small>
                  <strong>{step.name}</strong>
                  <span>{step.description}</span>
                </span>
                <i>
                  <span>Explore Industry</span>
                  <ArrowRight aria-hidden="true" />
                </i>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
