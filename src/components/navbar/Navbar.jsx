import  { useState } from 'react';
import './navbar.css';
import Logo from '../../assets/izzy-logo.png';
import { Container } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='Navbar  fixed-top' >
      <Container>
        <div className='navbar-contenedor'>
          <div className='navbar-img'>
            <img src={Logo} alt='' />
          </div>

          <div className={`menu m-auto ${menuOpen ? 'active' : ''}`}>
            
            <button>HOME</button>
            <button>STORE</button>
            <button>DISNEY</button>
            <button>OUR STORY</button>
            <button>COMMUNITY</button>
            <button>PUBLIC SPEAKING</button>
            <button>JOBS</button>
            <button>DONATE</button>
            <button>HELP</button>
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
