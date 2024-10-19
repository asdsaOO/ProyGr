import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
//
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Style/SideNav.css'
import { Outlet,Link } from "react-router-dom";



function HomePag() {
  return (
    <div className='container-fluid'>
      <div className="row">
        
      </div>
      <div className='row'>
        <div className='bg-dark col-xl-2 col-3  min-vh-100 d-flex justify-content-between flex-column'>
          <div className="bg-dark">
            <a className='text-decoration-none text-red d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'>
              <span className='ms-1 fs-4'>NK Academy</span>
            </a>
            <hr className="text-secondary" />
            <ul className='nav nav-pills flex-column'>
              <li className="nav-item text-white fs-4 my-1">
                <Link to={'Students'} className="nav-link text-white fs-5" aria-current='page'>
                  <i className='bi bi-speedometer'></i>
                  <span className="ms-2 d-none d-sm-inline">Estudiantes</span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link to={'Activities'} className="nav-link text-white fs-5" aria-current='page'>
                  <i className='bi bi-house'></i>
                  <span className="ms-2 d-none d-sm-inline">Actividades</span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link to={'Topics'} className="nav-link text-white fs-5" aria-current='page'>
                  <i className='bi bi-table'></i>
                  <span className="ms-2 d-none d-sm-inline">Temas</span>

                </Link>

              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link to={'Progress'} className="nav-link text-white fs-5" aria-current='page'>
                  <i className='bi bi-table'></i>
                  <span className="ms-2 d-none d-sm-inline">Progresos</span>

                </Link>

              </li>

            </ul>
          </div>
          <div className="dropdown">
            <a className="btn btn-dark btn-lg dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <i className="bi bi-person-circle"></i>
              <span className="ms-2 d-none d-sm-inline">Cuenta</span>
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Datos de Usuario</a></li>
              <li><a className="dropdown-item" href="#">Salir de Cuenta</a></li>
            </ul>
          </div>

        </div>

        <div className='col'>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>

    </div>
  )
}

export { HomePag }