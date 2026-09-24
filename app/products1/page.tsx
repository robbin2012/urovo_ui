import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ProductsHero } from "@/components/products/products-hero"
import { CapabilitiesSection } from "@/components/products/capabilities-section"
import { ProductFinder } from "@/components/products/product-finder"
import { EcosystemSection } from "@/components/ecosystem-section"
import { IndustrySection } from "@/components/industry-section"
import { MobileCtaSection } from "@/components/products/mobile-cta-section"
import { FaqSection } from "@/components/products/faq-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"

export const metadata: Metadata = {
  title: "Mobile Computers | UROVO",
  description: "Explore UROVO rugged mobile computers for connected frontline operations.",
}

export default function Products1Page() {
  return (
    <main className="products-page min-h-screen bg-white">
      <ScrollRevealController />
      <SiteHeader solid />
      <ProductsHero />
      <CapabilitiesSection />
      <ProductFinder />
      <EcosystemSection />
      <IndustrySection cardGrid />
      <FaqSection />
      <MobileCtaSection />
      <SiteFooter />
    </main>
  )
}
