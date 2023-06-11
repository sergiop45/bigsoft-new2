import React from 'react';
import './portfolio.css';
import site1 from './site1.png';
import sitecyber from './site-cyber.png';
import sitemark from './site-mark.png';
import siteloja from './siteloja.png';

const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const projects = [
  {
    id: 1,
    title: 'CyberSystem Corporation',
    description: 'Desenvolvimento de um site corporativo responsivo para a empresa CyberSystem.',
    image: sitecyber,
    url: "https://cybersystem.bigsoft.dev.br"
  },
  {
    id: 2,
    title: 'Mark Construtora',
    description: 'Site empresarial de uma empresa referencia no ramo da construção.',
    image: sitemark,
    url: "https://mark.bigsoft.dev.br/"
  },
  {
    id: 3,
    title: 'Barbearia',
    description: 'Desenvolvimento de um site responsivo para a Barbearia Mustacchio.',
    image: site1,
    url: "https://mustacheenthusiast.vercel.app"
  },
  {
    id: 4,
    title: 'Loja Online',
    description: 'Criação de uma loja online completa para a empresa Zinzane, com integração de pagamentos e gerenciamento de estoque.',
    image: siteloja,
    url: "https://zinzane.bigsoft.dev.br"
  },
  // Adicione mais projetos conforme necessário
];

const Portfolio = () => {

  const handleClick = () => {
    
    const phoneNumber = '5541992784730';
    const message = 'Olá, vim direcionado do site.';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const portfolioClick = (url) => {

    const link = url;
    window.open(link, '_blank');
  }

  return (
    <section id='portfolio' className='portfolio'>
      <div className='title-portfolio'>Nosso Portfólio</div>
      <div className='projects-container'>
        {projects.map((project) => (
          <div key={project.id} className='project-item' onClick={() => portfolioClick(project.url)}>
            <img src={baseUrl+project.image} alt={project.title} className='project-image' />
            <h3 className='project-title'>{project.title}</h3>
            <p className='project-description'>{project.description}</p>
          </div>
        ))}
      </div>

      <button type="submit" onClick={handleClick}>Solicitar Contato</button>
    </section>
  );
};

export default Portfolio;
