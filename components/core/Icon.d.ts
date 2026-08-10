import { CSSProperties } from 'react';
export interface IconProps {
  /** Phosphor icon name, e.g. "house", "gear", "x" — see phosphoricons.com. Renders the `regular` weight. */
  name: string;
  size?: number;
  style?: CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
