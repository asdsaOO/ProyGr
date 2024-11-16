import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../Style/SideNav.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function StudentHome() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  return (
    <div className='container-fluid p-0'>
      {/* Barra de navegación superior */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container-fluid">
          <button className="btn btn-dark me-3" onClick={toggleSidebar}>
            <i className="bi bi-list fs-4"></i> {/* Icono de menú */}
          </button>
          <span className="navbar-brand fs-4">NK Academy</span>
          
          {/* Colapsado del dropdown en móvil */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarAccountDropdown" 
            aria-controls="navbarAccountDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <i className="bi bi-person-circle fs-4 text-white"></i>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarAccountDropdown">
            {/* Dropdown de cuenta */}
            <div className="dropdown">
              <a 
                className="btn btn-dark dropdown-toggle text-white" 
                href="#" 
                role="button" 
                id="dropdownMenuLink" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-person-circle fs-4"></i>
                <span className="ms-2 d-none d-sm-inline">Cuenta</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#">Datos de Usuario</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => navigate('/')}>Salir de Cuenta</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="row" style={{ marginTop: '56px' }}>
        {/* Sidebar */}
        {isSidebarVisible && (
          <div className='bg-dark col-md-3 col-lg-2 col-4 d-flex flex-column min-vh-100 sticky-sidebar p-3'>
            <ul className='nav nav-pills flex-column'>
              <li className="nav-item my-2">
                <Link to={'Lessons'} className="nav-link text-white fs-5 d-flex align-items-center">
                  <i className='bi bi-speedometer me-2'></i>
                  <span>Lecciones</span>
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link to={'Progress'} className="nav-link text-white fs-5 d-flex align-items-center">
                  <i className='bi bi-house me-2'></i>
                  <span>Rank</span>
                </Link>
              </li>
              <li className="nav-item my-2">
                <Link to={'Rank'} className="nav-link text-white fs-5 d-flex align-items-center">
                  <i className='bi bi-table me-2'></i>
                  <span>Temas</span>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Contenido principal */}
        <div className={isSidebarVisible ? 'col-md-9 col-lg-10 col-8' : 'col-12'}>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export { StudentHome };










 