import { Input } from '@/shared/ui';

import { useSignInPage } from '../lib/use-sign-in-page';
import { AuthForm } from './auth-form';

export const SignInPage = () => {
  const {
    formData,
    isButtonDisabled,
    passwordType,
    passwordIconType,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  } = useSignInPage();

  return (
    <AuthForm
      title="Вход в Yoldi Agency"
      formSubmitButton={{
        text: 'Войти',
        disabled: isButtonDisabled,
      }}
      onSubmit={handleSubmit}
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
  );
};
