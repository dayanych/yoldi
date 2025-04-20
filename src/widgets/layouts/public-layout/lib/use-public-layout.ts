'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

import { useMe } from '@/shared/lib';

export const usePublicLayout = () => {
  const { user } = useMe();

  useEffect(() => {
    if (user) {
      redirect('/accounts');
    }
  }, [user]);
};
