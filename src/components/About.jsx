import React, { useRef } from 'react'
import { useFadeIn, useSlideUp, useParallax } from '../hooks/useGSAPAnimations'

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useFadeIn(0.2)
  const contentRef = useSlideUp(0.4)
  const imageRef = useFadeIn(0.6)
  const parallaxRef = useParallax(0.3)

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Parallax background elements */}
      <div ref={parallaxRef} className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div ref={titleRef}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Eco-Friendly Cleaning for 
                <span className="text-gradient">Brighter Spaces</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>
            
            <div ref={contentRef} className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                At BeKlin, we believe that a clean space is more than just aesthetically pleasing—it's essential for your health, productivity, and peace of mind. As Moncton's premier cleaning service, we've built our reputation on delivering exceptional results while prioritizing environmental responsibility.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of trained professionals uses only eco-friendly products and proven techniques to ensure your space is not just clean, but truly healthy. Whether it's your home sanctuary or your business environment, we treat every space with the care and attention it deserves.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that every client has unique needs, which is why we offer customizable cleaning solutions that fit your schedule, budget, and specific requirements. From regular maintenance to deep cleaning services, we're here to make your life easier and your spaces brighter.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "100% Eco-Friendly",
                  description: "Safe for your family and pets"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Fully Insured",
                  description: "Complete peace of mind"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Local Experts",
                  description: "Proudly serving Moncton, NB"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Flexible Scheduling",
                  description: "Work around your schedule"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Placeholder for cleaning image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">Professional Cleaning Services</p>
                  <p className="text-sm opacity-80">Eco-friendly • Reliable • Trusted</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full opacity-60"></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About