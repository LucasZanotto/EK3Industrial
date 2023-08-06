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

export default function AreasConsultoria(){
  return (
    <div>
      <Header />
        <div className="bola-roxa2"></div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="content-consult1">
              <h3 style={{paddingBottom: "3%"}}><strong>Consultoria e Treinamento</strong></h3>
              <p>Tem dificuldade em encontrar uma <strong>solução</strong> pronta para suas necessidades específicas? Podemos criar
soluções personalizadas para sua situação e ajudar a tornar essa ideia em realidade com nossos serviços
de engenharia.</p>
<p>
Nossa <strong>equipe</strong> multidisciplinar integra os sistemas necessários para que os processos do seu projeto ou
de suas instalações funcionem suavemente.
</p>
<p>
Temos experiência em muitas indústrias de 1.000 m² a mais de 500 mil m² e possuímos conhecimento e
as ferramentas necessárias para otimizar o layout e processos de suas operações.
</p>
<p>Entenderemos suas operações em alto nível e, em seguida, começaremos a mapear detalhadamente,
analisaremos subprocessos para que a <strong>complexidade</strong> de um problema possa ser resolvida de forma
otimizada e coerente.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <img src={imageCoach} alt="Consultoria e Treinamento" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="bola-azul2"></div>
      <div className="content-consult2">
        <strong><p> Aqui alguns dos nossos nichos:</p>
              <p style={{paddingBottom: "3%"}}>Personalizados para cada empresa e necessidade, conheça alguns:</p></strong>
              <ul>
            <li>Gestão em Projetos industriais</li>
            <li>Excelência operacional</li>
            <li><strong>Modularização</strong> em instalações e construções</li>
            <li>Melhoria contínua com/sem otimização de processos. Alguns dos métodos utilizados: Value
Engineering, 5S, Six Sigma, custo mínimo de investimento entre outros</li>
            <li>Maximizar custo benefício em projetos</li>
            <li>Planejamento e preparação <strong>orçamentária</strong> em projetos de engenharia e na área de
manutenção</li>
            <li>Minimizar custos em produção, manutenção e projetos de investimento</li>
            <li>Planejamento anual de manutenção, produção e suas <strong>paradas</strong></li>
            <li>Gestão de paradas de manutenção, incluindo Risk Based Maintenance, Mechanical Integrity</li>
            <li>Assessoria em <strong>auditorias</strong> internas, pós projetos e Normas ISO 9001, ISO 14000, ISO 15000,
entre outros</li>
            <li>Sustentabilidade na indústria</li>
            <li>Treinamento e coaching em <strong>liderança</strong>, trabalho em equipe, segurança na indústria</li>
            <li>Perícia Judicial – Engenharia Química</li>
            <li>Gestão em Projetos industriais</li>
            <li>Excelência operacional</li>
            <li>Modularização em instalações e construções</li>
            <li>Melhoria contínua com/sem otimização de processos. Alguns dos métodos utilizados: Value Engineering, 5S, Six Sigma, custo mínimo</li>
              </ul>
      </div>
      <Footer />
    </div>
  )
}
