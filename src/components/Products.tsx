import React, { useState } from 'react';
import BuyNowModal from './BuyNowModal';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      name: 'OUXI Q8',
      nickname: 'The Urban Explorer',
      description: 'Powerful, stylish, and built for city commuting with premium features.',
      image: 'https://v8fatbike.com/wp-content/uploads/2024/09/OUXI-Q8-600x600.jpg'
    },
    {
      id: 2,
      name: 'Gocio Electric Bike',
      nickname: 'The Mountain Conqueror',
      description: 'Peak performance mountain e-bike with fat tires for any terrain.',
      image: 'https://i5.walmartimages.com/seo/Gocio-Electric-Bike-Adults-Peak-1025W-Mountain-E-Bike-48V-13AH-Removable-Lithium-Ion-Battery-Ebikes-20-x4-0-Fat-Tire-Electric-Bicycles-3A-Fast-Charge_de351e88-90ed-40e1-be42-d2db0ef11202.7cd7395917d288d562e5c501829950ad.jpeg'
    },
    {
      id: 3,
      name: 'Komaki XR1',
      nickname: 'The City Cruiser',
      description: 'Sleek electric scooter perfect for urban commuting and style.',
      image: 'https://komaki.in/wp-content/uploads/2025/04/XR1_right_front-1-1024x816.png'
    }
  ];

  const handleBuyNow = (productName: string) => {
    setSelectedProduct(productName);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium electric bikes and scooters, 
              designed to meet every rider's needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">
                      {product.nickname}
                    </p>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <button
                    onClick={() => handleBuyNow(product.name)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <BuyNowModal productName={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
};

export default Products;