import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='container bg-img d-flex justify-content-center align-items-center'>
        <div className="row">
          <div className="col-12">
            <NavLink className='text-white text-uppercase h1 inactive' to={"/"}>music db</NavLink>
          </div>
        </div>
      </div>
      
      <div className="custom-border m-0 p-0"></div>
    </>
  );
};

export default Navbar;
