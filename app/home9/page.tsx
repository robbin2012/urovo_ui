import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { Home3CopyDataActionSection } from "@/components/home3-copy-data-action-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { IndustrySection } from "@/components/industry-section"
import { CustomerStories } from "@/components/customer-stories"
import { TechCtaSection } from "@/components/tech-cta-section"
import { InsightsSection } from "@/components/insights-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"
import { BackToTop } from "@/components/back-to-top"

export default function Home9Page() {
  return (
    <main className="home-page home3-copy-page home9-page min-h-screen bg-white">
      <ScrollRevealController />
      <SiteHeader />
      <HeroSection />
      <ProductsSection />
      <Home3CopyDataActionSection />
      <EcosystemSection variant="mono" />
      <IndustrySection clipFirstSlide />
      <CustomerStories />
      <TechCtaSection />
      <InsightsSection />
      <SiteFooter />
      <BackToTop />
    </main>
  )
}
