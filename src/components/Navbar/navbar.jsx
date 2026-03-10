import React from 'react'
import "./navbar.css"
import Carwidget from '../CartWidget/Carwidget'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <p>my ecommerce</p>

        <ul>
            <li>Teclados</li>
            <li>Auriculares</li>
            <li>Mouse</li>
        </ul>

        <Carwidget/>


    </nav>
  )
}

export default Navbar