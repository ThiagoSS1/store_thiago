import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch,  FaStar } from 'react-icons/fa';
import './styles.css';
import logo from '../NavBar/nuuvem.svg'; 
import Cart from '../Cart';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        { <img src={logo} alt="Logo" /> }
      </div>
      <div className="navbar-links">
        <NavLink to="/highlights">
        <FaStar className='icon' />
        Highlights
        </NavLink>
        <NavLink to="/pc">PC</NavLink>
        <NavLink to="/consoles">Consoles</NavLink>
        <NavLink to="/mobile">Mobile</NavLink>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
      <Cart />
    </nav>
  );
};

export default Navbar;


