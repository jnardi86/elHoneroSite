import React, { useState } from 'react'
import './navbar.css'
import '../../../src/styles.css'
import NavBurguer from './NavBurguer'
import { NAVBAR_LINKS } from '../../constants/constants'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  }

  return (
    <nav className='navbar lg'>
      <div className='navbar--logo'>
        <h2 className='firstTitle'>ElHornero</h2><span className='secondTitle'>The digital nest.</span>
      </div>
      <div className={`navbar--links ${clicked ? 'active' : ''}`}>
        {NAVBAR_LINKS.map((link) => (
          <a key={link.id} href={link.link} className='fontsLinks'>{link.name}</a>
        ))}
      </div>
      {/* <ul className={`navbar--links ${clicked ? 'active' : ''}`} >
        {
          NAVBAR_LINKS.map((link) => (
            <li key={link.id}><a href={link.link}>{link.name}</a></li>
          ))
        }

      </ul>  */}
      <div className='navbar--media'>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className="navBurguer">
        <NavBurguer clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`initial ${clicked ? 'active' : ''}`}>

      </div>


    </nav>
  )
}

export default Navbar