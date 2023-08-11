import React, { useState } from "react";
import Header from "../components/Header";
import { Carousel } from "react-bootstrap";
import imageCoach from "../assets/SK1_3469.jpg";
import imageTyping from "../assets/Foto Projetos Industriais e Engenharia (1).jpg";
import imageSobre from "../assets/Captura de tela de 2023-07-11 17-38-27.png";
import imageGlobo from "../assets/brian-mcgowan-0A450BR1JWk-unsplash.jpg";
import imageAgriculture from "../assets/Agronegócios.jpg";
import imageFood from "../assets/arno-senoner-8V56CnwVJRE-unsplash.jpg";
import imageInfra from "../assets/troy-mortier-6OVv680DNag-unsplash.jpg";
import imageManu from "../assets/christopher-burns-8KfCR12oeUM-unsplash.jpg";
import imageRefil from "../assets/Refinaria.jpg";
import imageChem from "../assets/quimica (2).jpg";
import imageCosmetic from "../assets/cosmetica.jpg";
import imageEmp from "../assets/empreendimentos (1).jpg";
import imageCult from "../assets/imageCult2.jpeg";
import imageCell from "../assets/Captura de tela de 2023-06-13 20-33-26.png";
import imageGenerator from "../assets/geracao de energia.jpg";
import imagePharma from "../assets/glsun-mall-WNX6uk-1LV4-unsplash.jpg";
import imageEstrutural from "../assets/greg-sellentin-SOBE-JRyRww-unsplash.jpg";
import imageCelulose from "../assets/size_960_16_9_papel-celulose11.png";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
            <strong>A AGILIDADE OPERACIONAL</strong>
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
          <img className="d-block w-100" src={imageTyping} alt="First slide" />
          <Carousel.Caption className="marketing-1">
            <h3>
              <strong>Projetos industriais e Engenharia</strong>
            </h3>
            <p>
              Transforme sua ideia em realidade com nossa expertise em projetos
              industriais e engenharia.
            </p>
            <Link to="/areas" className="Linkados">
              <button>Saiba mais</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageCoach} alt="Second slide" />
          <Carousel.Caption className="marketing-1">
            <h3>
              <strong>Consultoria e Treinamentos</strong>
            </h3>
            <p>
              Aprimore suas habilidades e leve seu negócio ao próximo nível com
              nossos serviços de consultoria e treinamentos.
            </p>
            <Link to="/areas" className="Linkados">
              <button>Saiba mais</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageEmp} alt="Third slide" />
          <Carousel.Caption>
            <div className="marketing-1">
              <h3>
                <strong>Empreendimentos</strong>
              </h3>
              <p>
                Seja o próximo empreendedor de sucesso com nossos serviços de
                suporte e mentoria.
              </p>
              <Link to="/areas#conteudo" className="Linkados">
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
            <img src={imageCult} />
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
            <img src={imageSobre} />
          </div>
          <h3>Quem somos</h3>
          <p>
            {" "}
            <strong>Conheça nossa história e junte-se à nossa jornada.</strong>
          </p>
          <Link to="/sobre">
            <button>Saiba mais</button>
          </Link>
        </div>
        <div className="cards-div">
          <div>
            <img src={imageGlobo} />
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
            src={imageAgriculture}
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
            src={imageChem}
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
            src={imageFood}
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
            src={imageInfra}
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
                src={imageGenerator}
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
                src={imagePharma}
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
                src={imageManu}
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
                src={imageCell}
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
                src={imageRefil}
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
                src={imageCelulose}
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
                src={imageEstrutural}
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
            src={imageGenerator}
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
            src={imagePharma}
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
            src={imageManu}
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
            src={imageCell}
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
            src={imageRefil}
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
            src={imageCelulose}
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
            src={imageEstrutural}
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
