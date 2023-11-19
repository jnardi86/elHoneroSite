import React, { useState } from 'react'
import './navbar.css'
import '../../../src/index.css'
import NavBurguer from './NavBurguer'

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  }

  return (
    <nav className='navbar lg'>
      <div className='navbar--logo'>
        <h2>ElHornero</h2><span>|| The digital nest.</span>
      </div>
      <div className={`navbar--links ${clicked ? 'active' : '' }`}>
        <a href="#h">Home</a>
        <a href="#h">Nosotros</a>
        <a href="#h">Servicios</a>
        <a href="#h">Contacto</a>
        <a href="#h">Blog</a>
      </div>
      <div className='navbar--media'>
        social media
      </div>
      <div className="navBurguer">
        <NavBurguer clicked={clicked} handleClick= {handleClick} />
      </div>
      <div className= {`initial ${clicked ? 'active' : '' }`}>

      </div>


    </nav>
  )
}

export default Navbar