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

export default function AreasEmpreendimento(){
  window.scrollTo(0, 0);
  return (
    <div >
      <Header />
      <div className="container-fluid" id="conteudo">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="title-3 content-empreend1">
              <h3><strong>Empreendimentos</strong></h3>
              <p>Os empreendimentos industriais são projetos elaborados e construídos para atender às <strong>necessidades</strong> e
o planejamento de indústria.</p>
             
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 ">
            <img src={imageEmp} alt="Empreendimentos Industriais" className="img-fluid rounded" />
          </div>
        </div>
        </div>
        <div className="bola-azul"></div>
        <div className="bola-roxa"></div>
        <div className="content-empreend2">
        <p>
              Nosso trabalho é analisar e definir o projeto, e muitos critérios são levados em consideração tanto no
seu desenvolvimento, topografia e logística quanto na sua execução. Consideramos o cumprimento total
de todas as normas da legislação e para o <strong>sucesso</strong> dos empreendimentos seguimos cada etapa de
desenvolvimento, construção, até entrega das chaves (turn-key), conforme cada necessidade.
              </p>
              <p><strong>A EK3 chegou para superar a sua expectativa e facilitar seus processos industriais!</strong></p>
        </div>
      <Footer />
    </div>
  )
}
