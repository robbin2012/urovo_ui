import { ArrowRight } from "lucide-react"

export function MobileCtaSection() {
  return (
    <section className="mobile-cta">
      <div className="page-container mobile-cta__inner">
        <h2 data-reveal className="section-title mobile-cta__title">Need help choosing the right Mobile Computers?</h2>
        <p data-reveal data-reveal-delay="1">
          Our enterprise team will help you match the right device to your workflow and deployment needs.
        </p>
        <a data-reveal data-reveal-delay="2" href="#footer" className="primary-button">
          <span>Contact us to get started</span><ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
