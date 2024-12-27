import clsx from 'clsx';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<IProps> = (props: IProps) => {
  const { className = '' } = props;

  return (
    <div
      className={clsx({
        ['container mx-auto px-4 sm:px-6 lg:px-8']: true,
        [className]: true,
      })}
    >
      {props.children}
    </div>
  );
};
