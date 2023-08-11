import React from "react";
import Header from "../components/Header";
import imageEmp from "../assets/empreendimentos.jpg";
import imageCoach from "../assets/Foto consultoria _ treinamento 2.jpg";
import imageInsta from "../assets/instagram.png";
import imageWhats from "../assets/whatsapp.png";
import imageTyping from "../assets/imageProj.jpg";
import imageBolaAzul from "../assets/Bola aqua.png";
import imageBolaRoxa from "../assets/Bola roxa.png";
import "./Areas.css";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from "../components/Footer";

export default function AreasTreinamento(){
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 mb-4">
            <div className="title-2">
              <h3><strong>Projetos Industriais e Engenharia</strong></h3>
              <p>Nos projetos de engenharia em obras industriais, sejam eles de implantação ou ampliação, oferecemos
vasta experiência e <strong>atuação</strong> internacional; foram 18 anos acompanhando projetos nos países dos
Estados Unidos, França e Alemanha.</p>
              <p>Prezamos pela integridade dos clientes e seus colaboradores, temos um alto cuidado com a <strong>segurança</strong> de todos, desde o planejamento até o final de execução de cada projeto, além de respeitar
rigorosamente as regras e seguir todas as normas de legislação vigentes.</p>
<p><strong>Em todos os nichos, nossa prioridade é a segurança industrial em qualquer serviço que prestamos.</strong></p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 mb-4">
            <img src={imageTyping} alt="Projetos Industriais e Engenharia" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="bola-azul3"></div>
        <div className="bola-roxa3"></div>
      <div className="content-projetos3">
      <p style={{color:"#8C3388"}}> <strong>Participação direta (gestão) ou indireta (consultoria) em <br /> planejamentos e projetos multidisciplinares
integrando várias <strong>engenharias</strong>:</strong></p>
      </div>
      <div className="content-container-flex">
        <div className="content-projetos2">
        <ul>
                <li>Processos de manufatura e logística</li>
                <li>Segurança industrial</li>
                <li>Mecânica</li>
                <li>Civil & tubulação</li>
                <li>Elétrica</li>
                <li>Instrumentação e automação</li>
                <li>Interação na compra/delivery de materiais ou equipamentos</li>
                <li>Paradas anuais para manutenção</li>
                <li>Comissionamento pós instalação ou pós projeto</li>
                <li>Entre outros, de níveis específicos e personalizados</li>
              </ul>
        </div>
        <div className="content-projetos1">
<p style={{paddingBottom:"2%"}}>Prezamos pela <strong>integridade</strong> dos clientes e seus colaboradores, temos
um alto cuidado com a segurança de todos, desde o planejamento até
o final de execução de cada projeto, além de respeitar rigorosamente
as regras e seguir todas as normas de legislação vigentes.</p>
<p>Em todos os nichos, nossa prioridade é a <strong>segurança industrial</strong> em
qualquer serviço que prestamos.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
