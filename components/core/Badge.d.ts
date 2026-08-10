import { ReactNode, CSSProperties } from 'react';
export interface BadgeProps {
  tone?: 'success' | 'danger' | 'neutral' | 'accent';
  children: ReactNode;
  style?: CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
