import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { useState } from 'react';

const IndexPage: React.FC<PageProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">Logo</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="#features" className="text-gray-600 hover:text-gray-900">
                  Features
                </a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                  Features
                </a>
                <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Perfect Solution for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empower your business with our cutting-edge platform designed to boost productivity and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-lg font-semibold">
                Get Started Now
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 text-lg font-semibold">
                Learn More
              </button>
            </div>
            <div className="mt-12">
              <img src="https://placehold.co/1200x600" alt="Hero" className="rounded-xl shadow-2xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Amazing Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in your business journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              &copy; 2024 Augustino Hiram Zuccaro Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
