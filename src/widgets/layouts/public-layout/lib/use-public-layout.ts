'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

import { useUser } from '@/shared/lib';

export const usePublicLayout = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      redirect('/accounts');
    }
  }, [user]);
};
