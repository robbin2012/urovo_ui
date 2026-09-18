import { ArrowRight } from "lucide-react"

const loop = ["Capture", "Connect", "Process", "Act"]

export function DataActionSection() {
  return (
    <section id="software" className="data-section">
      <div className="page-container">
        <h2 className="section-title">From Data Capture to Business Action</h2>
        <p className="section-description">UROVO devices, software and cloud services work together in one continuous operational loop.</p>
        <div className="data-grid">
          <div className="data-loop" aria-label="Operational loop: Capture, Connect, Process, Act">
            <div className="loop-ring"><div className="loop-center"><img src="/images/design/capture-icon.png" alt="" /></div><i /><i /><i /><i /></div>
            {loop.map((label, i) => <div key={label} className={`loop-step step-${i + 1}`}><span>0{i + 1}</span>{label}</div>)}
          </div>
          <div className="data-card">
            <img src="/images/design/capture.webp" alt="A parcel label being verified using a handheld device" />
            <div className="data-caption">
              <h3>Capture Accurate Data at the Frontline</h3>
              <p>Use mobile computers, wearables, barcode scanners and RFID devices to collect the information your operations depend on.</p>
              <a href="#industries">Explore Industry <ArrowRight /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
