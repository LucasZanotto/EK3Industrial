import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import imageEmpre from "../assets/engenhariaEmp.jpeg";
import imageInsta from "../assets/1161953_instagram_icon.png";
import imageWhats from "../assets/843786_whatsapp_icon.png";
import imageVideira from "../assets/videiraInt.jpg";
import imageSobre from "../assets/Captura de tela de 2023-05-31 17-23-08.png";
import imageLocalizacao from "../assets/Mapa EK3 grande (1).png";
import imageCoach from "../assets/Foto consultoria _ treinamento 2.jpg";
import ek3Logo from "../assets/ek3Invi.png";
import ek3Logo2 from "../assets/ek3logo2.png";
import ek3Logo1 from "../assets/Captura de tela de 2023-06-13 19-37-56.png";
import imageEscritorio from "../assets/mockup-escritorio-ek3-1.png";
import "./Sobre.css";
import Footer from "../components/Footer";

export default function Sobre() {
 window.scrollTo(0, 0);

  return (
    <div className="cont">
    <Header/>
    <div className="bola-azul5"></div>
        <div className="bola-roxa5"></div>
    <div>
  <img src={imageEscritorio} className="imagem-destaque" alt="Escritório" />
</div>
<div  className="content-container-flex">
            <div className="content-sobre1">
            <h2 className="fw-bold" style={{paddingBottom:"3%"}}>HISTÓRIA</h2>
              <p>
                Nosso nome foi criado a partir das iniciais da fundadora e o
                número <strong>3 </strong>
                representa os três pilares principais que nos regem:{" "}
                <strong>Engenharia, Empreendedorismo e Empoderamento.</strong>
              </p>
              <p>
                Além disso, a letra <strong>E</strong> também representa nosso
                foco de atuação:
                <strong> Experiência</strong> ampla,{" "}
                <strong>Ética, Eficiência, Expertise e Excelência</strong> nos
                segmentos de engenharia química e industrial.
              </p>
              <p>
                A <strong>EK3</strong> nasce com um grande diferencial, a{" "}
                <strong>capacitação técnica</strong> e
                <strong> gerencial de equipe</strong> nos levam a um patamar
                diferenciado devido a nossa experiência nacional e internacional
                no mercado de projetos industriais.
              </p>
              <p>
                A <strong>EK3</strong> contribui para o desenvolvimento e{" "}
                <strong>Evolução</strong> da sua empresa.
              </p>

        
      </div>
      <div
        className="container-fluid my-5"
      >
        <div className="content-sobre2">
          <div>
            <div className="title-2">
              <h3 style={{paddingBottom:"3%"}}>
                <strong>NOSSO COMPROMISSO</strong>
              </h3>
              <p>
                A EK3 surgiu com o objetivo de unir a expertise nacional e
                internacional em engenharia química e industrial para atender as
                demandas das indústrias da região.
              </p>
              <p>
                <p>
                Uma empresa de engenharia e gestão{" "}
                <strong>multidisciplinar</strong> altamente experiente, fornecendo garantia de qualidade e mantendo a integridade ambiental.Nossa equipe é altamente qualificada e
                possui experiência adicional para assessorar na gestão de
                projetos e riscos.
                </p>
                 Nosso compromisso com a segurança e o meio
                ambiente se estende ao nosso próprio negócio. Oferecemos
                soluções eficientes, baseadas em{" "}
                <strong>inovação, sustentabilidade e tecnologia.</strong>{" "}
                Auxiliamos nossos clientes a identificar as oportunidades e
                desenvolver soluções para gerar resultados impactantes.
              </p>
              <p>
                Ao contribuir desta forma, garantimos que permanecemos no topo
                em engenharia, e que podemos vincular tudo isso dentro do
                trabalho com nossos clientes. Nossos três{" "}
                <strong>pilares de trabalho</strong> são:
              </p>
              <p>- Consultoria e treinamento</p>
              <p>- Projetos industriais e engenharia</p>
              <p>- Empreendimentos</p>
            </div>
          </div>
          
         
        </div>
      </div>
      </div>
      <div>
         <div className="content-sobre3">
    <h2 className="fw-bold" style={{marginTop: "0%"}}>Cultura</h2>
    <p style={{marginBottom:"1%"}}>Construímos uma cultura diversa e inclusa, onde nossa equipe se sente pertencente e mais conectada.
Juntamente com a expertise técnica, temos um ambiente de trabalho mais plural, inovador e
sustentável pois nossos funcionários são valorizados e incentivados ao empoderamento.</p>
<p>
Nosso propósito se torna ainda mais agradável pois focamos em <strong>4 valores:</strong>
</p>
<p>
<strong style={{fontSize: "20px", font: "inherit"}}>Transparência</strong> - dos planos e operações da organização para que os colaboradores possam auxiliar
nossos clientes a tomarem a melhor decisão em seus projetos. Realizamos de forma clara, difundindo a
capacidade das pessoas e empresas a trabalharem melhor juntas.
</p>
<p>
<strong style={{fontSize: "20px"}}>Autonomia</strong> – proporcionamos maior liberdade para desempenhar, inovar e trazer novas estratégias
para o crescimento da empresa tanto quanto nas tomadas de decisões e suas responsabilidades;
aplicado em todas as esferas da compania.
</p>
<p>
<strong style={{fontSize: "20px"}}>Confiança & Colaboração</strong> – com respeito mútuo e honestidade, trabalhamos com uma comunicação
livre, nutrindo um ambiente onde as equipes se sentem à vontade para compartilhar ideias e focar em
decisões.
</p>
<p>
<strong style={{fontSize: "20px"}}>Performance</strong> – trabalhamos de forma consistente para manter a sinergia entre equipes, além de
cooperar para o crescimento individual e fortalecer a relação interpessoal de cada profissional.
Resultando em um melhor desempenho coletivo, o que naturalmente gera um impacto positivo sobre a
nossa empresa e os projetos executados. Os colaboradores e gestores têm um bom entendimento do
que se espera deles e das competências que são avaliadas.
</p>
<i><p style={{marginBottom:"4%"}}><strong>Nossos clientes colhem os benefícios dessa abordagem, recebendo soluções inovadoras e
confiáveis entregues por pessoas engajadas e muito experientes.</strong></p></i>
</div>
      </div>
      
      <div className="content-container-flex">
        <div className="content-sobre4">
              <h3 style={{paddingBottom:"3%"}}>
                <strong>LOCALIZAÇÃO</strong>
              </h3>
              <p>
                Algumas pessoas tem a ânsia de sair do Brasil para{" "}
                <strong>conhecer</strong>, para <strong>estudar</strong>, para{" "}
                <strong>trabalhar</strong> ou mesmo para <strong>viver </strong>
                novas e diferentes experiências culturais.
              </p>
              <p>
                A equipe da EK3 fez o contrário, após quase 20 anos atuando no
                exterior, retorna ao Brasil com uma bagagem carregada de
                conhecimentos{" "}
                <strong>
                  multidisciplinares, técnicos, tecnológicos, comerciais e
                  gerenciais,{" "}
                </strong>
                que podem contribuir para o <strong>crescimento</strong> da sua
                empresa.
              </p>
              <p>
                Nos instalamos em Videira Santa Catarina, cidade natal da
                fundadora e <strong>polo industrial</strong> da região meio
                oeste catarinense, região altamente desenvolvida e berço de
                grandes <strong>potencias</strong> na indústria brasileira.
              </p>
              <p>
                Chegamos para auxiliar no <strong>desenvolvimento</strong> dos
                seus projetos de <strong>engenharia</strong>, nosso{" "}
                <strong>portfólio</strong> é vasto e nossa equipe preparada para
                atuar em diversas <strong>frentes industriais</strong>.
              </p>
              <p>
                A EK3 oferece <strong>agilidade operacional</strong> para a sua
                indústria.
              </p>
            </div>
          <div className="content-sobre5">
          <div className="title-2">
              <h3 style={{paddingBottom:"3%"}}>
                <strong>MOTIVAÇÃO</strong>
              </h3>
              <p>
                Santa Catarina vem alcançando um crescimento histórico, muito
                acima da média nos segmentos industriais. O oeste catarinense
                possui uma economia diversificada e empresas fortes, difundidas
                na <strong>gestão</strong> e<strong> resultados</strong>.
              </p>
              <p>
                O <strong>Meio-Oeste Catarinense</strong>, região onde estamos instalados, está
                em destaque da diversidade econômica, somos privilegiados devido
                a <strong>extensão territorial</strong> e as{" "}
                <strong>variadas atividades industriais</strong> que impulsionam
                a economia estadual e nacional.
              </p>
              <p>
                A EK3 quer fazer parte deste momento histórico.{" "}
                <strong>Crescer</strong> e fazer outras empresas crescerem
                através de
                <strong> processos industriais</strong> efetivos e
                personalizados.
              </p>
              <p>
                Entre e contato e sabia como podemos auxiliar a sua empresa.
              </p>
        </div>
      </div>
      </div>
    <div className="mapa-sobre1" style={{backgroundColor:"#3A8894"}}>
  <img src={imageLocalizacao} style={{objectFit:"cover"}} className="imagem-destaque" alt="Escritório" />
</div>
   
      <Footer />
    </div>
  );
}
