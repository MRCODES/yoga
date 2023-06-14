import React from 'react';
import NavBar from '../../Navigation/NavBar';
import Footer from './Footer';
import 'src/pages/Team/team.css';

const useTeam = () => {


    return (

      
        <body>
            
            
            <NavBar />
            


            <div className="team-wrap">
                
                
                <img className="team-logo" src="/img/chakra.png" alt="" />
                
                
      <h1>Our Team</h1>
      <p className="sub-title">This is our outstanding expert team of yoga instructors.</p>
      <div id="teachers-parent">
        <div className="image">
          <img src="/team-photos/pexels-mentatdgt-2558681.jpg" className="teacher-child" id="teacher-child-1" alt="Mandy" />
          <p className="name">Mandy</p>
        </div>
        <div className="image">
          <img src="/team-photos/pexels-anna-shvets-5262292.jpg" className="teacher-child" id="teacher-child-2" alt="John" />
          <p className="name">John</p>
        </div>
        <div className="image">
          <img src="/team-photos/pexels-leah-kelley-1449667.jpg" className="teacher-child" id="teacher-child-3" alt="Gwen" />
          <p className="name">Gwen</p>
        </div>
        <div className="image">
          <img src="/team-photos/pexels-ketut-subiyanto-4350178.jpg" className="teacher-child" id="teacher-child-4" alt="Jennifer" />
          <p className="name">Jennifer</p>
        </div>
        <div className="image">
          <img src="/team-photos/pexels-darina-belonogova-7897404.jpg" className="teacher-child" id="teacher-child-5" alt="Anna" />
          <p className="name">Anna</p>
        </div>
        <div className="image">
          <img src="/team-photos/pexels-ron-lach-8159657.jpg" className="teacher-child" id="teacher-child-6" alt="Jim" />
          <p className="name">Jim</p>
        </div>
      </div>
            </div>


            <Footer />
        </body>
        
  );
};

export default useTeam;
