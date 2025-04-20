'use client';

import { createContext, useState, ReactNode } from 'react';

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
  const [user, setUser] = useState<User | null>({
    slug: 'vladislav',
    name: 'Владислав',
    email: 'example@gmail.com',
    description:
      'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.',
    image: null,
    cover: null,
  });

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
