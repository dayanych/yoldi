import { useState } from 'react';

import { Button } from '../../../shared/ui/button';
import { Input, Textarea } from '../../../shared/ui/input';
import { Modal } from '../../../shared/ui/modal/modal';

interface ProfileEditModalProps {
  isOpen: boolean;
  initialName?: string;
  initialDescription?: string;
  initialAddress?: string;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export const ProfileEditModal = ({
  isOpen,
  onClose,
  initialName = '',
  initialDescription = '',
  initialAddress = '',
  onSave,
}: ProfileEditModalProps) => {
  const [formData, setFormData] = useState({
    name: initialName,
    address: initialAddress,
    description: initialDescription,
  });

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Редактировать профиль">
      <form onSubmit={handleSave}>
        <Input
          value={formData.name}
          onChange={(value, name) =>
            setFormData({ ...formData, [name]: value })
          }
          label="Имя"
          placeholder="Введите имя"
        />

        <Input
          value={formData.address}
          onChange={(value, name) =>
            setFormData({ ...formData, [name]: value })
          }
          label="Адрес профиля"
          placeholder="Введите адрес профиля"
          prefix="https://"
        />

        <Textarea
          value={formData.description}
          onChange={(value, name) =>
            setFormData({ ...formData, [name]: value })
          }
          label="Описание"
          placeholder="Введите описание"
          rows={7}
        />

        <div>
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
