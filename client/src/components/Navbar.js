import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';
import '../styles/Navbar.scss';

const Navbar = ({ totalItems }) => {
  //States
  const [clickMenu, setClickMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  //FUNCION DE LOGOUT
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/login');
    setUser(null);
  };

  //PARA EL SMOOTH SCROLLING
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  //LOCAL STORAGE

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  //Controla el state del burger menu
  const handleClick = () => setClickMenu(!clickMenu);

  //Cierra el menu que se abre en modo mobile<<<<<<<
  const closeMobileMenu = () => {
    setClickMenu(!clickMenu);
  };

  if (window.location.pathname === '/') {
    return (
      <>
        <nav className='navigation' scrollnav={scrollNav.toString()}>
          <Link to='/' className='navbar-logotype' onClick={toggleHome}>
            BEERHOUSE
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={clickMenu ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clickMenu ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav__item'>
              <ScrollLink
                to='ofertas'
                smooth='true'
                duration={500}
                exact='true'
                offset={-80}
                className='nav__links'
                onClick={closeMobileMenu}
              >
                OFERTAS
              </ScrollLink>
            </li>
            <li className='nav__item'>
              <ScrollLink
                to='nosotros'
                className='nav__links'
                smooth='true'
                duration={500}
                exact='true'
                offset={-60}
                onClick={closeMobileMenu}
              >
                NOSOTROS
              </ScrollLink>
            </li>

            <li className='nav__item'>
              <ScrollLink
                to='contacto'
                className='nav__links'
                smooth='true'
                duration={500}
                exact='true'
                offset={0}
                onClick={closeMobileMenu}
              >
                CONTACTO
              </ScrollLink>
            </li>

            <li className='nav__item'>
              <Link
                to='/tienda'
                className='nav__links'
                onClick={closeMobileMenu}
              >
                TIENDA <i className='fas fa-beer'></i>
              </Link>
            </li>
            <li className='nav__item'>
              {user ? (
                <Link to='/login' className='nav__links' onClick={logout}>
                  LOGOUT
                </Link>
              ) : (
                <Link
                  to='/login'
                  className='nav__links'
                  onClick={closeMobileMenu}
                >
                  LOGIN
                </Link>
              )}
            </li>
            <li className='nav__item'>
              <Link to='/cart' onClick={closeMobileMenu}>
                <i className='fas fa-cart-arrow-down cart__icon' />
                <div className='counter__icon'>
                  <span className='counter__icon__text'>{totalItems}</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className='navigation' scrollnav={scrollNav.toString()}>
          <a href='/' className='navbar-logotype' onClick={toggleHome}>
            BEERHOUSE
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={clickMenu ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clickMenu ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav__item'>
              <Link
                to='/tienda'
                className='nav__links'
                onClick={closeMobileMenu}
              >
                TIENDA <i className='fas fa-beer'></i>
              </Link>
            </li>
            <li className='nav__item'>
              {user ? (
                <Link to='/login' className='nav__links' onClick={logout}>
                  LOGOUT
                </Link>
              ) : (
                <Link
                  to='/login'
                  className='nav__links'
                  onClick={closeMobileMenu}
                >
                  LOGIN
                </Link>
              )}
            </li>
            <li className='nav__item'>
              <Link to='/cart' onClick={closeMobileMenu}>
                <i className='fas fa-cart-arrow-down cart__icon' />
                <div className='counter__icon__two'>
                  <span className='counter__icon__text'>{totalItems}</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
};

export default Navbar;
