import React from 'react';
import { AlertProps, AlertVariant } from './types';
import styles from './styles.module.scss';
import clsx from 'clsx';

const Alert = (props: AlertProps) => {
  const { children, classNames, variant = 'warning' } = props;

  const classNameVariant: Record<AlertVariant, string> = {
    danger: styles.isDanger,
    warning: styles.isWarning,
    success: styles.isSuccess,
  };

  return (
    <div className={clsx(styles.alert, classNames, classNameVariant[variant])}>
      {children}
    </div>
  );
};

export default Alert;
