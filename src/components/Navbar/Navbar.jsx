import React from 'react'
import './navbar.css'
import Logo from './img/logo.svg'
import Avatar from './img/Mask Group.svg'

const Navbar = () => {
  return (
    <header className="header">
        <div className="header-logo">
            <img src={Logo} alt="" />
            <p className="header-text">Rival<span>CMS</span></p>
        </div>
        <div className='header-right'>
            <button className="pro-button">Pro Plan</button>
            <img src={Avatar} alt="" />
        </div>
    </header>
  )
}

export default Navbar