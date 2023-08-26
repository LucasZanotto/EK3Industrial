import React from "react";
import { Link } from "react-router-dom";
import ek3Logo1 from "../assets/ek3Logo1.png";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
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
                <h6 className="mb-0"><strong>INÍCIO</strong></h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link">
                <h6 className="mb-0"><strong>QUEM SOMOS</strong></h6>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/areas" className="nav-link" id="navbarDropdown" role="button"  data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <h6 className="mb-0"><strong>ÁREAS DE ATUAÇÃO</strong></h6>
              </Link>
              <ul className="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item custom-dropdown-item" to="/areas/consultoria">
                    <h6 className="mb-0"><strong>CONSULTORIA</strong></h6>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item custom-dropdown-item" to="/areas/treinamento">
                    <h6 className="mb-0"><strong>PROJETOS</strong></h6>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item custom-dropdown-item" to="/areas/empreendimento">
                    <h6 className="mb-0"><strong>EMPREENDIMENTOS</strong></h6>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/escolha" className="nav-link">
                <h6 className="mb-0"><strong>POR QUE A EK3?</strong></h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">
                <h6 className="mb-0"><strong>CONTATO</strong></h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
