'use client';

import { useSignInPage } from '@/process';
import { AuthForm } from '@/features';
import { PublicLayout } from '@/widgets';
import { Input } from '@/shared/ui';

export default function SignInPage() {
  const {
    formData,
    isButtonDisabled,
    passwordType,
    passwordIconType,
    error,
    isLoading,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  } = useSignInPage();

  return (
    <PublicLayout>
      <AuthForm
        title="Вход в Yoldi Agency"
        onSubmit={handleSubmit}
        error={error}
        formSubmitButton={{
          text: 'Войти',
          disabled: isButtonDisabled,
          loading: isLoading,
        }}
      >
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          leftIcon={{ type: 'email' }}
        />
        <Input
          name="password"
          type={passwordType}
          value={formData.password}
          onChange={handleChange}
          placeholder="Пароль"
          leftIcon={{ type: 'lock' }}
          rightIcon={{
            type: passwordIconType,
            onClick: formData.password ? togglePasswordVisibility : undefined,
            className: formData.password ? 'active-icon' : 'inactive-icon',
          }}
        />
      </AuthForm>
    </PublicLayout>
  );
};
