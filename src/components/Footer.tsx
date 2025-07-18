import React, { useState, useEffect } from 'react'
import {
  Zap,
  Facebook,
  Instagram,
  Twitter,
  ChevronUp,
  MessageCircle,
  Heart,
} from 'lucide-react'

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    // Show the WhatsApp button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsAppClick = () => {
    // WhatsApp chat URL with the China phone number
    const phoneNumber = '8613812345678'
    const message =
      "Hello! I'm interested in your electric bikes and scooters. Can you help me?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <footer className='bg-black text-white relative'>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className='absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center text-black transition-all duration-300 transform hover:scale-110 shadow-lg'
      >
        <ChevronUp className='w-6 h-6' />
      </button>

      {/* Floating WhatsApp Chat Bot */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <button
          onClick={handleWhatsAppClick}
          className='group relative bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50'
        >
          {/* WhatsApp Icon */}
          <svg
            className='w-8 h-8'
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
          </svg>

          {/* Pulse Animation */}
          <div className='absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75'></div>

          {/* Tooltip */}
          <div className='absolute bottom-full right-0 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
            Chat with us on WhatsApp
            <div className='absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black'></div>
          </div>
        </button>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center'>
          {/* Brand */}
          <div className='flex flex-col items-center justify-center mb-8'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white mb-4'>
              <img
                src='/src/assets/logo-main.png'
                alt='Bosco Bike Logo'
                className='w-12 h-12 object-contain rounded-full'
              />
            </div>
            <span className='text-2xl font-bold text-white'>Bosco Bike</span>
          </div>

          {/* Social Media Icons */}
          <div className='flex items-center justify-center space-x-6 mb-8'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110'
            >
              <Facebook className='w-5 h-5 text-black' />
            </a>
            <a
              href='https://instagram.com/michael_t_design'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110'
            >
              <Instagram className='w-5 h-5 text-black' />
            </a>
            <a
              href='https://tiktok.com'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110'
            >
              <Twitter className='w-5 h-5 text-black' />
            </a>
          </div>

          {/* Copyright */}
          <p className='text-gray-300 mb-4'>
            © {currentYear} Bosco Bike. All rights reserved.
          </p>

          {/* Developer Section */}
          <div className='border-t border-gray-800 pt-6'>
            <p className='text-gray-400 text-sm flex items-center justify-center space-x-2'>
              <span>Designed with</span>
              <Heart className='w-4 h-4 text-red-500 fill-current animate-pulse' />
              <span>by</span>
              <a
                href='https://instagram.com/michael_t_design'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-300 font-semibold transition-colors duration-300 underline'
              >
                Michael T
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
