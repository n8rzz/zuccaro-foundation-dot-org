import clsx from 'clsx';
import React from 'react';
import { Container } from '../shared/container/Container';
import { FooterColumn } from './footer-column/FooterColumn';

interface IProps {
  className?: string;
}

export const Footer: React.FC<IProps> = (props: IProps) => {
  const { className = '' } = props;

  return (
    <footer
      className={clsx({
        ['bg-gray-50 border-t border-gray-100']: true,
        [className]: true,
      })}
    >
      <Container className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FooterColumn
            title="Product"
            links={[
              { href: '#', label: 'Features' },
              { href: '#', label: 'Pricing' },
              { href: '#', label: 'Documentation' },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { href: '#', label: 'About' },
              { href: '#', label: 'Careers' },
              { href: '#', label: 'Contact' },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { href: '#', label: 'Blog' },
              { href: '#', label: 'Support' },
              { href: '#', label: 'Terms' },
            ]}
          />
          <FooterColumn
            title="Connect"
            links={[
              { href: '#', label: 'Twitter' },
              { href: '#', label: 'LinkedIn' },
              { href: '#', label: 'GitHub' },
            ]}
          />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
