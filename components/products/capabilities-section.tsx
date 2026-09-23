const capabilities = [
  { icon: "/images/products/capabilities/accuracy.svg", title: "Accuracy", body: "Accurate data capture with fewer errors and less rework." },
  { icon: "/images/products/capabilities/productivity.svg", title: "Productivity", body: "Faster workflows and higher operational efficiency." },
  { icon: "/images/products/capabilities/visibility.svg", title: "Visibility", body: "Real-time data visibility for faster decisions." },
  { icon: "/images/products/capabilities/connectivity.svg", title: "Connectivity", body: "Seamless connectivity to systems and business applications." },
  { icon: "/images/products/capabilities/reliability.svg", title: "Reliability", body: "Built for demanding environments with minimal downtime." },
  { icon: "/images/products/capabilities/android-os.svg", title: "Android OS", body: "GMS-certified for intuitive use and essential applications." },
]

export function CapabilitiesSection() {
  return (
    <section className="capabilities">
      <div className="page-container">
        <h2 data-reveal className="section-title capabilities__title">Built for Smarter and Faster Frontline Operations</h2>
        <p data-reveal data-reveal-delay="1" className="capabilities__subtitle">
          Every capability supports faster work, fewer interruptions, and more dependable data.
        </p>
        <div className="capability-grid" data-reveal data-reveal-delay="2">
          {capabilities.map((item) => {
            return (
              <div
                key={item.title}
                className="capability-card"
                tabIndex={0}
              >
                <span className="capability-icon" aria-hidden="true"><img src={item.icon} alt="" /></span>
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
