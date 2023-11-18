import React from 'react'
import './navBurguer.css'

const NavBurguer = (props) => {
    return (
        <div onClick={props.handleClick}
            className={`icon nav-icon-5 ${props.click ? 'open' : ''}`}
        >
            <span></span>
            <span></span>
            <span></span>

        </div>
    )
}

export default NavBurguer