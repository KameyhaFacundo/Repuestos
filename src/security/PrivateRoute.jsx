import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import useHasPermiso from "../hooks/useHasPermiso";
import { Alerta } from "../functions/alerts";

const PrivateRoute = ({ children, allowedPermissions, show }) => {
  const { user, loading } = useContext(AuthContext);
  const { checkPermisos } = useHasPermiso();

  useEffect(() => {
    if (!loading && user) {
      if (show ? false : !checkPermisos(allowedPermissions)) {
        Alerta()
          .withMini(true)
          .withTipo("error")
          .withTitulo("Acceso Denegado")
          .withMensaje("No tiene permiso para realizar esta acción")
          .build();
      }
    }
  }, [allowedPermissions, show, checkPermisos, user, loading]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!(show ? true : checkPermisos(allowedPermissions))) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
