import clsx from 'clsx';

import { User } from '../model/types';
import styles from './user-avatar.module.scss';

interface UserAvatarProps {
  user: User;
  size?: number;
  className?: string;
}

export const UserAvatar = ({ user, size = 50, className }: UserAvatarProps) => {
  const userFirstLetter = [user.name, user.email]
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
      {user?.image?.url ? (
        <img
          src={user.image.url}
          alt={user.name}
          className={styles.avatarImage}
        />
      ) : (
        <span style={{ fontSize: size * 0.3 }}>{userFirstLetter}</span>
      )}
    </div>
  );
};
