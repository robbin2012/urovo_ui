"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const slides = [
  {
    image: "/images/home3-hero-dt610.jpg",
    title: "Built for Business",
    accent: "Ready for More.",
    description: "UROVO DT610 brings rugged mobility, reliable data capture and connected workflows to demanding frontline operations.",
  },
  {
    image: "/images/home3-hero-upad.jpg",
    title: "More Room to Work",
    accent: "Built to Go Further.",
    description: "UROVO UPad combines a large, intuitive display with powerful performance and flexible connectivity for work anywhere.",
  },
  {
    image: "/images/home3-hero.jpg",
    title: "Built for Business",
    accent: "Ready for More.",
    description: "UROVO combines durable devices, flexible connectivity and dependable performance to keep frontline teams moving.",
  },
]

export function Home3Hero() {
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((value) => (value + 1) % slides.length)
      setCycle((value) => value + 1)
    }, 5500)
    return () => window.clearTimeout(timer)
  }, [active, cycle])

  const selectSlide = (index: number) => {
    setActive(index)
    setCycle((value) => value + 1)
  }

  return (
    <section id="top" className="home3-hero">
      <div className="home3-hero__slides" aria-hidden="true">
        {slides.map((slide, index) => <div key={slide.image} className={`home3-hero__slide${index === active ? " is-active" : ""}`} style={{ backgroundImage: `url('${slide.image}')` }} />)}
      </div>
      <div className="home3-hero__inner page-container">
        <div key={`copy-${active}-${cycle}`} className="home3-hero__copy">
          <h1>{slides[active].title}<br /><span>{slides[active].accent}</span></h1>
          <p>{slides[active].description}</p>
          <a href="#industries" className="cta-button hero-fill-button group"><span>Explore Solutions</span><ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="home3-hero__pagination" role="group" aria-label="Banner slides">
        {slides.map((slide, index) => <button
          type="button"
          key={slide.image}
          className={index === active ? "is-active" : ""}
          aria-label={`Show banner ${index + 1}`}
          aria-current={index === active}
          onMouseEnter={() => selectSlide(index)}
          onClick={() => selectSlide(index)}
        />)}
      </div>
    </section>
  )
}
