import React, { useState } from 'react'
import BuyNowModal from './BuyNowModal'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Star,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  ZoomIn,
  Settings,
  Bike,
} from 'lucide-react'
import productsImage from '../assets/Products/Products.png'

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showImageModal, setShowImageModal] = useState(false)
  const [showSpecs, setShowSpecs] = useState(false)

  const products = [
    {
      id: 1,
      name: 'OUXI Q8',
      nickname: 'The Urban Explorer',
      description:
        'Powerful, stylish, and built for city commuting with premium features. Advanced battery technology with 80km range.',
      price: '$1,299',
      originalPrice: '$1,599',
      rating: 4.8,
      reviews: 127,
      image: productsImage,
      features: ['80km Range', '25km/h Speed', 'Smart Display', 'LED Lights'],
      isFeatured: true,
      badge: 'Best Seller',
      badgeColor: 'bg-black text-white',
    },
    {
      id: 2,
      name: 'Gocio Electric Bike',
      nickname: 'The Mountain Conqueror',
      description:
        'Peak performance mountain e-bike with fat tires for any terrain. Perfect for adventure seekers.',
      price: '$1,899',
      originalPrice: '$2,199',
      rating: 4.9,
      reviews: 89,
      image: productsImage,
      features: ['100km Range', '45km/h Speed', 'Fat Tires', 'Suspension'],
      isFeatured: false,
      badge: 'New',
      badgeColor: 'bg-black text-white',
    },
    {
      id: 3,
      name: 'Komaki XR1',
      nickname: 'The City Cruiser',
      description:
        'Sleek electric scooter perfect for urban commuting and style. Compact design with premium finish.',
      price: '$899',
      originalPrice: '$1,099',
      rating: 4.7,
      reviews: 203,
      image: productsImage,
      features: ['60km Range', '35km/h Speed', 'Foldable', 'Portable'],
      isFeatured: false,
      badge: 'Popular',
      badgeColor: 'bg-black text-white',
    },
  ]

  const productSpecifications = [
    {
      category: 'Fork',
      spec: 'Steel suspension fork',
      icon: '🔧',
    },
    {
      category: 'Handlebar & Stem',
      spec: 'Steel handlebar with aluminum alloy stem',
      icon: '🎛️',
    },
    {
      category: 'Brakes',
      spec: 'Front & rear mechanical disc brakes',
      icon: '🛑',
    },
    {
      category: 'Rims',
      spec: '26" × 2.125" aluminum alloy double-wall rims, 36H, 14G black spokes',
      icon: '⚙️',
    },
    {
      category: 'Tires',
      spec: 'Diomand brand, 26" × 2.125" black tires with butyl rubber tube, A/V',
      icon: '🛞',
    },
    {
      category: 'Saddle',
      spec: 'Comfortable spring saddle',
      icon: '🪑',
    },
    {
      category: 'Hub',
      spec: 'Steel ED with quick release (QR)',
      icon: '🔩',
    },
    {
      category: 'Crankset',
      spec: 'Steel ED crank, 3-piece chainwheel',
      icon: '⚡',
    },
    {
      category: 'Bottom Bracket',
      spec: 'Sealed bearing parts',
      icon: '🔧',
    },
    {
      category: 'Pedals',
      spec: 'Aluminum alloy with ball bearings, BK',
      icon: '👟',
    },
    {
      category: 'Gearing',
      spec: '21-speed SHIMANO system',
      icon: '⚙️',
    },
    {
      category: 'Derailleurs',
      spec: 'SHIMANO TZ500 front and rear derailleurs',
      icon: '🔗',
    },
    {
      category: 'Shifter',
      spec: 'SHIMANO TX30-7R thumb shifter',
      icon: '🎛️',
    },
    {
      category: 'Freewheel',
      spec: 'SHIMANO 7-speed',
      icon: '🔄',
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
        className='relative py-24 lg:py-36 bg-white overflow-hidden'
      >
        {/* Minimal Background Elements */}
        <div className='absolute inset-0 pointer-events-none'>
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute top-20 left-10 w-32 h-32 border border-black/5 rounded-full'
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute bottom-20 right-10 w-40 h-40 border border-black/5 rounded-full'
          />
        </div>

        <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='flex flex-col items-center mb-8'
            >
              <div className='relative w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-2xl mb-6'>
                <Bike className='w-10 h-10 text-white' />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='absolute inset-0 rounded-full bg-black opacity-20'
                />
              </div>
              <h2 className='text-4xl lg:text-6xl font-extrabold text-black mb-4 tracking-tight'>
                Our Products
              </h2>
              <div className='w-24 h-1 bg-black rounded-full mb-6' />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 font-medium'
            >
              Discover our carefully curated selection of premium electric bikes
              and scooters, designed to meet every rider's needs and
              preferences.
            </motion.p>
          </div>

          {/* Featured Product Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='mb-20'
          >
            <div className='text-center mb-8'>
              <span className='inline-flex items-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-full shadow-lg'>
                <Star className='w-4 h-4 mr-2' />
                Featured Product
              </span>
            </div>
            {(() => {
              const featuredProduct = products.find((p) => p.isFeatured)
              if (!featuredProduct) return null

              return (
                <div className='bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-black'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                    {/* Product Image */}
                    <div
                      className='relative overflow-hidden group cursor-pointer'
                      onClick={handleImageClick}
                    >
                      <img
                        src={featuredProduct.image}
                        alt={featuredProduct.name}
                        className='w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      <div className='absolute top-4 left-4'>
                        <span
                          className={`inline-flex items-center px-3 py-1 text-white text-xs font-semibold rounded-full shadow-lg ${featuredProduct.badgeColor}`}
                        >
                          {featuredProduct.badge}
                        </span>
                      </div>
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-black/10'>
                          <span className='text-black font-semibold text-sm flex items-center'>
                            <ZoomIn className='w-4 h-4 mr-2' />
                            Click to zoom
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className='p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white'>
                      <div className='mb-6'>
                        <h3 className='text-3xl lg:text-4xl font-bold text-black mb-2'>
                          {featuredProduct.name}
                        </h3>
                        <p className='text-xl text-gray-700 font-semibold mb-4'>
                          {featuredProduct.nickname}
                        </p>
                        <p className='text-gray-600 leading-relaxed mb-6'>
                          {featuredProduct.description}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className='flex items-center mb-6'>
                        <div className='flex items-center mr-4'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(featuredProduct.rating!)
                                  ? 'text-black fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className='text-gray-600 font-medium'>
                          {featuredProduct.rating} ({featuredProduct.reviews}{' '}
                          reviews)
                        </span>
                      </div>

                      {/* Features */}
                      <div className='grid grid-cols-2 gap-3 mb-8'>
                        {featuredProduct.features.map((feature, index) => (
                          <div
                            key={index}
                            className='flex items-center text-sm text-gray-600'
                          >
                            <CheckCircle className='w-4 h-4 text-black mr-2' />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Price */}
                      <div className='flex items-center mb-8'>
                        <span className='text-4xl font-bold text-black mr-4'>
                          {featuredProduct.price}
                        </span>
                        {featuredProduct.originalPrice && (
                          <span className='text-xl text-gray-400 line-through'>
                            {featuredProduct.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleBuyNow(featuredProduct.name)}
                          className='flex-1 bg-black hover:bg-gray-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center'
                        >
                          Buy Now
                          <ArrowRight className='w-5 h-5 ml-2' />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowSpecs(!showSpecs)}
                          className='px-6 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center'
                        >
                          <Settings className='w-5 h-5 mr-2' />
                          {showSpecs ? 'Hide Specs' : 'View Specs'}
                        </motion.button>
                      </div>

                      {/* Product Specifications */}
                      <AnimatePresence>
                        {showSpecs && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className='overflow-hidden'
                          >
                            <div className='border-t-2 border-black/10 pt-6'>
                              <h4 className='text-xl font-bold text-black mb-4 flex items-center'>
                                <Settings className='w-5 h-5 mr-2' />
                                Product Specifications
                              </h4>
                              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {productSpecifications.map((spec, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: index * 0.05,
                                    }}
                                    className='bg-white border border-black/10 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 group cursor-pointer'
                                    onClick={() => {
                                      // Here you could add detailed zoom functionality for each spec
                                      console.log(
                                        `Zooming into ${spec.category}`
                                      )
                                    }}
                                  >
                                    <div className='flex items-start justify-between'>
                                      <div className='flex items-center mb-2'>
                                        <span className='text-lg mr-2'>
                                          {spec.icon}
                                        </span>
                                        <h5 className='font-semibold text-black text-sm'>
                                          {spec.category}
                                        </h5>
                                      </div>
                                      <ZoomIn className='w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-300 opacity-0 group-hover:opacity-100' />
                                    </div>
                                    <p className='text-gray-600 text-sm leading-relaxed'>
                                      {spec.spec}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                              <div className='mt-6 p-4 bg-black/5 rounded-lg border border-black/10'>
                                <p className='text-sm text-gray-600 text-center'>
                                  💡 <strong>Tip:</strong> Click on any
                                  specification to zoom in and explore detailed
                                  component information
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>

          {/* Products Grid */}
          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products
              .filter((p) => !p.isFeatured)
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 backdrop-blur-lg ${
                    product.isPlaceholder ? 'opacity-60' : ''
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  {/* Product Image */}
          {/* <div
                    className='relative overflow-hidden cursor-pointer'
                    onClick={
                      !product.isPlaceholder ? handleImageClick : undefined
                    }
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700'
                    />
                    <div className='absolute top-4 left-4'>
                      <span
                        className={`inline-flex items-center px-3 py-1 text-white text-xs font-semibold rounded-full shadow-lg ${product.badgeColor}`}
                      >
                        {product.badge}
                      </span>
                    </div>
                    {!product.isPlaceholder && (
                      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center'>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg'>
                          <span className='text-gray-800 font-semibold text-sm'>
                            Click to zoom
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
          {/* <div className='p-6'>
                    <div className='mb-4'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {product.name}
                      </h3>
                      <p className='text-blue-600 font-semibold text-lg mb-2'>
                        {product.nickname}
                      </p>
                      <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                        {product.description}
                      </p>
                    </div>

                    {/* Rating for non-placeholder products */}
          {/* {!product.isPlaceholder && product.rating && (
                      <div className='flex items-center mb-4'>
                        <div className='flex items-center mr-2'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating!)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className='text-gray-600 text-sm font-medium'>
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    )}

                    {/* Features */}
          {/* <div className='grid grid-cols-2 gap-2 mb-6'>
                      {product.features.slice(0, 4).map((feature, index) => (
                        <div
                          key={index}
                          className='flex items-center text-xs text-gray-600'
                        >
                          <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5' />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price */}
          {/* <div className='flex items-center mb-6'>
                      <span className='text-2xl font-bold text-gray-900 mr-3'>
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className='text-lg text-gray-400 line-through'>
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
          {/* {!product.isPlaceholder ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleBuyNow(product.name)}
                        className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      >
                        Buy Now
                      </motion.button>
                    ) : (
                      <button className='w-full bg-gray-300 text-gray-600 py-3 px-6 rounded-xl font-semibold cursor-not-allowed'>
                        Coming Soon
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
          </div> */}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'
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
