'use client';

import { useSignUpPage } from '@/process';
import { AuthForm } from '@/features';
import { PublicLayout } from '@/widgets';
import { Input } from '@/shared/ui';

export default function SignUpPage() {
  const {
    formData,
    isButtonDisabled,
    passwordType,
    passwordIconType,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  } = useSignUpPage();

  return (
    <PublicLayout>
      <AuthForm
        title="Регистрация в Yoldi Agency"
        onSubmit={handleSubmit}
        formSubmitButton={{
          text: 'Создать аккаунт',
          disabled: isButtonDisabled,
          loading: false,
        }}
      >
        <Input
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          leftIcon={{ type: 'profile' }}
        />

        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          leftIcon={{ type: 'email' }}
        />

        <Input
          name="password"
          type={passwordType}
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
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
