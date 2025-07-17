import React, { useEffect } from 'react'
import { X, MapPin, Phone, Clock } from 'lucide-react'

interface BuyNowModalProps {
  productName: string
  onClose: () => void
}

const BuyNowModal: React.FC<BuyNowModalProps> = ({ productName, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn'
      onClick={handleBackdropClick}
    >
      <div className='bg-white rounded-2xl max-w-md w-full mx-4 transform animate-slideUp'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-200'>
          <h3 className='text-2xl font-bold text-black'>
            Purchase {productName}
          </h3>
          <button
            onClick={onClose}
            className='w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200'
          >
            <X className='w-5 h-5 text-black' />
          </button>
        </div>

        {/* Content */}
        <div className='p-6 space-y-6'>
          <div className='text-center mb-6'>
            <p className='text-gray-600 text-lg'>
              Ready to get your {productName}? Visit our showroom or contact us
              directly!
            </p>
          </div>

          {/* Contact Information */}
          <div className='space-y-4'>
            <div className='flex items-start space-x-4 p-4 bg-gray-50 rounded-xl'>
              <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0'>
                <MapPin className='w-5 h-5 text-white' />
              </div>
              <div>
                <h4 className='font-semibold text-black mb-1'>
                  Showroom Address
                </h4>
                <p className='text-gray-600'>
                  Kirkos subcity wereda 09 house number G18
                  <br />
                  Ethiopia
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4 p-4 bg-gray-50 rounded-xl'>
              <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0'>
                <Phone className='w-5 h-5 text-white' />
              </div>
              <div>
                <h4 className='font-semibold text-black mb-1'>
                  Contact Numbers
                </h4>
                <p className='text-gray-600'>
                  <strong>Dayot General Business Plc</strong>
                  <br />
                  +251 931 199 939
                  <br />
                  +251 710 790 707
                </p>
              </div>
            </div>

            <div className='flex items-start space-x-4 p-4 bg-gray-50 rounded-xl'>
              <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0'>
                <Clock className='w-5 h-5 text-white' />
              </div>
              <div>
                <h4 className='font-semibold text-black mb-1'>
                  Business Hours
                </h4>
                <p className='text-gray-600'>
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat - Sun: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 pt-4'>
            <a
              href='tel:+251931199939'
              className='flex-1 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105'
            >
              Call +251 931 199 939
            </a>
            <button
              onClick={onClose}
              className='flex-1 border-2 border-gray-200 hover:border-gray-300 text-black py-3 px-6 rounded-xl font-semibold transition-all duration-300'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNowModal
