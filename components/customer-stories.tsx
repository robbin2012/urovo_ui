"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const stories = [
  { name: "Watsons China", tag: "Retail", image: "watsons", description: "Mobile scanning and connected workflows help store teams manage inventory, serve customers and keep daily operations moving." },
  { name: "Three Southern European Banks", tag: "Manufacturing", image: "banks", description: "Payment terminals, SDK tools and device management support a regional partner in modernizing payment operations across three Southern European banks." },
  { name: "MINISO", tag: "Financial", image: "miniso", description: "Connected retail devices support faster checkout, accurate product information and a more seamless shopping experience." },
]

export function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(-1)

  return <section id="stories" className="stories-section page-container">
    <h2 data-reveal className="section-title">Real Customer Stories</h2>
    <div
      data-reveal
      data-reveal-delay="1"
      className="stories-grid"
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") setActiveIndex(-1)
      }}
    >
      {stories.map((story, index) => (
        <article
          key={story.name}
          className={`story-card${activeIndex === index ? " is-active" : ""}`}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse" || event.pointerType === "pen") setActiveIndex(index)
          }}
          onClick={(event) => {
            if (!(event.target as HTMLElement).closest("a")) setActiveIndex(index)
          }}
        >
          <img className="story-image" src={`/images/design/${story.image}.webp`} alt={story.name} />
          <div className="story-copy">
            <p className="story-category">{story.tag}</p>
            <h3>{story.name}</h3>
            <p className="story-description">{story.description}</p>
            <a href="#contact"><span>Read Customer Story</span><ArrowRight aria-hidden="true" /></a>
          </div>
        </article>
      ))}
    </div>
  </section>
}
