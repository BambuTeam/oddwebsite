
import React from 'react';
import LogoNavgar from '../../assets/img/footer/isotipo_odd.svg';


function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">
      <img src ={LogoNavgar} alt="Logo"/>

      </div>
      <ul className="navbar-links">
        <li><a href="/quienes-somos">Quienes somos</a></li>
        <li><a href="/experiencia">Experiencia</a></li>
        <li><a href="/servicios">Servicios</a></li>
        <li><a href="/contactos">Contactos</a></li>
      </ul>

      <div className="navbar-language">
        <select>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
