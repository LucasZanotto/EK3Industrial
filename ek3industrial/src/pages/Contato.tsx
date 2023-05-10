import React from "react"
import Header from "../components/Header";
import imageEmpre from "../assets/engenhariaEmp.jpeg";
import imageInsta from "../assets/instagram.png";
import imageWhats from "../assets/whatsapp.png";
import imageContato from "../assets/contact.jpg"
import googleMap from "../assets/googleMap.png"
import imageVideira from "../assets/videiraInt.jpg"
import "./Contato.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Contato(){
  window.scrollTo(0, 0);
  const history = useHistory();

  function handleClick() {
    history.go('/areas');
  }
  return (
    <div>
    <Header/>
    <div className="title-1">
    <h1><strong>Contato</strong></h1>
    </div>
    <div className="container-20">
      <div className="container-22">
      <img  src={imageVideira} alt="Third slide" width="600" style={{borderRadius: "1px 75px"}}/>
      </div>
      <div className="container-21">
      <h3><strong>Sede da corporação</strong></h3>
      <p><strong>Endereço</strong></p>
      <p>Rua Saul Brandalise, 1100, Matriz 
        <br />
        CEP: 89560-162 | Videira, SC</p>
        <a href="https://www.google.com/maps/place/EK3Industrial/@-27.0060479,-51.1517966,15z/data=!4m17!1m10!3m9!1s0x94e14ff0112b2bfd:0xb9429c205e0d1f0e!2sEK3Industrial!8m2!3d-27.0060479!4d-51.1430419!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11ty8f0j9_!3m5!1s0x94e14ff0112b2bfd:0xb9429c205e0d1f0e!8m2!3d-27.0060479!4d-51.1430419!16s%2Fg%2F11ty8f0j9_" target="_blank"><button>Ver no mapa</button></a>
        <a href="https://api.whatsapp.com/send?phone=5554991970475" target="_blank" style={{color: "black"}}><p>+55 49 9 9115-6353</p></a>
    </div>
    </div>
    <div className="container-23">
      <h2>Contate-nos</h2>
      <h4><strong>Interessado em conhecer mais sobre a EK3 Engenharia Industrial?</strong></h4>
      <Link to="/sobre">
       <button onClick={() => handleClick}><strong>Saiba mais</strong></button>
      </Link>
    </div>
    <Footer />
    </div>
  )
}