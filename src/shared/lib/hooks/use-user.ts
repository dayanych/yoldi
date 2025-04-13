import { useContext } from 'react';

import { AuthContext } from '@/app/store/auth-context';

export const useUser = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useUser must be used within an AuthProvider');

  return {
    user: context.user,
    setUser: context.setUser,
    logout: context.logout,
  };
};
