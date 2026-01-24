import { createContext, useState, useEffect, useContext } from "react";
import { Alerta } from "../functions/alerts";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [myPermisos, setMyPermisos] = useState([]);
  const [sidebarShow, setSidebarShow] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));

      // Aquí podrías hacer un fetch de permisos si tu API lo soporta
      // fetchPermisosMyUser()
      //   .then((response) => {
      //     const permisosGet = response.map((p) => p.permiso?.codigo?.toLowerCase());
      //     setMyPermisos(permisosGet);
      //   })
      //   .catch((error) => {
      //     if (error.response?.status === 401) {
      //       logout();
      //     }
      //   })
      //   .finally(() => setLoading(false));

      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setMyPermisos([]);
    setLoading(false);
    window.location.href = "/signin";
  };

  function getUser() {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        getUser,
        setUser,
        loading,
        logout,
        sidebarShow,
        setSidebarShow,
        myPermisos,
        setMyPermisos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
