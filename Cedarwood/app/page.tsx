import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { OurSectionsGrid } from "@/components/our-sections-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { EventsPreview } from "@/components/events-preview"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurSectionsGrid />
      <WhyChooseUs />
      <AboutSection />
      <EventsPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
