'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';

import { User, UserAvatar } from '@/entities';
import { Button } from '@/shared/ui';

import styles from './header.module.scss';
import Link from 'next/link';

interface HeaderProps {
  user: User | null;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image
            className={styles.logoImage}
            src="/logo.svg"
            alt="logo"
            width={64}
            height={29}
            objectFit="cover"
          />
        </div>
        <p className={styles.description}>
          Разрабатываем и запускаем сложные веб проекты
        </p>
      </div>

      {user ? (
        <Link href={`/accounts/${user.slug}`} className={styles.userContainer}>
          {user.name}
          <UserAvatar user={user} size={50} />
        </Link>
      ) : (
        <Button
          variant="secondary"
          className={styles.loginButton}
          onClick={() => redirect('/sign-in')}
        >
          Войти
        </Button>
      )}
    </header>
  );
};
