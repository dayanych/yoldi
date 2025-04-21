'use client';

import React from 'react';

import { useAccountPage } from '@/process';
import { UserAvatar } from '@/entities';
import { ProfileEditModal } from '@/features';
import { Button, Icon, Loader } from '@/shared/ui';

import styles from './page.module.scss';

export default function AccountPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  
  const {
    user,
    isMe,
    isLoading,
    editModalStates,
    handleLogout,
    handleEditModalClose,
    handleEditModalSave,
    handleEditModalOpen,
    handleRedirectBack,
  } = useAccountPage(slug);

  if (isLoading) {
    return (
      <div className={styles.accountPage}>
        <Loader className={styles.loaderIcon} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.accountPage}>
        <div className={styles.errorContainer}>
          <div className="title">Пользователь не найден</div>
          <Button variant="secondary" onClick={handleRedirectBack}>
            Вернуться назад
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.accountPage}>
      <div className={styles.coverContainer}>
        {user.cover && user.cover.url && (
          <img
            src={user.cover.url}
            alt={`${user.name}'s cover`}
            className={styles.coverImage}
          />
        )}
      </div>

      <div className={styles.profileContent}>
        <div className={styles.avatarContainer}>
          <UserAvatar user={user} size={100} />
        </div>

        <div className={styles.userInfo}>
          <h1 className="title">{user.name}</h1>
          <p className={styles.userEmail}>{user.email}</p>
          {isMe && (
            <Button
              variant="secondary"
              icon={{
                type: 'pen',
              }}
              className={styles.editButton}
              onClick={handleEditModalOpen}
            >
              Редактировать
            </Button>
          )}
        </div>

        <p className={styles.userDescription}>{user.description}</p>

        {isMe && (
          <Button
            variant="secondary"
            icon={{
              type: 'signOut',
            }}
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            Выйти
          </Button>
        )}

        <Button className={styles.backButton} variant="secondary" onClick={handleRedirectBack}>
          <Icon name="arrowLeft" />
        </Button>
      </div>

      <ProfileEditModal
        isOpen={editModalStates.isOpen}
        initialData={user}
        onClose={handleEditModalClose}
        onSave={handleEditModalSave}
        isLoading={editModalStates.isLoading}
        error={editModalStates.error}
      />
    </div>
  );
}
