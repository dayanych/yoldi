import { createContext, ReactNode, useState } from 'react';

import { User } from '@/entities';

type AuthContextType = {
  auth: string;
  setAuth: (value: string) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setAuth('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
