import React, { useEffect } from 'react';
import './services.css';
import criamos from './criamos.png';
import automa from './automa.png';
import config from './config.png';

const Services = () => {

  useEffect(() => {
    const items = document.querySelectorAll('.item-services');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hidden');
        }
      });
    });

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='services' id='services'>

        <div className='title-services'>
            Serviços
        </div>

        <div className='item-services right'>
          <img src={criamos} alt='Criamos o seu site!' />

          <div>
            <h2>Site 100% Personalizado</h2>
            <p>Criamos Sites que Possuem a Alma e DNA da Sua Empresa, de Forma Única e Desenhados Exclusivamente para a Sua Marca.</p>
          </div>
        </div>

        <div className='item-services left'>
          <img src={automa} alt='Automatização de processos' />

          <div>
            <h2>Automatização de processos</h2>
            <p>Evite desperdiçar tempo em processos e tarefas repetitivas. Oferecemos soluções automatizadas por meio da tecnologia para simplificar suas operações.</p>
          </div>
        </div>

        <div className='item-services right'>
          <img src={config} alt='Resolvemos problemas' />

          <div>
            <h2>Resolvemos problemas</h2>
            <p>Se a sua empresa ou negócio enfrenta algum problema, estamos à disposição para ajudar por meio de soluções baseadas em tecnologia e inovação. Converse com nossos especialistas para obter suporte personalizado e eficaz.</p>
          </div>
        </div>

    </div>
  )
}

export default Services;