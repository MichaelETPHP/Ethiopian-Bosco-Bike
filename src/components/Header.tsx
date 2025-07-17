import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl rounded-2xl shadow-xl transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border border-white/30'
          : 'bg-white/10 backdrop-blur-2xl border border-white/20'
      } text-white`}
      style={{
        WebkitBackdropFilter: 'blur(24px)',
        backdropFilter: 'blur(24px)',
      }}
    >
      <div className='px-4 sm:px-8 py-2 flex items-center justify-between'>
        {/* Logo Area */}
        <div className='flex items-center space-x-3 select-none'>
          <div className='w-10 h-10 bg-gradient-to-r from-white to-slate-300 rounded-xl flex items-center justify-center shadow-md border border-slate-300'>
            <Zap className='w-6 h-6 text-black' />
          </div>
          <span
            className={`text-2xl font-extrabold tracking-widest uppercase transition-colors duration-300 text-white`}
          >
            Bosco Bike
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center space-x-8 font-inter'>
          {['hero', 'about', 'products'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative capitalize font-semibold tracking-wide px-1 py-0.5 transition-colors duration-300 bg-transparent outline-none group text-white`}
            >
              {section === 'hero' ? 'Home' : section}
              <span className='block h-0.5 bg-gradient-to-r from-white to-slate-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full mt-1' />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 rounded-lg bg-white/40 hover:bg-slate-200 transition-colors border border-slate-200'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className='w-7 h-7 text-white' />
          ) : (
            <Menu className='w-7 h-7 text-white' />
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
            className='fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-white/95 backdrop-blur-xl shadow-2xl z-50 border-l border-slate-200 flex flex-col'
          >
            <div className='flex items-center justify-between px-6 py-4 border-b border-slate-200'>
              <span className='text-xl font-bold tracking-widest text-white'>
                Menu
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className='p-2 rounded-lg hover:bg-slate-100'
              >
                <X className='w-6 h-6 text-white' />
              </button>
            </div>
            <nav className='flex flex-col gap-2 px-6 py-6'>
              {['hero', 'about', 'products'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className='text-lg font-semibold capitalize text-white hover:text-slate-200 transition-colors text-left py-2 px-2 rounded-lg hover:bg-slate-100'
                >
                  {section === 'hero' ? 'Home' : section}
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
