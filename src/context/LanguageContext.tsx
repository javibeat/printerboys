import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

const translations = {
  es: {
    home: 'Home',
    products: 'Productos',
    contact: 'Contacto',
    heroTitle: 'IMPRESIÓN 3D PREMIUM PARA TUS IDEAS',
    heroDesc: 'Descubre nuestro catálogo de productos impresos en 3D: diseño minimalista, calidad profesional y envío rápido. Cada producto enlaza a nuestra tienda en Etsy para una compra segura y sencilla.',
    viewCatalog: 'Ver catálogo',
    featured: 'PRODUCTOS DESTACADOS',
    viewOnEtsy: 'Ver en Etsy',
    spanish: 'Español',
    english: 'Inglés',
  },
  en: {
    home: 'Home',
    products: 'Products',
    contact: 'Contact',
    heroTitle: 'PREMIUM 3D PRINTING FOR YOUR IDEAS',
    heroDesc: 'Discover our catalog of 3D printed products: minimalist design, professional quality and fast shipping. Each product links to our Etsy store for a safe and easy purchase.',
    viewCatalog: 'View catalog',
    featured: 'FEATURED PRODUCTS',
    viewOnEtsy: 'View on Etsy',
    spanish: 'Spanish',
    english: 'English',
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['es'];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
