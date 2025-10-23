import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center bg-gray-50 overflow-hidden">
    <div className="absolute inset-0 right-0">
      <img src="/hero-bg.webp" alt="Background Shape" className="absolute right-0 top-0 h-full w-auto object-cover opacity-40 lg:opacity-100" />
    </div>
    <div className="relative container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center">
      <div className="flex-1 text-center md:text-left z-10">
        <h4 className="text-lg sm:text-xl mb-2 text-gray-800">Seyahatinizi şimdi planlayın</h4>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Araç kiralama hizmetimizle <span className="text-red-600">büyük</span> tasarruf edin
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-xl mx-auto md:mx-0">
          Hayalinizdeki arabayı kiralayın. Rakipsiz fiyatlar, sınırsız mil, esnek teslim alma seçenekleri ve çok daha fazlası.
        </p>
        <Link to="/cars" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all">Araçları Gör</Link>
      </div>
      <div className="flex-1 mt-10 md:mt-0 z-10 flex justify-center">
        <img src="/main-car.png" alt="Car" class="car-img" className="w-auto max-w-2xl lg:max-w-3xl drop-shadow-2xl animate-fadeIn" />
      </div>
    </div>
  </section>
);
export default Home;
