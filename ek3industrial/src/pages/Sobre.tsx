import React from "react";
import Header from "../components/Header";
import imageEmpre from "../assets/engenhariaEmp.jpeg";
import imageInsta from "../assets/1161953_instagram_icon.png";
import imageWhats from "../assets/843786_whatsapp_icon.png";
import imageVideira from "../assets/videiraInt.jpg";
import "./Sobre.css";
import Footer from "../components/Footer";

export default function Sobre() {
  // window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="title-1">
        <h1>
          <strong>Sobre nós</strong>
        </h1>
      </div>
      <div className="grid-1">
        <div className="info-1">
          <h2>
            <strong>HISTÓRIA</strong>
          </h2>
          <p>
            Nosso nome foi criado a partir das iniciais da fundadora e o número
            3 representa os três pilares principais que nos regem: Engenharia,
            Empreendedorismo e Empoderamento.
          </p>
          <p>
            Além disso, a letra E também representa nosso foco de atuação:
            Experiência ampla, Ética, Eficiência, Expertise e Excelência nos
            segmentos de engenharia química e industrial.
          </p>
          <p>
            A EK3 nasce com um grande diferencial, a capacitação técnica e
            gerencial de equipe nos levam a um patamar diferenciado devido a
            nossa experiência nacional e internacional no mercado de projetos
            industriais.
          </p>
          <p>
            A EK3 contribui para o desenvolvimento e Evolução da sua empresa.
          </p>
          <h2 className="imageCity">
          <img src={imageVideira} width="100%" height="550vh" style={{paddingBottom: "5%"}} />
            <strong>A EK3 ENGENHARIA INDUSTRIAL</strong>
          </h2>
          <p>
            A EK3 surgiu com o objetivo de unir a expertise nacional e
            internacional em engenharia química e industrial para atender as
            demandas das indústrias da região. Oferecemos soluções eficientes,
            baseadas em inovação, sustentabilidade e tecnologia.
          </p>
          <p>
            Auxiliamos nossos clientes a identificar as oportunidades e
            desenvolver soluções para gerar resultados impactantes. Nossas três
            vertentes de trabalho são:
          </p>
          <p>- Consultoria e treinamento</p>
          <p>- Projetos industriais e engenharia</p>
          <p>- Empreendimentos</p>
          <h2>
            <strong>MOTIVO DA CRIAÇÃO</strong>
          </h2>
          <p>
            Algumas pessoas tem a ânsia de sair do Brasil para conhecer, para
            estudar, para trabalhar ou mesmo para viver novas e diferentes
            experiências culturais.
          </p>
          <p>
            A equipe da EK3 fez o contrário, após quase 20 anos atuando no
            exterior, retorna ao Brasil com uma bagagem carregada de
            conhecimentos multidisciplinares, técnicos, tecnológicos, comerciais
            e gerenciais, que podem contribuir para o crescimento da sua
            empresa.
          </p>
          <p>
            Nos instalamos em Videira Santa Catarina, cidade natal da fundadora
            e polo industrial da região meio oeste catarinense, região altamente
            desenvolvida e berço de grandes potencias na indústria brasileira.
          </p>
          <p>
            Chegamos para auxiliar no desenvolvimento dos seus projetos de
            engenharia, nosso portfólio é vasto e nossa equipe preparada para
            atuar em diversas frentes industriais.
          </p>
          <p>A EK3 oferece agilidade operacional para a sua indústria.</p>
          <h2>
            <strong>MOTIVAÇÃO</strong>
          </h2>
          <p>
            Santa Catarina vem alcançando um crescimento histórico, muito acima
            da média nos segmentos industriais. O oeste catarinense possui uma
            economia diversificada e empresas fortes, difundidas na gestão e
            resultados.
          </p>
          <p>
            O meio-oeste catarinense, região onde estamos instalados, está em
            destaque da diversidade econômica, somos privilegiados devido a
            extensão territorial e as variadas atividades industriais que
            impulsionam a economia estadual e nacional.
          </p>
          <p>
            A EK3 quer fazer parte deste momento histórico. Crescer e fazer
            outras empresas crescerem através de processos industriais efetivos
            e personalizados.
          </p>
          <p>Entre e contato e sabia como podemos auxiliar a sua empresa.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
