import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/4 flex justify-center">
          <img src="/about-us.png" alt="About us" className="w-4/5 sm:w-3/4 md:w-full rounded-2xl shadow-lg object-cover" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Acaroğlu Rent A Car</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-4">2018 yılından bu yana Karabük ve çevresinde bireysel ve kurumsal müşterilerimize güvenilir, ekonomik ve kaliteli araç kiralama hizmeti sunuyoruz. Müşteri memnuniyetini ön planda tutan anlayışımız sayesinde, kısa sürede bölgenin en çok tercih edilen rent a car firmalarından biri haline geldik.</p>
          <p className="text-gray-600 text-base sm:text-lg mb-4">Misyonumuz, her müşterimizin yolculuğunu daha keyifli ve sorunsuz hale getirmek. Kısa veya uzun dönem kiralama ihtiyaçlarınızda yanınızdayız.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
