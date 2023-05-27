import React from "react"
import Header from "../components/Header";
import imageEmpre from "../assets/imageEmpreen.jpg";
import imageCoach from "../assets/imageEmpreend.jpg";
import imageInsta from "../assets/instagram.png";
import imageWhats from "../assets/whatsapp.png";
import imageTyping from "../assets/imageProj.jpg";
import "./Areas.css";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from "../components/Footer";

export default function Areas(){
  // window.scrollTo(0, 0);
  return (
    <div>
    <Header/>
    <div className="title-1" style={{paddingBottom:"0"}}>
    <h1><strong>Áreas de atuação</strong></h1>
    <hr/>
    </div>
    <div className="image-1">
      <img  src={imageCoach} alt="Third slide"/>
      </div>
    <div className="container-1">
      <div>
        <h3><strong>Consultoria e Treinamento</strong></h3>
        <p>Personalizados para cada empresa e necessidade, conheça alguns.</p>
        <ul>
          <li>Gestão de Projetos industriais.</li>
          <li>Excelência operacional.</li>
          <li>Modularização de Projetos.</li>
          <li>Melhoria contínua de processos e redução de recursos.</li>
          <li>Planejamento financeiro para investimentos internos e de manutenção.</li>
          <li>Gestão de Paradas de Manutenção; incluido Risk Based Maintenance, Mechanical Integrity.</li>
          <li>Assessoria para a Auditoria internas, pós projetos e Normas ISO.</li>
          <li>Sustentabilidade na Indústria.</li>
          <li>Treinamentos e Coaching em liderança, trabalho em equipe e segurança industrial.</li>
          <li>Perícia judicial - Engenharia Química.</li>
        </ul>
      </div>
    </div>
    <div className="image-2">
      <img  src={imageTyping} alt="Third slide"/>
      </div>
    <div className="container-2">
      <div>
        <h3><strong>Projetos Industriais e Engenharia</strong></h3>
        <p>Com participação direta ou indireta.</p>
        <ul>
          <li>Processos.</li>
          <li>Segurança.</li>
          <li>Mecânica.</li>
          <li>Civil & tubulação.</li>
          <li>Elétrica.</li>
          <li>Instrumentação e automação.</li>
          <li>Compra / delivery de materiais.</li>
          <li>Parada.</li>
          <li>Comissionamento.</li>
          <li>Entre outros.</li>
        </ul>
      </div>
    </div>
    <div className="image-3">
      <img  src={imageEmpre} alt="Third slide"/>
      </div>
    <div className="container-3">
      <div>
        <h3><strong>Empreendimentos Industriais</strong></h3>
        <p>Serviços de suporte e mentoria.</p>
        <ul>
        <li>Elaborados e construídos para atender as necessidades e o planejamento da sua empresa.</li>
        <li>Análise e desenvolvimento do projeto desde sua concepção até execução final; gerenciamento todas as
          atividades para o sucesso do seu projeto.
        </li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  )
}