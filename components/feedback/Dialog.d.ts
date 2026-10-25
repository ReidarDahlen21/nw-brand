import { ReactNode } from 'react';
export interface DialogProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  onClose?: () => void;
  footer?: ReactNode;
  /** `sm`: densidad de aplicación (no requiere `tokens/app.css`). Por defecto `md`. */
  size?: 'sm' | 'md';
}
export function Dialog(props: DialogProps): JSX.Element | null;
