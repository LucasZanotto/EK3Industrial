import React from "react";
import Header from "../components/Header";
import { Carousel } from "react-bootstrap";
import imageInvi from "../assets/MarcaIv.png";
import imageIndus from "../assets/industrial.png";
import imagePlan from "../assets/engenhariaPlan.jpeg";
import imageEmpre from "../assets/Empreendimentos.jpg";
import imageGear from "../assets/1904675_configuration_edit_gear_options_preferences_icon.png";
import imageSlogan from "../assets/Captura de tela de 2023-04-20 20-17-57.png";
import imageInsta from "../assets/instagram.png";
import imageBranco from "../assets/ek3branco.png";
import imageWhats from "../assets/whatsapp.png";
import imageCoach from "../assets/Coaching.jpg"
import imageTyping from "../assets/type2.jpg";
import imageAtua from "../assets/areasDeAt.jpg";
import imageSobre from "../assets/thisisengineering-raeng-1sk5Y2MK79Q-unsplash.jpg"
import imageGlobo from "../assets/brian-mcgowan-0A450BR1JWk-unsplash.jpg"
import imagePrin from "../assets/thisisengineering-raeng-SyRlD4s_amw-unsplash.jpg"
import "./Home.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
// import gridImg from '../assets/gridImg.png';

export default function Home() {
  // window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="header-init">
        <div>
        <h1 className="header-letters"><strong>A escolha certa para o seu sucesso</strong></h1>
        <h2 className="header-letters-2"><strong>Conte conosco </strong></h2>
        </div>
      </div>
      <div className="areas-att">
        <h3><strong>Áreas de Atuação</strong></h3>
        <h4><strong>A EK3 Engenharia Industrial é a escolha ideal para suas necessidades em projetos de engenharia, topografia, laudos técnicos e muito mais.
Conte conosco para transformar suas ideias em realidade.</strong></h4>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={imageTyping} alt="First slide" />
          <Carousel.Caption className="marketing-1">
            <h3>Projetos industriais e Engenharia</h3>
            <p>
              Transforme sua ideia em realidade com nossa expertise em projetos
              industriais e engenharia.
            </p>
            <Link to="/areas" className="Linkados">
              <button>Saiba mais</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageCoach} alt="Second slide" />
          <Carousel.Caption className="marketing-1">
            <h3 >Consultoria e Treinamentos</h3>
            <p>
              Aprimore suas habilidades e leve seu negócio ao próximo nível com
              nossos serviços de consultoria e treinamentos.
            </p>
            <Link to="/areas" className="Linkados">
              <button>Saiba mais</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageEmpre} alt="Third slide" />
          <Carousel.Caption>
            <div className="marketing-1">
            <h3>Empreendimentos</h3>
            <p>
              Seja o próximo empreendedor de sucesso com nossos serviços de
              suporte e mentoria.
            </p>
            <Link to="/areas" className="Linkados">
              <button>Saiba mais</button>
            </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    <div className="container-25">
      <h2><strong>Sobre nós</strong></h2>
      <img  src={imageSobre} alt="Third slide" width="50%" style={{borderRadius: "15px"}}/>
      <h3><strong>Conheça nossa história e junte-se à nossa jornada</strong>
      <br/>
      <Link to="/sobre">
      <button>Saiba mais</button>
      </Link>
      </h3>
    </div>
    <div className="container-29">
    <img  src={imageGlobo} alt="Third slide" width="auto"/>
    <h3>
      Localização
      <br />
      <br />
      <strong>Descubra o que o mundo tem a oferecer</strong></h3>
    <Link to="/contato">
      <button>Saiba mais</button>
      </Link>
    </div>
      <Footer/>
    </div>
  );
}
