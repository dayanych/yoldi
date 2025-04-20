import { User, UserAvatar } from '@/entities';
import { useAccountsPage } from '@/process';

import styles from './page.module.scss';

export default function AccountsPage() {
  const { mockUsers } = useAccountsPage();

  return (
    <div className={styles.accountsPageWrapper}>
      <div className={styles.accountsPageContent}>
        <h1 className="title">Список аккаунтов</h1>
        <div className={styles.accountsList}>
          {mockUsers.map((user) => (
            <div key={user.slug} className={styles.accountItem}>
              <UserAvatar user={user as User} size={50} />
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userEmail}>{user.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
