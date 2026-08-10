import { ReactNode, CSSProperties, MouseEventHandler } from 'react';
export interface TagProps {
  children: ReactNode;
  onRemove?: MouseEventHandler;
  style?: CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
