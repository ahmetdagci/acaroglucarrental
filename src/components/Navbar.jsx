import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/acaroglu-tr3.png" alt="Logo" className="h-20 w-auto" />
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 focus:outline-none">
          ☰
        </button>
        <div className={`flex-col md:flex md:flex-row md:space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 transition-all duration-200 ${open ? 'block' : 'hidden'}`}>
          <Link to="/" className="block py-2 md:py-0 hover:text-red-600" onClick={() => setOpen(false)}>Ana Sayfa</Link>
          <Link to="/cars" className="block py-2 md:py-0 hover:text-red-600" onClick={() => setOpen(false)}>Araçlar</Link>
          <Link to="/about" className="block py-2 md:py-0 hover:text-red-600" onClick={() => setOpen(false)}>Hakkımızda</Link>
          <Link to="/contact" className="block py-2 md:py-0 hover:text-red-600" onClick={() => setOpen(false)}>İletişim</Link>
        </div>
      </div>
    </nav>
  );
}
