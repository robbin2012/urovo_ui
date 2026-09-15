import { ArrowRight } from "lucide-react"

const stories = [
  { name: "Watsons China", tag: "Retail", image: "/images/story-watsons.png" },
  { name: "Three Southern European Banks", tag: "Manufacturing", image: "/images/story-banks.png" },
  { name: "MINISO", tag: "Financial", image: "/images/story-miniso.png" },
]

export function CustomerStories() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24">
      <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">Real Customer Stories</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {stories.map((s) => (
          <article key={s.name} className="group relative overflow-hidden rounded-2xl">
            <img
              src={s.image}
              alt={s.name}
              className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs font-medium text-brand">{s.tag}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.name}</h3>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/25"
              >
                Read Customer Story
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
