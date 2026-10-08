import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { loginApi } from "../../auth/authServiceApi";
import { AuthContext } from "../../auth/AuthContext";
import "./Login.css";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, setToken, setUser, setMyPermisos } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      const response = await loginApi(data.email, data.password);

      localStorage.setItem("token", response.access_token);

      const expiresAt = new Date(Date.now() + response.expires_in * 1000).toISOString();
      localStorage.setItem("expires_at", expiresAt);

      localStorage.setItem("user", JSON.stringify(response.user));

      const permisosRol = response.user?.rol?.permisos?.map(p => p.codigo?.toLowerCase()) || [];
      const permisosDirectos = response.user?.permisos?.map(p => p.codigo?.toLowerCase()) || [];
      const todosLosPermisos = [...new Set([...permisosRol, ...permisosDirectos])];

      localStorage.setItem("permisos", JSON.stringify(todosLosPermisos));

      setMyPermisos(todosLosPermisos);
      setToken(response.access_token);
      setUser(response.user);
      navigate("/panel");
    } catch (err) {
      setToken(null);
      localStorage.removeItem("token");
      setError(err.response?.data?.message || "Credenciales inválidas. Por favor, intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (token) {
    return <Navigate to="/panel" />;
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-brand">
          <div className="login-brand-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h1>Titulo proyecto</h1>
          <p>Sistema de gestión integral para la administración de casos y clientes del estudio.</p>
        </div>

        <div className="login-form-container">
          <h2>Bienvenido</h2>
          <p className="subtitle">Ingrese sus credenciales para acceder al sistema</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  style={{ color: '#1a202c', background: '#fff', width: '100%', padding: '14px 16px 14px 48px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '15px', boxSizing: 'border-box' }}
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Correo electrónico inválido"
                    }
                  })}
                />
              </div>
              {errors.email && <span style={{ color: '#c53030', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrapper">
                <span
                  className="input-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={0}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  role="button"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      <line x1="4" y1="4" x2="20" y2="20" stroke="#c53030" strokeWidth="2" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  )}
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña"
                  style={{ color: '#1a202c', background: '#fff', width: '100%', padding: '14px 16px 14px 48px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '15px', boxSizing: 'border-box' }}
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 4,
                      message: "La contraseña debe tener al menos 4 caracteres"
                    }
                  })}
                />
              </div>
              {errors.password && <span style={{ color: '#c53030', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.password.message}</span>}
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
              style={{ width: '100%', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, marginTop: '8px', boxSizing: 'border-box' }}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
