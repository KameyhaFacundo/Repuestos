import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { loginApi } from "../../auth/authServiceApi";
import { AuthContext } from "../../auth/AuthContext";

function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const { token, setToken, setUser, setMyPermisos } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginApi(data.email, data.password);

      localStorage.setItem("token", response.token?.original?.access_token || response.token);
      localStorage.setItem("expires_at", response.token?.original?.expires_at || response.expires_at);
      localStorage.setItem("user", JSON.stringify(response.user));

      const permisosGet = response?.user?.permisos_usuarios?.map((p) =>
        p.permiso?.codigo?.toLowerCase()
      ) || [];

      setMyPermisos(permisosGet);
      setToken(response.token);
      setUser(response.user);
      navigate("/");
    } catch (error) {
      setToken(null);
      localStorage.removeItem("token");
      setError("Las credenciales son inválidas");
    }
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#0067A5" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="d-flex align-items-center mb-3 pb-1 mx-3">
                        <span className="h1 fw-bold mb-0">
                          Estudio Jurídico
                        </span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Inicio de sesión
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          {...register("email", { required: "Este campo es obligatorio" })}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Dirección de Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          {...register("password", { required: "Este campo es obligatorio" })}
                        />
                        <label className="form-label">Contraseña</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                          Iniciar sesión
                        </button>
                      </div>

                      {error && (
                        <div className="alert alert-danger">
                          Las credenciales son inválidas, intente nuevamente.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
