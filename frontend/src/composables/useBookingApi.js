export default function useBookingApi() {
    async function submitBooking(bookingData) {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      })
      
      if (!response.ok) {
        throw new Error(await response.text())
      }
      
      return response.json()
    }
  
    async function sendNotification(formData) {
      const mailContent = {
        to: 'staff@yourcompany.com',
        subject: `New Booking - ${formData.tourTitle || ''}`,
        html: `
          <h2>New Tour Booking</h2>
          <p><strong>Customer:</strong> ${formData.name}</p>
          <p><strong>Tour:</strong> ${formData.tourTitle || ''}</p>
          <p><strong>People:</strong> ${formData.personCount}</p>
          <p><strong>Contact:</strong> ${formData.phone || formData.email}</p>
        `
      }
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mailContent)
      })
      
      if (!response.ok) {
        throw new Error('Failed to send notification')
      }
    }
  
    return {
      submitBooking,
      sendNotification
    }
  }