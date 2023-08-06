import React from "react"
import Header from "../components/Header";
import "./Escolha.css";
import Footer from "../components/Footer";
import imageEscolha from "../assets/junior-ferreira-7esRPTt38nI-unsplash.jpg";


export default function Escolha(){
  window.scrollTo(0, 0);
  return (
    <div>
      <Header/>
      <div className="bola-azul4"></div>
      <div className="conteudo">
    <div className="title-1">
  <h2 className="fw-bold">Por que escolher a EK3 ?</h2>
  <div className="container-29" style={{ paddingBottom: "3%" }}>
        <img src={imageEscolha} alt="Foto de Júnior Ferreira na Unsplash" />
      </div>
  {/* <hr className="my-4" /> */}
</div>
<div className="content-1">
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
<Footer/>
    </div>
  )
}