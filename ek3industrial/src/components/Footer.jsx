import React from "react";
import instagramLogo from "../assets/instagramLogo.png";
import whatsappLogo from "../assets/whatsappLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import imageMail from "../assets/iconMail.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import ek3Logo2 from "../assets/ek3logo2.png";
import "./Footer.css";

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
          <img src={facebookLogo} width="30px" />
        </a>
        <a href="https://www.instagram.com/ek3industrial/" target="_blank">
          <img src={instagramLogo} width="30px" />
        </a>
        <a href="https://www.linkedin.com/company/ek3engenhariaindustrial/about/" target="_blank">
          <img src={linkedinLogo} width="30px" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5549991156353"
          target="_blank"
        >
          <img src={whatsappLogo} width="30px" />
        </a>
      </div>
    </footer>
  )
}
