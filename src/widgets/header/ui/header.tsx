import { useNavigate } from 'react-router-dom';

import { UserAvatar } from '@/entities/users';
import { Button } from '@/shared/ui';

import styles from './header.module.scss';

interface HeaderProps {
  user?: any;
}

export const Header = ({ user }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="/logo.svg" alt="logo" />
        </div>
        <p className={styles.description}>
          Разрабатываем и запускаем сложные веб проекты
        </p>
      </div>

      {user ? (
        <div className={styles.userContainer}>
          {user.name}
          <UserAvatar user={user} size={50} />
        </div>
      ) : (
        <Button
          variant="secondary"
          className={styles.loginButton}
          onClick={() => navigate('/sign-in')}
        >
          Войти
        </Button>
      )}
    </header>
  );
};
