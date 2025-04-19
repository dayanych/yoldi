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
  children: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {icon && (
        <div className={clsx(styles.icon, styles.iconLeft)}>
          <Icon name={icon.type} className={styles.icon} />
        </div>
      )}

      {children}
    </button>
  );
};
