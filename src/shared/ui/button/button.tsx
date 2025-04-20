import clsx from 'clsx';

import { Icon, IconProps } from '../icon';
import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: {
    type: IconProps['name'];
    className?: string;
  };
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  icon,
  className,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {icon && !loading && (
        <div className={clsx(styles.icon, styles.iconLeft)}>
          <Icon name={icon.type} className={styles.icon} />
        </div>
      )}

      {loading && (
        <div className={clsx(styles.icon, styles.iconLeft)}>
          <Icon name="spinner" className={styles.icon} />
        </div>
      )}

      {children}
    </button>
  );
};
