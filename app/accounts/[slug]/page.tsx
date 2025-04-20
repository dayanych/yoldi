'use client';

import React from 'react';

import { useAccountPage } from '@/process';
import { UserAvatar } from '@/entities';
import { ProfileEditModal } from '@/features';
import { Button } from '@/shared/ui';

import styles from './page.module.scss';

export default function AccountPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  
  const {
    user,
    isMe,
    isEditModalOpen,
    handleLogout,
    handleEditModalClose,
    handleEditModalSave,
    handleEditModalOpen,
  } = useAccountPage(slug);

  if (!user) {
    return <div className={styles.error}>User not found</div>;
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
      </div>

      <ProfileEditModal
        isOpen={isEditModalOpen}
        initialData={user}
        onClose={handleEditModalClose}
        onSave={handleEditModalSave}
      />
    </div>
  );
}
