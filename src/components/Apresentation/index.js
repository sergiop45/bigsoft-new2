import React, { useEffect } from 'react';
import './apresentation.css';
import { FaArrowDown } from 'react-icons/fa';

const Apresentation = () => {

  const handleScroll = () => {
    window.scrollBy(0, 300);
  };

  useEffect(() => {
    const items = document.querySelectorAll('.text-apresentation');

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

  const handleClick = () => {
    const phoneNumber = '5541992784730';
    const message = 'Olá, vim direcionado do site.';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className='apresentation' id='work'>
        
        <div className='title-apresentation'>
          Nosso trabalho
          
          <FaArrowDown className='arrow' onClick={handleScroll} />
         
        </div>

        <div className='text-apresentation'>
        Na BigSoft, nosso trabalho é criar sites personalizados, automatizar processos e solucionar problemas utilizando a tecnologia. 
        </div>
        <div className='text-apresentation'>
        Desenvolvemos sites que refletem a identidade e objetivos de cada empresa, simplificamos tarefas complexas por meio da automação e utilizamos a tecnologia como ferramenta para resolver desafios.
        </div>
        <div className='text-apresentation'>
        Nosso compromisso é fornecer resultados excepcionais, impulsionando o sucesso dos nossos clientes. 
        </div>

        <button type="submit" onClick={handleClick}>Entrar em Contato</button>

    </div>
  )
}

export default Apresentation;
