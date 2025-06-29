import React, { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bebas text-blue-600 tracking-widest">PrinterBoys</span>
      </div>
      <nav className="flex gap-6 items-center">
        <a href="#" className="font-clash text-gray-700 hover:text-blue-600 transition">Home</a>
        <a href="#" className="font-clash text-gray-700 hover:text-blue-600 transition">Productos</a>
        <a href="#" className="font-clash text-gray-700 hover:text-blue-600 transition">Contacto</a>
        {/* Selector de idioma */}
        <div className="relative ml-4">
          <button
            className="flex items-center gap-1 px-3 py-1 rounded-full font-montserrat text-gray-700 hover:bg-gray-100 transition focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Seleccionar idioma"
          >
            <span className="text-xl">🌐</span>
            <span className="hidden md:inline font-montserrat text-sm">ES</span>
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button className="w-full px-4 py-2 text-left font-montserrat text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>Español</button>
              <button className="w-full px-4 py-2 text-left font-montserrat text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>English</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
