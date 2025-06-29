import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  const images = [
    'https://press.et/herald/wp-content/uploads/2024/07/3-3.png',
    'https://addisstandard.com/wp-content/uploads/2024/07/Picture6-1024x577.png'
  ];

  useEffect(() => {
    // Animate text in after component mounts
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    // Set up image rotation
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(textTimer);
      clearInterval(imageTimer);
    };
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Animation */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Electric mobility ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Explore the Future of
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Electric Mobility
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Premium Electric Bikes and Scooters for Every Adventure
          </p>

          <button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Explore Products
          </button>
        </div>

        {/* Social Media Icons */}
        <div className={`flex items-center justify-center space-x-6 mt-16 transition-all duration-1000 delay-500 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;