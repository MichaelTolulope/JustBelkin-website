import React from 'react'
import Contact from '../components/Contact'

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="pt-20"> {/* Add padding for header */}
        <Contact />
      </div>
    </div>
  )
}

export default ContactPage