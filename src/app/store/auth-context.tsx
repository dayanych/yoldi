'use client';

import { createContext, useState, ReactNode, useEffect } from 'react';

import { api } from '@/shared/api';

type AuthContextType = {
  auth: string;
  setAuth: (value: string) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<string>('');

  useEffect(() => {
    const storedValue = localStorage.getItem('value') ?? '';

    if (!storedValue) return;

    setAuth(storedValue);
    api.interceptors.request.use((config) => {
      config.headers['X-API-KEY'] = storedValue;
      return config;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
