import React from "react";
import imageInvi from "../assets/MarcaIv.png";
import imageInsta from "../assets/1161953_instagram_icon.png";
import imageWhats from "../assets/843786_whatsapp_icon.png";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
    <div className="footer-left">
      <img src={imageInvi} width="200px" />
    </div>
    <div className="footer-center">
      <p><strong>EK3 Engenharia Industrial, todos os direitos reservados aqui.</strong></p>
      <p>Rua Saul Brandalise, 1100. CEP: 89560-162. Videira/SC. Brasil</p>
    </div>
    <div className="footer-right">
      <a href="https://www.instagram.com/ek3industrial/" target="_blank"><img src={imageInsta} style={{marginRight: "10px"}} width="30px" /></a>
      <a href="https://api.whatsapp.com/send?phone=5554991970475" target="_blank"><img src={imageWhats} width="30px" /></a>
    </div>
  </footer>
  );
}
