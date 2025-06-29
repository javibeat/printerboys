import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="w-full flex flex-col md:flex-row gap-8 items-center justify-between mt-8">
        {/* Bloque principal Bento */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 flex flex-col items-start gap-6 min-w-[320px]">
          <h1 className="text-5xl md:text-6xl font-bebas text-blue-600 leading-tight">Impresión 3D de calidad<br />para tus ideas</h1>
          <p className="font-clash text-lg text-gray-700 max-w-md">Descubre productos únicos, personalizados y fabricados con la máxima precisión. Minimalismo, elegancia y tecnología a tu alcance.</p>
          <button className="mt-2 px-8 py-3 rounded-full bg-blue-600 text-white font-clash text-lg shadow hover:bg-blue-700 transition">Ver productos</button>
        </div>
        {/* Bloque imagen/render Bento */}
        <div className="flex-1 flex items-center justify-center min-w-[320px]">
          <div className="w-80 h-80 bg-gray-100 rounded-3xl shadow-inner flex items-center justify-center">
            {/* Aquí puedes poner una imagen o render 3D */}
            <span className="text-gray-400 font-bebas text-2xl">[Render 3D aquí]</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
