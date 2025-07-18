import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SplitVideoSection: React.FC = () => {
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
      ref={containerRef}
      className='relative min-h-screen bg-white overflow-hidden'
      style={{
        background:
          'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      }}
    >
      {/* Abstract Background Shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Floating geometric shapes */}
        <motion.div
          style={{ y: y1 }}
          className='absolute top-20 left-10 w-32 h-32 opacity-10'
        >
          <svg
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='50'
              cy='50'
              r='40'
              stroke='#3b82f6'
              strokeWidth='2'
              fill='none'
            />
            <circle cx='50' cy='50' r='20' fill='#3b82f6' opacity='0.3' />
          </svg>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className='absolute top-40 right-20 w-24 h-24 opacity-8'
        >
          <svg
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polygon
              points='50,10 90,90 10,90'
              stroke='#10b981'
              strokeWidth='2'
              fill='none'
            />
            <polygon points='50,30 70,70 30,70' fill='#10b981' opacity='0.2' />
          </svg>
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className='absolute bottom-32 left-1/4 w-20 h-20 opacity-6'
        >
          <svg
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='20'
              y='20'
              width='60'
              height='60'
              rx='10'
              stroke='#f59e0b'
              strokeWidth='2'
              fill='none'
            />
            <rect
              x='35'
              y='35'
              width='30'
              height='30'
              rx='5'
              fill='#f59e0b'
              opacity='0.2'
            />
          </svg>
        </motion.div>

        {/* Gradient orbs */}
        <motion.div
          style={{ y: y1 }}
          className='absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y2 }}
          className='absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl'
        />
      </div>

      {/* Main Content Container */}
      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]'>
          {/* Left Side - Content with Parallax Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className='relative'
          >
            {/* Parallax SVG Elements */}
            <motion.div
              style={{ y: y1 }}
              className='absolute -top-10 -left-10 w-32 h-32 opacity-20'
            >
              <svg
                viewBox='0 0 100 100'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20,50 Q50,20 80,50 T140,50'
                  stroke='#3b82f6'
                  strokeWidth='3'
                  fill='none'
                />
                <circle cx='50' cy='50' r='8' fill='#3b82f6' />
              </svg>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className='absolute -bottom-8 -right-8 w-24 h-24 opacity-15'
            >
              <svg
                viewBox='0 0 100 100'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <polygon
                  points='50,10 90,50 50,90 10,50'
                  stroke='#10b981'
                  strokeWidth='2'
                  fill='none'
                />
                <circle cx='50' cy='50' r='15' fill='#10b981' opacity='0.3' />
              </svg>
            </motion.div>

            {/* Content */}
            <div className='relative z-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6'
              >
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse'></span>
                <span className='text-sm font-medium text-blue-700'>
                  Featured Content
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'
              >
                Experience
                <span className='block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent'>
                  Innovation
                </span>
                in Motion
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg'
              >
                Discover cutting-edge technology and design that pushes
                boundaries. Our latest innovations showcase the future of
                digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row gap-4'
              >
                <button className='group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                  <span className='relative z-10'>Watch Now</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </button>

                <button className='px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300'>
                  Learn More
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className='flex gap-8 mt-12'
              >
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>2.5M+</div>
                  <div className='text-sm text-gray-600'>Active Users</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>99.9%</div>
                  <div className='text-sm text-gray-600'>Uptime</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900'>24/7</div>
                  <div className='text-sm text-gray-600'>Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className='relative'
          >
            {/* Video Container with Elegant Styling */}
            <div className='relative group'>
              {/* Background shadow */}
              <div className='absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

              {/* Video frame */}
              <div className='relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100'>
                <div className='aspect-video relative'>
                  {/* Placeholder video - replace with your actual video */}
                  <video
                    className='w-full h-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster='https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  >
                    <source
                      src='https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
                      type='video/mp4'
                    />
                  </video>

                  {/* Play button overlay */}
                  <div className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg'>
                      <svg
                        className='w-8 h-8 text-gray-800 ml-1'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M8 5v14l11-7z' />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video info bar */}
                <div className='p-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900'>
                        Product Showcase
                      </h3>
                      <p className='text-sm text-gray-600'>
                        Experience the future of innovation
                      </p>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full'>
                        Live
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around video */}
              <motion.div
                style={{ y: y1 }}
                className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg'
              />
              <motion.div
                style={{ y: y2 }}
                className='absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg opacity-80'
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none' />
    </section>
  )
}

export default SplitVideoSection
