import React, { useState } from 'react';

const CardFlip = () => {


    
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

    return (
      
      <div className="allcards">
          
          
      {/* Card 1 */}
      <div className={`card ${isFlipped ? 'flipped' : ''}`} id="card-1" onClick={handleClick}>
        <div className="card-content">
          <div className="card-front" id="card-front-1">
            <p className="card-text">
              <p className="card-main-title">Class</p>
              <p className="card-second-title">Beginner Yoga</p>
              <p className="hover-directions">– Hover to Flip –</p>
            </p>
                  </div> {/* FRONT */}
                  

          <div className="card-back" id="card-back-1">
            <p id="date"><b>Date</b> <br /> November 1st, 2022</p>
            <p id="time"><b>Time</b> <br /> 10:00AM - 11:00AM</p>
            <input type="button" className="card-btn" value="Sign Up" />
          </div> {/* BACK */}
        </div> {/* CONTENT */}
      </div> {/* CARD */}

          
      {/* Card 2 */}
      <div className={`card ${isFlipped ? 'flipped' : ''}`} id="card-2" onClick={handleClick}>
        <div className="card-content">
          <div className="card-front" id="card-front-2">
            <p className="card-text">
              <p className="card-main-title">Class</p>
              <p className="card-second-title">Intermediate Yoga</p>
              <p className="hover-directions">– Hover to Flip –</p>
                      </p>
                    </div> {/* FRONT */}
                    

          <div className="card-back" id="card-back-2">
            <p id="date"><b>Date</b> <br /> November 10th, 2022</p>
            <p id="time"><b>Time</b> <br /> 11:00AM - 12:00PM</p>
            <input type="button" className="card-btn" value="Sign Up" />
          </div> {/* BACK */}
        </div> {/* CONTENT */}
      </div> {/* CARD */}

          
      {/* Card 3 */}
      <div className={`card ${isFlipped ? 'flipped' : ''}`} id="card-3" onClick={handleClick}>
        <div className="card-content">
          <div className="card-front" id="card-front-3">
            <p className="card-text">
              <p className="card-main-title">Class</p>
              <p className="card-second-title">Advanced Yoga</p>
              <p className="hover-directions">– Hover to Flip –</p>
                      </p>
        </div> {/* FRONT */}
                    

          <div className="card-back" id="card-back-3">
            <p id="date"><b>Date</b> <br /> November 11th, 2022</p>
            <p id="time"><b>Time</b> <br /> 12:00PM - 1:00PM</p>
            <input type="button" className="card-btn" value="Sign Up" />
          </div> {/* BACK */}
        </div> {/* CONTENT */}
      </div> {/* CARD */}
    </div> /* allcards */
  );
}

export default CardFlip;
