import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle, Building2 } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id='contact' className='py-20 lg:py-32 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-black mb-6'>
            Get In Touch
          </h2>
          <div className='w-24 h-1 bg-black mx-auto mb-8'></div>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Ready to start your electric journey? Contact us for personalized
            recommendations, test rides, or any questions about our products.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Information */}
          <div className='space-y-8 mb-12'>
            {/* China Contact Card */}
            <div className='bg-white/80 rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl transition-all duration-300'>
              <div className='flex items-center gap-3 mb-2'>
                <Building2 className='w-7 h-7 text-black' />
                <span className='text-lg font-bold text-black'>China</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='font-semibold text-gray-700'>Company:</span>
                <span className='text-gray-700'>
                  Ai Er (Qingdao) International Trade Co., LTD
                </span>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='w-6 h-6 text-black mt-1' />
                <span className='text-gray-700'>
                  2024-4402 (A), Room 102, 1st Floor, East Office Building, No.
                  45 Pengwan Road, Qianwan Bonded Port Area, China (Shandong)
                  Pilot Free Trade Zone Qingdao Area
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-6 h-6 text-black' />
                <span className='text-gray-700'>+86 138 2446 5451</span>
              </div>
            </div>
            {/* Ethiopia Contact Card */}
            <div className='bg-white/80 rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl transition-all duration-300'>
              <div className='flex items-center gap-3 mb-2'>
                <Building2 className='w-7 h-7 text-black' />
                <span className='text-lg font-bold text-black'>Ethiopia</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='font-semibold text-gray-700'>Company:</span>
                <span className='text-gray-700'>
                  Dayot General Business Plc
                </span>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='w-6 h-6 text-black mt-1' />
                <span className='text-gray-700'>
                  Kirkos subcity wereda 09 house number G18
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-6 h-6 text-black' />
                <span className='text-gray-700'>+251 931 199 939</span>{' '}
                <span className='text-gray-700'>+251710790707</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-gray-50 rounded-3xl p-8 lg:p-12'>
            {isSubmitted ? (
              <div className='text-center'>
                <CheckCircle className='w-16 h-16 text-black mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-black mb-4'>
                  Message Sent!
                </h3>
                <p className='text-gray-600'>
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-semibold text-black mb-2'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-300'
                    placeholder='Your full name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold text-black mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-black mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-gray-200 transition-all duration-300 resize-none'
                    placeholder='Tell us about your electric mobility needs...'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105'
                >
                  Send Message
                  <Send className='w-5 h-5' />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
