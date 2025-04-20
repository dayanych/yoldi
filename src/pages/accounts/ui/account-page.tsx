import { UserAvatar } from '@/entities/users/ui/user-avatar';
import { Button } from '@/shared/ui';

import { useAccountPage } from '../lib/use-account-page';
import styles from './account-page.module.scss';
import { ProfileEditModal } from './profile-edit-modal';

export const AccountPage = () => {
  const {
    user,
    isMe,
    isEditModalOpen,
    logout,
    handleEditModalClose,
    handleEditModalSave,
    handleEditModalOpen,
  } = useAccountPage();

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
            onClick={logout}
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
};
