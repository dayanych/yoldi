'use client';

import useSWR from 'swr';
import { accountsApi } from '@/shared/api';

export const useAccountsPage = () => {
  const { data: users, isLoading } = useSWR('/api/accounts', accountsApi.getAccounts);

  return {
    users: users ?? [],
    isLoading,
  };
};
