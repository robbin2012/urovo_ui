"use client"

import { useEffect, useState } from "react"
import { Search, Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react"

const navItems = ["Products", "Software", "Resources", "Partners", "Support", "About"]
const navTargets: Record<string, string> = { Products: "#products", Software: "#software", Resources: "#resources", Partners: "#partners", Support: "#footer", About: "#stories" }
const industryItems = ["Retail", "Logistics & Transportation", "Manufacturing", "Hospitality", "Utilities", "Healthcare", "Financial Technology"]
const productCategories = ["Mobile Computers", "Wearables", "Tablets", "RFID Devices", "Barcode Scanners", "Printers", "Smart Payment Terminals", "Smart Mobile Terminals"]
const productModels = ["DT610", "DT610", "DT510", "DT66", "SR5600", "DT610", "DT610", "DT510", "DT66", "SR5600", "DT610", "DT610", "DT510", "DT66", "SR5600"]
const featureMenus: Record<string, { title?: string; description?: string; links: string[]; image: string; imageAlt: string; cta?: string }> = {
  Software: {
    title: "UROVO Enterprise Enabler (UEE)",
    description: "UROVO UEE integrates Mobile Device Management, application management and AI capabilities across the full device lifecycle, helping enterprises reduce device management costs.",
    links: ["UEE Platform", "Device Provisioning", "Device Applications", "Cloud Services", "AI Applications"],
    image: "/images/drop3.png",
    imageAlt: "UROVO Enterprise Enabler platform",
    cta: "Learn more",
  },
  Resources: {
    links: ["Customer Stories", "White Papers", "Videos", "Blog", "Newsroom", "Download Center"],
    image: "/images/drop4.png",
    imageAlt: "UROVO technology resources",
  },
  Partners: {
    links: ["Become a Partner", "Partner Case", "Technology Partner", "Partner Portal"],
    image: "/images/drop5.png",
    imageAlt: "UROVO partners",
  },
  About: {
    links: ["Who we are", "Innovation & R&D", "ESG", "Careers", "Contact Us"],
    image: "/images/drop6.png",
    imageAlt: "About UROVO",
  },
}

function dropdownClassName(sticky: boolean) {
  return `nav-dropdown ${sticky ? "nav-dropdown--sticky" : ""} pointer-events-none invisible absolute top-full z-[70] opacity-0 transition-[opacity,visibility] duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100`
}

function IndustriesDropdown({ sticky, linkClass }: { sticky: boolean; linkClass: string }) {
  return (
    <div className="mega-nav industries-nav group relative">
      <a href="#industries" aria-haspopup="true" className={linkClass}>Industries</a>
      <div className={dropdownClassName(sticky)}>
        <div className="industries-menu">
          <nav className="industries-menu__categories" aria-label="Industry categories">
            <ul>
              {industryItems.map((industry, index) => (
                <li key={industry}>
                  <a href="#industries" className={index === 0 ? "is-active" : ""}>
                    {industry}
                    {index === 0 && <ChevronRight aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="industries-menu__detail">
            <div className="industries-menu__copy">
              <h2>Retail</h2>
              <p>UROVO empowers retail teams with fast, accurate mobile data capture - from inventory and shelf management to checkout and loss prevention - driving seamless in-store and omnichannel operations.</p>
              <a href="#industries">View all solutions <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="industries-menu__media">
              <img src="/images/drop1.png" alt="Retail solutions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductsDropdown({ sticky, linkClass }: { sticky: boolean; linkClass: string }) {
  return (
    <div className="mega-nav group relative">
      <a href="#products" aria-haspopup="true" className={linkClass}>Products</a>
      <div className={dropdownClassName(sticky)}>
        <div className="products-menu">
          <nav className="products-menu__categories" aria-label="Product categories">
            {productCategories.map((category, index) => (
              <a key={category} href="#products" className={index === 0 ? "is-active" : ""}>
                {category}
                {index === 0 && <ChevronRight aria-hidden="true" />}
              </a>
            ))}
          </nav>
          <div className="products-menu__catalog">
            <div className="products-menu__heading">
              <strong>All</strong>
              <a href="#products">View all products <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="products-menu__grid">
              {productModels.map((model, index) => (
                <a href="#products" className="products-menu__card" key={`${model}-${index}`}>
                  <span aria-hidden="true">U</span>
                  <strong>{model}</strong>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureDropdown({ item, sticky, linkClass }: { item: string; sticky: boolean; linkClass: string }) {
  const menu = featureMenus[item]
  return (
    <div className="mega-nav group relative">
      <a href={navTargets[item]} aria-haspopup="true" className={linkClass}>{item}</a>
      <div className={dropdownClassName(sticky)}>
        <div className={`feature-menu ${menu.title ? "feature-menu--software" : ""}`}>
          <div className="feature-menu__content">
            {menu.title && <h2>{menu.title}</h2>}
            {menu.description && <p>{menu.description}</p>}
            <nav className="feature-menu__links" aria-label={`${item} menu`}>
              {menu.links.map((link) => <a href={navTargets[item]} key={link}>{link}</a>)}
            </nav>
            {menu.cta && <a className="feature-menu__cta" href={navTargets[item]}>{menu.cta} <ArrowRight aria-hidden="true" /></a>}
          </div>
          <div className="feature-menu__media"><img src={menu.image} alt={menu.imageAlt} /></div>
        </div>
      </div>
    </div>
  )
}

function HeaderContent({ sticky, open, setOpen }: { sticky: boolean; open: boolean; setOpen: (value: boolean) => void }) {
  const desktopLinkClass = `flex items-center gap-1 transition-colors ${sticky ? "text-brand-navy/85 hover:text-brand" : "text-white/90 hover:text-white"}`

  return (
    <div className={`header-content page-container flex items-center justify-between transition-all duration-300 ${sticky ? "min-h-[76px]" : ""}`}>
      <a href="#top" aria-label="UROVO home"><img src="/images/revised_images/SVG/logo.svg" alt="UROVO" className="site-logo" /></a>
      <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
        <IndustriesDropdown sticky={sticky} linkClass={desktopLinkClass} />
        {navItems.map((item) => {
          if (item === "Support") return <a key={item} href={navTargets[item]} className={desktopLinkClass}>{item}</a>
          if (item === "Products") return <ProductsDropdown key={item} sticky={sticky} linkClass={desktopLinkClass} />
          return <FeatureDropdown key={item} item={item} sticky={sticky} linkClass={desktopLinkClass} />
        })}
      </nav>
      <div className="flex items-center gap-4">
        <div className="relative hidden h-9 w-9 flex-shrink-0 sm:block">
          <form
            role="search"
            className={`header-action header-search-form group absolute right-0 top-0 z-10 flex h-9 w-9 items-center justify-end gap-2 overflow-hidden rounded-full border border-current/25 px-2 ${sticky ? "text-brand-navy/80" : "text-white/90"}`}
          >
            <input
              type="search"
              aria-label="Search"
              className="order-first min-w-0 flex-1 border-0 bg-transparent text-sm text-current opacity-0 outline-none ring-0 transition-opacity duration-500 delay-100 focus:border-0 focus:outline-none focus:ring-0 focus-visible:!outline-none focus-visible:!ring-0 group-hover:opacity-100 group-focus-within:opacity-100"
            />
            <Search className="h-5 w-5 flex-shrink-0" />
          </form>
        </div>
        <button className={`header-action group hidden items-center gap-1 text-sm font-medium sm:flex ${sticky ? "text-brand-navy/80" : "text-white/90"}`}>EN <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" /></button>
        <a href="#contact" className={`cta-button rounded-full px-5 py-2 text-sm font-semibold ${sticky ? "bg-brand text-white" : "cta-button--light bg-white text-brand-navy"}`}>Talk to Sales</a>
        <button
          type="button"
          aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}
          className="header-action group hidden h-7 w-7 flex-col items-center justify-center gap-1.5 lg:inline-flex"
        >
          <span className={`h-0.5 w-6 rounded-full transition-all group-hover:w-4 ${sticky ? "bg-brand-navy" : "bg-white"}`} />
          <span className={`h-0.5 w-4 rounded-full transition-all group-hover:w-6 ${sticky ? "bg-brand-navy" : "bg-white"}`} />
          <span className={`h-0.5 w-6 rounded-full transition-all group-hover:w-4 ${sticky ? "bg-brand-navy" : "bg-white"}`} />
        </button>
        <button type="button" aria-label="Toggle menu" aria-expanded={open} className={`header-action rounded-md p-1 lg:hidden ${sticky ? "text-brand-navy" : "text-white"}`} onClick={() => setOpen(!open)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
    </div>
  )
}

function MobileMenu({ sticky, open }: { sticky: boolean; open: boolean }) {
  if (!open) return null
  return <div className={`border-t px-6 py-4 backdrop-blur-xl ${sticky ? "border-brand-navy/10 bg-white/80" : "border-white/10 bg-brand-navy/90"}`}><nav className="flex flex-col gap-4 text-sm font-medium">{navItems.map((item) => <a key={item} href={navTargets[item]} className={sticky ? "text-brand-navy/85 hover:text-brand" : "text-white/90 hover:text-white"}>{item}</a>)}</nav></div>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    let previousY = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      const movingUp = currentY < previousY - 5
      const movingDown = currentY > previousY + 5
      if (currentY <= 80 || movingDown) setShowSticky(false)
      else if (movingUp) setShowSticky(true)
      previousY = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <>
    <header className="site-header absolute inset-x-0 top-0 z-50"><HeaderContent sticky={false} open={open} setOpen={setOpen} /><MobileMenu sticky={false} open={open} /></header>
    <header className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${showSticky ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
      <div className="sticky-header-bar"><HeaderContent sticky={true} open={open} setOpen={setOpen} /><MobileMenu sticky={true} open={open} /></div>
    </header>
  </>
}
