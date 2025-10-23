import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-2 text-white flex justify-around items-center">
  {/* Logo */}
  <div className="navbar__img mr-4">
    <a href="/">
      <img
        alt="logo-img"
        loading="lazy"
        width="150"
        height="60"
        style={{ color: 'transparent' }}
        src="acaroglu-tr.png"
      />
    </a>
  </div>

  {/* Başlık */}
  <h1 className="text-xl font-bold">Rent A Car</h1>

  {/* Menü Linkleri */}
  <div className="navbar__links flex space-x-6 ml-6">
    <Link to="/" className="nav-link hover:underline">Ana Sayfa</Link>
    <Link to="/araclar" className="nav-link hover:underline">Araçlar</Link>
    <Link to="/hakkimizda" className="nav-link hover:underline">Hakkımızda</Link>
    <Link to="/iletisim" className="nav-link hover:underline">İletişim</Link>
  </div>
</nav>

);

const Home = () => (
  
  <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden"
    >
      {/* Sağ tarafta tam ekran background */}
      <div className="absolute inset-0 right-0">
        <img
          src="hero-bg.webp"
          alt="Background Shape"
          className="absolute right-0 top-0 h-full w-auto object-cover opacity-40 lg:opacity-100"
        />
      </div>

      {/* İçerik */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center">
        
        {/* Sol Taraf (Text) */}
        <div className="flex-1 text-center md:text-left z-10">
          <h4 className="text-2xl mb-1 text-black-800">Seyahatinizi şimdi planlayın</h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Araç kiralama hizmetimizle <span className="text-red-600">büyük</span> tasarruf edin
          </h1>
          <p className="text-gray-500 text-lg mb-6 max-w-xl">
            Hayalinizdeki arabayı kiralayın. Rakipsiz fiyatlar, sınırsız mil, esnek teslim alma seçenekleri ve çok daha fazlası.
          </p>
          <Link
            to="/araclar"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Araçları Gör
          </Link>
        </div>

        {/* Sağda Araba Görseli */}
        <div className="flex-1 mt-10 md:mt-0 relative z-10 flex justify-center">
          <img
            src="main-car.png"
            alt="Car"
            className="w-auto max-w-2xl lg:max-w-3xl drop-shadow-2xl animate-fadeIn"
          />
        </div>
      </div>
    </section>
);

const Cars = () => {
const cars = [
  { id: 1, name: "Renault Clio (Beyaz)", price: "800₺/gün", img: "renault-clio-5d-blue-2020.png" },
  { id: 2, name: "Renault Clio (Kırmızı)", price: "820₺/gün", img: "renault-clio-5d-schwarz-2020.png" },
  { id: 3, name: "Renault Clio (Gri)", price: "850₺/gün", img: "fiesta02.png" },
  { id: 4, name: "Ford Fiesta (Turuncu)", price: "900₺/gün", img: "fiesta03.jpg" }
];
  return (
   <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {cars.map(car => (
    <div key={car.id} className="border rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={car.img} alt={car.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{car.name}</h3>
        <p className="text-lg text-green-700 font-semibold mb-2">{car.price}</p>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition duration-300">
          Kirala
        </button>
      </div>
    </div>
  ))}
</div>
  );
};

const About = () => (
        <div className="relative bg-gray-100 py-12 px-6 md:px-12" style={{ backgroundImage: "url('')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="grid grid-cols-0 gap-12 mb-10">
      <div className="bg-white bg-opacity-120 shadow-lg rounded-xl p-6 border-t-4 border-blue-500">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 drop-shadow-lg">Hakkımızda</h2>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
          2018 yılından bu yana Karabük ve çevresinde bireysel ve kurumsal müşterilerimize güvenilir, ekonomik ve kaliteli araç kiralama hizmeti sunuyoruz. Müşteri memnuniyetini ön planda tutan anlayışımız sayesinde, kısa sürede bölgenin en çok tercih edilen rent a car firmalarından biri haline geldik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white bg-opacity-120 shadow-lg rounded-xl p-6 border-t-4 border-blue-500">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Neden Bizi Tercih Etmelisiniz?</h3>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
            <li>Geniş Araç Filosu – Ekonomik, orta ve lüks segmentteki araçlarımız ile her ihtiyaca uygun çözümler sunuyoruz.</li>
            <li>Uygun Fiyat & Şeffaf Sözleşme – Ek ücretler ve sürpriz maliyetler olmadan net fiyat garantisi veriyoruz.</li>
            <li>7/24 Yol Yardımı – Seyahatiniz boyunca her an yanınızdayız.</li>
            <li>Müşteri Odaklı Hizmet – Her müşterimize özel çözümler ve hızlı destek sağlıyoruz.</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-120 shadow-lg rounded-xl p-6 border-t-4 border-green-500 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2 text-green-600">Misyonumuz</h3>
          <p className="text-gray-700 mb-4">Karabük’te araç kiralama sektöründe kalite, güven ve müşteri memnuniyetini en üst seviyede tutarak, misafirlerimizin konforlu seyahat deneyimi yaşamasını sağlamak.</p>
          <h3 className="text-xl font-semibold mb-2 text-green-600">Vizyonumuz</h3>
          <p className="text-gray-700">Sektördeki yenilikleri takip eden, teknolojiyi en iyi şekilde kullanan ve Türkiye genelinde marka bilinirliğini artıran lider rent a car firmalarından biri olmak.</p>
        </div>
      </div>
    </div>
  </div>
);

const Gallery = () => (
  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[1,2,3,4,5,6].map((i) => (
      <img key={i} src={`https://source.unsplash.com/400x300/?car,${i}`} alt={`Car ${i}`} className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"/>
    ))}
  </div>
);

const Contact = () => (
 <div className="relative bg-gray-50 py-12 px-6 md:px-12">
    <div className="max-w-4xl mx-auto text-center mb-8">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-4">İletişim</h2>
      <p className="text-lg text-gray-700">Her türlü soru ve talepleriniz için bizimle iletişime geçebilirsiniz. Sizlere yardımcı olmaktan mutluluk duyarız.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Google Maps */}
      <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Harita Konumu"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.278874014494!2d32.6269!3d41.2044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDEuMjA0NCwgMzIuNjI2OQ!5e0!3m2!1str!2str!4v0000000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-500 flex flex-col justify-center text-left">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">İletişim Bilgilerimiz</h3>
        <p className="text-gray-700 mb-2"><strong>Adres:</strong> Karabük Merkez, Atatürk Bulvarı No:123</p>
        <p className="text-gray-700 mb-2"><strong>Telefon:</strong> <a href="tel:+903700000000" className="text-blue-600 hover:underline">+90 370 000 00 00</a></p>
        <p className="text-gray-700 mb-4"><strong>E-posta:</strong> <a href="mailto:info@acaraoglu.com" className="text-blue-600 hover:underline">info@acaraoglu.com</a></p>
        <p className="text-gray-600">Ofisimiz hafta içi 09:00 - 18:00 saatleri arasında hizmet vermektedir.</p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center mt-6">© 2025 Rent A Car - Tüm Hakları Saklıdır.</footer>
);

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/araclar" element={<Cars />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
