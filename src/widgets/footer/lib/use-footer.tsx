'use client';

import { usePathname } from 'next/navigation';

export const useFooter = () => {
  const pathname = usePathname();

  const isAuthPage =
    pathname === '/sign-in' || pathname === '/sign-up';

  const footerContent =
    pathname === '/sign-in' ? (
      <p>
        Еще нет аккаунта? <a href="/sign-up">Зарегистрироваться</a>
      </p>
    ) : (
      <p>
        Уже есть аккаунт? <a href="/sign-in">Войти</a>
      </p>
    );

  return {
    isAuthPage,
    footerContent,
  };
};
