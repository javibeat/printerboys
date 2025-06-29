import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Bloquear scroll del fondo cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bebas text-blue-600 tracking-widest">PrinterBoys</span>
      </div>
      {/* Menú desktop */}
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#" className="font-clash text-gray-700 hover:text-blue-600 transition">{t.home}</a>
        <a href="#productos" className="font-clash text-gray-700 hover:text-blue-600 transition">{t.products}</a>
        <a href="#contacto" className="font-clash text-gray-700 hover:text-blue-600 transition">{t.contact}</a>
        {/* Selector de idioma */}
        <div className="relative ml-4">
          <button
            className="flex items-center gap-1 px-3 py-1 rounded-full font-montserrat text-gray-700 hover:bg-gray-100 transition focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Seleccionar idioma"
          >
            <span className="text-xl">🌐</span>
            <span className="hidden md:inline font-montserrat text-sm uppercase">{language}</span>
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button className="w-full px-4 py-2 text-left font-montserrat text-gray-700 hover:bg-gray-100" onClick={() => { setLanguage('es'); setOpen(false); }}>{t.spanish}</button>
              <button className="w-full px-4 py-2 text-left font-montserrat text-gray-700 hover:bg-gray-100" onClick={() => { setLanguage('en'); setOpen(false); }}>{t.english}</button>
            </div>
          )}
        </div>
      </nav>
      {/* Menú móvil */}
      <div className="md:hidden flex items-center">
        <button
          className="p-2 rounded focus:outline-none hover:bg-gray-100"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center min-h-screen animate-fade-in">
            <button
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <nav className="flex flex-col gap-8 items-center mt-8">
              <a href="#" className="font-clash text-2xl text-gray-700 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>{t.home}</a>
              <a href="#productos" className="font-clash text-2xl text-gray-700 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>{t.products}</a>
              <a href="#contacto" className="font-clash text-2xl text-gray-700 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>{t.contact}</a>
            </nav>
            <button
              className="mt-12 flex items-center gap-2 px-6 py-3 rounded-full font-montserrat text-gray-700 bg-gray-100 hover:bg-gray-200 transition text-lg"
              onClick={() => setLangMenuOpen((v) => !v)}
              aria-label="Seleccionar idioma"
            >
              <span className="text-2xl">🌐</span>
              <span className="font-montserrat text-base uppercase">{language}</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {langMenuOpen && (
              <div className="mt-4 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col">
                <button className="w-full px-4 py-3 text-left font-montserrat text-gray-700 hover:bg-gray-100" onClick={() => { setLanguage('es'); setLangMenuOpen(false); setMenuOpen(false); }}>{t.spanish}</button>
                <button className="w-full px-4 py-3 text-left font-montserrat text-gray-700 hover:bg-gray-100" onClick={() => { setLanguage('en'); setLangMenuOpen(false); setMenuOpen(false); }}>{t.english}</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
