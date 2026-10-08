import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { Home3Products } from "@/components/home3-products"
import { Home3CopyDataActionSection } from "@/components/home3-copy-data-action-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { IndustrySection } from "@/components/industry-section"
import { CustomerStories } from "@/components/customer-stories"
import { TechCtaSection } from "@/components/tech-cta-section"
import { InsightsSection } from "@/components/insights-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"
import { BackToTop } from "@/components/back-to-top"

export default function Home10Page() {
  return (
    <main className="home-page home3-copy-page home9-page home10-page min-h-screen bg-white">
      <ScrollRevealController />
      <SiteHeader />
      <HeroSection />
      <Home3Products />
      <Home3CopyDataActionSection />
      <EcosystemSection variant="mono" />
      <IndustrySection />
      <CustomerStories />
      <TechCtaSection />
      <InsightsSection />
      <SiteFooter />
      <BackToTop />
    </main>
  )
}
