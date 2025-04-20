'use client';

import { useMe } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { Footer, Header } from '@/widgets';

import styles from './base-layout.module.scss';

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useMe();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader className={styles.loaderIcon} />
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <Header user={user ?? null} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
