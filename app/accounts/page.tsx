'use client';

import Link from 'next/link';

import { User, UserAvatar } from '@/entities';
import { useAccountsPage } from '@/process';
import { Loader } from '@/shared/ui';

import styles from './page.module.scss';

export default function AccountsPage() {
  const { users, isLoading } = useAccountsPage();

  if (isLoading) {
    return (
      <div className={styles.accountsPageWrapper}>
        <Loader className={styles.loaderIcon} />
      </div>
    );
  }

  return (
    <div className={styles.accountsPageWrapper}>
      <div className={styles.accountsPageContent}>
        <h1 className="title">Список аккаунтов</h1>
        <div className={styles.accountsList}>
          {users.map((user) => (
            <Link key={user.slug} href={`/accounts/${user.slug}`} className={styles.accountItem}>
              <UserAvatar user={user as User} size={50} />
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userEmail}>{user.email}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
