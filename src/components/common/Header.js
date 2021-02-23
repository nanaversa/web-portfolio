import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  useEffect(() => {
    // toast.success("Welcome User!");
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="header">
        <img
          src={require("../images/it.jpg")}
          alt="logo"
          className="logo-header"
        />
        <Link to="/">home</Link>
        <Link to="/services" className="links">
          services
        </Link>
        <Link to="/about" className="links">
          about
        </Link>
      </div>
    </div>
  );
};

export default Header;
