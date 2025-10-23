import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-10 md:p-16">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-8">İletişim</h2>
          <p className="text-lg text-gray-700">Her türlü soru ve talepleriniz için bizimle iletişime geçebilirsiniz. Sizlere yardımcı olmaktan mutluluk duyarız.</p>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


           <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[450px]">
             <iframe
                title="Harita Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.278874014494!2d32.6269!3d41.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDEuMjA0NCwgMzIuNjI2OQ!5e0!3m2!1str!2str!4v0000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>


          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ofis Bilgileri</h3>
            <p className="text-gray-600 mb-2"><strong>Adres:</strong> Karabük Merkez, Atatürk Bulvarı No:123</p>
            <p className="text-gray-600 mb-2"><strong>Telefon:</strong> <a href="tel:+903700000000" className="text-blue-600 hover:underline">+90 370 000 00 00</a></p>
            <p className="text-gray-600 mb-4"><strong>E-posta:</strong> <a href="mailto:info@acaroglu.com" className="text-blue-600 hover:underline">info@acaroglu.com</a></p>
            <p className="text-gray-600">Ofisimiz hafta içi 09:00 - 18:00 saatleri arasında hizmet vermektedir.</p>
          </div>
         

        </div>
      </div>
    </section>
  );
}
