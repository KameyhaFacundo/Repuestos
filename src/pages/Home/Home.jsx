import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';

function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container mt-4">
      <h1>Bienvenido al Sistema</h1>
      {user && (
        <div>
          <p>Usuario: {user.name || user.email}</p>
          <button className="btn btn-danger" onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
