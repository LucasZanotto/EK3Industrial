import React from "react";
import Header from "../components/Header";
import imageEmp from "../assets/empreendimentos.jpg";
import imageCoach from "../assets/Foto consultoria _ treinamento 2.jpg";
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
      <Header />
      <div className="title-1">
              <h1 className="display-4 fw-bold">Áreas de atuação</h1>
              <hr className="my-4" />
            </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div>
              <h3><strong>Consultoria e Treinamento</strong></h3>
              <p>Personalizados para cada empresa e necessidade, conheça alguns:</p>
              <ul>
                <li>Gestão de Projetos industriais</li>
                <li>Excelência operacional</li>
                <li>Modularização de Projetos</li>
                <li>Melhoria contínua de processos e redução de recursos</li>
                <li>Planejamento financeiro para investimentos internos e de manutenção</li>
                <li>Gestão de Paradas de Manutenção; incluido Risk Based Maintenance, Mechanical Integrity</li>
                <li>Assessoria para a Auditoria internas, pós projetos e Normas ISO</li>
                <li>Sustentabilidade na Indústria</li>
                <li>Treinamentos e Coaching em liderança, trabalho em equipe e segurança industrial</li>
                <li>Perícia judicial - Engenharia Química</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <img src={imageCoach} alt="Consultoria e Treinamento" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 mb-4">
            <div className="title-2">
              <h3><strong>Projetos Industriais e Engenharia</strong></h3>
              <p>Com participação direta ou indireta</p>
              <ul>
                <li>Processos</li>
                <li>Segurança</li>
                <li>Mecânica</li>
                <li>Civil & tubulação</li>
                <li>Elétrica</li>
                <li>Instrumentação e automação</li>
                <li>Compra / delivery de materiais</li>
                <li>Parada</li>
                <li>Comissionamento</li>
                <li>Entre outros</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 mb-4">
            <img src={imageTyping} alt="Projetos Industriais e Engenharia" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="title-3">
              <h3><strong>Empreendimentos Industriais</strong></h3>
              <p>Elaborados e construídos para atender as necessidades e o planejamento da sua empresa</p>
              <p>Análise e desenvolvimento do projeto desde sua concepção até execução final; gerenciamento todas as
                atividades para o sucesso do seu projeto.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <img src={imageEmp} alt="Empreendimentos Industriais" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
