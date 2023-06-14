import React from 'react';
import SignUpForm from '../SignUpForm';
import FooterLogo from './FooterLogo';
import Address from './Address';
import 'src/Footer/Footer.js';


const Footer = () => {


    return (
      
      <footer>
          
          <div className="footer-part-one">
              
              <h1 id="join-us">Come Join Us!</h1>
                      
              <Address />
              <FooterLogo />
              <SignUpForm />
                            
              <p>(This is a prototype project to showcase my skill level.)</p>
              
            </div>
        </footer>
        
        
  );
};

export default Footer;
