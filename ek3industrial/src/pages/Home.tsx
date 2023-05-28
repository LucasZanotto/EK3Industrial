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
import imageCoach from "../assets/imageEmpreend.jpg";
import imageTyping from "../assets/imageProj.jpg";
import imageAtua from "../assets/areasDeAt.jpg";
import imageSobre from "../assets/thisisengineering-raeng-1sk5Y2MK79Q-unsplash.jpg"
import imageGlobo from "../assets/brian-mcgowan-0A450BR1JWk-unsplash.jpg"
import imagePrin from "../assets/thisisengineering-raeng-SyRlD4s_amw-unsplash.jpg"
import imageAgriculture from "../assets/Agronegócios.jpg"
import imageChemicals from "../assets/ant-rozetsky-io7dX_1EFCg-unsplash.jpg"
import imageFood from "../assets/Alimenticia.jpg"
import imageInfra from "../assets/governamental (1).jpg"
import imageManu from "../assets/christopher-burns-8KfCR12oeUM-unsplash.jpg"
import imageElec from "../assets/jason-blackeye-zAITDJYV09w-unsplash.jpg"
import imageRefil from "../assets/victor-2PJMDIgK9EA-unsplash.jpg"
import imageChem from "../assets/quimica (2).jpg"
import imageCosmetic from "../assets/cosmetica.jpg"
import imageEmp from "../assets/imageEmpreen.jpg";
import imageCult from "../assets/imageCult2.jpeg"
import imagePrincipal from "../assets/fotoPrincipal.jpg"
import imageCell from "../assets/textil.jpg"
import imageGenerator from "../assets/geracao de energia.jpg"
import imagePharma from "../assets/farmaceutica.jpg"
import imageHead from "../assets/headlogo.png"
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
        <h1 className="header-letters"><strong>A escolha certa para a sua</strong></h1>
        <h2 className="header-letters-2"><strong>Agilidade Operacional</strong></h2>
        </div>
      </div>
      <div className="areas-att">
        <h2><strong>Áreas de Atuação</strong></h2>
        <h3><strong>A EK3 Engenharia Industrial é a escolha ideal para suas necessidades em projetos de engenharia, topografia, laudos técnicos e muito mais.
Conte conosco para transformar suas ideias em realidade.</strong></h3>
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
          <img className="d-block w-100" src={imageEmp} alt="Third slide" />
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
      <h2><strong>Cultura da EK3</strong></h2>
      <h3><strong>Descubra como estamos moldando o futuro e impulsionando o progresso.</strong>
      <br/>
       <Link to="/cultura">
      <button>Saiba mais</button>
      </Link>
      <img  src={imageCult} alt="Foto de Helena Lopes na Unsplash" width="50%"/>
      </h3>
    </div>
    <div className="container48">
    <h2><strong>Industrias</strong></h2>
      <h3><strong>Adaptamos às necessidades de indústrias para todos os segmentos e portes, em busca de impulsionar o seu sucesso.</strong></h3>
    </div>
    <div className="container50">
    <div className="sty50" style={{ position: "relative", display: "inline-block", marginRight: "3%" }}>
    <img src={imageAgriculture} alt="Foto de roberto bernardi na Unsplash" style={{ borderRadius: "5px", opacity: "70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Agronegócio</strong></h3>
    </div>
  </div>
  
  <div style={{ position: "relative", display: "inline-block", marginRight: "3%" }}>
    <img src={imageChem} alt="Foto de Artur Voznenko na Unsplash" width="20%" style={{ borderRadius: "5px", opacity: "70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
      <h3 style={{fontWeight: "bold", color: "white" }}><strong>Química</strong></h3>
    </div>
  </div>
  
  <div style={{ position: "relative", display: "inline-block", marginRight: "3%" }}>
    <img src={imageFood} alt="Foto de Arshad Pooloo na Unsplash" width="20%" style={{ borderRadius: "5px", opacity:"70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Alimentícia</strong></h3>
    </div>
  </div>
  
  <div style={{ position: "relative", display: "inline-block",  marginRight: "3%"  }}>
    <img src={imageInfra} alt="Foto de Troy Mortier na Unsplash" width="20%" style={{ borderRadius: "5px", opacity: "70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Governamental</strong></h3>
    </div>
  </div>
  <div style={{ position: "relative", display: "inline-block" }}>
    <img src={imageGenerator} alt="Foto de Tyler Casey na Unsplash" width="20%" style={{ borderRadius: "5px" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Energética</strong></h3>
    </div>
  </div>
    </div>
    <div className="container50">
    <div className="sty50" style={{ position: "relative", display: "inline-block", marginRight: "3%" }}>
    <img src={imagePharma} alt="Foto de Glsun Mall na Unsplash" style={{ borderRadius: "5px", opacity:"70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Farmacêutica</strong></h3>
    </div>
  </div>
  
  <div style={{ position: "relative", display: "inline-block", marginRight: "3%" }}>
    <img src={imageManu} alt="Foto de Christopher Burns na Unsplash" width="20%" style={{ borderRadius: "5px", opacity:"70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
      <h3 style={{fontWeight: "bold" }}><strong>Fabricação</strong></h3>
    </div>
  </div>
  
  <div style={{ position: "relative", display: "inline-block", marginRight: "3%" }}>
    <img src={imageCosmetic} alt="Foto de Jason Blackeye na Unsplash" width="20%" style={{ borderRadius: "5px", opacity:"70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Cosmética</strong></h3>
    </div>
  </div>
  
  <div style={{ position: "relative", display: "inline-block", marginRight: "3%"  }}>
    <img src={imageRefil} alt="Foto de Victor na Unsplash" width="20%" style={{ borderRadius: "5px" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Refinaria</strong></h3>
    </div>
  </div>

  <div style={{ position: "relative", display: "inline-block" }}>
    <img src={imageCell} alt="Foto de Bank Phrom na Unsplash" width="20%" style={{ borderRadius: "5px", opacity: "70%" }}/>
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -280%)" }}>
    <h3 style={{fontWeight: "bold" }}><strong>Textil</strong></h3>
    </div>
  </div>
    </div>
    <div className="container-25" style={{paddingBottom:"0%"}}>
      <h2><strong>Sobre nós</strong></h2>
      <h3><strong>Conheça nossa história e junte-se à nossa jornada.</strong>
      <br/>
      <Link to="/sobre">
      <button>Saiba mais</button>
      </Link>
      </h3>
      <img  src={imageSobre} alt="Third slide"/>
    </div>
    <div className="container-25" style={{paddingBottom:"0%"}}>
      <h2><strong>Localização</strong></h2>
      <h3><strong>Descubra o que o mundo tem a oferecer.</strong>
      <br/>
      <Link to="/contato">
      <button>Saiba mais</button>
      </Link>
      </h3>
      <img  src={imageGlobo} alt="Third slide"/>
    </div>
      <Footer/>
    </div>
  );
}
