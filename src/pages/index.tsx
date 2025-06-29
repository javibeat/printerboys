import React from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';

const productos = [
  {
    id: 1,
    nombre: { es: 'Soporte para móvil', en: 'Phone stand' },
    descripcion: {
      es: 'Soporte impreso en 3D, minimalista y resistente.',
      en: '3D printed stand, minimalist and sturdy.',
    },
    precio: '12,90€',
    imagen: '',
    enlace: 'https://www.etsy.com/',
  },
  {
    id: 2,
    nombre: { es: 'Organizador de cables', en: 'Cable organizer' },
    descripcion: {
      es: 'Mantén tus cables ordenados con estilo.',
      en: 'Keep your cables tidy in style.',
    },
    precio: '7,50€',
    imagen: '',
    enlace: 'https://www.etsy.com/',
  },
  {
    id: 3,
    nombre: { es: 'Maceta decorativa', en: 'Decorative pot' },
    descripcion: {
      es: 'Maceta moderna para plantas pequeñas.',
      en: 'Modern pot for small plants.',
    },
    precio: '9,90€',
    imagen: '',
    enlace: 'https://www.etsy.com/',
  },
];

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <Layout>
      <div style={{ width: '100%', maxWidth: '72rem', margin: '0 auto', padding: '0 1rem' }}>
        {/* Hero Section */}
        <section style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center', 
          padding: '5rem 0', 
          gap: '2rem' 
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '2rem',
            padding: '3.5rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '42rem',
            width: '100%',
            border: '1px solid rgb(243 244 246)'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontFamily: '"Bebas Neue", sans-serif',
              color: 'rgb(37 99 235)',
              lineHeight: '1.1',
              marginBottom: '1rem',
              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
              wordBreak: 'break-word',
              textAlign: 'center',
            }}>
              {t.heroTitle}
            </h1>
            <p style={{
              fontFamily: '"Clash Grotesk", sans-serif',
              fontSize: '1.125rem',
              color: 'rgb(55 65 81)',
              maxWidth: '42rem',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}>
              {t.heroDesc}
            </p>
            <a href="#productos" className="btn-main" style={{
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              backgroundColor: 'rgb(37 99 235)',
              color: 'white',
              fontFamily: '"Clash Grotesk", sans-serif',
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              width: '100%',
              maxWidth: '16rem',
              textAlign: 'center',
              margin: '0 auto',
              display: 'block',
            }}>
              {t.viewCatalog}
            </a>
          </div>
        </section>

        {/* Grid de productos */}
        <section id="productos" style={{ marginTop: '5rem', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontFamily: '"Bebas Neue", sans-serif',
            color: 'rgb(17 24 39)',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            {t.featured}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            justifyItems: 'center'
          }}>
            {productos.map((producto) => (
              <div key={producto.id} className="card-bento" style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: '20rem',
                transition: 'transform 0.2s ease',
                borderRadius: '2rem',
              }}>
                <div style={{
                  width: '8rem',
                  height: '8rem',
                  background: 'linear-gradient(135deg, rgb(243 244 246) 0%, white 50%, rgb(229 231 235) 100%)',
                  borderRadius: '1.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgb(229 231 235)',
                  boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
                }}>
                  <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
                    <rect width="56" height="56" rx="16" fill="#e5e7eb"/>
                    <rect x="14" y="36" width="28" height="6" rx="3" fill="#cbd5e1"/>
                    <rect x="18" y="14" width="20" height="18" rx="4" fill="#d1d5db"/>
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: '"Clash Grotesk", sans-serif',
                  fontSize: '1.25rem',
                  color: 'rgb(31 41 55)',
                  marginBottom: '0.5rem',
                  textAlign: 'center'
                }}>
                  {producto.nombre[language]}
                </h3>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'rgb(107 114 128)',
                  textAlign: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {producto.descripcion[language]}
                </p>
                <span style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.125rem',
                  color: 'rgb(37 99 235)',
                  marginBottom: '1rem'
                }}>
                  {producto.precio}
                </span>
                <a 
                  href={producto.enlace} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-accent"
                  style={{
                    padding: '0.5rem 1.5rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgb(249 115 22)',
                    color: 'white',
                    fontFamily: '"Clash Grotesk", sans-serif',
                    textDecoration: 'none',
                    width: '100%',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {t.viewOnEtsy}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
