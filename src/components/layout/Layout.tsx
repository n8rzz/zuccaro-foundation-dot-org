import React from 'react';
import { Navigation } from '../navigation/Navigation';
import { Footer } from '../footer/Footer';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
