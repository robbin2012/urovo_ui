import { ArrowRight } from "lucide-react"

export function Home3TechCtaSection() {
  return <section id="contact" className="tech-section">
    <div className="page-container"><div className="tech-copy">
      <h2 data-reveal className="section-title">Find the Right Technology for<br /><span>Your Operations</span></h2>
      <p data-reveal data-reveal-delay="1">Whether you are selecting devices, planning a deployment or improving an existing workflow, UROVO team is ready to help.</p>
      <a data-reveal data-reveal-delay="2" href="#footer" className="primary-button hero-fill-button"><span>Contact Sales</span><ArrowRight /></a>
    </div></div>
  </section>
}
