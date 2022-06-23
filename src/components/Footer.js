import React from 'react'
import MainLogo from '../svgfiles/egg-logo.svg'

export const Footer = () => {
  return (
    <footer className="container-fluid text-white 
    py-2  d-flex  justify-content-center align-items-center  flex-column
   text-center gap-3">
        <div className="d-flex align-items-end">
          <img src={MainLogo} style={{width: '40px'}} alt="logo"/>
          <h5><i style={{color: '#f0ad4e'}}>Delicious</i></h5>  
        </div>
       <div>
         <h6>All rights reserved.</h6>
         <h6>By Saba Jmukhadze.</h6>
         <small>&copy; 2022</small>
       </div>
    </footer>
  )
}
