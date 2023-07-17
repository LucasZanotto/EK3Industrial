import React from "react"
import Header from "../components/Header";
import "./Cultura.css";
import Footer from "../components/Footer";
import imageCult from "../assets/imageCult2.jpeg";
import imageEscritorio from "../assets/mockup-escritorio-ek3-1.png";

export default function Cultura(){
  window.scrollTo(0, 0);
  return (
    <div className="cont">
    <Header/>
    <div>
  <img src={imageEscritorio} className="imagem-destaque" alt="Escritório" />
</div>
<div className="container-content">
    <div className="content-1">
    <h2 className="fw-bold">Cultura</h2>
    <p>Construímos uma cultura diversa e inclusa, onde nossa equipe se sente pertencente e mais conectada.
Juntamente com a expertise técnica, temos um ambiente de trabalho mais plural, inovador e
sustentável pois nossos funcionários são valorizados e incentivados ao empoderamento.</p>
<p>
Nosso propósito se torna ainda mais agradável pois focamos em <strong>4 valores:</strong>
</p>
<p>
<strong>Transparência</strong> - dos planos e operações da organização para que os colaboradores possam auxiliar
nossos clientes a tomarem a melhor decisão em seus projetos. Realizamos de forma clara, difundindo a
capacidade das pessoas e empresas a trabalharem melhor juntas.
</p>
<p>
<strong>Autonomia</strong> – proporcionamos maior liberdade para desempenhar, inovar e trazer novas estratégias
para o crescimento da empresa tanto quanto nas tomadas de decisões e suas responsabilidades;
aplicado em todas as esferas da compania.
</p>
<p>
<strong>Confiança & Colaboração</strong> – com respeito mútuo e honestidade, trabalhamos com uma comunicação
livre, nutrindo um ambiente onde as equipes se sentem à vontade para compartilhar ideias e focar em
decisões.
</p>
<p>
<strong>Performance</strong> – trabalhamos de forma consistente para manter a sinergia entre equipes, além de
cooperar para o crescimento individual e fortalecer a relação interpessoal de cada profissional.
Resultando em um melhor desempenho coletivo, o que naturalmente gera um impacto positivo sobre a
nossa empresa e os projetos executados. Os colaboradores e gestores têm um bom entendimento do
que se espera deles e das competências que são avaliadas.
</p>
<p><strong>Nossos clientes colhem os benefícios dessa abordagem, recebendo soluções inovadoras e
confiáveis entregues por pessoas engajadas e muito experientes.</strong></p>
</div>
<div className="content-2">
<h2 className="fw-bold">Por que escolher a EK3 ?</h2>
<p>Com a vasta gama de empresas de engenharia atualmente, como escolher aquela em que você pode
confiar?</p>
    <p>Somos uma empresa <strong>Especializada</strong>. Há muitas empresas de engenharia industrial, mas poucas oferecem
serviços especializados semelhantes aos nossos no estado de Santa Catarina.</p>
<p>Nossa equipe é especializada em <strong>gestão de projetos</strong> que ajudam a definir as prioridades e planejar os
projetos de acordo com os objetivos da indústria, além de entender os potenciais riscos. Fornecemos
ainda particularidades como <strong>modularização em instalações e construções</strong> nos projetos, consultoria para
impulsionar seus investimentos internos até proporcionar uma <strong>cultura positiva e emponderada</strong> dentro
da sua equipe. Além disso, auxiliamos você a realizar aquele <strong>empreendimento industrial</strong> que não sai do
papel e potencializar resultados positivos nas auditorias.</p>
<p>Em todos os nossos trabalhos, você recebe relatórios <strong>abrangentes</strong> e <strong>transparentes</strong>, que lhe darão
tranquilidade sobre o perfil e status do seu projeto</p>
</div>
</div>
<Footer />
    </div>
  )
}