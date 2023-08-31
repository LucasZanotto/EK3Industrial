import React from "react";
import Header from "../components/Header";
import "./Cultura.css";
import Footer from "../components/Footer";
import capaceteImage from "../assets/capaceteImage.jpg";

export default function Cultura() {
  return (
    <div className="cont">
      <Header />
      <div className="bola-azul4"></div>
      <div>
        <img
          src={capaceteImage}
          className="imagem-destaque"
          alt="Escritório"
        />
      </div>
      <div className="container-content">
        <div
          className="content-2"
          style={{ paddingBottom: "6%", paddingLeft: "6%", paddingRight: "6%" }}
        >
          <h2
            className="fw-bold"
            style={{ marginTop: "6%", marginBottom: "3%" }}
          >
            Por que escolher a EK3 ?
          </h2>
          <p>
            Com a vasta gama de empresas de engenharia atualmente, como escolher
            aquela em que você pode confiar?
          </p>
          <p>
            Somos uma empresa <strong>Especializada</strong>. Há muitas empresas
            de engenharia industrial, mas poucas oferecem serviços
            especializados semelhantes aos nossos no estado de Santa Catarina.
          </p>
          <p>
            Nossa equipe é especializada em <strong>gestão de projetos</strong>{" "}
            que ajudam a definir as prioridades e planejar os projetos de acordo
            com os objetivos da indústria, além de entender os potenciais
            riscos. Fornecemos ainda particularidades como{" "}
            <strong>modularização em instalações e construções</strong> nos
            projetos, consultoria para impulsionar seus investimentos internos
            até proporcionar uma <strong>cultura positiva e emponderada</strong>{" "}
            dentro da sua equipe.
            <br /> Além disso, auxiliamos você a realizar aquele{" "}
            <strong>empreendimento industrial</strong> que não sai do papel e
            potencializar resultados positivos nas auditorias.
          </p>
          <p>
            Em todos os nossos trabalhos, você recebe relatórios{" "}
            <strong>abrangentes</strong> e <strong>transparentes</strong>, que
            lhe darão tranquilidade sobre o perfil e status do seu projeto.
          </p>
        </div>
      </div>
      <div className="content-3">
        <p>
          <strong>
            Entre em contato com nossa equipe e vamos criar uma solução <br />
            que cause um impacto positivo em seu próximo projeto.
          </strong>
        </p>
      </div>
      <Footer />
    </div>
  );
}
