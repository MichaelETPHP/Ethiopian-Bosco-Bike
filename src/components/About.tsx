import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, Target, Users, Award } from 'lucide-react'
import logoMain from '../assets/logo-main.png'
import bgImage from '../assets/bg.png'

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section
      id='about'
      className='relative py-24 lg:py-32 overflow-hidden'
      ref={containerRef}
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
      }}
    >
      {/* Futuristic Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Floating geometric shapes */}
        <motion.div
          style={{ y: y1 }}
          className='absolute top-20 left-10 w-32 h-32 opacity-10'
        >
          <div className='w-full h-full bg-gradient-to-br from-black/20 to-transparent rounded-full blur-xl' />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className='absolute top-40 right-20 w-24 h-24 opacity-8'
        >
          <div className='w-full h-full bg-gradient-to-br from-black/15 to-transparent rounded-full blur-lg' />
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className='absolute bottom-32 left-1/4 w-20 h-20 opacity-6'
        >
          <div className='w-full h-full bg-gradient-to-br from-black/10 to-transparent rounded-full blur-md' />
        </motion.div>

        {/* Glassmorphism orbs */}
        <motion.div
          style={{ y: y1 }}
          className='absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-white/30 to-transparent rounded-full blur-3xl backdrop-blur-sm'
        />
        <motion.div
          style={{ y: y2 }}
          className='absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl backdrop-blur-sm'
        />

        {/* Animated grid pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23000000%22 fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%227%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%227%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%227%22 cy%3D%2247%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%2247%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%2247%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Side - Image with Futuristic Elements */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className='relative'
          >
            {/* Glassmorphism container */}
            <div className='relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl'>
              {/* Animated background elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-black/20 to-transparent rounded-full blur-sm'
              />

              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-black/15 to-transparent rounded-full blur-sm'
              />

              {/* Main image container */}
              <div className='relative z-10'>
                <motion.div
                  className='relative group cursor-pointer'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image with glassmorphism border */}
                  <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm border border-white/50 shadow-xl'>
                    <img
                      src={logoMain}
                      alt='Bosco Bike Logo'
                      className='w-full h-auto object-contain p-8 transition-transform duration-700 group-hover:scale-105'
                    />

                    {/* Hover overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Sparkle effect on hover */}
                    <motion.div
                      className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Sparkles className='w-6 h-6 text-white' />
                    </motion.div>
                  </div>

                  {/* Floating stats cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/50'
                  >
                    <div className='flex items-center space-x-2'>
                      <Award className='w-4 h-4 text-black' />
                      <span className='text-sm font-semibold text-black'>
                        Premium Quality
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/50'
                  >
                    <div className='flex items-center space-x-2'>
                      <Users className='w-4 h-4 text-black' />
                      <span className='text-sm font-semibold text-black'>
                        Trusted by 1000+
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className='relative'
          >
            {/* Glassmorphism content container */}
            <div className='bg-white/30 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/30 shadow-2xl'>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-2 bg-black/10 backdrop-blur-sm text-black text-sm font-semibold rounded-full border border-black/20 mb-6'
              >
                <Target className='w-4 h-4 mr-2' />
                Our Mission
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'
              >
                Ride Smart.
                <span className='block bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent'>
                  Ride Green.
                </span>
              </motion.h2>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='w-20 h-1 bg-gradient-to-r from-black to-gray-600 rounded-full mb-8'
              />

              {/* Mission Statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 font-medium'
              >
                We are passionate about revolutionizing urban transportation
                through cutting-edge electric mobility solutions. Our commitment
                to innovation, quality, and environmental responsibility drives
                everything we do.
              </motion.p>

              {/* Story */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className='text-base sm:text-lg text-gray-600 leading-relaxed mb-8'
              >
                Every bike and scooter we offer is carefully selected for its
                performance, durability, and environmental impact. Join us in
                creating a cleaner, more efficient world through premium
                electric mobility that doesn't compromise on style or
                functionality.
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'
              >
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-black rounded-full' />
                  <span className='text-sm font-medium text-gray-700'>
                    Premium Quality Components
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-black rounded-full' />
                  <span className='text-sm font-medium text-gray-700'>
                    Eco-Friendly Technology
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-black rounded-full' />
                  <span className='text-sm font-medium text-gray-700'>
                    24/7 Customer Support
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-black rounded-full' />
                  <span className='text-sm font-medium text-gray-700'>
                    Innovative Design
                  </span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row gap-4'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center'
                  onClick={() => {
                    const el = document.getElementById('products')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Explore Our Products
                  <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center'
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
