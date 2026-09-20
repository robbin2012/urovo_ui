import { ArrowRight } from "lucide-react"

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2C19.6 8 22 10.35 22 15.18V24h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-4V8z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H17V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.6V14h2.7v8h3.2z" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  )
}

const columns = [
  {
    title: "Products",
    links: ["Payment Terminals", "Mobile Computers", "RFID Devices", "Healthcare Devices", "Rugged Tablets", "Barcode Scanners"],
  },
  {
    title: "Investors",
    links: ["Corporate Information", "Corporate Governance"],
  },
  {
    title: "About Urovo",
    links: ["About us", "R&D Center", "News & Events", "Contact Urovo"],
  },
  {
    title: "Quick entry",
    links: [
      "FAQ",
      "Feedback",
      "Developer Portal",
      "Privacy",
      "Sitemap",
      "Partner Potrals",
      "Security Patch Support",
      "ISO9001 QUALITY MANAGEMENT SYSTEM CERTIFICATE",
    ],
  },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="site-footer text-white">
      <div className="page-container footer-inner">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/images/revised_images/SVG/logo.svg" alt="UROVO" />
            <div className="mt-6 flex gap-3">
              {[LinkedinIcon, FacebookIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  aria-label={["LinkedIn", "Facebook", "YouTube"][i]}
                  href="#"
                  className="footer-social-link flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-sm font-medium">Subscribe our newsletter</p>
              <form className="newsletter-form">
                <input
                  type="email" aria-label="Your email address" required
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button className="cta-button newsletter-submit inline-flex items-center rounded-full bg-brand text-xs font-semibold text-white">
                  <span>SUBMIT</span>
                  <ArrowRight aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>

          <div className="footer-links grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col, index) => (
              <div key={col.title} data-reveal data-reveal-delay={index === 0 ? undefined : String(index)}>
                <h4 className="text-sm font-normal">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs leading-relaxed text-white/60 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-copyright">
          <p className="text-xs text-white/40">© 2021 UROVO PTE. LIMITED All RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
