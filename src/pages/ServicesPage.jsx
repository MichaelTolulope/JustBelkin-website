import React from 'react'
import Services from '../components/Services'

function ServicesPage() {
  return (
    <div className="services-page">
      <div className="pt-20"> {/* Add padding for header */}
        <Services />
      </div>
    </div>
  )
}

export default ServicesPage