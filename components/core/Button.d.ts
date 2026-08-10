import { ReactNode, CSSProperties, MouseEventHandler } from 'react';
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
