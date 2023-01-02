import { ReactNode } from 'react';

export type AlertVariant = 'danger' | 'warning' | 'success';

export interface AlertProps {
  classNames?: string;
  variant?: AlertVariant;
  children: ReactNode;
}
