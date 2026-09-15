import Navbar from '@/app/components/layout/Navbar'
import Footer from '@/app/components/layout/Footer'
import HeroSection from '@/app/components/sections/HeroSection'
import ServicesSection from '@/app/components/sections/ServicesSection'
import ProjectsSection from '@/app/components/sections/ProjectsSection'
import TechSection from '@/app/components/sections/TechSection'
import ProcessSection from '@/app/components/sections/ProcessSection'
import WhyDantechSection from '@/app/components/sections/WhyDantechSection'
import CTASection from '@/app/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TechSection />
        <ProcessSection />
        <WhyDantechSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
