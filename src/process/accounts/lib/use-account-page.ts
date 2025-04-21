'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { useMe } from '@/shared/lib';
import { accountsApi, profileApi, UpdateProfilePayload } from '@/shared/api';

export const useAccountPage = (slug: string) => {
  const router = useRouter();

  const { user: myUser, logout, mutate } = useMe();
  const { data: user, isLoading } = useSWR(
    `/api/accounts/${slug}`,
    () => accountsApi.getAccount(slug),
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  const [editModalStates, setEditModalStates] = useState<{
    isOpen: boolean;
    isLoading: boolean;
    error: string | null;
  }>({
    isOpen: false,
    isLoading: false,
    error: null,
  });

  const isMe = myUser?.slug === slug;

  const handleEditModalClose = () => {
    if (editModalStates.isLoading) return;
    setEditModalStates((prev) => ({ ...prev, isOpen: false }));
  };

  const handleEditModalOpen = () => {
    setEditModalStates((prev) => ({ ...prev, isOpen: true }));
  };

  const handleEditModalSave = async (data: UpdateProfilePayload) => {
    try {
      setEditModalStates((prev) => ({ ...prev, isLoading: true }));
      setEditModalStates((prev) => ({ ...prev, error: null }));

      const updatedUser = await profileApi.updateProfile(data);

      if (updatedUser) {
        mutate(updatedUser);
      }

      if (data.slug !== user?.slug) {
        router.push(`/accounts/${data.slug}`);
      }
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data) {
        setEditModalStates((prev) => ({ ...prev, error: 'Ошибка при обновлении профиля: ' + error?.response?.data.message }));
      } else {
        console.log(error);
        setEditModalStates((prev) => ({ ...prev, error: 'Ошибка при обновлении профиля: Неизвестная ошибка' }));
      }
    } finally {
      setEditModalStates((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/sign-in');
  };

  const handleRedirectBack = () => {
    router.push('/accounts');
  };

  return {
    user: isMe ? myUser : user,
    isMe,
    isLoading,
    editModalStates,
    handleLogout,
    handleEditModalClose,
    handleEditModalSave,
    handleEditModalOpen,
    handleRedirectBack,
  };
};
