import React from "react";
import Logo from '../Assets/Logo_1.jpg'
 

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        <img src={Logo} alt=''/>  
        </div>
        <div className="footer-icons">
          
          <BsInstagram onClick={() => window.open('https://instagram.com/_elconchalito?igshid=MWk1ZWprMGZsMm56bg==')
        }/>
         
          <FaFacebookF onClick={() => window.open('https://www.facebook.com/RestauranteElConchalito?mibextid=ZbWKwL')} />
          
           <BsWhatsapp onClick={() => window.open('https://wa.me/+50376487249') }/> 
        </div>
      </div>
      <div className="footer-section-two">
        
        <div className="footer-section-columns">
          <span>tel: 2270-6416</span>
          
          <span>asadosdonomar@gmail.com</span>
          <span>elconchalitocandelaria@gmail.com</span>
         
        </div>
        <div className="footer-section-columns">
          {/* <span>Terms & Conditions</span>
          <span>Privacy Policy</span> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;