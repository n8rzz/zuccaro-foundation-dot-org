import React from 'react';
import { FooterLink } from './FooterColumn.types';

interface IProps {
  links: FooterLink[];
  title: string;
}

export const FooterColumn: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{props.title}</h3>
      <ul className="space-y-2">
        {props.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-gray-600 hover:text-gray-900">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
