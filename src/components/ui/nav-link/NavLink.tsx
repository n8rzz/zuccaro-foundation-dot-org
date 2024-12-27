import clsx from 'clsx';
import React from 'react';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isMobile?: boolean;
}

export const NavLink: React.FC<IProps> = (props: IProps) => {
  const { isMobile = false, className = '', ...rest } = props;

  return (
    <a
      className={clsx(
        {
          ['text-gray-600 hover:text-gray-900']: true,
          ['block px-3 py-2']: isMobile,
        },
        className
      )}
      {...rest}
    >
      {props.children}
    </a>
  );
};
