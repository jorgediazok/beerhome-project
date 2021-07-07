import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../pages/Signup";
import "../styles/Navbar.scss";

const Navbar = () => {
  //States
  const [clickMenu, setClickMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  //Controla el state del burger menu
  const handleClick = () => setClickMenu(!clickMenu);

  //Cierra el menu que se abre en modo mobile<<<<<<<
  const closeMobileMenu = () => {};

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          BEERHOUSE
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clickMenu ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={clickMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/us" className="nav-links" onClick={closeMobileMenu}>
              NOSOTROS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/us" className="nav-links" onClick={closeMobileMenu}>
              PRODUCTOS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tienda" className="nav-links" onClick={closeMobileMenu}>
              TIENDA <i className="fas fa-beer"></i>
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={openModal}>
              LOGIN
            </div>
          </li>
          <li className="nav-item">
            <Link to="/cart">
              <i className="fas fa-cart-arrow-down cart-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <Signup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Navbar;
