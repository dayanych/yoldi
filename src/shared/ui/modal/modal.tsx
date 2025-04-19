import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import styles from './modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(styles.modal, {
        [styles.open]: isOpen,
      })}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div
        className={styles.modalContent}
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};
