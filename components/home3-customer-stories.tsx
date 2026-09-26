"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  { name: "Watsons China", tag: "Retail", image: "/images/design/watsons.webp", description: "Mobile scanning and connected workflows help store teams manage inventory, serve customers and keep daily operations moving." },
  { name: "Three Southern European Banks", tag: "Manufacturing", image: "/images/design/banks.webp", description: "Payment terminals, SDK tools and device management support a regional partner in modernizing payment operations across three Southern European banks." },
  { name: "MINISO", tag: "Financial", image: "/images/design/miniso.webp", description: "Connected retail devices support faster checkout, accurate product information and a more seamless shopping experience." },
]

export function CustomerStories() {
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState(0)
  const upcoming = stories.map((_, offset) => (active + offset + 1) % stories.length).slice(0, 2)

  const select = (index: number) => {
    setActive((index + stories.length) % stories.length)
    setCycle((value) => value + 1)
  }

  useEffect(() => {
    const timeout = window.setTimeout(() => select(active + 1), 5600)
    return () => window.clearTimeout(timeout)
  }, [active, cycle])

  return <section id="stories" className="stories-section workflow-section" aria-labelledby="stories-title">
    <div className="page-container">
      <header data-reveal className="workflow-header">
        <h2 id="stories-title" className="section-title">Real Customer Stories</h2>
      </header>
    </div>

    <div data-reveal data-reveal-delay="1" className="workflow-carousel story-workflow-carousel">
      <div className="workflow-stage" key={`story-${active}-${cycle}`}>
        <figure className="workflow-stage__image">
          <img src={stories[active].image} alt={stories[active].name} />
        </figure>
        <div className="workflow-stage__copy">
          <p className="story-workflow-tag">{stories[active].tag}</p>
          <h3>{stories[active].name}</h3>
          <p>{stories[active].description}</p>
          <a className="story-workflow-link" href="#contact">Read Customer Story</a>
          <div className="workflow-stage__controls">
            <button type="button" aria-label="Previous customer story" onClick={() => select(active - 1)}><ChevronLeft aria-hidden="true" /></button>
            <button type="button" aria-label="Next customer story" onClick={() => select(active + 1)}><ChevronRight aria-hidden="true" /></button>
            <span><strong>{active + 1}</strong> / {stories.length}</span>
          </div>
        </div>
      </div>

      <div className="workflow-previews" aria-label="Upcoming customer stories">
        {upcoming.map((index) => <button type="button" className="workflow-preview" key={stories[index].name} aria-label={`Show ${stories[index].name}`} onClick={() => select(index)}>
          <img src={stories[index].image} alt="" />
          <span><small>{String(index + 1).padStart(2, "0")}</small>{stories[index].name}</span>
        </button>)}
      </div>
    </div>
  </section>
}
