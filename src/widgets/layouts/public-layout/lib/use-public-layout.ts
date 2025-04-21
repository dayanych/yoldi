'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { routes } from '@/app';
import { useMe } from '@/shared/lib';

export const usePublicLayout = () => {
  const { user } = useMe();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(routes.accounts);
    }
  }, [user, router]);
};
