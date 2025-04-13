import { Button } from '@/shared/ui';

import styles from './header.module.scss';

interface HeaderProps {
  user?: any;
  logout?: () => void;
}

export const Header = ({ user, logout }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.actions}>
        <Button onClick={logout || (() => {})}>
          {user ? 'Logout' : 'Login'}
        </Button>
      </div>
    </header>
  );
};
