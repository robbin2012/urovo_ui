import { ArrowRight } from "lucide-react"

const stats = [
  { value: "Since 2002", label: "Focused on AIDC and Enterprise Mobility" },
  { value: "100+", label: "Countries and Regions Worldwide" },
  { value: "Top 3", label: "Global Rugged Handheld Vendor" },
  { value: "400+", label: "R&D Professionals" },
]

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative min-h-[720px] w-full overflow-hidden">
        <img
          src="/images/hero-warehouse.png"
          alt="Warehouse worker in a hi-vis vest scanning boxes with a rugged handheld device"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative mx-auto flex min-h-[720px] max-w-[1280px] flex-col justify-center px-6 pb-40 pt-28">
          <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Devices and Software for Frontline Operations
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80">
            UROVO combines enterprise-grade devices and software to help teams capture data, connect workflows and keep
            operations moving.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-[1180px] px-6">
        <div className="grid grid-cols-2 gap-6 rounded-xl bg-white px-8 py-8 shadow-xl md:grid-cols-4 md:gap-4 md:px-10">
          {stats.map((s) => (
            <div key={s.value} className="border-l border-border pl-5 first:border-l-0 first:pl-0 md:border-l md:first:border-l-0">
              <div className="text-2xl font-bold text-brand-navy">{s.value}</div>
              <div className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
