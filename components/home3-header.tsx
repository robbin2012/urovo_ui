import { Search } from "lucide-react"

const links = [
  { label: "Products", href: "/products/" },
  { label: "Software", href: "#software" },
  { label: "Tools", href: "#products" },
  { label: "Support", href: "#footer" },
  { label: "Partners", href: "#partners" },
  { label: "About Urovo", href: "#footer" },
]

export function Home3Header() {
  return (
    <header className="home3-header">
      <div className="home3-header__inner page-container">
        <a className="home3-header__logo" href="/home3/" aria-label="UROVO home">
          <img src="/images/revised_images/SVG/logo.svg" alt="UROVO" />
        </a>
        <nav className="home3-header__nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="home3-header__tools">
          <button type="button" aria-label="Search"><Search aria-hidden="true" /></button>
          <button type="button" aria-label="English language">EN</button>
          <a href="#contact">Talk to Sales</a>
        </div>
      </div>
    </header>
  )
}
