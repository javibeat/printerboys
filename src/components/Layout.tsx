import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
