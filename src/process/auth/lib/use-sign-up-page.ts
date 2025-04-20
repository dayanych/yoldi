'use client';

import { useMemo, useState } from 'react';
import { AxiosError } from 'axios';
import { redirect } from 'next/navigation';
import { routes } from '@/app';
import { authApi } from '@/shared/api';
import { useAuth } from '@/shared/lib';
import { IconProps } from '@/shared/ui';

export const useSignUpPage = () => {
  const { setAuth } = useAuth();
  const [passwordType, setPasswordType] = useState('password');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const value = await authApi.signUp({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
      });

      setAuth(value);
      redirect(routes.accounts);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('Ошибка: ' + error.response?.data.message);
      } else {
        setError('Неизвестная ошибка');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const isButtonDisabled = useMemo(() => {
    return !formData.name || !formData.email || !formData.password || isLoading;
  }, [formData, isLoading]);

  const passwordIconType: IconProps['name'] = useMemo(() => {
    return passwordType === 'password' ? 'eye' : 'eyeSlash';
  }, [passwordType]);

  return {
    formData,
    isButtonDisabled,
    passwordType,
    passwordIconType,
    isLoading,
    error,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  };
};
