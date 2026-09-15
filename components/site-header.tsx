"use client"

import { useEffect, useState } from "react"
import { Search, Menu, X, ChevronDown } from "lucide-react"

const navItems = ["Products", "Software", "Tools", "Support", "Partners", "About Urovo"]

function HeaderContent({ sticky, open, setOpen }: { sticky: boolean; open: boolean; setOpen: (value: boolean) => void }) {
  return (
    <div className={`mx-auto flex items-center justify-between px-5 py-4 transition-all duration-300 lg:px-7 ${sticky ? "min-h-[76px]" : "max-w-[1280px]"}`}>
      <a href="#top" className="text-2xl font-bold tracking-tight">Urovo<span className="text-brand">+</span></a>
      <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
        {navItems.map((item) => (
          <a key={item} href="#" className={`flex items-center gap-1 transition-colors ${sticky ? "text-brand-navy/85 hover:text-brand" : "text-white/90 hover:text-white"}`}>
            {item}
            {(item === "Products" || item === "Software") && <ChevronDown className="h-4 w-4 opacity-60" />}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button aria-label="Search" className={`hidden transition-colors hover:text-brand sm:block ${sticky ? "text-brand-navy/80" : "text-white/90"}`}><Search className="h-5 w-5" /></button>
        <button className={`hidden items-center gap-1 text-sm font-medium transition-colors hover:text-brand sm:flex ${sticky ? "text-brand-navy/80" : "text-white/90"}`}>EN <ChevronDown className="h-4 w-4" /></button>
        <a href="#contact" className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${sticky ? "bg-brand text-white hover:bg-brand/90" : "bg-white text-brand-navy hover:bg-white/90"}`}>Talk to Sales</a>
        <button
          type="button"
          aria-label="Open menu"
          className="group hidden h-7 w-7 flex-col items-center justify-center gap-1.5 lg:inline-flex"
        >
          <span className={`h-0.5 w-6 rounded-full transition-all group-hover:w-4 ${sticky ? "bg-brand-navy" : "bg-white"}`} />
          <span className={`h-0.5 w-4 rounded-full transition-all group-hover:w-6 ${sticky ? "bg-brand-navy" : "bg-white"}`} />
          <span className={`h-0.5 w-6 rounded-full transition-all group-hover:w-4 ${sticky ? "bg-brand-navy" : "bg-white"}`} />
        </button>
        <button type="button" aria-label="Toggle menu" aria-expanded={open} className={`lg:hidden ${sticky ? "text-brand-navy" : "text-white"}`} onClick={() => setOpen(!open)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
    </div>
  )
}

function MobileMenu({ sticky, open }: { sticky: boolean; open: boolean }) {
  if (!open) return null
  return <div className={`border-t px-6 py-4 backdrop-blur-xl lg:hidden ${sticky ? "border-brand-navy/10 bg-white/80" : "border-white/10 bg-brand-navy/90"}`}><nav className="flex flex-col gap-4 text-sm font-medium">{navItems.map((item) => <a key={item} href="#" className={sticky ? "text-brand-navy/85 hover:text-brand" : "text-white/90 hover:text-white"}>{item}</a>)}</nav></div>
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
    <header className="absolute inset-x-0 top-0 z-50"><HeaderContent sticky={false} open={open} setOpen={setOpen} /><MobileMenu sticky={false} open={open} /></header>
    <header className={`fixed inset-x-0 top-0 z-[60] px-3 transition-all duration-500 md:px-5 ${showSticky ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
      <div className="overflow-hidden rounded-b-lg rounded-t-none border-x border-b border-white/80 bg-white/60 shadow-[0_14px_40px_rgba(10,19,48,0.14)] backdrop-blur-[28px] backdrop-saturate-[1.9]"><HeaderContent sticky={true} open={open} setOpen={setOpen} /><MobileMenu sticky={true} open={open} /></div>
    </header>
  </>
}
