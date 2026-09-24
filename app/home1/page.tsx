import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Home1Page } from "@/components/home1-page"
import { SiteFooter } from "@/components/site-footer"
import { ScrollRevealController } from "@/components/scroll-reveal-controller"
import { BackToTop } from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "UROVO | Enterprise Mobility Solutions",
  description: "UROVO enterprise devices, software and solutions for connected frontline operations.",
}

export default function Page() {
  return <main className="home1-page min-h-screen bg-white"><ScrollRevealController /><SiteHeader solid /><Home1Page /><SiteFooter /><BackToTop /></main>
}
