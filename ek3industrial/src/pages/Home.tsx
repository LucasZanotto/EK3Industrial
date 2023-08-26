import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";
import consultoriaImage from "../assets/consultoriaImage.jpg";
import projetosImage from "../assets/projetosImage.jpg";
import sobreImage from "../assets/sobreImage.jpeg";
import localizacaoImage from "../assets/localizacaoImage.jpg";
import agronegocioImage from "../assets/agronegocioImage.jpg";
import alimenticiaImage from "../assets/alimenticiaImage.jpg";
import governamentalImage from "../assets/governamentalImage.jpg";
import fabricacaoImage from "../assets/fabricacaoImage.jpg";
import refinariaImage from "../assets/refinariaImage.jpg";
import quimicaImage from "../assets/quimicaImage.jpg";
import imageCosmetic from "../assets/cosmeticaImage.jpg";
import empreendimentosImage from "../assets/empreendimentosImage.jpg";
import culturaImage from "../assets/culturaImage.jpeg";
import textilImage from "../assets/textilImage.png";
import geracaoDeEnergiaImage from "../assets/geracaoDeEnergiaImage.jpg";
import farmaImage from "../assets/farmaImage.jpg";
import infraestruturaImage from "../assets/infraestruturaImage.jpg";
import papelImage from "../assets/papelImage.png";
import "./Home.css";

export default function Home() {
  // window.scrollTo(0, 0);

  const [showAllImages, setShowAllImages] = useState(false);

  const handleShowAllImages = () => {
    setShowAllImages(!showAllImages);
  };
  return (
    <div>
      <Header />
      <div className="header-init">
        <div>
          <h2 className="header-letters">
            <strong>AGILIDADE OPERACIONAL</strong>
          </h2>
          <h1 className="header-letters-2">
            <strong>para a sua indústria</strong>
          </h1>
        </div>
      </div>
      <div className="areas-att">
        <h3>
          <strong>Áreas de Atuação</strong>
        </h3>
        <p>
          A EK3 Engenharia Industrial é a escolha ideal para suas necessidades
          em projetos de engenharia e industrial, auditorias, laudos técnicos e
          muito mais. Conte conosco para transformar suas ideias em realidade.
        </p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={projetosImage} alt="First slide" />
          <Carousel.Caption className="marketing-1">
            <h3>
              <strong>Projetos industriais e Engenharia</strong>
            </h3>
            <p>
              Transforme sua ideia em realidade com nossa expertise em projetos
              industriais e engenharia.
            </p>
            <Link to="/areas/treinamento" className="Linkados">
              <button>Saiba mais</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={consultoriaImage} style={{}} alt="Second slide" />
          <Carousel.Caption className="marketing-1">
            <h3>
              <strong>Consultoria e Treinamentos</strong>
            </h3>
            <p>
              Aprimore suas habilidades e leve seu negócio ao próximo nível com
              nossos serviços de consultoria e treinamentos.
            </p>
            <Link to="/areas/consultoria" className="Linkados">
              <button>Saiba mais</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={empreendimentosImage} alt="Third slide" />
          <Carousel.Caption>
            <div className="marketing-1">
              <h3>
                <strong>Empreendimentos</strong>
              </h3>
              <p>
                Seja o próximo empreendedor de sucesso com nossos serviços de
                suporte e mentoria.
              </p>
              <Link to="/areas/empreendimento" className="Linkados">
                <button>Saiba mais</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container48">
        <h3>
          <strong>Conheça um pouco mais sobre a EK3</strong>
        </h3>
        <p>
          Conheça a essência e os valores que nos impulsionam a oferecer
          experiências únicas para nossos clientes.
        </p>
      </div>
      <div className="container-cards">
        <div className="cards-div">
          <div>
            <img src={culturaImage} />
          </div>
          <h3>Cultura</h3>
          <p>
            {" "}
            <strong>
              Descubra como estamos moldando o futuro e impulsionando o
              progresso.
            </strong>
          </p>
          <Link to="/cultura">
            <button>Saiba mais</button>
          </Link>
        </div>
        <div className="cards-div">
          <div>
            <img src={sobreImage} />
          </div>
          <h3>Quem somos</h3>
          <p>
            {" "}
            <strong>Conheça nossa história e junte-se à nossa jornada.</strong>
          </p>
          <Link to="/sobre">
          <button className="no-outline-button" type="submit" style={{outline:"none"}}>Saiba mais</button>
          </Link>
        </div>
        <div className="cards-div">
          <div>
            <img src={localizacaoImage} />
          </div>
          <h3>Localização</h3>
          <p>
            {" "}
            <strong>Descubra o que o mundo tem a oferecer.</strong>
          </p>
          <Link to="/contato">
            <button>Saiba mais</button>
          </Link>
        </div>
      </div>

      <div className="container48">
        <h3>
          <strong>Indústrias</strong>
        </h3>
        <p>
          Adaptamos às necessidades de indústrias para todos os segmentos e
          portes, contribuindo para o desenvolvimento e Evolução da sua empresa.
        </p>
      </div>
      <div className="container50">
        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Agronegócio</strong>
          </h3>
          <img
          loading="lazy"
            src={agronegocioImage}
            alt="Foto de roberto bernardi na Unsplash"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div className="card-industry"></div>
        </div>

        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Química</strong>
          </h3>
          <img
          loading="lazy"
            src={quimicaImage}
            alt="Foto de Artur Voznenko na Unsplash"
            width="20%"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>

        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Alimentícia</strong>
          </h3>
          <img
          loading="lazy"
            src={alimenticiaImage}
            alt="Foto de Arshad Pooloo na Unsplash"
            width="20%"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>

        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Governamental</strong>
          </h3>
          <img
          loading="lazy"
            src={governamentalImage}
            alt="Foto de Troy Mortier na Unsplash"
            width="20%"
            style={{ borderRadius: "5px", opacity: "70%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>
      </div>
      {showAllImages && (
        <div>
          <div className="container51" style={{ display: "block" }}>
            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Geração de Energia</strong>
              </h3>
              <img
              loading="lazy"
                src={geracaoDeEnergiaImage}
                alt="Foto de roberto bernardi na Unsplash"
                style={{ borderRadius: "5px", opacity: "70%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-45%, -75%)",
                }}
              ></div>
            </div>
            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Farma / Life Sciences</strong>
              </h3>
              <img
              loading="lazy"
                src={farmaImage}
                alt="Foto de Glsun Mall na Unsplash"
                width="20%"
                style={{ borderRadius: "5px", opacity: "70%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-45%, -75%)",
                }}
              ></div>
            </div>

            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Fabricação</strong>
              </h3>
              <img
              loading="lazy"
                src={fabricacaoImage}
                alt="Foto de Christopher Burns na Unsplash"
                width="20%"
                style={{ borderRadius: "5px", opacity: "70%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -200%)",
                }}
              ></div>
            </div>

            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Cosmética</strong>
              </h3>
              <img
              loading="lazy"
                src={imageCosmetic}
                alt="Foto de Jason Blackeye na Unsplash"
                style={{
                  borderRadius: "5px",
                  opacity: "70%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -200%)",
                }}
              ></div>
            </div>
          </div>
          <div className="container51" style={{ display: "block" }}>
            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Textil</strong>
              </h3>
              <img
              loading="lazy"
                src={textilImage}
                alt="Foto de roberto bernardi na Unsplash"
                style={{ borderRadius: "5px", opacity: "70%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -200%)",
                }}
              ></div>
            </div>
            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Refinaria</strong>
              </h3>
              <img
              loading="lazy"
                src={refinariaImage}
                alt="Foto de Victor na Unsplash"
                style={{ borderRadius: "5px", opacity: "70%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -200%)",
                }}
              ></div>
            </div>
            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Papel & Celulose</strong>
              </h3>
              <img
              loading="lazy"
                src={papelImage}
                alt="Foto de Christopher Burns na Unsplash"
                style={{ borderRadius: "5px", opacity: "70%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-45%, -115%)",
                }}
              ></div>
            </div>
            <div
              className="sty50"
              style={{
                position: "relative",
                marginRight: "3%",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>
                <strong>Infraestrutura</strong>
              </h3>
              <img
              loading="lazy"
                src={infraestruturaImage}
                alt="Foto de Christopher Burns na Unsplash"
                style={{ borderRadius: "5px", opacity: "70%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -200%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <div className="container51">
        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Geração de Energia</strong>
          </h3>
          <img
          loading="lazy"
            src={geracaoDeEnergiaImage}
            alt="Foto de roberto bernardi na Unsplash"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-45%, -75%)",
            }}
          ></div>
        </div>
        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Farma / Life Sciences</strong>
          </h3>
          <img
          loading="lazy"
            src={farmaImage}
            alt="Foto de Glsun Mall na Unsplash"
            width="20%"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-45%, -75%)",
            }}
          ></div>
        </div>

        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Fabricação</strong>
          </h3>
          <img
          loading="lazy"
            src={fabricacaoImage}
            alt="Foto de Christopher Burns na Unsplash"
            width="20%"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>

        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Cosmética</strong>
          </h3>
          <img
          loading="lazy"
            src={imageCosmetic}
            alt="Foto de Jason Blackeye na Unsplash"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>
      </div>
      <div className="container51">
        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Textil</strong>
          </h3>
          <img
          loading="lazy"
            src={textilImage}
            alt="Foto de roberto bernardi na Unsplash"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>
        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Refinaria</strong>
          </h3>
          <img
          loading="lazy"
            src={refinariaImage}
            alt="Foto de Victor na Unsplash"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>
        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Papel & Celulose</strong>
          </h3>
          <img
            src={papelImage}
            alt="Foto de Christopher Burns na Unsplash"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-45%, -115%)",
            }}
          ></div>
        </div>
        <div
          className="sty50"
          style={{
            position: "relative",
            marginRight: "3%",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            <strong>Infraestrutura</strong>
          </h3>
          <img
          loading="lazy"
            src={infraestruturaImage}
            alt="Foto de Christopher Burns na Unsplash"
            style={{ borderRadius: "5px", opacity: "70%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -200%)",
            }}
          ></div>
        </div>
      </div>
      <div className="show-more-button">
        <button onClick={handleShowAllImages}>Veja mais</button>
      </div>
      <Footer />
    </div>
  );
}
