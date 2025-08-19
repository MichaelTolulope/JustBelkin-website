import React from 'react'
import { useFadeIn, useStagger, useHoverScale } from '../hooks/useGSAPAnimations'

const Services = () => {
  const titleRef = useFadeIn(0.2)
  const cardsRef = useStagger(0.4, 0.2)
  
  const services = [
    {
      title: "Residential Cleaning",
      description: "Your home should be your sanctuary, clean, comfortable, and stress-free. At BeKlin, we specialize in residential cleaning services designed to bring order, freshness, and peace of mind to your living space.",
      features: [
        "Regular weekly, bi-weekly, or monthly cleaning",
        "Deep cleaning for seasonal refreshes",
        "Kitchen and bathroom sanitization",
        "Dusting, vacuuming, and mopping",
        "Window cleaning (interior)",
        "Customizable cleaning plans"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "Commercial Cleaning",
      description: "A clean workplace speaks volumes about your brand, and at BeKlin, we help you make the right impression every time. Our commercial cleaning services are designed to support productivity, professionalism, and a healthier environment.",
      features: [
        "Office buildings and workspaces",
        "Retail stores and showrooms",
        "Medical and dental offices",
        "Restaurants and food service",
        "Post-construction cleanup",
        "Flexible scheduling options"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-secondary-500 to-secondary-600"
    },
    {
      title: "Move In/Out Cleaning",
      description: "Moving can be stressful enough without worrying about cleaning. Our comprehensive move-in and move-out cleaning services ensure your old place is spotless for the next occupants and your new home is fresh and ready.",
      features: [
        "Complete deep cleaning service",
        "Inside appliance cleaning",
        "Cabinet and drawer cleaning",
        "Baseboard and trim cleaning",
        "Light fixture cleaning",
        "Same-day service available"
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
        </svg>
      ),
      color: "from-accent-500 to-accent-600"
    }
  ]

  const ServiceCard = ({ service, index }) => {
    const cardRef = useHoverScale(1.02)
    
    return (
      <div 
        ref={cardRef}
        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-heading font-bold">{service.title}</h3>
          </div>
          <p className="text-white/90 leading-relaxed">{service.description}</p>
        </div>
        
        {/* Features */}
        <div className="p-6">
          <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
          <ul className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="w-full mt-6 btn-primary"
          >
            Get Quote
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Our 
            <span className="text-gradient">Cleaning Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our broad range of tailored cleaning services, designed to exceed your expectations and maintain the highest standards of cleanliness.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mt-6"></div>
        </div>
        
        {/* Services Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Need a Custom Cleaning Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every space is unique, and so are your cleaning needs. We offer customizable cleaning packages tailored to your specific requirements, schedule, and budget.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary"
            >
              Contact Us for Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services