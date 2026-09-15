import Navbar from '@/app/components/layout/Navbar'
import Footer from '@/app/components/layout/Footer'
import HeroSection from '@/app/components/sections/HeroSection'
import ServicesSection from '@/app/components/sections/ServicesSection'
import ProjectsSection from '@/app/components/sections/ProjectsSection'
import TechSection from '@/app/components/sections/TechSection'
import ProcessSection from '@/app/components/sections/ProcessSection'
import WhyDantechSection from '@/app/components/sections/WhyDantechSection'
import CTASection from '@/app/components/sections/CTASection'

function SectionDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr className="border-slate-200/70 dark:border-white/10" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <TechSection />
        <SectionDivider />
        <ProcessSection />
        <SectionDivider />
        <WhyDantechSection />
        <SectionDivider />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
