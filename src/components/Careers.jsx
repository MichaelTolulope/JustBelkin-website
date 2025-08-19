import React, { useState } from 'react'
import { useFadeIn, useStagger } from '../hooks/useGSAPAnimations'

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  
  const titleRef = useFadeIn(0.2)
  const jobsRef = useStagger(0.4, 0.15)
  
  const jobs = [
    {
      id: 1,
      title: "Residential Cleaning Specialist",
      type: "Full-time",
      location: "Moncton, NB",
      salary: "$18-22/hour",
      description: "Join our team as a Residential Cleaning Specialist and help families maintain clean, healthy homes. Perfect for detail-oriented individuals who take pride in their work.",
      requirements: [
        "Previous cleaning experience preferred but not required",
        "Reliable transportation",
        "Ability to work independently",
        "Physical ability to perform cleaning tasks",
        "Excellent attention to detail",
        "Professional and friendly demeanor"
      ],
      benefits: [
        "Competitive hourly wage",
        "Flexible scheduling",
        "Paid training provided",
        "Eco-friendly work environment",
        "Opportunity for advancement",
        "Supportive team environment"
      ]
    },
    {
      id: 2,
      title: "Commercial Cleaning Team Lead",
      type: "Full-time",
      location: "Moncton, NB",
      salary: "$20-25/hour",
      description: "Lead our commercial cleaning operations and ensure the highest standards of cleanliness for our business clients. Leadership experience preferred.",
      requirements: [
        "2+ years of cleaning experience",
        "Leadership or supervisory experience",
        "Valid driver's license",
        "Ability to work evenings/weekends",
        "Strong communication skills",
        "Problem-solving abilities"
      ],
      benefits: [
        "Leadership role with growth potential",
        "Comprehensive training program",
        "Health benefits package",
        "Paid vacation time",
        "Performance bonuses",
        "Professional development opportunities"
      ]
    },
    {
      id: 3,
      title: "Part-time Cleaning Associate",
      type: "Part-time",
      location: "Moncton, NB",
      salary: "$16-19/hour",
      description: "Perfect for students or those seeking flexible work hours. Join our team on a part-time basis and gain valuable experience in the cleaning industry.",
      requirements: [
        "No experience necessary - training provided",
        "Flexible availability",
        "Positive attitude",
        "Willingness to learn",
        "Basic English communication",
        "Reliable and punctual"
      ],
      benefits: [
        "Flexible scheduling around your life",
        "Paid training",
        "Friendly work environment",
        "Opportunity to go full-time",
        "Skills development",
        "Referral bonuses"
      ]
    }
  ]
  
  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }
  
  const openApplicationModal = (job) => {
    setSelectedJob(job)
    setShowApplicationModal(true)
  }
  
  const closeApplicationModal = () => {
    setShowApplicationModal(false)
    setSelectedJob(null)
  }
  
  const JobCard = ({ job, index }) => {
    const isExpanded = expandedJob === job.id
    
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Job Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{job.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full">{job.type}</span>
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full">{job.location}</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full">{job.salary}</span>
              </div>
            </div>
            <button
              onClick={() => toggleJobExpansion(job.id)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label={isExpanded ? 'Collapse job details' : 'Expand job details'}
            >
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 leading-relaxed">{job.description}</p>
        </div>
        
        {/* Expandable Content */}
        {isExpanded && (
          <div className="p-6 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Requirements */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Apply Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => openApplicationModal(job)}
                className="btn-primary w-full md:w-auto"
              >
                Apply for This Position
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
  
  const ApplicationModal = () => {
    if (!showApplicationModal || !selectedJob) return null
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-heading font-bold text-gray-900">
                Apply for {selectedJob.title}
              </h3>
              <button
                onClick={closeApplicationModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Previous Experience</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your relevant experience..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to work with BeKlin?</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Share your motivation..."
                ></textarea>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={closeApplicationModal}
                  className="btn-outline flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="careers" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Join Our 
            <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of Moncton's leading eco-friendly cleaning service. We're always looking for dedicated, 
            reliable team members who share our commitment to excellence and environmental responsibility.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mt-6"></div>
        </div>
        
        {/* Why Work With Us */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
            Why Choose BeKlin as Your Employer?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Competitive Pay",
                description: "Fair wages with opportunities for raises and bonuses"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Flexible Schedule",
                description: "Work-life balance with scheduling that fits your needs"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Growth Opportunities",
                description: "Advance your career with training and leadership roles"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Job Listings */}
        <div ref={jobsRef} className="space-y-6">
          {jobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
        
        {/* Contact for More Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Don't See the Right Position?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always interested in meeting talented individuals. Send us your resume and 
              let us know how you'd like to contribute to our team.
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
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Application Modal */}
      <ApplicationModal />
    </section>
  )
}

export default Careers