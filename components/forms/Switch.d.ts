import { CSSProperties, ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'role' | 'checked' | 'defaultChecked' | 'onChange' | 'style'> {
  /** Sin label se renderiza sólo el interruptor: darle un aria-label o meterlo en un <label> propio. */
  label?: ReactNode;
  /** Sólo controlado: el dibujo sale de esta prop, no del estado del input. Siempre con `onChange`. */
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Con label va al <label>; sin label, al interruptor. */
  style?: CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
