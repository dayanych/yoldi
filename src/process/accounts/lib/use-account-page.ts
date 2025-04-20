'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';

import { User } from '@/entities';
import { useUser } from '@/shared/lib';

export const useAccountPage = (slug: string) => {
  const { user, logout } = useUser();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const mockAccount: User = {
    slug: 'vladislav',
    name: 'Владислав',
    email: 'example@gmail.com',
    description:
      'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.',
    image: null,
    cover: null,
  };

  const isMe = user?.slug === slug;

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalSave = (data: any) => data;

  const handleLogout = () => {
    logout();
    redirect('/sign-in');
  };

  return {
    user: mockAccount,
    isMe,
    isEditModalOpen,
    handleLogout,
    handleEditModalClose,
    handleEditModalSave,
    handleEditModalOpen,
  };
};
