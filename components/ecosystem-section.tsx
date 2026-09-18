const partners = [
  { name: "StayLinked", tag: "TERMINAL EMULATION", asset: 8 },
  { name: "Springdel", tag: "DEVICE MANAGEMENT", asset: 7 },
  { name: "ivanti", tag: "ENTERPRISE PLATFORM", asset: 6 },
  { name: "android", tag: "CERTIFICATION", asset: 5 },
  { name: "EMVCo", tag: "CERTIFICATION", asset: 4 },
  { name: "Qualcomm", tag: "TECHNOLOGY PLATFORM", asset: 3 },
]
export function EcosystemSection() {
  return <section id="partners" className="ecosystem-section page-container">
    <h2 className="section-title">UROVO Technology Ecosystem</h2>
    <div className="partner-grid">{partners.map((p) => <div key={p.name} className="partner">
      <img src={`/ybx_static/out/images/revised_images/SVG/资源 ${p.asset}.svg`} alt={p.name} />
      <p>{p.tag}</p>
    </div>)}</div>
  </section>
}
