import React from "react";

const Header = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/gallery">
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/movie">
            Movie
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
