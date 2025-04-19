import { Outlet } from 'react-router-dom';

import { useUser } from '@/shared/lib/hooks/use-user';
import { Footer, Header } from '@/widgets';

import styles from './base-layout.module.scss';

export const BaseLayout = () => {
  const { user } = useUser();

  return (
    <div className={styles.layout}>
      <Header user={user ?? null} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
