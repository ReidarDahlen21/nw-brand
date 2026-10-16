import { CSSProperties, ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'style'> {
  /** Sin label se renderiza sólo el círculo, para meterlo en un <label> propio. */
  label?: ReactNode;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Con label va al <label>; sin label, al círculo. */
  style?: CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
