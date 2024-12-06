import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Style/SideNav.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImageComponent } from "../Components/ImageComponent";

function HomePag() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  return (
    <div className='container-fluid'>
      {/* Barra de navegación superior */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button className="btn btn-dark text-white me-3" onClick={toggleSidebar}>
            <i className="bi bi-list"></i> {/* Icono de menú */}
          </button>
          <span className="navbar-brand">NK Academia</span>
          <ImageComponent src='/images/nklogo2.JPG' width='50px' height='50px'/>
          <div className="collapse navbar-collapse justify-content-end">
            {/* Dropdown de cuenta */}
            <div className="dropdown">
              <a className="btn btn-dark dropdown-toggle text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle"></i>
                <span className="ms-2 d-none d-sm-inline">Cuenta</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#" onClick={() => navigate('/')}>Salir de Cuenta</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="row" style={{ marginTop: '56px' }}>
        {/* Sidebar */}
        {isSidebarVisible && (
          <div className='bg-dark col-md-3 col-lg-2 col-4 d-flex flex-column min-vh-100 sticky-sidebar'>
            <ul className='nav nav-pills flex-column mt-4'>
              <li className="nav-item my-1">
                <Link to={'Students'} className="nav-link text-white fs-5">
                  <i className='bi bi-people-fill'></i>
                  <span className="ms-2">Estudiantes</span>
                </Link>
              </li>
              <li className="nav-item my-1">
                <Link to={'Activities'} className="nav-link text-white fs-5">
                  <i className='bi bi-subtract'></i>
                  <span className="ms-2">Actividades</span>
                </Link>
              </li>
              <li className="nav-item my-1">
                <Link to={'Topics'} className="nav-link text-white fs-5">
                  <i className='bi bi-card-list'></i>
                  <span className="ms-2">Temas</span>
                </Link>
              </li>
              <li className="nav-item my-1">
                <Link to={'Progress'} className="nav-link text-white fs-5">
                  <i className='bi bi-graph-up-arrow me-2'></i>
                  <span className="ms-2">Progresos</span>
                </Link>
              </li>
              <li className="nav-item my-1">
                <Link to={'Profile'} className="nav-link text-white fs-5">
                  <i className='bi bi-person-circle'></i>
                  <span className="ms-2">Perfil</span>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Contenido principal */}
        <div className={isSidebarVisible ? 'col' : 'col-12'} style={{ overflowX: 'auto' }}>
          <div className='container d-flex flex-column justify-content-center align-items-center mt-4 '>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePag };
