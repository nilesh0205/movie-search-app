import React, { useState } from 'react';
import './navBar.css';

const NavBar = ({setMoviName ,movie}) => {
 
  
 
  const handleInputChange = (event) => {
    setMoviName(event.target.value);
  };
  return (
    <nav className="navbar navbar-light bg-light justify-content-between text-lg">
      <a className="navbar-brand">Movie Base</a>
      <form className="form-inline ">
        <input className="form-control mx-sm-2" type="search" value={movie} placeholder="Search" onChange={handleInputChange} aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0 me-2" type="submit">Search</button>
      </form>
    </nav>
  );
}

export default NavBar;
