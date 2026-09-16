import { ArrowRight, Camera } from "lucide-react"

const loop = [
  { num: "01", label: "Capture", pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
  { num: "02", label: "Connect", pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
  { num: "03", label: "Process", pos: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" },
  { num: "04", label: "Act", pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
]

export function DataActionSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(26,99,255,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(26,99,255,0.25), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 py-24">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">From Data Capture to Business Action</h2>
        <p className="mt-4 max-w-2xl text-sm text-white/70">
          UROVO devices, software and cloud services work together in one continuous operational loop.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
            <div className="relative mx-auto aspect-square w-full max-w-[320px]">
              <div className="absolute inset-8 rounded-full border-2 border-brand/60" />
              <div className="absolute inset-16 flex items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-white shadow-[0_0_40px_rgba(26,99,255,0.6)]">
                <Camera className="h-10 w-10" />
              </div>
              {loop.map((step) => (
                <div key={step.num} className={`absolute ${step.pos}`}>
                  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-lg">
                    <span className="text-brand">{step.num}</span>
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/data-capture.png"
              alt="Hands holding a parcel with a QR label and a phone showing a secured checkmark"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <h3 className="text-xl font-semibold text-white">Capture Accurate Data at the Frontline</h3>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Use mobile computers, wearables, barcode scanners and RFID devices to collect the information your
                operations depend on.
              </p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Explore Industry
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
