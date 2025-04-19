import { useFooter } from '../lib/use-footer';
import styles from './footer.module.scss';

export const Footer = () => {
  const { footerContent, isAuthPage } = useFooter();

  if (!isAuthPage) return null;

  return <footer className={styles.footer}>{footerContent}</footer>;
};
