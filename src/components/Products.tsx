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
import pedalBikeVideo from '../assets/Products/1.mp4'
import ebikeVideo from '../assets/Products/2.mp4'

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showImageModal, setShowImageModal] = useState(false)
  const [expandedSpecs, setExpandedSpecs] = useState<{
    [key: number]: boolean
  }>({
    1: false, // Bosco EBike - default closed
    2: false, // Bosco Pedal Bike - default closed
  })

  // Debug function to log current state
  const logAccordionState = (productId: number) => {
    console.log(
      `Current state for product ${productId}:`,
      expandedSpecs[productId]
    )
    console.log('Full state object:', expandedSpecs)
  }

  const products = [
    {
      id: 1,
      name: 'Bosco EBike',
      nickname: 'ST 100',
      description:
        'Premium electric bike with advanced battery technology and smart features. Perfect for urban commuting with 80km range and modern design.',
      price: '$749',
      originalPrice: '$899',
      rating: 4.8,
      reviews: 127,
      video: ebikeVideo,
      features: ['80km Range', '25km/h Speed', 'Smart Display', 'LED Lights'],
      isFeatured: true,
      badge: 'Electric',
      badgeColor: 'bg-black text-white',
    },
    {
      id: 2,
      name: 'Bosco Pedal Bike',
      nickname: 'ST 100',
      description:
        'Classic pedal bike with premium components and comfortable design. Perfect for daily commuting and recreational riding.',
      price: '$199',
      originalPrice: '$249',
      rating: 4.9,
      reviews: 89,
      video: pedalBikeVideo,
      features: [
        'Lightweight Frame',
        '21-Speed Gears',
        'Comfortable Saddle',
        'Durable Tires',
      ],
      isFeatured: true,
      badge: 'Classic',
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

          {/* Featured Products Section */}
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
                Our Products
              </span>
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-black hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group'
                >
                  <div className='grid grid-cols-1 lg:grid-cols-1 gap-0'>
                    {/* Product Video */}
                    <div
                      className='relative overflow-hidden group cursor-pointer bg-gradient-to-br from-gray-900 to-black'
                      onClick={handleImageClick}
                    >
                      {/* Video Container with Border */}
                      <div className='relative w-full h-80 overflow-hidden rounded-t-3xl'>
                        <video
                          src={product.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className='w-full h-full object-cover group-hover:scale-110 transition-all duration-700'
                        />

                        {/* Subtle Gradient Overlays - Only on edges */}
                        <div className='absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none' />
                        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none' />
                        <div className='absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-black/30 to-transparent pointer-events-none' />
                        <div className='absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black/30 to-transparent pointer-events-none' />
                      </div>

                      {/* Floating Badge */}
                      <div className='absolute top-6 left-6 z-10'>
                        <span
                          className={`inline-flex items-center px-4 py-2 text-white text-sm font-bold rounded-full shadow-2xl backdrop-blur-sm border border-white/20 ${product.badgeColor}`}
                        >
                          <span className='mr-2'>⚡</span>
                          {product.badge}
                        </span>
                      </div>

                      {/* Play Button Overlay */}
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <div className='bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/50 transform scale-90 group-hover:scale-100 transition-transform duration-300'>
                          <span className='text-black font-bold text-sm flex items-center'>
                            <ZoomIn className='w-5 h-5 mr-2' />
                            Click to View
                          </span>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-transparent via-white/10 to-transparent rounded-bl-full pointer-events-none' />

                      {/* Bottom Glow Effect */}
                      <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent' />
                    </div>

                    {/* Product Details */}
                    <div className='p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'>
                      {/* Background Pattern */}
                      <div className='absolute inset-0 opacity-5'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-black rounded-full -translate-y-16 translate-x-16' />
                        <div className='absolute bottom-0 left-0 w-24 h-24 bg-black rounded-full translate-y-12 -translate-x-12' />
                      </div>
                      <div className='mb-6'>
                        <h3 className='text-3xl font-bold text-black mb-2'>
                          {product.name}
                        </h3>
                        <p className='text-xl text-gray-700 font-semibold mb-4'>
                          {product.nickname}
                        </p>
                        <p className='text-gray-600 leading-relaxed mb-6'>
                          {product.description}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className='flex items-center mb-6'>
                        <div className='flex items-center mr-4'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(product.rating!)
                                  ? 'text-black fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className='text-gray-600 font-medium'>
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Features */}
                      <div className='grid grid-cols-2 gap-3 mb-8'>
                        {product.features.map((feature, index) => (
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
                      <div className='flex items-center mb-6'>
                        <span className='text-3xl font-bold text-black mr-3'>
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className='text-xl text-gray-400 line-through'>
                            {product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className='flex justify-start mb-8'>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleBuyNow(product.name)}
                          className='bg-black hover:bg-gray-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center'
                        >
                          Buy Now
                          <ArrowRight className='w-5 h-5 ml-2' />
                        </motion.button>
                      </div>

                      {/* Product Specifications - Accordion */}
                      <div className='border-t-2 border-black/10 pt-6'>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                          className='bg-white border-2 border-black/20 rounded-xl overflow-hidden shadow-lg'
                        >
                          {/* Accordion Header */}
                          <button
                            onClick={() => {
                              logAccordionState(product.id)
                              console.log(
                                `Toggling accordion for product ${product.id}`
                              )

                              setExpandedSpecs((prev) => {
                                const newState = { ...prev }
                                newState[product.id] = !newState[product.id]
                                console.log('New state after toggle:', newState)
                                return newState
                              })
                            }}
                            className='w-full p-6 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300 flex items-center justify-between group relative'
                          >
                            <div className='flex items-center'>
                              <Settings className='w-6 h-6 mr-3 text-black' />
                              <h4 className='text-xl font-bold text-black'>
                                Product Specifications
                              </h4>
                              <motion.div
                                animate={{
                                  y: expandedSpecs[product.id] ? 0 : [0, -3, 0],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: expandedSpecs[product.id]
                                    ? 0
                                    : Infinity,
                                  ease: 'easeInOut',
                                }}
                                className='ml-3 text-black'
                              >
                                <svg
                                  width='20'
                                  height='20'
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='currentColor'
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path d='M6 9l6 6 6-6' />
                                </svg>
                              </motion.div>
                            </div>
                            <div className='flex items-center'>
                              <span className='mr-2 text-sm text-gray-600 font-medium'>
                                {expandedSpecs[product.id]
                                  ? 'Click to hide'
                                  : 'Click to show'}{' '}
                                (ID: {product.id})
                              </span>
                              <motion.div
                                animate={{
                                  rotate: expandedSpecs[product.id] ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className='w-6 h-6 text-black group-hover:scale-110 transition-transform duration-300'
                              >
                                <svg
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M19 9l-7 7-7-7'
                                  />
                                </svg>
                              </motion.div>

                              {/* Hand Emoji with Tooltip */}
                              <div className='ml-4 relative group/tooltip'>
                                <motion.div
                                  animate={{
                                    y: expandedSpecs[product.id]
                                      ? 0
                                      : [0, -5, 0],
                                    scale: expandedSpecs[product.id]
                                      ? 1
                                      : [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: expandedSpecs[product.id]
                                      ? 0
                                      : Infinity,
                                    ease: 'easeInOut',
                                  }}
                                  className='text-2xl cursor-pointer'
                                >
                                  👆
                                </motion.div>

                                {/* Tooltip */}
                                <div className='absolute bottom-full right-0 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20'>
                                  Click here to open
                                  <div className='absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black'></div>
                                </div>
                              </div>
                            </div>
                          </button>

                          {/* Accordion Content */}
                          <AnimatePresence>
                            {expandedSpecs[product.id] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.4,
                                  ease: 'easeInOut',
                                }}
                                className='overflow-hidden'
                              >
                                <div className='p-6 bg-white border-t border-black/10'>
                                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                                    {productSpecifications.map(
                                      (spec, index) => (
                                        <motion.div
                                          key={index}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                          }}
                                          className='bg-gray-50 border border-black/10 rounded-lg p-4 hover:shadow-md transition-all duration-300 group cursor-pointer hover:bg-gray-100'
                                          onClick={() => {
                                            // Here you could add detailed zoom functionality for each spec
                                            console.log(
                                              `Zooming into ${spec.category}`
                                            )
                                          }}
                                        >
                                          <div className='flex items-start justify-between mb-3'>
                                            <div className='flex items-center'>
                                              <span className='text-xl mr-3'>
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
                                      )
                                    )}
                                  </div>

                                  {/* Additional Details Section */}
                                  <div className='bg-black/5 rounded-lg p-4 border border-black/10'>
                                    <h5 className='font-semibold text-black mb-3 flex items-center'>
                                      <span className='text-lg mr-2'>📋</span>
                                      Additional Information
                                    </h5>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600'>
                                      <div>
                                        <p>
                                          <strong>Warranty:</strong> 1 year
                                          manufacturer warranty
                                        </p>
                                        <p>
                                          <strong>Assembly:</strong>{' '}
                                          Professional assembly included
                                        </p>
                                        <p>
                                          <strong>Delivery:</strong> Free
                                          delivery within city limits
                                        </p>
                                      </div>
                                      <div>
                                        <p>
                                          <strong>Maintenance:</strong> First
                                          service free after 3 months
                                        </p>
                                        <p>
                                          <strong>Support:</strong> 24/7
                                          customer support available
                                        </p>
                                        <p>
                                          <strong>Returns:</strong> 30-day
                                          return policy
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className='mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200'>
                                    <p className='text-sm text-blue-800 text-center'>
                                      💡 <strong>Tip:</strong> Click on any
                                      specification to explore detailed
                                      component information and technical
                                      specifications
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <video
                src={
                  selectedProduct === 'Bosco EBike'
                    ? ebikeVideo
                    : pedalBikeVideo
                }
                autoPlay
                loop
                muted
                playsInline
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
