"use client"

import { useEffect, useState } from "react"
import { Search, Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react"

const navItems = ["Products", "Software", "Resources", "Partners", "Support", "About"]
const navTargets: Record<string, string> = { Products: "/products", Software: "#software", Resources: "#resources", Partners: "#partners", Support: "#footer", About: "#stories" }
const industryMenus = [
  { title: "Retail", description: "Bring together mobile computers, barcode scanners, RFID devices, payment terminals, printers and software to support connected retail operations, from inventory and fulfillment to customer service and checkout.", image: "/images/design/retail.webp" },
  { title: "Logistics & Transportation", description: "Connect teams, goods and information across warehouses, transportation networks and last-mile delivery with rugged devices, reliable data capture, mobile printing and device software.", image: "/images/design/watsons.webp" },
  { title: "Manufacturing", description: "Connect production teams with enterprise devices and data capture tools for greater visibility, accuracy and control across manufacturing operations.", image: "/images/design/blog-factory.webp" },
  { title: "Hospitality", description: "Support frontline service teams with connected mobile devices, secure payment technology and dependable data capture tools that keep guest experiences moving.", image: "/images/design/miniso.webp" },
  { title: "Utilities", description: "Keep field operations connected with rugged mobile computers and reliable access to work orders, asset information and operational data in demanding environments.", image: "/images/hero-manufacturing.jpg" },
  { title: "Healthcare", description: "Help care teams capture accurate information, identify patients and assets, and stay connected with purpose-built mobile devices and scanning technology.", image: "/images/design/capture.webp" },
  { title: "Financial Technology", description: "Bring secure payment technology, smart terminals and mobile devices to customer-facing financial operations and modern transaction workflows.", image: "/images/design/banks.webp" },
]
const productCategories = ["Mobile Computers", "Wearables", "Tablets", "RFID Devices", "Barcode Scanners", "Printers", "Smart Payment Terminals", "Smart Mobile Terminals"]
const productImages = ["资源 1.png", "资源 2.png", "资源 10.png"]
const productCatalog: Record<string, { models: string[]; description: string }> = {
  "Mobile Computers": { models: ["DT610", "DT510", "DT66", "CT58", "CT48", "DT50", "DT40", "CT30", "DT30", "CT18"], description: "Rugged mobile computing for receiving, inventory, picking, inspections, and connected frontline workflows." },
  Wearables: { models: ["U2", "U2 Pro", "U2 UHF", "R70", "R70 Pro", "W20", "W20 Pro", "U3", "R50", "W10"], description: "Hands-free wearable technology for high-volume scanning, picking, sorting, and warehouse operations." },
  Tablets: { models: ["P8100", "P8100P", "P8100H", "RT40", "RT40 Pro", "P9000", "P8080", "P8200", "RT30", "RT50"], description: "Rugged large-screen tablets for field service, inspections, mobile operations, and team collaboration." },
  "RFID Devices": { models: ["DT50P UHF", "RT40 UHF", "FR1000", "FR2000", "U2 UHF", "RF100", "RF200", "DT66 UHF", "CT58 UHF", "R70 UHF"], description: "Enterprise RFID devices for inventory counts, asset tracking, receiving, and item-level visibility." },
  "Barcode Scanners": { models: ["SR5600", "SR5600P", "8160", "8100", "SR5000", "SR6000", "SC100", "SC200", "SR30", "SR40"], description: "Fast, accurate barcode capture for retail counters, warehouses, production lines, and logistics workflows." },
  Printers: { models: ["K329", "K419", "D6000", "K329 Pro", "K419 Pro", "M320", "M420", "P300", "P400", "D8000"], description: "Reliable mobile and desktop printing for receipts, labels, tickets, and on-demand documentation." },
  "Smart Payment Terminals": { models: ["i9000", "i9100", "i5000", "i2000", "i3000", "i6000", "i7000", "i9000 Pro", "i9100 Pro", "iMini"], description: "Secure smart payment terminals for modern checkout, hospitality, mobility, and customer transactions." },
  "Smart Mobile Terminals": { models: ["DT50S", "DT50D", "V5100", "V5000", "DT40S", "DT40D", "V7000", "V6000", "S2000", "S3000"], description: "Versatile smart terminals combining mobility, data capture, communication, and business applications." },
}
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

function dropdownClassName(sticky: boolean, dismissed: boolean, forcedOpen = false) {
  return `nav-dropdown ${sticky ? "nav-dropdown--sticky" : ""} ${dismissed ? "nav-dropdown--dismissed" : ""} ${forcedOpen ? "nav-dropdown--forced-open" : ""} pointer-events-none invisible absolute top-full z-[70] opacity-0 transition-[opacity,visibility] duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100`
}

function DropdownCloseButton({ onClose }: { onClose: () => void }) {
  return <button type="button" className="nav-dropdown__close" aria-label="Close menu" onClick={onClose}><X aria-hidden="true" /></button>
}

function IndustriesDropdown({ sticky, linkClass, onOpenChange, forcedOpen, onForceClose }: { sticky: boolean; linkClass: string; onOpenChange: (open: boolean) => void; forcedOpen: boolean; onForceClose: () => void }) {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [dismissed, setDismissed] = useState(false)
  const industry = industryMenus[activeIndustry]
  const close = () => {
    setDismissed(true)
    onOpenChange(false)
    onForceClose()
  }
  return (
    <div className="mega-nav industries-nav group relative" onMouseEnter={() => onOpenChange(true)} onMouseLeave={() => onOpenChange(false)}>
      <a href="#industries" aria-haspopup="true" className={linkClass} onMouseEnter={() => setDismissed(false)}>Industries</a>
      <div className={dropdownClassName(sticky, dismissed, forcedOpen)}>
        <DropdownCloseButton onClose={close} />
        <div className="industries-menu">
          <nav className="industries-menu__categories" aria-label="Industry categories">
            <ul>
              {industryMenus.map((industryItem, index) => (
                <li key={industryItem.title}>
                  <button type="button" className={index === activeIndustry ? "is-active" : ""} onMouseEnter={() => setActiveIndustry(index)} onFocus={() => setActiveIndustry(index)}>
                    {industryItem.title}
                    {index === activeIndustry && <ChevronRight aria-hidden="true" />}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="industries-menu__detail">
            <div className="industries-menu__copy">
              <h2>{industry.title}</h2>
              <p>{industry.description}</p>
              <a href="#industries">View {industry.title} solutions <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="industries-menu__media">
              <img src={industry.image} alt={`${industry.title} solutions`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductsDropdown({ sticky, linkClass, onOpenChange }: { sticky: boolean; linkClass: string; onOpenChange: (open: boolean) => void }) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState(0)
  const [dismissed, setDismissed] = useState(false)
  const category = productCategories[activeCategory]
  const products = productCatalog[category]
  const close = () => {
    setDismissed(true)
    onOpenChange(false)
  }

  return (
    <div className="mega-nav group relative" onMouseEnter={() => onOpenChange(true)} onMouseLeave={() => onOpenChange(false)}>
      <a href="/products" aria-haspopup="true" className={linkClass} onMouseEnter={() => setDismissed(false)}>Products</a>
      <div className={dropdownClassName(sticky, dismissed)}>
        <DropdownCloseButton onClose={close} />
        <div className="products-menu">
          <nav className="products-menu__categories" aria-label="Product categories">
            {productCategories.map((categoryName, index) => (
              <button key={categoryName} type="button" className={index === activeCategory ? "is-active" : ""} onMouseEnter={() => { setActiveCategory(index); setPreviewIndex(null) }} onFocus={() => { setActiveCategory(index); setPreviewIndex(null) }}>
                {categoryName}
                {index === activeCategory && <ChevronRight aria-hidden="true" />}
              </button>
            ))}
          </nav>
          <div className="products-menu__catalog" onMouseLeave={() => setPreviewIndex(null)}>
            <div className="products-menu__heading">
              <strong>{category}</strong>
              <a href="/products">View all products <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="products-menu__grid">
              {products.models.map((model, index) => (
                <a href="/products" className="products-menu__card" key={`${model}-${index}`} onMouseEnter={() => setPreviewIndex(index)} onMouseLeave={() => setPreviewIndex(null)} onFocus={() => setPreviewIndex(index)} onBlur={() => setPreviewIndex(null)}>
                  <img src={`/images/revised_images/1x/${productImages[index % productImages.length]}`} alt={model} />
                  <strong>{model}</strong>
                </a>
              ))}
              {products.models.map((model, index) => {
                const direction = index % 5 <= 2 ? "right" : "left"
                return <div key={`preview-${model}-${index}`} className={`products-menu__floating-preview products-menu__floating-preview--${direction} ${previewIndex === index ? "is-visible" : ""}`} aria-hidden={previewIndex !== index}>
                  <img src={`/images/revised_images/1x/${productImages[index % productImages.length]}`} alt="" />
                  <strong>{model}</strong>
                  <p>{products.description}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureDropdown({ item, sticky, linkClass, onOpenChange }: { item: string; sticky: boolean; linkClass: string; onOpenChange: (open: boolean) => void }) {
  const menu = featureMenus[item]
  const [dismissed, setDismissed] = useState(false)
  const close = () => {
    setDismissed(true)
    onOpenChange(false)
  }
  return (
    <div className="mega-nav group relative" onMouseEnter={() => onOpenChange(true)} onMouseLeave={() => onOpenChange(false)}>
      <a href={navTargets[item]} aria-haspopup="true" className={linkClass} onMouseEnter={() => setDismissed(false)}>{item}</a>
      <div className={dropdownClassName(sticky, dismissed)}>
        <DropdownCloseButton onClose={close} />
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

function HeaderContent({ sticky, solid = false, open, setOpen, forceIndustriesOpen, onDesktopMenuOpenChange }: { sticky: boolean; solid?: boolean; open: boolean; setOpen: (value: boolean) => void; forceIndustriesOpen: boolean; onDesktopMenuOpenChange: (open: boolean) => void }) {
  const darkText = sticky || solid
  const desktopLinkClass = `flex items-center gap-1 transition-colors ${darkText ? "text-brand-navy/85 hover:text-brand" : "text-white/90 hover:text-white"}`
  const handleOtherMenuOpenChange = (menuOpen: boolean) => {
    if (menuOpen) setOpen(false)
    onDesktopMenuOpenChange(menuOpen)
  }

  return (
    <div className={`header-content page-container flex items-center justify-between transition-all duration-300 ${sticky ? "min-h-[76px]" : ""}`}>
      <a href="/" aria-label="UROVO home"><img src="/images/revised_images/SVG/logo.svg" alt="UROVO" className="site-logo" /></a>
      <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
        <IndustriesDropdown sticky={sticky} linkClass={desktopLinkClass} onOpenChange={onDesktopMenuOpenChange} forcedOpen={forceIndustriesOpen} onForceClose={() => setOpen(false)} />
        {navItems.map((item) => {
          if (item === "Support") return <a key={item} href={navTargets[item]} className={desktopLinkClass} onMouseEnter={() => setOpen(false)}>{item}</a>
          if (item === "Products") return <ProductsDropdown key={item} sticky={sticky} linkClass={desktopLinkClass} onOpenChange={handleOtherMenuOpenChange} />
          return <FeatureDropdown key={item} item={item} sticky={sticky} linkClass={desktopLinkClass} onOpenChange={handleOtherMenuOpenChange} />
        })}
      </nav>
      <div className="header-tools flex items-center gap-4">
        <div className="header-search-slot relative hidden flex-shrink-0 sm:block">
          <form
            role="search"
            className={`header-action header-search-form group absolute right-0 top-0 z-10 flex h-9 w-9 items-center justify-end gap-2 overflow-hidden rounded-full border border-current/25 px-2 ${darkText ? "text-brand-navy/80" : "text-white/90"}`}
          >
            <input
              type="search"
              aria-label="Search"
              className="order-first min-w-0 flex-1 border-0 bg-transparent text-sm text-current opacity-0 outline-none ring-0 transition-opacity duration-500 delay-100 focus:border-0 focus:outline-none focus:ring-0 focus-visible:!outline-none focus-visible:!ring-0 group-hover:opacity-100 group-focus-within:opacity-100"
            />
            <Search className="h-5 w-5 flex-shrink-0" />
          </form>
        </div>
        <button className={`header-language header-action group hidden items-center gap-1 text-sm font-medium sm:flex ${darkText ? "text-brand-navy/80" : "text-white/90"}`}>EN <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" /></button>
        <a href="#contact" className={`cta-button rounded-full px-5 py-2 text-sm font-semibold ${darkText ? "bg-brand text-white" : "cta-button--light bg-white text-brand-navy"}`}>Talk to Sales</a>
        <button
          type="button"
          aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}
          className="header-menu-toggle header-action group hidden flex-col items-center justify-center gap-1.5 lg:inline-flex"
        >
          <span className={`h-0.5 w-6 rounded-full transition-all group-hover:w-4 ${darkText ? "bg-brand-navy" : "bg-white"}`} />
          <span className={`h-0.5 w-4 rounded-full transition-all group-hover:w-6 ${darkText ? "bg-brand-navy" : "bg-white"}`} />
          <span className={`h-0.5 w-6 rounded-full transition-all group-hover:w-4 ${darkText ? "bg-brand-navy" : "bg-white"}`} />
        </button>
        <button type="button" aria-label="Toggle menu" aria-expanded={open} className={`header-action rounded-md p-1 lg:hidden ${darkText ? "text-brand-navy" : "text-white"}`} onClick={() => setOpen(!open)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
    </div>
  )
}

function MobileMenu({ sticky, open }: { sticky: boolean; open: boolean }) {
  return <div className={`mobile-menu lg:hidden ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open}><nav className="flex flex-col gap-4 text-sm font-medium">{navItems.map((item) => <a key={item} href={navTargets[item]} className="text-brand-navy/85 hover:text-brand">{item}</a>)}</nav></div>
}

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)

  useEffect(() => {
    if ((!desktopMenuOpen && !open) || !window.matchMedia("(min-width: 1024px)").matches) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [desktopMenuOpen, open])

  useEffect(() => {
    let previousY = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      const movingUp = currentY < previousY - 5
      const movingDown = currentY > previousY + 5
      if (currentY <= 80 || movingDown) {
        setShowSticky(false)
        const focusedElement = document.activeElement
        if (focusedElement instanceof HTMLElement && focusedElement.closest(".mega-nav")) focusedElement.blur()
      }
      else if (movingUp) setShowSticky(true)
      previousY = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <>
    <header className={`site-header absolute inset-x-0 top-0 z-50 ${solid ? "site-header--solid" : ""} ${open && !showSticky ? "site-header--menu-open" : ""}`}><HeaderContent sticky={false} solid={solid} open={open} setOpen={setOpen} forceIndustriesOpen={open && !showSticky} onDesktopMenuOpenChange={setDesktopMenuOpen} /><MobileMenu sticky={false} open={open} /></header>
    <header className={`sticky-header fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${showSticky ? "sticky-header--visible translate-y-0 opacity-100" : "sticky-header--hidden pointer-events-none -translate-y-full opacity-0"}`}>
      <div className="sticky-header-bar"><HeaderContent sticky={true} open={open} setOpen={setOpen} forceIndustriesOpen={open && showSticky} onDesktopMenuOpenChange={setDesktopMenuOpen} /><MobileMenu sticky={true} open={open} /></div>
    </header>
  </>
}
