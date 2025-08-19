import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import EcoBenefits from '../components/EcoBenefits'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />
      <EcoBenefits />
    </div>
  )
}

export default Home