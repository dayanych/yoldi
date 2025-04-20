import { Button } from '@/shared/ui';
import { UpdateProfilePayload } from '@/shared/api';

import styles from './auth-form.module.scss';

interface AuthFormProps {
  title: string;
  children: React.ReactNode;
  formSubmitButton: {
    text: string;
    disabled: boolean;
    loading: boolean;
  };
  error?: string | null;
  onSubmit: (data: UpdateProfilePayload) => void;
}

export const AuthForm = ({
  title,
  onSubmit,
  children,
  formSubmitButton,
  error,
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

        {error && <p className={styles.error}>{error}</p>}

        <Button
          type="submit"
          disabled={formSubmitButton.disabled}
          className={styles.formSubmitButton}
          loading={formSubmitButton.loading}
        >
          {formSubmitButton.text}
        </Button>
      </form>
    </div>
  );
};
