import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/footer/Footer';
import { Container } from '../components/ui/container/Container';
import { UiButton } from '../components/ui/button/Button';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Navigation />

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Amazing Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your business journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature {item}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
