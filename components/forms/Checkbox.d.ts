import { CSSProperties, ChangeEventHandler } from 'react';
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler;
  style?: CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
