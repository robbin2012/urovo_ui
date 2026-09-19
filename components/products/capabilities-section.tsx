import { Target, Zap, Eye, Wifi, ShieldCheck, Smartphone } from "lucide-react"

const capabilities = [
  { icon: Target, title: "Accuracy", body: "Accurate data capture with fewer errors and less rework." },
  { icon: Zap, title: "Productivity", body: "Faster workflows and higher operational efficiency." },
  { icon: Eye, title: "Visibility", body: "Real-time data visibility for faster decisions." },
  { icon: Wifi, title: "Connectivity", body: "Seamless connectivity to systems and business applications." },
  { icon: ShieldCheck, title: "Reliability", body: "Built for demanding environments with minimal downtime." },
  { icon: Smartphone, title: "Android OS", body: "GMS-certified for intuitive use and essential applications." },
]

export function CapabilitiesSection() {
  return (
    <section className="capabilities">
      <div className="page-container">
        <h2 data-reveal className="section-title capabilities__title">Built for Smarter and Faster Frontline Operations</h2>
        <p data-reveal data-reveal-delay="1" className="capabilities__subtitle">
          Every capability supports faster work, fewer interruptions, and more dependable data.
        </p>
        <div className="capability-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={index % 3 === 1 ? "1" : index % 3 === 2 ? "2" : undefined}
                className={`capability-card${index === 0 ? " capability-card--feature" : ""}`}
              >
                <span className="capability-icon"><Icon aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
