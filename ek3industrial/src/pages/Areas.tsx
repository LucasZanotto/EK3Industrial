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
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="title-1" style={{marginBottom:"5%"}}>
              <h2 className="fw-bold">Áreas de atuação</h2>
            </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div>
              <h3><strong>Consultoria e Treinamento</strong></h3>
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
otimizada e coerente. Aqui alguns dos nossos nichos:</p>
              <p>Personalizados para cada empresa e necessidade, conheça alguns:</p>
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
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <img src={imageCoach} alt="Consultoria e Treinamento" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="container-fluid back-gray">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 mb-4">
            <div className="title-2">
              <h3><strong>Projetos Industriais e Engenharia</strong></h3>
              <p>Nos projetos de engenharia em obras industriais, sejam eles de implantação ou ampliação, oferecemos
vasta experiência e <strong>atuação</strong> internacional; foram 18 anos acompanhando projetos nos países dos
Estados Unidos, França e Alemanha.</p>
<p>Participação direta (gestão) ou indireta (consultoria) em planejamentos e projetos multidisciplinares
integrando várias <strong>engenharias</strong>:</p>
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
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="title-3">
              <h3><strong>Empreendimentos</strong></h3>
              <p>Os empreendimentos industriais são projetos elaborados e construídos para atender às <strong>necessidades</strong> e
o planejamento de indústria.</p>
              <p>
              Nosso trabalho é analisar e definir o projeto, e muitos critérios são levados em consideração tanto no
seu desenvolvimento, topografia e logística quanto na sua execução. Consideramos o cumprimento total
de todas as normas da legislação e para o <strong>sucesso</strong> dos empreendimentos seguimos cada etapa de
desenvolvimento, construção, até entrega das chaves (turn-key), conforme cada necessidade.
              </p>
              <p><strong>A EK3 chegou para superar a sua expectativa e facilitar seus processos industriais!</strong></p>
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
