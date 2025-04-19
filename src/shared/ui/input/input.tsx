import clsx from 'clsx';

import { Icon, IconProps } from '../icon';
import styles from './input.module.scss';

interface IconConfig {
  type: IconProps['name'];
  className?: string;
}

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  leftIcon?: IconConfig;
  rightIcon?: IconConfig;
  error?: string;
  label?: string;
  prefix?: string;
  onChange: (value: string, name: string) => void;
}

interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value: string;
  error?: string;
  label?: string;
  onChange: (value: string, name: string) => void;
}

export const Input = ({
  value,
  onChange,
  leftIcon,
  rightIcon,
  error,
  label,
  prefix,
  ...props
}: InputProps) => {
  return (
    <label className={styles.label} htmlFor={props.name}>
      {label && <span className={styles.labelText}>{label}</span>}

      <div className={styles.prefixContainer}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}

        <div className={styles.inputContainer}>
          {leftIcon && (
            <div
              className={clsx(styles.icon, styles.iconLeft, {
                [styles.disabled]: props.disabled,
              })}
            >
              <Icon
                name={leftIcon.type}
                className={leftIcon.className || styles.icon}
              />
            </div>
          )}

          <input
            {...props}
            value={value}
            onChange={(e) => onChange(e.target.value, e.target.name || '')}
            className={clsx(styles.input, {
              [styles.error]: error,
              [styles.withPrefix]: prefix,
            })}
            data-left-icon={!!leftIcon}
            data-right-icon={!!rightIcon}
          />

          {rightIcon && (
            <div
              className={clsx(styles.icon, styles.iconRight, {
                [styles.disabled]: props.disabled,
              })}
            >
              <Icon
                name={rightIcon.type}
                className={rightIcon.className || styles.icon}
              />
            </div>
          )}
        </div>
      </div>
    </label>
  );
};

export const Textarea = ({
  value,
  onChange,
  error,
  label,
  ...props
}: TextareaProps) => {
  return (
    <label className={styles.label} htmlFor={props.name}>
      {label && <span className={styles.labelText}>{label}</span>}

      <textarea
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value, e.target.name || '')}
        className={clsx(styles.textarea, {
          [styles.error]: error,
        })}
      />
    </label>
  );
};
