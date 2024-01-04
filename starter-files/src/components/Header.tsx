import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="d-flex justify-content-between container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h4 className="text-uppercase text-dark text-decoration-none mt-4 mb-0">
          restaurant
        </h4>
      </Link>

      <Link to={"/favourites"} style={{ textDecoration: "none" }}>
        <i className="fa-solid fa-heart fa-2x text-danger mt-4"></i>
      </Link>
    </nav>
  );
};

export default Header;
