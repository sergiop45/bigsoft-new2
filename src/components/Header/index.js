import React, { useState } from 'react';
import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <div className='logotext'>
          <span className='b'>B</span>igsoft
        </div>
        <div className='rectangules'>
          <div className='rectangule1'></div>
          <div className='rectangule2'></div>
          <div className='rectangule3'></div>
          <div className='rectangule4'></div>
        </div>
      </div>
      <GiHamburgerMenu className='btn-menu' onClick={toggleMenu} />

      <div className='desktop'>
          
          <a href='#services'>Serviços</a>
          <a href='#projects'>Projetos</a>
          <a href='#mission'>Missão</a>
          <a href='#mission'>Blog</a>
          
      </div>

      {menuOpen && (
        <div className='menu'>
          <ul>
          <a href='#services'><li>Serviços</li></a>
          <a href='#projects'><li>Projetos</li></a>
          <a href='#mission'> <li>Missão</li></a>
          <a href='#mission'> <li>Blog</li></a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
