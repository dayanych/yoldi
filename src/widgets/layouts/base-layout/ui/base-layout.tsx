import { Outlet } from 'react-router-dom';

import { useUser } from '@/shared/lib/hooks/use-user';
import { Header } from '@/widgets/header';

import styles from './base-layout.module.scss';

export const BaseLayout = () => {
  const { user, logout } = useUser();

  return (
    <div className={styles.layout}>
      <Header user={user} logout={logout} />
      <main className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
