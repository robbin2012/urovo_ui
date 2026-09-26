import { SiteHeader } from "@/components/site-header"
import { Home3Hero } from "@/components/home3-hero"
import { Home3Stats } from "@/components/home3-stats"
import { Home3Products } from "@/components/home3-products"
import { Home3DataActionSection } from "@/components/home3-data-action-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { Home3IndustrySolutions } from "@/components/home3-industry-solutions"
import { CustomerStories } from "@/components/home3-customer-stories"
import { Home3TechCtaSection } from "@/components/home3-tech-cta-section"
import { Home3InsightsSection } from "@/components/home3-insights-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"
import { BackToTop } from "@/components/back-to-top"

export default function Home3Page() {
  return (
    <main className="home-page home3-page min-h-screen bg-white">
      <ScrollRevealController />
      <SiteHeader solid />
      <Home3Hero />
      <Home3Stats />
      <Home3Products />
      <Home3DataActionSection />
      <EcosystemSection />
      <Home3IndustrySolutions />
      <CustomerStories />
      <Home3TechCtaSection />
      <Home3InsightsSection />
      <SiteFooter />
      <BackToTop />
    </main>
  )
}
