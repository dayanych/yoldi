import { useProfileEditModal } from '@/process';
import { User } from '@/entities';
import { Button, Input, Modal, Textarea } from '@/shared/ui';
import { UpdateProfilePayload } from '@/shared/api';

import styles from './profile-edit-modal.module.scss';

interface ProfileEditModalProps {
  isOpen: boolean;
  initialData: User;
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
  onSave: (data: UpdateProfilePayload) => void;
}

export const ProfileEditModal = ({
  isOpen,
  initialData,
  isLoading,
  error,
  onClose,
  onSave,
}: ProfileEditModalProps) => {
  const { formData, handleSave, handleInputChange } = useProfileEditModal(
    initialData,
    onSave,
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Редактировать профиль" className={styles.modal}>
      <form onSubmit={handleSave} className={styles.form}>
        <Input
          value={formData.name}
          name="name"
          onChange={handleInputChange}
          label="Имя"
          placeholder="Введите имя"
        />

        <Input
          value={formData.slug}
          name="slug"
          onChange={handleInputChange}
          label="Адрес профиля"
          placeholder="Введите адрес профиля"
          prefix="example.com/"
        />

        <Textarea
          value={formData.description}
          name="description"
          onChange={handleInputChange}
          className={styles.textarea}
          label="Описание"
          placeholder="Введите описание"
        />

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.actions}>
          <Button variant="secondary" onClick={onClose} disabled={isLoading}>
            Отмена
          </Button>
          <Button variant="primary" type="submit" loading={isLoading}>
            Сохранить
          </Button>
        </div>
      </form>
    </Modal>
  );
};
