import React from 'react'
import Logo from '../../logo.png';

//REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="logo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>
    </ul>
  </div>
  </div> 
</nav>
  )
}

export default Navbar
