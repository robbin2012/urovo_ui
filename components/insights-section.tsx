import { ArrowLeft, ArrowRight } from "lucide-react"
const blogs = ["blog-rfid", "blog-factory"]
export function InsightsSection() {
  return <section id="insights" className="insights-section page-container">
    <div className="insights-heading"><h2 className="section-title">Insights &amp; News</h2><a href="#news-list">View All <span className="arrow-badge"><ArrowRight /></span></a></div>
    <div className="featured-news">
      <div className="featured-news-image image-zoom-frame"><img src="/ybx_static/out/images/design/news.webp" alt="Modern geometric architecture building" /></div>
      <div className="news-copy"><span className="news-category">Market Views</span><h3>Step into the Future of Retail with UROVO at NRF 2026: Retail&apos;s Big Show!</h3><p>Customer story content is pending approval, including geography, deployed products, outcomes and the English story page.</p><time dateTime="2026-08-08">2026.08.08</time><div className="news-controls"><button aria-label="Previous news"><ArrowLeft /></button><span>02 / 04</span><button aria-label="Next news"><ArrowRight /></button></div></div>
    </div>
    <div id="news-list" className="blog-grid">{blogs.map((image) => <article key={image}><div className="blog-image image-zoom-frame"><img src={`/ybx_static/out/images/design/${image}.webp`} alt={image === "blog-rfid" ? "Operator using a handheld device on the factory floor" : "Connected manufacturing with a tablet"} /></div><div><span className="news-category">BLOG</span><h4>Bringing End-to-End Traceability to Wine: UROVO&apos;s RFID Solution in Action</h4><time dateTime="2026-08-08">2026.08.08</time></div></article>)}</div>
  </section>
}
