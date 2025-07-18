import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoMain from '../assets/logo-main.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      // Scroll to top of the page for Home
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Scroll to specific section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl rounded-2xl shadow-xl transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border border-white/30'
          : 'bg-white/10 backdrop-blur-2xl border border-white/20'
      }`}
      style={{
        WebkitBackdropFilter: 'blur(24px)',
        backdropFilter: 'blur(24px)',
      }}
    >
      <div className='px-4 sm:px-8 py-2 flex items-center justify-between'>
        {/* Logo Area - Clickable to go to top */}
        <div
          className='flex items-center space-x-3 select-none cursor-pointer'
          onClick={scrollToTop}
        >
          <div className='w-16 h-16 flex items-center justify-center rounded-full border border-white/30'>
            <img
              src={logoMain}
              alt='Bosco Bike Logo'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <span
            className={`text-2xl font-extrabold tracking-widest uppercase transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            Bosco Bike
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center space-x-8 font-inter'>
          {['hero', 'about', 'products', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative capitalize font-semibold tracking-wide px-1 py-0.5 transition-colors duration-300 bg-transparent outline-none group ${
                isScrolled
                  ? 'text-black hover:text-gray-700'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              {section === 'hero'
                ? 'Home'
                : section === 'contact'
                ? 'Contact'
                : section}
              <span
                className={`block h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full mt-1 ${
                  isScrolled ? 'bg-black' : 'bg-white'
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors border ${
            isScrolled
              ? 'bg-white/80 hover:bg-white border-white'
              : 'bg-white/40 hover:bg-white/60 border-white/40'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X
              className={`w-7 h-7 ${isScrolled ? 'text-black' : 'text-white'}`}
            />
          ) : (
            <Menu
              className={`w-7 h-7 ${isScrolled ? 'text-black' : 'text-white'}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className='fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-white/95 backdrop-blur-xl shadow-2xl z-50 border-l border-gray-200 flex flex-col'
          >
            <div className='flex items-center justify-between px-6 py-4 border-b border-gray-200'>
              <span className='text-xl font-bold tracking-widest text-black'>
                Menu
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className='p-2 rounded-lg hover:bg-gray-100'
              >
                <X className='w-6 h-6 text-black' />
              </button>
            </div>
            <nav className='flex flex-col gap-2 px-6 py-6'>
              {['hero', 'about', 'products', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className='text-lg font-semibold capitalize text-black hover:text-gray-700 transition-colors text-left py-2 px-2 rounded-lg hover:bg-gray-100'
                >
                  {section === 'hero'
                    ? 'Home'
                    : section === 'contact'
                    ? 'Contact'
                    : section}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
