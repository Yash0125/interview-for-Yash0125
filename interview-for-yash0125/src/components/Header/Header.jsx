import React from 'react';
import './Header.css';
import Logo from "./../../assets/logo.png"

const Header = () => {
  return (
    <div className='header-container'>
      <img src={Logo} alt="SpaceX-logo" />
    </div>
  )
}

export default Header
