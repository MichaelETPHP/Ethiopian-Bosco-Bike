import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Zap, Wind } from 'lucide-react'

const ModernHeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Video Background */}
      <div className='absolute inset-0 w-full h-full -z-10 overflow-hidden'>
        {/* Video: grayscale by default, color at bottom with gradient fade */}
        <div className='absolute inset-0 w-full h-full'>
          <video
            className='w-full h-full object-cover grayscale'
            src='https://assets.mixkit.co/videos/41875/41875-720.mp4'
            autoPlay
            loop
            muted
            playsInline
            poster='https://press.et/herald/wp-content/uploads/2024/07/3-3.png'
            style={{ objectFit: 'cover', minWidth: '100%', minHeight: '100%' }}
          />
          {/* Color video overlay, only visible at bottom with gradient fade */}
          <div className='absolute inset-0 w-full h-full pointer-events-none'>
            <video
              className='w-full h-full object-cover'
              src='https://assets.mixkit.co/videos/41875/41875-720.mp4'
              autoPlay
              loop
              muted
              playsInline
              poster='https://press.et/herald/wp-content/uploads/2024/07/3-3.png'
              style={{
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
              }}
            />
            {/* Gradient mask: fade in color from bottom */}
            <div
              className='absolute inset-0 w-full h-full pointer-events-none'
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                  'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 70%)',
                maskImage:
                  'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
        {/* Stronger black overlay for readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 pointer-events-none' />
      </div>

      {/* Animated Background Texture (white dots, subtle) */}
      <div className='absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%227%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%227%22 r%3D%221%22/%3E%3Ccircle cx%3D%227%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%2227%22 r%3D%221%22/%3E%3Ccircle cx%3D%227%22 cy%3D%2247%22 r%3D%221%22/%3E%3Ccircle cx%3D%2227%22 cy%3D%2247%22 r%3D%221%22/%3E%3Ccircle cx%3D%2247%22 cy%3D%2247%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
      </div>

      {/* Floating Particles (white, subtle) */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-white/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Parallax Elements (white, subtle) */}
      <motion.div
        style={{ y: y1 }}
        className='absolute top-20 left-10 text-white/20'
      >
        <Zap className='w-32 h-32' />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-20 right-10 text-white/20'
      >
        <Wind className='w-24 h-24' />
      </motion.div>

      {/* Main Content */}
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='text-white/70 text-lg sm:text-xl mb-6 font-light tracking-wider uppercase'
          >
            Premium Performance • Unmatched Style
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight'
          >
            Ride the
            <motion.span
              className='block bg-gradient-to-r from-white via-gray-400 to-black bg-clip-text text-transparent'
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Future
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='text-xl sm:text-2xl text-white/60 mb-12 max-w-4xl mx-auto leading-relaxed'
          >
            Experience the perfect fusion of cutting-edge technology and
            timeless design. Every ride is an adventure waiting to unfold.
          </motion.p>

          {/* CTA Button Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex items-center justify-center gap-6'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(255,255,255,0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              className='group bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 backdrop-blur-sm border border-white/10'
              onMouseEnter={(e) => {
                const video = document.querySelector('video')
                if (video) video.classList.remove('grayscale')
              }}
              onMouseLeave={(e) => {
                const video = document.querySelector('video')
                if (video) video.classList.add('grayscale')
              }}
              onClick={() => {
                const el = document.getElementById('products')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Collection
              <ArrowDown className='w-5 h-5' />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ...removed scroll indicator... */}
      </div>

      {/* Trail Effect on Hover (white, subtle) */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
    </section>
  )
}

export default ModernHeroSection
