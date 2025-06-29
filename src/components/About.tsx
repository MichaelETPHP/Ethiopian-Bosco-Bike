import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            About Bosco Bick
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We are passionate about sustainable transportation and bringing you the best in electric mobility solutions. 
            Our commitment to innovation, quality, and environmental responsibility drives everything we do.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Every bike and scooter we offer is carefully selected for its performance, durability, and environmental impact. 
            Join us in creating a cleaner, more efficient world through premium electric mobility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;