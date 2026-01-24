import { createContext, useState, useEffect, useContext } from "react";
import { logoutApi } from "./authServiceApi";

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
    const storedPermisos = localStorage.getItem("permisos");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));

      if (storedPermisos) {
        setMyPermisos(JSON.parse(storedPermisos));
      }
    }

    setLoading(false);
  }, []);

  const logout = async () => {
    await logoutApi();
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
