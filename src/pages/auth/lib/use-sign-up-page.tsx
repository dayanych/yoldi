import { useMemo, useState } from 'react';

import { IconProps } from '@/shared/ui/icon';

export const useSignUpPage = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => formData;

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const isButtonDisabled = useMemo(() => {
    return !formData.name || !formData.email || !formData.password;
  }, [formData]);

  const passwordIconType: IconProps['name'] = useMemo(() => {
    return passwordType === 'password' ? 'eye' : 'eyeSlash';
  }, [passwordType]);

  return {
    formData,
    isButtonDisabled,
    passwordType,
    passwordIconType,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  };
};
