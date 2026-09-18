const partners = [
  { name: "StayLinked", tag: "TERMINAL EMULATION", asset: 8 },
  { name: "Springdel", tag: "DEVICE MANAGEMENT", asset: 7 },
  { name: "ivanti", tag: "ENTERPRISE PLATFORM", asset: 6 },
  { name: "android", tag: "CERTIFICATION", asset: 5 },
  { name: "EMVCo", tag: "CERTIFICATION", asset: 4 },
  { name: "Qualcomm", tag: "TECHNOLOGY PLATFORM", asset: 3 },
]

function PartnerSet({ hidden = false }: { hidden?: boolean }) {
  return <div className="partner-set" aria-hidden={hidden}>
    {partners.map((partner) => <div key={`${hidden ? "clone-" : ""}${partner.name}`} className="partner">
      <img src={`/images/revised_images/SVG/资源 ${partner.asset}.svg`} alt={hidden ? "" : partner.name} />
      <p>{partner.tag}</p>
    </div>)}
  </div>
}

export function EcosystemSection() {
  return <section id="partners" className="ecosystem-section page-container">
    <h2 data-reveal className="section-title">UROVO Technology Ecosystem</h2>
    <div data-reveal data-reveal-delay="1" className="partner-marquee" aria-label="Technology ecosystem partners">
      <div className="partner-track">
        <PartnerSet />
        <PartnerSet hidden />
      </div>
    </div>
  </section>
}
