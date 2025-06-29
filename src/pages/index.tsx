import React from 'react';
import Layout from '../components/Layout';

const productos = [
  {
    id: 1,
    nombre: 'Soporte para móvil',
    descripcion: 'Soporte impreso en 3D, minimalista y resistente.',
    precio: '12,90€',
    imagen: '',
    enlace: 'https://www.etsy.com/',
  },
  {
    id: 2,
    nombre: 'Organizador de cables',
    descripcion: 'Mantén tus cables ordenados con estilo.',
    precio: '7,50€',
    imagen: '',
    enlace: 'https://www.etsy.com/',
  },
  {
    id: 3,
    nombre: 'Maceta decorativa',
    descripcion: 'Maceta moderna para plantas pequeñas.',
    precio: '9,90€',
    imagen: '',
    enlace: 'https://www.etsy.com/',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Hero Section visual */}
        <section className="flex flex-col items-center justify-center text-center py-20 gap-8">
          <div className="bg-white/80 shadow-2xl rounded-3xl px-10 py-14 flex flex-col items-center max-w-2xl w-full border border-gray-100">
            <h1 className="text-5xl md:text-6xl font-bebas text-blue-600 leading-tight mb-4 drop-shadow-sm">Impresión 3D premium<br />para tus ideas</h1>
            <p className="font-clash text-lg text-gray-700 max-w-2xl mb-6">Descubre nuestro catálogo de productos impresos en 3D: diseño minimalista, calidad profesional y envío rápido. Cada producto enlaza a nuestra tienda en Etsy para una compra segura y sencilla.</p>
            <a href="#productos" className="btn-main">Ver catálogo</a>
          </div>
        </section>

        {/* Grid de productos visual */}
        <section id="productos" className="mt-20 mb-16">
          <h2 className="text-3xl font-bebas text-gray-900 mb-12 text-center">Productos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
            {productos.map((producto) => (
              <div key={producto.id} className="card-bento p-8 flex flex-col items-center w-full max-w-xs group transition-transform duration-200">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl mb-6 flex items-center justify-center border border-gray-200 shadow-inner group-hover:scale-105 transition-transform">
                  {/* Placeholder SVG de producto */}
                  <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="16" fill="#e5e7eb"/><rect x="14" y="36" width="28" height="6" rx="3" fill="#cbd5e1"/><rect x="18" y="14" width="20" height="18" rx="4" fill="#d1d5db"/></svg>
                </div>
                <h3 className="font-clash text-xl text-gray-800 mb-2 text-center">{producto.nombre}</h3>
                <p className="font-montserrat text-gray-500 text-center mb-2">{producto.descripcion}</p>
                <span className="font-bebas text-lg text-blue-600 mb-4">{producto.precio}</span>
                <a href={producto.enlace} target="_blank" rel="noopener noreferrer" className="btn-accent w-full text-center">Ver en Etsy</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
