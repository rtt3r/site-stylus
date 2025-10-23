'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Booking from '../components/Booking'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-dark text-light">
      <Header setActiveSection={setActiveSection} />
      <Hero />
      <Services />
      <Booking />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}