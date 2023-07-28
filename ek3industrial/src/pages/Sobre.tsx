import React from "react";
import Header from "../components/Header";
import imageEmpre from "../assets/engenhariaEmp.jpeg";
import imageInsta from "../assets/1161953_instagram_icon.png";
import imageWhats from "../assets/843786_whatsapp_icon.png";
import imageVideira from "../assets/videiraInt.jpg";
import imageSobre from "../assets/Captura de tela de 2023-05-31 17-23-08.png";
import imageCult from "../assets/Captura de tela de 2023-06-13 21-33-29.png";
import imageCoach from "../assets/Foto consultoria _ treinamento 2.jpg";
import ek3Logo from "../assets/ek3Invi.png";
import ek3Logo2 from "../assets/ek3logo2.png";
import ek3Logo1 from "../assets/Captura de tela de 2023-06-13 19-37-56.png";
import "./Sobre.css";
import Footer from "../components/Footer";

export default function Sobre() {
  // window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="title-1">
              <h2 className="fw-bold">HISTÓRIA</h2>
            </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div>
            <div className="container-center">
          <p>
            Nosso nome foi criado a partir das iniciais da fundadora e o número <strong>3 </strong> 
            representa os três pilares principais que nos regem: <strong>Engenharia,
            Empreendedorismo e Empoderamento.</strong>
          </p>
          <p>
            Além disso, a letra <strong>E</strong> também representa nosso foco de atuação:
            <strong> Experiência</strong> ampla, <strong>Ética, Eficiência, Expertise e Excelência</strong> nos
            segmentos de engenharia química e industrial.
          </p>
          <p>
            A <strong>EK3</strong> nasce com um grande diferencial, a <strong>capacitação técnica</strong> e
            <strong> gerencial de equipe</strong> nos levam a um patamar diferenciado devido a
            nossa experiência nacional e internacional no mercado de projetos
            industriais.
          </p>
          <p>
            A <strong>EK3</strong> contribui para o desenvolvimento e <strong>Evolução</strong> da sua empresa.
          </p>
          </div>
          </div>
          {/* <div className="col-lg-6 col-md-12 mb-4 center">
            <img src={ek3Logo2} alt="Consultoria e Treinamento" className="img-fluid rounded" />
          </div> */}
        </div>
      </div>
      <div className="container-fluid back-gray">
        <div className="row align-items-center justify-content-start" style={{backgroundColor:"#F9F9F9"}}>
          <div className="col-lg-4 col-md-12 order-lg-2 order-md-1 mb-4">
            <div className="title-2">
              <h3><strong>A EK3 ENGENHARIA INDUSTRIAL</strong></h3>
          <p>
          A EK3 surgiu com o objetivo de unir a expertise nacional e internacional em engenharia química e
industrial para atender as demandas das indústrias da região.
          </p>
          <p>
          Uma empresa de engenharia e gestão <strong>multidisciplinar</strong> altamente experiente. Com o compromisso de
fornecer garantia de qualidade e manter a integridade ambiental, nossa equipe é altamente qualificada
e possui experiência adicional para assessorar na gestão de projetos e riscos. Nosso compromisso com a
segurança e o meio ambiente se estende ao nosso próprio negócio. Oferecemos soluções eficientes,
baseadas em <strong>inovação, sustentabilidade e tecnologia.</strong> Auxiliamos nossos clientes a identificar as
oportunidades e desenvolver soluções para gerar resultados impactantes.
          </p>
          <p>
          Ao contribuir desta forma, garantimos que permanecemos no topo em engenharia, e que podemos
vincular tudo isso dentro do trabalho com nossos clientes. Nossos três <strong>pilares de trabalho</strong> são:
          </p>
          <p>- Consultoria e treinamento</p>
          <p>- Projetos industriais e engenharia</p>
          <p>- Empreendimentos</p>
          </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 mb-4">
            <img src={imageSobre} alt="Projetos Industriais e Engenharia" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div>
              <h3><strong>LOCALIZAÇÃO</strong></h3>
<p>Algumas pessoas tem a ânsia de sair do Brasil para <strong>conhecer</strong>, para <strong>estudar</strong>, para <strong>trabalhar</strong> ou mesmo para <strong>viver </strong>
 novas e diferentes experiências culturais.</p>
<p>A equipe da EK3 fez o contrário, após quase 20 anos atuando no exterior, retorna ao Brasil com uma
bagagem carregada de conhecimentos <strong>multidisciplinares, técnicos, tecnológicos, comerciais e gerenciais, </strong>
que podem contribuir para o <strong>crescimento</strong> da sua empresa.</p>
<p>Nos instalamos em Videira Santa Catarina, cidade natal da fundadora e <strong>polo industrial</strong> da região meio oeste
catarinense, região altamente desenvolvida e berço de grandes <strong>potencias</strong> na indústria brasileira.</p>
<p>Chegamos para auxiliar no <strong>desenvolvimento</strong> dos seus projetos de <strong>engenharia</strong>, nosso <strong>portfólio</strong> é vasto e
nossa equipe preparada para atuar em diversas <strong>frentes industriais</strong>.</p>
<p>A EK3 oferece <strong>agilidade operacional</strong> para a sua indústria.</p>
</div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <img src={imageCult} alt="Consultoria e Treinamento" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="container-fluid back-gray" style={{backgroundColor:"#F9F9F9"}}>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 mb-4">
            <div className="title-2">
              <h3><strong>MOTIVAÇÃO</strong></h3>
<p>Santa Catarina vem alcançando um crescimento histórico, muito acima da média nos segmentos industriais.
O oeste catarinense possui uma economia diversificada e empresas fortes, difundidas na <strong>gestão</strong> e
<strong> resultados</strong>.</p>
<p>O meio-oeste catarinense, região onde estamos instalados, está em destaque da diversidade econômica,
somos privilegiados devido a <strong>extensão territorial</strong> e as <strong>variadas atividades industriais</strong> que impulsionam a
economia estadual e nacional.</p>
<p>A EK3 quer fazer parte deste momento histórico. <strong>Crescer</strong> e fazer outras empresas crescerem através de
 <strong> processos industriais</strong> efetivos e personalizados.</p>
<p>Entre e contato e sabia como podemos auxiliar a sua empresa.</p>
</div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 mb-4">
            <img src={imageCoach} alt="Projetos Industriais e Engenharia" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
