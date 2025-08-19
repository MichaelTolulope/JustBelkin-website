import React from 'react'
import { useFadeIn, useStagger, useHoverScale } from '../hooks/useGSAPAnimations'
import EcoBenefits from './EcoBenefits'

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
        className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:-translate-y-2"
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative p-8">
          {/* Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <div className="text-white text-3xl">
                {service.icon}
              </div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
          </div>
          
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="space-y-3 mb-8">
            {service.features.slice(0, 3).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                <div className="w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {feature}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
          >
            Get Quote
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning solutions designed to meet your unique needs. Experience the difference quality makes.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 border-2 border-white/30 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Transform Your Space Today
              </h3>
              <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust BeKlin for their cleaning needs. Get your free consultation now.
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 mb-8 py-6 border-y border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">24h</div>
                  <div className="text-sm text-primary-200">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">100%</div>
                  <div className="text-sm text-primary-200">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">Free</div>
                  <div className="text-sm text-primary-200">Consultation</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Free Quote
                </button>
                <button className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                  Call (506) 123-4567
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Eco Benefits Section */}
      <EcoBenefits />
    </section>
  )
}

export default Services