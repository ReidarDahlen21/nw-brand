import { CSSProperties, ChangeEventHandler } from 'react';
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  helpText?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  /** `sm`: densidad de aplicación, requiere `tokens/app.css`. Por defecto `md`. */
  size?: 'sm' | 'md';
  style?: CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
