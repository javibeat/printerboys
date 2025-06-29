import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full px-8 py-6 border-t border-gray-100 bg-white/80 backdrop-blur-md text-center text-sm text-gray-500 mt-12">
      <div className="mb-2">
        <a href="#" className="mx-2 hover:text-blue-600 transition">Aviso legal</a>
        <a href="#" className="mx-2 hover:text-blue-600 transition">Política de privacidad</a>
        <a href="#" className="mx-2 hover:text-blue-600 transition">Cookies</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} PrinterBoys. All rights reserved.
      </div>
    </footer>
  );
}
