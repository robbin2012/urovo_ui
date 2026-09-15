"use client"

import { useState } from "react"
import { Search, Menu, X, ChevronDown } from "lucide-react"

const navItems = ["Products", "Software", "Tools", "Support", "Partners", "About Urovo"]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 text-white">
        <a href="#" className="text-2xl font-bold tracking-tight">
          Urovo<span className="text-brand">+</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center gap-1 text-white/90 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden text-white/90 transition-colors hover:text-white sm:block">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white sm:flex">
            EN <ChevronDown className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-white/90">
            Talk to Sales
          </button>
          <button
            aria-label="Toggle menu"
            className="text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-navy/95 px-6 py-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-white">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-white/90 hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
