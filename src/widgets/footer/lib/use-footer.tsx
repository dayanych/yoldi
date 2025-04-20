'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const useFooter = () => {
  const pathname = usePathname();

  const isAuthPage =
    pathname === '/sign-in' || pathname === '/sign-up';

  const footerContent =
    pathname === '/sign-in' ? (
      <p>
        Еще нет аккаунта? <Link href="/sign-up">Зарегистрироваться</Link>
      </p>
    ) : (
      <p>
        Уже есть аккаунт? <Link href="/sign-in">Войти</Link>
      </p>
    );

  return {
    isAuthPage,
    footerContent,
  };
};
