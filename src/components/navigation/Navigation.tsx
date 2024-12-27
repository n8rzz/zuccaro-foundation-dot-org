import clsx from 'clsx';
import React, { useState } from 'react';
import { UiButton } from '../ui/button/Button';
import { Container } from '../ui/container/Container';
import { NavLink } from '../ui/nav-link/NavLink';
import { navItems } from './Navigation.constants';

interface IProps {
  className?: string;
}

export const Navigation: React.FC<IProps> = (props: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { className = '' } = props;

  return (
    <nav
      className={clsx({
        ['fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100']: true,
        [className]: true,
      })}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">Logo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
              <UiButton variant="primary">Get Started</UiButton>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={clsx({
                ['inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100']:
                  true,
              })}
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
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} isMobile>
                  {item.label}
                </NavLink>
              ))}
              <UiButton variant="primary" fullWidth>
                Get Started
              </UiButton>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
