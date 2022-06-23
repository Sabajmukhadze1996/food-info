import React from 'react'
import MainLogo from '../svgfiles/egg-logo.svg'
import { NavLink} from 'react-router-dom';



export const Navbar = () => {
 
  return(
   <>
    <nav className="navbar navbar-expand-md  navbar-dark py-1">
  <div className="container-fluid">
    <div className="navbar-brand ">
    <img src={MainLogo} alt="logo" style={{width: '65px'}}/>
    <small className="text-warning"><i>Delicious</i></small>
    </div>
    <button className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" 
    aria-controls="navbarTogglerDemo02" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto  mb-lg-0 d-flex justify-content-evenly gap-3 mt-4 w-100 h5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/americanpage">American</NavLink>
        <NavLink to="/europeanpage">European</NavLink>
        <NavLink to="/asianpage">Asian</NavLink>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}


