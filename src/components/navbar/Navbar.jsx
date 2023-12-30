import { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/izzy-logo.png';
import { Container, } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    closeMenu();
  };

  const closeMenu = () => {
    setMenuOpen(false); // Cierra el menú
  };


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Deshabilita el scroll cuando el menú está abierto
    } else {
      document.body.style.overflow = 'auto'; // Habilita el scroll cuando el menú está cerrado
    }

    return () => {
      document.body.style.overflow = 'auto'; // Asegura que el scroll esté habilitado al desmontar el componente
    };
  }, [menuOpen]);



  return (
    <nav className='Navbar  fixed-top' >
      <Container>
        <div className='navbar-contenedor'>
          <div className='navbar-img'>
          <Link to={'/'} onClick={scrollToTop}> <img src={Logo} alt='' /> </Link>
          </div>

          <div className={`menu m-auto ${menuOpen ? 'active' : ''}`}>

<div className=" menu-box">
            <Link to={'/'} onClick={scrollToTop} className='link-menu'>HOME</Link>
            <Link to={'/store'} onClick={scrollToTop} className='link-menu'>STORE</Link>
            <Link to={'/disney'} onClick={scrollToTop} className='link-menu'>DISNEY</Link>
            <Link to={'/marvel'} onClick={scrollToTop} className='link-menu'>MARVEL</Link>
            <Link to={'/starWars'} onClick={scrollToTop} className='link-menu'>STAR WARS</Link>
            <Link to={'/ourStory'} onClick={scrollToTop} className='link-menu'>OUR STORY</Link>
            <Link to={'/'} className='link-menu'>JOBS</Link>
            <Link to={'/'} className='link-menu'>DONATE</Link>
            </div>           
          </div>

          <CartWidget />
          {menuOpen ? (
            <IoCloseSharp className='barns d-lg-none' onClick={toggleMenu} />
          ) : (
            <HiBars3 className='barns d-lg-none' onClick={toggleMenu} />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
