import { CSSProperties, ChangeEventHandler } from 'react';
export interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler;
  style?: CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
