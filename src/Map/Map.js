import React from 'react';

const Map = () => {


    return (
      
        <div className="feature map">
            
            <h1>Come Visit Us!</h1>
            
          <iframe
              
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26453.08602319639!2d-118.39802935782053!3d34.02755955673876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1663600289716!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
          >
              
          </iframe>
        </div>
        
    );
    
};


export default Map;
