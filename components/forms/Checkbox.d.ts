import { CSSProperties, ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'defaultChecked' | 'onChange' | 'style'> {
  /** Sin label se renderiza sólo la casilla, para meterla en un <label> propio. */
  label?: ReactNode;
  /** Sólo controlado: el dibujo sale de esta prop, no del estado del input. Siempre con `onChange`. */
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Con label va al <label>; sin label, a la casilla. */
  style?: CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
