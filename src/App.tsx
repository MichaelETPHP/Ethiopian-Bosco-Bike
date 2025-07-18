import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
// import SplitVideoSection from './components/SplitVideoSection'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      {/* <SplitVideoSection /> */}
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
