import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { AppointmentForm } from '@/components/appointment-form'
import { Offer } from '@/components/offer'
import { Location } from '@/components/location'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Offer />
      <AppointmentForm />
      <Location />
      <Footer />
    </main>
  )
}
