import React from "react";
import { Link } from "react-router-dom";
import imageInvi from "../assets/MarcaIv.png";
import ek3Logo2 from "../assets/ek3logo2.png";
import ek3Logo1 from "../assets/Captura de tela de 2023-06-13 19-37-56.png";
import ek3Logo from "../assets/ek3Invi.png";
import ek3Logo4 from "../assets/Captura de tela de 2023-06-27 19-16-42.png";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={ek3Logo1} alt="logo" className="logo" />
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
          <ul className="navbar-nav ms-auto d-flex justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h5 className="mb-0">Início</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">
                <h5 className="mb-0">Quem somos</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/areas" className="nav-link">
                <h5 className="mb-0">Áreas de atuação</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cultura" className="nav-link">
                <h5 className="mb-0">Cultura</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/escolha" className="nav-link">
                <h5 className="mb-0">Por que escolher a EK3?</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">
                <h5 className="mb-0">Contato</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
