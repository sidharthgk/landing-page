import HeroSection from "@/components/hero-section"
import WinnersSection from "@/components/winners-section"
import ObjectivesSection from "@/components/objectives-section"
import TestimonialsSection from "@/components/testimonials-section"
import TeamSection from "@/components/team-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WinnersSection />
      <ObjectivesSection />
      <TestimonialsSection />
      <TeamSection />
    </div>
  )
}

