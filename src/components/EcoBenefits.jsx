import React from 'react'
import { useFadeIn, useStagger, useCounter } from '../hooks/useGSAPAnimations'

const EcoBenefits = () => {
  const titleRef = useFadeIn(0.2)
  const statsRef = useStagger(0.4, 0.2)
  const benefitsRef = useStagger(0.6, 0.15)
  
  const stats = [
    {
      number: 100,
      suffix: "%",
      label: "Eco-Friendly Products",
      description: "All our cleaning products are environmentally safe"
    },
    {
      number: 500,
      suffix: "+",
      label: "Happy Families",
      description: "Families trust us with their homes"
    },
    {
      number: 95,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Customer satisfaction rate"
    },
    {
      number: 5,
      suffix: " Years",
      label: "Experience",
      description: "Serving Moncton community"
    }
  ]
  
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
        </svg>
      ),
      title: "Planet-Friendly",
      description: "Our eco-friendly products protect the environment while delivering exceptional cleaning results. We're committed to reducing our carbon footprint."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      title: "Family Safe",
      description: "Non-toxic, chemical-free cleaning solutions that are safe for children, pets, and family members with allergies or sensitivities."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Health Benefits",
      description: "Improve indoor air quality and reduce allergens with our natural cleaning methods that promote a healthier living environment."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      ),
      title: "Sustainable Practices",
      description: "We use reusable microfiber cloths, concentrate on waste reduction, and implement sustainable cleaning practices in every service."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Cost Effective",
      description: "Eco-friendly cleaning extends the life of your furnishings and surfaces, saving you money on replacements and repairs over time."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: "Powerful Results",
      description: "Don't compromise on cleanliness. Our eco-friendly products deliver the same powerful cleaning results as traditional harsh chemicals."
    }
  ]
  
  const StatCard = ({ stat, index }) => {
    const numberRef = useCounter(stat.number, 2)
    
    return (
      <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
          <span ref={numberRef}>0</span>
          <span>{stat.suffix}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
        <p className="text-sm text-gray-600">{stat.description}</p>
      </div>
    )
  }
  
  const BenefitCard = ({ benefit, index }) => {
    return (
      <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
          {benefit.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      </div>
    )
  }

  return (
    <section id="eco-benefits" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Why Choose 
            <span className="text-gradient">Eco-Friendly</span> Cleaning?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to environmental responsibility doesn't mean compromising on quality. 
            Discover the benefits of choosing eco-friendly cleaning services for your space.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mt-6"></div>
        </div>
        
        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
        
        {/* Benefits Grid */}
        <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Ready to Make the Switch to Eco-Friendly Cleaning?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have made the smart choice for their health, 
              their family, and the environment. Experience the BeKlin difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                Get Your Free Quote
              </button>
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services')
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-outline"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcoBenefits