import React from 'react';
import { Layout } from '../../layout/Layout';
import { Navigation } from '../../navigation/Navigation';
import { Footer } from '../../footer/Footer';
import { Hero } from './hero/Hero';
import { Features } from './features/Features';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </Layout>
  );
};
