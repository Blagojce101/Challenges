import React from 'react'

const Header = () => {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light custom-height">
            <img src="/img/logo.png" alt="" className="custom-nav-img" />
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
                className="navbar-nav font-weight-bold mx-auto d-flex flex-row justify-content-center justify-content-between"
            >
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">home </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">bikes </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">gear</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">parts</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">tires</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">service-info</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">catalogues</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">contact</a>
                </li>
            </ul>
            <div className="navbar-icons">
                <i className="fa-solid fa-magnifying-glass fa-lg (33% increase)"></i>
                <i className="fa-solid fa-bag-shopping ml-2 fa-lg (33% increase)"></i>
            </div>
            </div>
        </nav>
        <hr />
            <div className="container d-flex justify-content-start">
                <div className="row">
                    <div className="col pl-0">
                        <span className="text-capitalize custom-text-weight">bikes</span>
                    </div>
                </div>
            </div>
        <hr />
    </div>
  )
}

export default Header;
