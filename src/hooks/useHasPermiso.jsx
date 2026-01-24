import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function useHasPermiso() {
  const { myPermisos } = useContext(AuthContext);

  const checkPermisos = (permissionsToCheck) => {
    if (Array.isArray(permissionsToCheck)) {
      return permissionsToCheck.every((permissionString) =>
        myPermisos.includes(permissionString)
      );
    } else {
      return checkPermisos([permissionsToCheck]);
    }
  };

  return { checkPermisos };
}
