import { ReactNode, CSSProperties, MouseEventHandler } from 'react';
export interface IconButtonProps {
  children: ReactNode;
  onDark?: boolean;
  active?: boolean;
  size?: number;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
