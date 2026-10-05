import Image from "next/image"

const steps = [
  {
    name: "CAPTURE",
    description: "Capture barcode, RFID, voice, and other frontline data with UROVO devices. Turn everyday activity into digital information your business can use.",
    image: "/images/workflow/data-capture.jpg",
    alt: "Frontline worker capturing operational data with a UROVO device",
  },
  {
    name: "CONNECT",
    description: "Connect people, devices, and business systems through reliable networks and seamless integration. Move information where it is needed.",
    image: "/images/workflow/data-connect.jpg",
    alt: "Connected UROVO devices supporting frontline operations",
  },
  {
    name: "INTELLIGENCE",
    description: "Transform operational data into actionable intelligence with analytics and AI. Reveal patterns and gain real-time visibility.",
    image: "/images/workflow/data-process.jpg",
    alt: "Operational data transformed into actionable intelligence",
  },
  {
    name: "ACTION",
    description: "Turn intelligence into decisions and action. Trigger workflows, assign tasks, print labels, process payments, and keep work moving.",
    image: "/images/workflow/data-act.jpg",
    alt: "Frontline worker taking action with a UROVO mobile computer",
  },
]

export function Home6DataActionSection() {
  return (
    <section id="software" className="home6-data-action" aria-labelledby="home6-data-action-title">
      <header className="home6-data-action__header">
        <h2 id="home6-data-action-title">From Data Capture to Business Action</h2>
        <p>One connected workflow turns frontline information into faster, more confident action.</p>
      </header>

      <div className="home6-data-action__grid">
        {steps.map((step, index) => (
          <article className="home6-data-action__card" key={step.name}>
            <div className="home6-data-action__visual">
              <Image src={step.image} alt={step.alt} fill sizes="(max-width: 760px) 100vw, 25vw" />
              <span aria-hidden="true" />
            </div>
            <div className="home6-data-action__copy">
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
