"use client"

import { type CSSProperties, useLayoutEffect, useRef, useState } from "react"
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
  const [blurMetrics, setBlurMetrics] = useState<Array<{ x: number; y: number; width: number; height: number }>>([])
  const stageRef = useRef<HTMLElement>(null)
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const step = steps[activeStep]

  useLayoutEffect(() => {
    const updateBlurMetrics = () => {
      const stage = stageRef.current
      if (!stage) return
      const stageRect = stage.getBoundingClientRect()
      setBlurMetrics(buttonRefs.current.map((button) => {
        const rect = button?.getBoundingClientRect()
        return {
          x: rect ? rect.left - stageRect.left : 0,
          y: rect ? rect.top - stageRect.top : 0,
          width: stageRect.width,
          height: stageRect.height,
        }
      }))
    }

    updateBlurMetrics()
    const observer = new ResizeObserver(updateBlurMetrics)
    if (stageRef.current) observer.observe(stageRef.current)
    window.addEventListener("resize", updateBlurMetrics)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateBlurMetrics)
    }
  }, [])

  return (
    <section id="software" className="home7-data-action" aria-labelledby="home7-data-action-title">
      <header className="home7-data-action__header">
        <h2 id="home7-data-action-title">From Data Capture to Business Action</h2>
        <p>One connected workflow turns frontline information into faster, more confident action.</p>
      </header>

      <div className="home7-data-action__layout">
        <article ref={stageRef} className="home7-data-action__stage" aria-live="polite">
          <Image key={step.image} src={step.image} alt={step.alt} fill sizes="(max-width: 900px) 100vw, 65vw" />
          <div className="home7-data-action__image-wash" aria-hidden="true" />
          <nav className="home7-data-action__tabs" aria-label="Operational workflow steps">
            {steps.map((item, index) => {
              const isActive = index === activeStep
              return (
                <button ref={(node) => { buttonRefs.current[index] = node }} key={item.name} type="button" className={isActive ? "is-active" : ""} aria-pressed={isActive} onClick={() => setActiveStep(index)} onMouseEnter={() => setActiveStep(index)} onFocus={() => setActiveStep(index)} style={blurMetrics[index] ? {
                  "--home7-blur-x": `${blurMetrics[index].x}px`,
                  "--home7-blur-y": `${blurMetrics[index].y}px`,
                  "--home7-stage-width": `${blurMetrics[index].width}px`,
                  "--home7-stage-height": `${blurMetrics[index].height}px`,
                } as CSSProperties : undefined}>
                  <span className="home7-data-action__tab-blur" aria-hidden="true"><img src={step.image} alt="" /></span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span><strong>{item.name}</strong><small>{item.summary}</small></span>
                </button>
              )
            })}
          </nav>
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
