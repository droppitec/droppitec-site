import NavHeader from '@/components/NavHeader'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import SuccessCasesSection from '@/components/SuccessCasesSection'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      <NavHeader />
      <HeroSection />
      <ServicesSection />
      <SuccessCasesSection />
      <ContactForm />
    </main>
  )
}
