import React, { useState } from 'react'
import BuyNowModal from './BuyNowModal'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import productsImage from '../assets/Products/Products.png'

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showImageModal, setShowImageModal] = useState(false)

  const products = [
    {
      id: 1,
      name: 'OUXI Q8',
      nickname: 'The Urban Explorer',
      description:
        'Powerful, stylish, and built for city commuting with premium features.',
      image: productsImage,
    },
    {
      id: 2,
      name: 'Gocio Electric Bike',
      nickname: 'The Mountain Conqueror',
      description:
        'Peak performance mountain e-bike with fat tires for any terrain.',
      image: productsImage,
    },
    {
      id: 3,
      name: 'Komaki XR1',
      nickname: 'The City Cruiser',
      description:
        'Sleek electric scooter perfect for urban commuting and style.',
      image: productsImage,
    },
  ]

  const handleBuyNow = (productName: string) => {
    setSelectedProduct(productName)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const handleImageClick = () => {
    setShowImageModal(true)
  }

  const closeImageModal = () => {
    setShowImageModal(false)
  }

  return (
    <>
      <section
        id='products'
        className='py-24 lg:py-36 bg-white flex items-center justify-center min-h-[80vh]'
      >
        <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='flex flex-col items-center mb-8'>
              <div className='w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg mb-4'>
                <svg width='36' height='36' fill='none' viewBox='0 0 24 24'>
                  <path
                    d='M7 17l5-5 5 5'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <circle
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='#fff'
                    strokeWidth='2'
                  />
                </svg>
              </div>
              <h2 className='text-4xl lg:text-5xl font-extrabold text-black mb-2 tracking-tight'>
                Our Products
              </h2>
              <div className='w-20 h-1 bg-black rounded-full mb-4' />
            </div>
            <p className='text-xl text-black max-w-3xl mx-auto leading-relaxed mb-12 font-medium'>
              Discover our carefully curated selection of premium electric bikes
              and scooters, designed to meet every rider's needs and
              preferences.
            </p>
          </div>

          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product) => (
              <motion.div
                key={product.id}
                className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-black/10 backdrop-blur-lg'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: product.id * 0.1 }}
              >
                <div
                  className='relative overflow-hidden cursor-pointer'
                  onClick={handleImageClick}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center'>
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg'>
                      <span className='text-black font-semibold text-sm'>
                        Click to zoom
                      </span>
                    </div>
                  </div>
                </div>
                <div className='p-8'>
                  <div className='mb-4'>
                    <h3 className='text-2xl font-bold text-black mb-2'>
                      {product.name}
                    </h3>
                    <p className='text-gray-600 font-semibold text-lg'>
                      {product.nickname}
                    </p>
                  </div>
                  <p className='text-gray-600 mb-8 leading-relaxed'>
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleBuyNow(product.name)}
                    className='w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='relative max-w-7xl w-full max-h-[90vh]'
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className='absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 z-10'
              >
                <X className='w-6 h-6 text-white' />
              </button>
              <img
                src={productsImage}
                alt='Bosco Bike Products Showcase'
                className='w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedProduct && (
        <BuyNowModal productName={selectedProduct} onClose={closeModal} />
      )}
    </>
  )
}

export default Products
