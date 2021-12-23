import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  //States
  const [clickMenu, setClickMenu] = useState(false);

  //Controla el state del burger menu
  const handleClick = () => setClickMenu(!clickMenu);

  //Cierra el menu que se abre en modo mobile<<<<<<<
  const closeMobileMenu = () => {
    setClickMenu(!clickMenu);
  };

  return (
    <>
      <nav className='navigation'>
        <Link to='/' className='navbar-logotype'>
          BEERHOUSE
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={clickMenu ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={clickMenu ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav__item'>
            <Link to='/' className='nav__links' onClick={closeMobileMenu}>
              NOSOTROS
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/' className='nav__links' onClick={closeMobileMenu}>
              OFERTAS
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/tienda' className='nav__links' onClick={closeMobileMenu}>
              TIENDA <i className='fas fa-beer'></i>
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/login' className='nav__links' onClick={closeMobileMenu}>
              LOGIN
            </Link>
          </li>
          <li className='nav__item'>
            <Link to='/cart' className='nav__links' onClick={closeMobileMenu}>
              <i className='fas fa-cart-arrow-down cart-icon' />
              <div className='counter'>2</div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
