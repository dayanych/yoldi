import { useContext } from 'react';
import useSWR from 'swr';

import { AuthContext } from '@/app';
import { profileApi } from '@/shared/api';

export const useMe = () => {
  const authContext = useContext(AuthContext);
  
  const shouldFetch = !!authContext?.auth;
  
  const { data, error, isLoading, mutate } = useSWR(
    shouldFetch ? '/user/me' : null,
    async () => {
      const data = await profileApi.getProfile();

      return data;
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  const logout = () => {
    authContext?.setAuth('');
    localStorage.removeItem('value');
  };
  
  return {
    user: data,
    isLoading,
    error,
    mutate,
    logout,
  };
};