import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/shared/lib/hooks/use-user';

export const useProtectedLayout = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    if (user) {
      navigate('/profile');
    }
  }, [user]);
};
