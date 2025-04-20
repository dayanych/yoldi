'use client';

import { useEffect, useState } from 'react';

import { User } from '@/entities';

export const useProfileEditModal = (
  initialData: User,
  onSave: (data: any) => void,
  onClose: () => void,
) => {
  const [formData, setFormData] = useState({
    name: initialData.name,
    slug: initialData.slug,
    description: initialData.description,
  });

  useEffect(() => {
    setFormData({
      name: initialData.name,
      slug: initialData.slug,
      description: initialData.description,
    });
  }, [initialData]);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onSave) return;

    onSave(formData);
    onClose();
  };

  const handleInputChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    handleSave,
    handleInputChange,
  };
};
