import { ArrowRight } from "lucide-react"

export function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero__inner page-container">
        <div className="products-hero__copy">
          <h1 data-reveal>Rugged Mobile Computers for Frontline Work</h1>
          <p data-reveal data-reveal-delay="1">
            UROVO Mobile Computers connect frontline workers with real-time data, powerful capture capabilities, and
            business applications — helping teams work smarter, respond faster, and achieve more across every workflow.
          </p>
          <div data-reveal data-reveal-delay="2">
            <a href="#finder" className="cta-button products-hero__cta">
              <span>Explore Solutions</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="products-hero__art" data-reveal data-reveal-delay="1">
          <img src="/images/revised_images/1x/资源 1.png" alt="UROVO rugged mobile computers" draggable={false} />
        </div>
      </div>
    </section>
  )
}
