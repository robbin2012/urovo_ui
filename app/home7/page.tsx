import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { Home7DataActionSection } from "@/components/home7-data-action-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { IndustrySection } from "@/components/industry-section"
import { CustomerStories } from "@/components/customer-stories"
import { TechCtaSection } from "@/components/tech-cta-section"
import { InsightsSection } from "@/components/insights-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"
import { BackToTop } from "@/components/back-to-top"

export default function Home7Page() {
  return (
    <main className="home-page home3-copy-page home6-page home7-page min-h-screen bg-white">
      <ScrollRevealController />
      <SiteHeader />
      <HeroSection />
      <ProductsSection />
      <Home7DataActionSection />
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
