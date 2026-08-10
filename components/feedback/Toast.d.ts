import { ReactNode } from 'react';
export interface ToastProps {
  tone?: 'success' | 'danger' | 'neutral';
  children?: ReactNode;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
