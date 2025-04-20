import clsx from 'clsx';

import { Icon } from '../icon';

import styles from './loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return <Icon className={clsx(styles.loader, className)} name="spinner" />;
};
