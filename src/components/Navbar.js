import React from 'react'
import MainLogo from '../svgfiles/egg-logo.svg'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  
  return (
   <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark py-2">
  <div className="container-fluid">
    <div className="navbar-brand ">
    <img src={MainLogo} alt="logo" style={{width: '50px'}}/>
    <small className="text-warning"><i>Delicious</i></small>
    </div>
    <button className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" 
    aria-controls="navbarTogglerDemo02" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly gap-4 mt-4 w-75 h6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/americanpage">American</NavLink>
        <NavLink to="/europeanpage">European</NavLink>
        <NavLink to="/asianpage">Asian</NavLink>
      </ul>
      <form className="d-flex">
        <input id="search"  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" disabled/>
        <button className="btn btn-warning" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

