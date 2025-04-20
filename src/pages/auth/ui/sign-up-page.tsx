import { AuthForm } from '@/features';
import { Input } from '@/shared/ui';

import { useSignUpPage } from '../lib/use-sign-up-page';

export const SignUpPage = () => {
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
    <AuthForm
      title="Регистрация в Yoldi Agency"
      onSubmit={handleSubmit}
      formSubmitButton={{
        text: 'Создать аккаунт',
        disabled: isButtonDisabled,
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
  );
};
