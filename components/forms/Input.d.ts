import { CSSProperties, ChangeEventHandler } from 'react';
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  helpText?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  style?: CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
