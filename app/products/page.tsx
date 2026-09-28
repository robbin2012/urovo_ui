import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ProductsHero } from "@/components/products/products-hero"
import { CapabilitiesSection } from "@/components/products/capabilities-section"
import { ProductFinder } from "@/components/products/product-finder"
import { EcosystemSection } from "@/components/ecosystem-section"
import { IndustrySection } from "@/components/industry-section"
import { Product1FaqSection } from "@/components/products/product1-faq-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"

export const metadata: Metadata = {
  title: "Mobile Computers | UROVO",
  description:
    "UROVO rugged mobile computers connect frontline workers with real-time data, powerful capture capabilities, and business applications across every workflow.",
}

export default function ProductsPage() {
  return (
    <main className="products-page product1-page min-h-screen bg-white">
      <ScrollRevealController />
      <SiteHeader solid />
      <ProductsHero />
      <CapabilitiesSection />
      <ProductFinder />
      <EcosystemSection variant="classic-white" />
      <IndustrySection cardGrid />
      <Product1FaqSection />
      <SiteFooter />
    </main>
  )
}
