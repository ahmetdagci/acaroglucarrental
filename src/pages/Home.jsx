import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-start justify-center bg-gray-900 text-white overflow-hidden"
  >
    {/* Tam ekran arka plan */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/acaroglu-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>

    {/* Koyu katman (okunabilirlik için) */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

    {/* İçerik */}
    <div className="relative container mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-16 text-center">
      <h4 className="text-lg sm:text-xl mb-2 text-gray-200">
        Seyahatinizi şimdi planlayın
      </h4>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        Araç kiralama hizmetimizle{" "}
        <span className="text-red-500">büyük</span> tasarruf edin
      </h1>
      <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
        Hayalinizdeki arabayı kiralayın. Rakipsiz fiyatlar, sınırsız mil, esnek
        teslim alma seçenekleri ve çok daha fazlası.
      </p>
      <Link
        to="/cars"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all"
      >
        Araçları Gör
      </Link>
    </div>
  </section>
);


export default Home;
