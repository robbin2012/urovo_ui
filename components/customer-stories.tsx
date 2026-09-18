import { ArrowRight } from "lucide-react"

const stories = [
  { name: "Watsons China", tag: "Retail", image: "watsons" },
  { name: "Three Southern European Banks", tag: "Manufacturing", image: "banks" },
  { name: "MINISO", tag: "Financial", image: "miniso" },
]
export function CustomerStories() {
  return <section id="stories" className="stories-section page-container">
    <h2 className="section-title">Real Customer Stories</h2>
    <div className="stories-grid">{stories.map((s) => <article key={s.name} className="story-card">
      <img src={`/ybx_static/out/images/design/${s.image}.webp`} alt={s.name} />
      <div className="story-copy"><span>{s.tag}</span><h3>{s.name}</h3><a href="#contact">Read Customer Story <ArrowRight /></a></div>
    </article>)}</div>
  </section>
}
