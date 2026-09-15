import { ArrowRight } from "lucide-react"

export function TechCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#050a1c]">
      <img
        src="/ybx_static/out/images/tech-cube.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-1/2 h-[420px] w-auto -translate-y-1/2 object-contain opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a1c] via-[#050a1c]/80 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-28">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Find the Right Technology for Your Operations
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            With 24+ years in data acquisition, Seuic empowers global enterprises digital transformation with durable
            tools and AI technology.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
