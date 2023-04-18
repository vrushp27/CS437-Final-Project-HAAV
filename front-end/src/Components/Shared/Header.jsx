import React from 'react'
import { Link } from "react-router-dom";
import mainLogo from '../../Components/personal_logo.png';

function Header({ title }) {
    return (
      <nav className="navbar mb-12 shadow-lg bg-black text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-none px-8 mx-8"></div>
          <img style={{ width: 55, height: 40 }} src={mainLogo} alt="AAAV" />
          <h2 className="text-2xl m-2">
            |{" "}
            <Link to="/" className="font-thin">
              {title}
            </Link>
          </h2>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </nav>
    );

  }

  Header.defaultProps = {
    title: "Smart Trash Can as a Service",
  };

  export default Header;