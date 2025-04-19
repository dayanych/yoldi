import clsx from 'clsx';

import styles from './user-avatar.module.scss';

interface UserAvatarProps {
  user: any;
  size?: number;
  className?: string;
}

export const UserAvatar = ({ user, size = 32, className }: UserAvatarProps) => {
  const userFirstLetter = [user.name, user.surname, user.email]
    .filter(Boolean)
    .join(' ')
    .charAt(0)
    .toUpperCase();

  return (
    <div
      className={clsx(styles.userAvatar, className)}
      style={{
        width: size,
        height: size,
      }}
    >
      {user.avatar ? (
        <img src={user.avatar} alt={user.name} className={styles.avatarImage} />
      ) : (
        <span>{userFirstLetter}</span>
      )}
    </div>
  );
};
