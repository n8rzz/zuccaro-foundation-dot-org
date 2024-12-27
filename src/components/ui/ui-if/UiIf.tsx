import React from 'react';
import { ReactNode } from 'react';

interface IProps {
  condition: boolean;
  children: ReactNode;
}

export const UiIf: React.FC<IfProps> = (props: IProps) => {
  if (!props.condition) {
    return null;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};
