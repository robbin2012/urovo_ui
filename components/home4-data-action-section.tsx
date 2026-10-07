"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const steps = [
  { name: "CAPTURE", summary: "Collect frontline data", title: "Turn frontline activity into business-ready data.", description: "Capture barcode, RFID, voice, and other frontline data with UROVO devices. Turn information from products, assets, and everyday operations into digital data your business can use.", image: "/images/workflow/data-capture.jpg", alt: "Frontline worker capturing operational data with a UROVO device" },
  { name: "CONNECT", summary: "Link people and systems", title: "Keep people, devices, and business systems connected.", description: "Connect frontline teams, enterprise devices, and business systems through reliable networks and seamless integration, so information reaches the right place at the right time.", image: "/images/workflow/data-connect.jpg", alt: "Connected UROVO devices supporting frontline operations" },
  { name: "INTELLIGENCE", summary: "Create operational insight", title: "Transform operational data into actionable intelligence.", description: "Use analytics and AI to reveal patterns, identify exceptions, and create real-time visibility across your operations.", image: "/images/workflow/data-process.jpg", alt: "Operational data transformed into actionable intelligence" },
  { name: "ACTION", summary: "Move work forward", title: "Turn intelligence into decisions and action.", description: "Trigger workflows, assign tasks, print labels, process payments, and help frontline teams respond with speed and accuracy.", image: "/images/workflow/data-act.jpg", alt: "Frontline worker taking action with a UROVO mobile computer" },
]

export function Home4DataActionSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [cycle, setCycle] = useState(0)
  const step = steps[activeStep]

  const selectStep = (index: number) => {
    setActiveStep(index)
    setCycle((value) => value + 1)
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timeout = window.setTimeout(() => {
      setActiveStep((current) => (current + 1) % steps.length)
      setCycle((value) => value + 1)
    }, 7000)
    return () => window.clearTimeout(timeout)
  }, [activeStep, cycle])

  return (
    <section id="software" className="home4-data-action" aria-labelledby="home4-data-action-title">
      <Image key={step.image} className="home4-data-action__image" src={step.image} alt={step.alt} fill sizes="100vw" />
      <div className="home4-data-action__blue-wash" aria-hidden="true" />
      <div className="home4-data-action__layout">
        <h2 id="home4-data-action-title" className="home4-data-action__title">
          From Data Capture to Business Action
        </h2>
        <nav className="home4-data-action__steps" aria-label="Operational workflow steps">
          {steps.map((item, index) => {
            const isActive = activeStep === index
            return (
              <button key={item.name} type="button" className={`home4-data-action__step-button${isActive ? " is-active" : ""}`} aria-pressed={isActive} onClick={() => selectStep(index)} onMouseEnter={() => selectStep(index)} onFocus={() => selectStep(index)}>
                <span className="home4-data-action__step-number">
                  <span className="home4-data-action__step-value">{String(index + 1).padStart(2, "0")}</span>
                  {isActive && <span key={`${index}-${cycle}`} className="home4-data-action__step-progress" aria-hidden="true" />}
                </span>
                <span className="home4-data-action__step-copy"><strong>{item.name}</strong><small>{item.summary}</small></span>
              </button>
            )
          })}
        </nav>
        <article key={step.name} className="home4-data-action__panel">
          <div className="home4-data-action__step"><span>{String(activeStep + 1).padStart(2, "0")}</span><strong>{step.name}</strong></div>
          <p className="home4-data-action__description">{step.description}</p>
          <a href="#industries" className="home4-data-action__link"><span>Explore Industry</span><ArrowRight aria-hidden="true" /></a>
        </article>
      </div>
    </section>
  )
}
