import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="col-12 text-center py-5">
                <i className="fa-regular fa-face-frown text-danger fa-4x mb-1"></i>
                <h1 className='mb-2 text-danger'>Error 404 !</h1>
                <p>You reached a dead end. Go back to <NavLink  className="text-danger" to={"/"}>Homepage</NavLink>.</p>
            </div>
        </div>  
    </div>
  )
}

export default ErrorPage
