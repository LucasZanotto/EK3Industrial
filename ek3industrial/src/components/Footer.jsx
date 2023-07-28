import React from "react";
import imageInvi from "../assets/MarcaIv.png";
import imageInsta from "../assets/1161953_instagram_icon.png";
import imageWhats from "../assets/843786_whatsapp_icon.png";
import imageFace from "../assets/iconFace.png";
import imageMail from "../assets/iconMail.png";
import ek3Logo2 from "../assets/ek3logo2.png";
import ek3Logo1 from "../assets/Captura de tela de 2023-06-13 19-37-56.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={ek3Logo2} alt="logo" />
      </div>
      <div className="footer-center">
        <p>
          <strong>© Copyright 2023 EK3 Engenharia Industrial, todos os
          direitos reservados.</strong>
        </p>
        <p>
          Rua Saul Brandalise, 1100. CEP: 89560-286. Videira/SC. Brasil.
        </p>
      </div>
      <div className="footer-right">
        <a href="mailto:ek3@ek3.com.br" target="_blank">
          <img src={imageMail} width="30px" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100093192124939"
          target="_blank"
        >
          <img src={imageFace} width="35px" />
        </a>
        <a href="https://www.instagram.com/ek3industrial/" target="_blank">
          <img src={imageInsta} width="30px" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5549991156353"
          target="_blank"
        >
          <img src={imageWhats} width="30px" />
        </a>
      </div>
    </footer>
  );
}
