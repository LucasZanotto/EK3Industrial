import React, { useState } from "react"
import Header from "../components/Header";
import imageEmpre from "../assets/engenhariaEmp.jpeg";
import imageInsta from "../assets/instagram.png";
import imageWhats from "../assets/whatsapp.png";
import imageContato from "../assets/contact.jpg"
import googleMap from "../assets/googleMap.png"
import imageVideira from "../assets/videiraInt.jpg"
import "./Contato.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Contato(){
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  // window.scrollTo(0, 0);
  const history = useHistory();

  function handleClick() {
    history.go('/areas');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Nome", name + ' ' + sobrenome);
    formData.append("Email", email);
    formData.append("Telefone", phone);
    formData.append("Companhia", company);
    formData.append("Mensagem", message);

    const response = await fetch("https://formspree.io/f/moqzbpyg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Processar resposta bem-sucedida
      console.log("Email enviado com sucesso!");
    } else {
      // Processar resposta de erro
      console.log("Erro ao enviar o email.");
    }
    setName('')
    setSobrenome('')
    setEmail('')
    setPhone('')
    setCompany('')
    setMessage('')
  };
  return (
    <div>
    <Header/>
    <div className="title-1">
    <h1><strong>Contato</strong></h1>
    </div>
    <div className="container-23">
      <h4><strong>Descubra como podemos transformar seus projetos em realidade. Entre em contato conosco e juntos construiremos um futuro de excelência para você.</strong></h4>
    </div>
    <form onSubmit={handleSubmit} className="contact-form">
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="sobrenome">Sobrenome</label>
      <input
        type="text"
        id="sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
        placeholder="Sobrenome"
        required
      />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Telefone</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
        required
      />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="company">Nome da companhia</label>
    <input
      type="text"
      id="company"
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      placeholder="Nome da companhia"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="message">Mensagem</label>
    <textarea
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Mensagem"
      required
    ></textarea>
  </div>
  <button type="submit">Enviar</button>
</form>

    <div className="container-20">
      <div className="container-22">
      <img  src={imageVideira} alt="Third slide" width="600" style={{borderRadius: "1px 75px"}}/>
      </div>
      <div className="container-21">
      <h3><strong>Sede da corporação</strong></h3>
      <p><strong>Endereço</strong></p>
      <p>Rua Saul Brandalise, 1100, Matriz 
        <br />
        CEP: 89560-162 | Videira, SC</p>
        <a href="https://www.google.com/maps/place/EK3Industrial/@-27.0060479,-51.1517966,15z/data=!4m17!1m10!3m9!1s0x94e14ff0112b2bfd:0xb9429c205e0d1f0e!2sEK3Industrial!8m2!3d-27.0060479!4d-51.1430419!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11ty8f0j9_!3m5!1s0x94e14ff0112b2bfd:0xb9429c205e0d1f0e!8m2!3d-27.0060479!4d-51.1430419!16s%2Fg%2F11ty8f0j9_" target="_blank"><button>Ver no mapa</button></a>
        <a href="https://api.whatsapp.com/send?phone=5554991970475" target="_blank" style={{color: "black"}}><p>+55 49 9 9115-6353</p></a>
    </div>
    </div>
    <Footer />
    </div>
  )
}