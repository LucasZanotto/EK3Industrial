import React from "react";
import { Link } from "react-router-dom";
import imageInvi from "../assets/MarcaIv.png";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={imageInvi} alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h4>
                Home
                </h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">
              <h4>
                Sobre
                </h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/areas" className="nav-link">
              <h4>
                Áreas de atuação
                </h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cultura" className="nav-link">
              <h4>
                Cultura
                </h4>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/local" className="nav-link">
                Localização
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/contato" className="nav-link">
              <h4>
                Contato
            </h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
