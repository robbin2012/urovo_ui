import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { DataActionSection } from "@/components/data-action-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { IndustrySection } from "@/components/industry-section"
import { CustomerStories } from "@/components/customer-stories"
import { TechCtaSection } from "@/components/tech-cta-section"
import { InsightsSection } from "@/components/insights-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollRevealController />
      <SiteHeader />
      <HeroSection />
      <ProductsSection />
      <DataActionSection />
      <EcosystemSection />
      <IndustrySection />
      <CustomerStories />
      <TechCtaSection />
      <InsightsSection />
      <SiteFooter />
    </main>
  )
}
