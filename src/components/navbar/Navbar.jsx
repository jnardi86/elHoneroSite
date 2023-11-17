import React from 'react'
import './navbar.css'
import '../../../src/index.css'

const Navbar = () => {
  return (
    <nav className='navbar py-3 lg'>
      <div className='navbar--logo border'>
          <p>ElHornero.</p>
      </div>
      <div className='navbar--links border'>
          links 
      </div>
      <div className='navbar--media border'>
          social media
      </div>

    </nav>
  )
}

export default Navbar