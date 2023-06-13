import React from 'react';
import ContactForm from './ContactForm';
import FooterLogo from './FooterLogo';
import Address from './Address';

const Footer = () => {


    return (
      
      <footer>
          
          <div className="footer-part-one">
              
              <h1 id="join-us">Come Join Us!</h1>
                      
              <Address />
              <FooterLogo />
              <ContactForm />
                            
              <p>(This is a prototype project to showcase my skill level.)</p>
              
            </div>
        </footer>
        
        
  );
};

export default Footer;
