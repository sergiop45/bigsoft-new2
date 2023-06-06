import React from 'react';
import './footer.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {


    return(
        <footer className="footer">

            <div>
            
                <a href="https://www.facebook.com/bigsoftdev" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="icon-facebook" />
                </a>

                
                <a href="https://www.instagram.com/bigsoft.dev" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon-instagram" />
                </a>

                
                <a href="https://www.facebook.com/bigsoftdev" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon-linkedin" />
                </a>

                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="icon-whatsapp" />
                </a>
                
            </div>

            <div className='convite'>Visite nossas redes sociais</div>

           
            <div className='direitos'>&copy; 2023 BIGSOFT | Agência Digital & Marketing</div>
            
        </footer>
    )
}

export default Footer;