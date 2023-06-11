import React, { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      fone: phone,
      email: email,
      message: message
    };

    // Lógica para enviar os dados do formulário para o backend ou realizar outras ações

    await fetch("https://api-bigsoft-production.up.railway.app/api/email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      alert("contato solicitado com sucesso!");
    })
    .catch(error => {
      console.error("Erro:", error);
    })


    // Limpar o formulário após o envio
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact' id='contato'>
      <div className='title-contact'>Entre em Contato</div>
      <form onSubmit={handleSubmit} className='form-contact'>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <ReactInputMask
          mask="(99) 99999-9999"
          maskChar="_"
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Digite um email válido"
        />
        </div>
        <div className='message'>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            required
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Solicitar Contato</button>
      </form>
    </div>
  );
};

export default Contact;
