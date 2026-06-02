import Header          from '@/components/Header'
import Hero            from '@/components/Hero'
import TrustBar        from '@/components/TrustBar'
import WhyLulu         from '@/components/WhyLulu'
import Services        from '@/components/Services'
import HowItWorks      from '@/components/HowItWorks'
import Gallery         from '@/components/Gallery'
import VideoSection    from '@/components/VideoSection'
import Testimonials    from '@/components/Testimonials'
import FAQ             from '@/components/FAQ'
import FinalCTA        from '@/components/FinalCTA'
import Footer          from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ScrollReveal    from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyLulu />
        <Services />
        <HowItWorks />
        <Gallery />
        <VideoSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollReveal />
    </>
  )
}
