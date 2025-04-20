'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import { User } from '@/entities';
import { UpdateProfilePayload } from '@/shared/api';

export const useProfileEditModal = (
  initialData: User,
  onSave: (data: UpdateProfilePayload) => void,
) => {
  const [formData, setFormData] = useState({
    name: initialData.name,
    slug: initialData.slug,
    description: initialData.description ?? '',
  });

  useEffect(() => {
    setFormData({
      name: initialData.name,
      slug: initialData.slug,
      description: initialData.description ?? '',
    });
  }, [initialData]);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onSave) return;

    onSave({
      name: formData.name.trim(),
      slug: formData.slug.trim(),
      description: formData.description.trim(),
    });
  };

  const handleInputChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    handleSave,
    handleInputChange,
  };
};
