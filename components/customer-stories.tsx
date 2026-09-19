import { ArrowRight } from "lucide-react"

const stories = [
  { name: "Watsons China", tag: "Retail", image: "watsons", description: "UMS helps Watsons China distribute applications and manage mobile devices remotely, supporting application delivery and day-to-day device operations." },
  { name: "Three Southern European Banks", tag: "Manufacturing", image: "banks", description: "Payment terminals, SDK tools and UTMS/KMS supported a regional partner in modernizing payment operations across three Southern European banks." },
  { name: "MINISO", tag: "Financial", image: "miniso", description: "Customer story content is pending approval, including geography, deployed products, outcomes and the English story page." },
]
export function CustomerStories() {
  return <section id="stories" className="stories-section page-container">
    <h2 data-reveal className="section-title">Real Customer Stories</h2>
    <div className="stories-grid">{stories.map((s, index) => <article key={s.name} data-reveal data-reveal-delay={String(index + 1)} className="story-card">
      <img src={`/images/design/${s.image}.webp`} alt={s.name} />
      <div className="story-copy">
        <div className="story-heading"><span>{s.tag}</span><h3>{s.name}</h3></div>
        <p className="story-description">{s.description}</p>
        <a href="#contact">Read Customer Story <ArrowRight /></a>
      </div>
    </article>)}</div>
  </section>
}
