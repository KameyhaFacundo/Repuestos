import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import './defaultLayout.css';

function DefaultLayout() {
  const { token, loading, sidebarShow, setSidebarShow } = useContext(AuthContext);

  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  useEffect(() => {
    const updateIsLargeScreen = () => {
      setSidebarShow(window.innerWidth >= 796);
    };

    window.addEventListener('resize', updateIsLargeScreen);

    return () => window.removeEventListener('resize', updateIsLargeScreen);
  }, []);

  if (!token && !loading) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className='wrapper'>
      {/* Aquí puedes agregar tu Sidebar */}
      {/* <Sidebar apertura={sidebarShow} /> */}

      <div className='main'>
        {/* Aquí puedes agregar tu NavBar */}
        {/* <NavBar apertura={toggleSidebar} /> */}

        <main className='content px-3 py-2'>
          <div className='container-fluid'>
            <Outlet />
          </div>
        </main>

        {/* Aquí puedes agregar tu Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default DefaultLayout;
