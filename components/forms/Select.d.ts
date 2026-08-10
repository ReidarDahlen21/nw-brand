import { CSSProperties, ChangeEventHandler } from 'react';
export interface SelectOption { label?: string; value?: string; }
export interface SelectProps {
  label?: string;
  options?: (SelectOption | string)[];
  value?: string;
  onChange?: ChangeEventHandler;
  style?: CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
