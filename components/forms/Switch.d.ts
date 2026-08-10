import { CSSProperties, ChangeEventHandler } from 'react';
export interface SwitchProps {
  checked?: boolean;
  onChange?: ChangeEventHandler;
  style?: CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
