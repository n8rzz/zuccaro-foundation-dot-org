import clsx from 'clsx';
import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const UiButton: React.FC<IProps> = (props) => {
  return (
    <button
      className={clsx(
        {
          ['px-4 py-2 rounded-lg font-semibold transition-colors duration-200']: true,
          ['bg-blue-600 text-white hover:bg-blue-700']: props.variant === 'primary',
          ['border border-gray-300 text-gray-700 hover:bg-gray-50']: props.variant === 'secondary',
          ['w-full']: props.fullWidth,
        },
        props.className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
