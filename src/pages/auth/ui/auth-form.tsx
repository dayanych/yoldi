import { Button } from '@/shared/ui';

import styles from './auth-form.module.scss';

interface AuthFormProps {
  title: string;
  children: React.ReactNode;
  formSubmitButton: {
    text: string;
    disabled: boolean;
  };
  onSubmit: (data: any) => void;
}

export const AuthForm = ({
  title,
  onSubmit,
  children,
  formSubmitButton,
}: AuthFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className="title">{title}</h1>

        <div className={styles.formContent}>{children}</div>

        <Button
          type="submit"
          disabled={formSubmitButton.disabled}
          className={styles.formSubmitButton}
        >
          {formSubmitButton.text}
        </Button>
      </form>
    </div>
  );
};
