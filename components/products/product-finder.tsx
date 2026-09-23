"use client"

import { useMemo, useState } from "react"
import { ChevronDown, ArrowRight, X } from "lucide-react"

type Product = {
  name: string
  formFactor: "All-Touch" | "Keypad"
  displaySize: string
  connectivity: string
  os: string
  specs: string[]
  image: string
}

const products: Product[] = [
  { name: "DT610", formFactor: "All-Touch", displaySize: "5\"-5.9\"", connectivity: "5G + Wi-Fi 6", os: "Android 14-16", specs: ["5.7\"", "Android 11/13", "4-8GB+64-128GB"], image: "资源 2.png" },
  { name: "DT510", formFactor: "All-Touch", displaySize: "5\"-5.9\"", connectivity: "4G + Wi-Fi 6", os: "Android 11-13", specs: ["5.7\"", "Android 11/13", "4-8GB+64-128GB"], image: "资源 2.png" },
  { name: "DT50", formFactor: "All-Touch", displaySize: "5\"-5.9\"", connectivity: "4G + Wi-Fi 5", os: "Android 11-13", specs: ["5.7\"", "Android 11/13", "4-8GB+64-128GB"], image: "资源 2.png" },
  { name: "DT58", formFactor: "Keypad", displaySize: "Up to 4\"", connectivity: "4G + Wi-Fi 6", os: "Android 11-13", specs: ["5.7\"", "Android 11/13", "4-8GB+64-128GB"], image: "资源 2.png" },
  { name: "DT40", formFactor: "All-Touch", displaySize: "5\"-5.9\"", connectivity: "5G + Wi-Fi 6/6E", os: "Android 14-16", specs: ["5.5\"", "Android 13/14", "4-8GB+64-128GB"], image: "资源 2.png" },
  { name: "CT58", formFactor: "Keypad", displaySize: "Up to 4\"", connectivity: "4G + Wi-Fi 5", os: "Android 11-13", specs: ["4.0\"", "Android 11/13", "3-4GB+32-64GB"], image: "资源 2.png" },
  { name: "CT48", formFactor: "All-Touch", displaySize: "6\" and Above", connectivity: "5G + Wi-Fi 6", os: "Android 14-16", specs: ["6.3\"", "Android 13/14", "6-8GB+128GB"], image: "资源 2.png" },
  { name: "CT30", formFactor: "All-Touch", displaySize: "5\"-5.9\"", connectivity: "4G + Wi-Fi 6", os: "Android 11-13", specs: ["5.5\"", "Android 11/13", "4GB+64GB"], image: "资源 2.png" },
  { name: "DT66", formFactor: "Keypad", displaySize: "6\" and Above", connectivity: "5G + Wi-Fi 6/6E", os: "Android 14-16", specs: ["6.5\"", "Android 13/14", "8GB+128GB"], image: "资源 2.png" },
  { name: "DT30", formFactor: "All-Touch", displaySize: "Up to 4\"", connectivity: "4G + Wi-Fi 5", os: "Android 11-13", specs: ["4.0\"", "Android 11/13", "3-4GB+32-64GB"], image: "资源 2.png" },
  { name: "CT18", formFactor: "Keypad", displaySize: "Up to 4\"", connectivity: "4G + Wi-Fi 6", os: "Android 11-13", specs: ["3.5\"", "Android 11/13", "3GB+32GB"], image: "资源 2.png" },
]

const filterGroups = [
  { key: "formFactor", title: "Form Factor", options: ["All-Touch", "Keypad"] },
  { key: "displaySize", title: "Display Size", options: ["Up to 4\"", "5\"-5.9\"", "6\" and Above"] },
  { key: "connectivity", title: "Connectivity", options: ["4G + Wi-Fi 5", "4G + Wi-Fi 6", "5G + Wi-Fi 6/6E"] },
  { key: "os", title: "Operating System", options: ["Android 11-13", "Android 14-16"] },
] as const

type FilterKey = (typeof filterGroups)[number]["key"]

export function ProductFinder() {
  const [selected, setSelected] = useState<Record<FilterKey, string[]>>({
    formFactor: [],
    displaySize: [],
    connectivity: [],
    os: [],
  })
  const [collapsed, setCollapsed] = useState<Record<FilterKey, boolean>>({
    formFactor: false,
    displaySize: false,
    connectivity: false,
    os: false,
  })

  const toggle = (key: FilterKey, option: string) => {
    setSelected((current) => {
      const group = current[key]
      const next = group.includes(option) ? group.filter((item) => item !== option) : [...group, option]
      return { ...current, [key]: next }
    })
  }

  const clearAll = () => setSelected({ formFactor: [], displaySize: [], connectivity: [], os: [] })

  const activeChips = useMemo(
    () => filterGroups.flatMap((group) => selected[group.key].map((value) => ({ key: group.key, value }))),
    [selected],
  )

  const filtered = useMemo(
    () =>
      products.filter((product) =>
        filterGroups.every((group) => {
          const chosen = selected[group.key]
          return chosen.length === 0 || chosen.includes(product[group.key])
        }),
      ),
    [selected],
  )

  return (
    <section id="finder" className="finder">
      <div className="page-container">
        <h2 data-reveal className="section-title finder__title">Find the Right Mobile Computer for Your Team</h2>
        <p data-reveal data-reveal-delay="1" className="finder__subtitle">
          Filter by form factor, display size, connectivity, and more to find the right fit.
        </p>

        <div className="finder__layout" data-reveal data-reveal-delay="2">
          <aside className="filter-panel" aria-label="Filter products">
            <div className="filter-panel__head">
              <span>Filter Products</span>
            </div>
            {filterGroups.map((group) => (
              <div key={group.key} className="filter-group">
                <button
                  type="button"
                  className="filter-group__head"
                  aria-expanded={!collapsed[group.key]}
                  onClick={() => setCollapsed((current) => ({ ...current, [group.key]: !current[group.key] }))}
                >
                  {group.title}
                  <ChevronDown aria-hidden="true" className={collapsed[group.key] ? "is-collapsed" : ""} />
                </button>
                {!collapsed[group.key] && (
                  <ul className="filter-group__options">
                    {group.options.map((option) => (
                      <li key={option}>
                        <label>
                          <input
                            type="checkbox"
                            checked={selected[group.key].includes(option)}
                            onChange={() => toggle(group.key, option)}
                          />
                          <span>{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </aside>

          <div className="finder__main">
            <div className="finder__chips">
              {activeChips.length > 0 ? (
                <>
                  {activeChips.map((chip) => (
                    <button
                      type="button"
                      key={`${chip.key}-${chip.value}`}
                      className="finder__chip"
                      onClick={() => toggle(chip.key, chip.value)}
                    >
                      {chip.value}
                      <X aria-hidden="true" />
                    </button>
                  ))}
                  <button type="button" className="finder__chip-clear" onClick={clearAll}>Clear All</button>
                </>
              ) : (
                <span className="finder__chip-hint">Showing all mobile computers</span>
              )}
            </div>

            <p className="finder__count">{filtered.length} Products</p>

            <div className="product-grid">
              {filtered.map((product) => (
                <article key={product.name} className="product-card">
                  <div className="product-card__media image-zoom-frame">
                    <img src={`/images/revised_images/1x/${product.image}`} alt={product.name} />
                  </div>
                  <h3>{product.name}</h3>
                  <div className="product-card__specs">
                    {product.specs.map((spec) => (
                      <span key={spec}>{spec}</span>
                    ))}
                  </div>
                  <a href="#footer" className="product-card__link">
                    Learn More <span className="arrow-badge"><ArrowRight className="arrow-current" aria-hidden="true" /><ArrowRight className="arrow-incoming" aria-hidden="true" /></span>
                  </a>
                </article>
              ))}
              {filtered.length === 0 && (
                <p className="product-grid__empty">No products match the selected filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
