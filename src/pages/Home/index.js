import React from 'react'
import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import Footer from '../../components/Footer'
import './home.css'
import Mission from '../../components/Mission'
import Services from '../../components/Services'
import WhatsAppButton from '../../components/WhatsButton'
import Apresentation from '../../components/Apresentation'
import Contact from '../../components/Contact'
import Portfolio from '../../components/Portifolio'

const Home = () => {
  return (
    <div className='home'>

        <Header />
        <Subheader />

        <Apresentation />
        
        <Services  />
        
        <Portfolio />

        
        <Contact />

        <Mission />

        <WhatsAppButton />
        <Footer />

    </div>
  )
}

export default Home