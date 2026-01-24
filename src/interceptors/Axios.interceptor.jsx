import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Alerta } from '../functions/alerts';

export const AxiosInterceptor = () => {
  const { logout } = useContext(AuthContext);

  const updateHeader = (request) => {
    const tokenLocal = localStorage.getItem("token");

    let authToken = tokenLocal;
    if (tokenLocal) {
      try {
        const parsedToken = JSON.parse(tokenLocal);
        authToken = parsedToken.access_token || tokenLocal;
      } catch (error) {
        authToken = tokenLocal;
      }
    }

    const newHeaders = {
      Authorization: `Bearer ${authToken}`,
      Accept: 'application/json',
      "Content-Type": request.headers['Content-Type'] || "application/json",
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes('signin') || request.url?.includes('login')) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        Alerta()
          .withMini(true)
          .withTipo('error')
          .withTitulo("Error de red: el servidor no está disponible o no se pudo conectar.")
          .withPosicion('top-end')
          .build();
      } else {
        const status = error.response.status;
        const message = error.response.data?.message?.toLowerCase() || "";

        if (status === 401 && (message.includes("token inválido") || message.includes("token expirado"))) {
          logout();
        }

        if (status === 403) {
          Alerta()
            .withMini(true)
            .withTipo('error')
            .withTitulo("No tenés permisos para realizar esta acción.")
            .withPosicion('top-end')
            .build();
        }
      }

      return Promise.reject(error);
    }
  );
};
