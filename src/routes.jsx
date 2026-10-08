import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
// import PrivateRoute from "./security/PrivateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />

      <Route path="/signin" element={<Login />} />

      <Route element={<DefaultLayout />}>
        <Route path="/panel" element={<Home />} />

        {/* Ejemplo de ruta protegida con permisos:
        <Route
          path="/clientes"
          element={
            <PrivateRoute allowedPermissions={["list-clientes"]}>
              <ClientesPage />
            </PrivateRoute>
          }
        />
        */}

        {/* Agrega más rutas aquí */}
      </Route>
    </Route>
  )
);
