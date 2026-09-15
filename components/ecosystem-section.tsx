const partners = [
  { name: "StayLinked", tag: "TERMINAL EMULATION" },
  { name: "Springdel", tag: "DEVICE MANAGEMENT" },
  { name: "ivanti", tag: "ENTERPRISE PLATFORM" },
  { name: "android", tag: "CERTIFICATION" },
  { name: "EMVCo", tag: "CERTIFICATION" },
  { name: "Qualcomm", tag: "TECHNOLOGY PLATFORM" },
]

export function EcosystemSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">UROVO Technology Ecosystem</h2>

      <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
        {partners.map((p) => (
          <div key={p.name} className="border-l border-border pl-6 first:border-l-0 first:pl-0 lg:border-l lg:first:border-l-0 lg:first:pl-6">
            <div className="text-xl font-bold text-brand-navy">{p.name}</div>
            <div className="mt-2 text-[10px] font-medium tracking-wide text-muted-foreground">{p.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
