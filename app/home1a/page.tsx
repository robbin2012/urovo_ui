import type { Metadata } from "next"
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
import { BackToTop } from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "UROVO | From Data Capture to Business Action",
  description: "UROVO devices, software and cloud services working together in one continuous operational loop.",
}

export default function Page() {
  return <main className="home-page home1a-page min-h-screen bg-white">
    <ScrollRevealController />
    <SiteHeader />
    <HeroSection />
    <ProductsSection />
    <DataActionSection variant="home1a" />
    <EcosystemSection />
    <IndustrySection />
    <CustomerStories />
    <TechCtaSection />
    <InsightsSection />
    <SiteFooter />
    <BackToTop />
  </main>
}
