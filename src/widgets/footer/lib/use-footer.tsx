import { Link, useLocation } from 'react-router-dom';

export const useFooter = () => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === '/sign-in' || location.pathname === '/sign-up';

  const footerContent =
    location.pathname === '/sign-in' ? (
      <p>
        Еще нет аккаунта? <Link to="/sign-up">Зарегистрироваться</Link>
      </p>
    ) : (
      <p>
        Уже есть аккаунт? <Link to="/sign-in">Войти</Link>
      </p>
    );

  return {
    isAuthPage,
    footerContent,
  };
};
