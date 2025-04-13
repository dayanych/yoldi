import { Navigate, Outlet } from 'react-router-dom';

import { useUser } from '@/shared/lib/hooks/use-user';

export const ProtectedLayout = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};
