import React from 'react'
import Booking from '../components/Booking'

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="pt-20"> {/* Add padding for header */}
        <Booking />
      </div>
    </div>
  )
}

export default BookingPage