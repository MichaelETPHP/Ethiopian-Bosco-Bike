import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import aboutPlaceholder from '../assets/logo.png'
import bgImage from '../assets/bg.png'

const About: React.FC = () => {
  // Parallax effect for background
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]) // Parallax: moves slower than scroll
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.1]) // Always 0.1 for subtlety

  return (
    <section
      id='about'
      className='relative py-20 lg:py-32 bg-white overflow-hidden'
      ref={ref}
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 40%, rgba(0,0,0,0.04) 0%, transparent 70%), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.06) 0%, transparent 70%)',
      }}
    >
      {/* Parallax background image */}
      <motion.div
        aria-hidden='true'
        className='absolute inset-0 w-full h-full z-0 pointer-events-none select-none'
        style={{
          background: `url(${bgImage}) top center/cover no-repeat`,
          opacity,
          y,
          filter: 'blur(1.5px)',
        }}
      />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl'>
        <motion.div
          className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {/* Left: Image/Logo */}
          <motion.div
            className='w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0'
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={{}}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={aboutPlaceholder}
              alt='Company logo or branding image'
              className='rounded-3xl shadow-2xl object-contain w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] max-w-full border border-black/10 bg-white/80 transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)]'
              whileHover={{ scale: 1.06 }}
              initial={false}
              animate={false}
            />
          </motion.div>
          {/* Right: Text Content */}
          <motion.div
            className='w-full lg:w-1/2 bg-white/95 rounded-3xl p-8 lg:p-12 shadow-xl border border-black/5 flex flex-col justify-center'
            style={{ fontFamily: 'Inter, ui-sans-serif, serif' }}
            initial={{ opacity: 0, x: 60, scale: 0.98 }}
            animate={{}}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-gray-900 mb-4 tracking-tight'>
              About Bosco Bike
            </h2>
            <div className='w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-400 rounded-full mb-6' />
            <p className='text-lg sm:text-xl text-gray-800 leading-relaxed mb-6 font-medium'>
              We are passionate about sustainable transportation and bringing
              you the best in electric mobility solutions. Our commitment to
              innovation, quality, and environmental responsibility drives
              everything we do.
            </p>
            <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
              Every bike and scooter we offer is carefully selected for its
              performance, durability, and environmental impact. Join us in
              creating a cleaner, more efficient world through premium electric
              mobility.
            </p>
            <div className='mt-6'>
              <span className='block text-sm text-gray-500 font-semibold'>
                Our Mission
              </span>
              <span className='block text-base text-gray-800'>
                Empowering communities with innovative, eco-friendly mobility
                solutions.
              </span>
            </div>
            <div className='mt-2'>
              <span className='block text-sm text-gray-500 font-semibold'>
                Our Vision
              </span>
              <span className='block text-base text-gray-800'>
                To lead the way in sustainable transportation for a cleaner,
                brighter future.
              </span>
            </div>
            <div className='my-6 border-t border-gray-200' />
            <div className='flex items-center justify-center gap-6 mt-2'>
              {/* Facebook */}
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
                className='text-gray-500 hover:text-blue-600 transition-colors duration-200'
              >
                <svg
                  width='28'
                  height='28'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0' />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
                className='text-gray-500 hover:text-blue-400 transition-colors duration-200'
              >
                <svg
                  width='28'
                  height='28'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z' />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className='text-gray-500 hover:text-pink-500 transition-colors duration-200'
              >
                <svg
                  width='28'
                  height='28'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.338 2.396 3.511 2.338 4.788.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.33 2.45 1.298 3.418.968.968 2.141 1.24 3.418 1.298C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.45-.33 3.418-1.298.968-.968 1.24-2.141 1.298-3.418.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.277-.33-2.45-1.298-3.418-.968-.968-2.141-1.24-3.418-1.298C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='text-gray-500 hover:text-blue-700 transition-colors duration-200'
              >
                <svg
                  width='28'
                  height='28'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z' />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
