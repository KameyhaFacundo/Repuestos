import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';

const useTokenExpirationCheck = () => {
  const { token, logout } = useContext(AuthContext);
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath === '/signin') {
      return;
    }

    const checkTokenExpiration = () => {
      const expiration = localStorage.getItem('expires_at');
      const expiracionTiempo = new Date(expiration).getTime();
      const now = new Date().getTime();

      if (expiration && expiracionTiempo < now) {
        logout();
      }
    };

    checkTokenExpiration();

    const intervalId = setInterval(checkTokenExpiration, 60 * 1000);

    window.addEventListener('storage', event => {
      if (event.key === 'token' && event.newValue === null) {
        window.location.href = "/signin";
      }
    });

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', () => {});
    };
  }, [token, logout, currentPath]);
};

export default useTokenExpirationCheck;
