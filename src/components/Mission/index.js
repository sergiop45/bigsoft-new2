import React from 'react';
import './mission.css';
import mission from './mission.png';


const Mission = () => {
  return (
    <div className='mission' id='mission'>

        <h1 className='title-mission'>Nossa missão</h1>

        <div className='text-mission'>
            <p>Nos da bigsoft temos a missão de ajudar as pessoas , empresas e instituições por meio da tecnologia e inovação</p>

            <p>Acreditamos que podemos mudar o mundo com a tecnologia por isso estamos sempre dispostos a mudar e inovar.</p>

            <p>Tem algum problema que você acha que a tecnologia e a inovação podem te ajudar?Converse conosco !</p>
        </div>

        <img src={mission} alt='simbolo 3 montanhas com bandeira' className='img-mission'/>

    </div>
  )
}

export default Mission;