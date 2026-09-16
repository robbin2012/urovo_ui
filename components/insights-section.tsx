import { ArrowLeft, ArrowRight, Plus } from "lucide-react"

const blogs = [
  {
    tag: "BLOG",
    title: "Bringing End-to-End Traceability to Wine: UROVO's RFID Solution in Action",
    date: "2026.08.08",
    image: "/images/blog-rfid.png",
  },
  {
    tag: "BLOG",
    title: "Bringing End-to-End Traceability to Wine: UROVO's RFID Solution in Action",
    date: "2026.08.08",
    image: "/images/blog-factory.png",
  },
]

export function InsightsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">Insights & News</h2>
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
          View All
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand">
            <Plus className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/news-building.png"
            alt="Modern geometric architecture building"
            className="h-full max-h-[300px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium text-brand">Market Views</span>
          <h3 className="mt-4 text-xl font-semibold leading-snug text-brand-navy">
            Step into the Future of Retail with UROVO at NRF 2026: Retail&apos;s Big Show!
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Customer story content is pending approval, including geography, deployed products, outcomes and the English
            story page.
          </p>
          <span className="mt-6 text-xs text-muted-foreground">2026.08.08</span>

          <div className="mt-8 flex items-center gap-4">
            <button
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="text-sm text-muted-foreground">02 / 04</span>
            <button
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:text-brand"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {blogs.map((b, i) => (
          <article key={i} className="flex gap-5">
            <img src={b.image} alt={b.title} className="h-28 w-40 flex-shrink-0 rounded-xl object-cover" />
            <div className="flex flex-col justify-center">
              <span className="text-xs font-medium text-brand">{b.tag}</span>
              <h4 className="mt-2 text-sm font-semibold leading-snug text-brand-navy">{b.title}</h4>
              <span className="mt-3 text-xs text-muted-foreground">{b.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
