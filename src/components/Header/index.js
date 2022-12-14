import React, { useState } from "react";
import { Link } from "react-router-dom";
import tecnologia from "../../assets/Logo.png";
import "./styles.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            role="button is-large"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
          <Link
          to="/">
          <img
            src={tecnologia}
            width="170"
            className="navbar-item"
            ClassName="is-active"/>
        </Link>
            <Link
              className="navbar-item "
              ClassName="is-active"
              to="/formulario">
              Cadastro
            </Link>
            <Link
              className="navbar-item"
              ClassName="is-active"
              to="/login">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;