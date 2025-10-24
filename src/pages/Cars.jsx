import React from "react";

const cars = [
  { id: 1, name: "Renault Clio (Beyaz)", image: "/renault-clio-5d-blue-2020.png", price: "1.200 TL / Günlük", gear: "Otomatik", fuel: "Benzin" },
  { id: 2, name: "Renault Clio (Kırmızı)", image: "/renault-clio-5d-schwarz-2020.png", price: "1.000 TL / Günlük", gear: "Manuel", fuel: "Dizel" },
  { id: 3, name: "Renault Clio (Gri)", image: "/fiesta02.png", price: "2.200 TL / Günlük", gear: "Otomatik", fuel: "Dizel" },
  { id: 4, name: "Ford Fiesta (Turuncu)", image: "/fiesta03.jpg", price: "3.500 TL / Günlük", gear: "Otomatik", fuel: "Benzin" }
];

const Cars = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-800">Araçlarımız</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map(car => (
            <div key={car.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transition-all duration-500" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-1">{car.fuel}</p>
                  <p className="text-gray-600 mb-3">{car.gear}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-lg font-semibold text-red-600 mb-3">{car.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
