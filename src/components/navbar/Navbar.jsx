import { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/izzy-logo.png';
import { Container, } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

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
  };


  return (
    <nav className='Navbar  fixed-top' >
      <Container>
        <div className='navbar-contenedor'>
          <div className='navbar-img'>
          <Link to={'/'} onClick={scrollToTop}> <img src={Logo} alt='' /> </Link>
          </div>

          <div className={`menu m-auto ${menuOpen ? 'active' : ''}`}>

            <Link to={'/'} onClick={scrollToTop} className='link-menu'>HOME</Link>
            <Link to={'/store'} onClick={scrollToTop} className='link-menu'>STORE</Link>
            <Link to={'/disney'} onClick={scrollToTop} className='link-menu'>DISNEY</Link>
            <Link to={'/marvel'} onClick={scrollToTop} className='link-menu'>MARVEL</Link>
            <Link to={'/starWars'} onClick={scrollToTop} className='link-menu'>STAR WARS</Link>
            <Link to={'/'} className='link-menu'>PUBLIC SPEAKING</Link>
            <Link to={'/'} className='link-menu'>JOBS</Link>
            <Link to={'/'} className='link-menu'>DONATE</Link>
            
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
