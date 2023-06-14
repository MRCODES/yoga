import React from 'react';
import NavBar from '../../Navigation/NavBar';
import Footer from './Footer';
import 'src/pages/Mission/mission.css'

const useMission = () => {

    return (
      

        <body>
        
        <NavBar /> 

    <div className="team-wrap">
            <img className="team-logo" src="/img/chakra.png" alt="" />
            
            <header>
                
                <h1 id="our-mission-title">Our Mission</h1>
                
            </header>
            
      <div className="description">
        <p>
          Well Yoga, established in 2013, is a yoga studio in the core of downtown LA. Our belief is that anybody can do yoga and gain positive benefits from it.
        </p>
        <p>
          Our space is straightforward, our playlists are lively, and our teachers are uplifting.
        </p>
        <br />
        <p>
          Whether you're looking for a therapeutic and reflective experience or an energizing yoga session, we offer classes for all ages and all levels. Come visit us today and check out our invigorating and electric environment.
        </p>
      </div>
            </div>

            <Footer />
            
            </body>
  );
};

export default useMission;
