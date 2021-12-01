import React from "react";

import { Switch, Route, Link } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';


import PartnerReg from "./PartnerReg";
import CustomerReg from "./CustomerReg";


const Nav = ()=>{
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Bagjour</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Registration
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          
              
        
          <Link className="dropdown-item" to="/partner-reg">Partner Registration</Link>
          <Link className="dropdown-item" to="/customer-reg">Customer Registration</Link>
          {/* <a className="dropdown-item" href="#">Another action</a> */}
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/partner-login">Partner Login</Link>
          <Link className="dropdown-item" to="/customer-login">Customer Login</Link>
         
        </div>
      </li>
      
    </ul>
   
  </div>
</nav>


    )
}

export default Nav;