import React from 'react';
import { Container } from '../../../ui/container/Container';
import { UiButton } from '../../../ui/button/Button';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Perfect Solution for Your Business
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empower your business with our cutting-edge platform designed to boost productivity and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <UiButton variant="primary">Get Started Now</UiButton>
            <UiButton variant="secondary">Learn More</UiButton>
          </div>
          <div className="mt-12">
            <img src="https://placehold.co/1200x600" alt="Hero" className="rounded-xl shadow-2xl mx-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
};
