import { User } from '@/entities';
import { Button, Input, Modal, Textarea } from '@/shared/ui';

import { useProfileEditModal } from '../../../pages/accounts/lib/use-profile-edit-modal';
import styles from './profile-edit-modal.module.scss';

interface ProfileEditModalProps {
  isOpen: boolean;
  initialData: User;
  onClose: () => void;
  onSave: (data: any) => void;
}

export const ProfileEditModal = ({
  isOpen,
  onClose,
  initialData,
  onSave,
}: ProfileEditModalProps) => {
  const { formData, handleSave, handleInputChange } = useProfileEditModal(
    initialData,
    onSave,
    onClose,
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Редактировать профиль">
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
          label="Описание"
          placeholder="Введите описание"
          rows={7}
        />

        <div className={styles.actions}>
          <Button variant="secondary" onClick={onClose}>
            Отмена
          </Button>
          <Button variant="primary" type="submit">
            Сохранить
          </Button>
        </div>
      </form>
    </Modal>
  );
};
