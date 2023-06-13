import React from "react";

const ScrollTop = () => {

  const scrollTopFunction = () => {
    window.scrollTo(0, 0);
  };
    

  return (
    <a href="#home">
      <i className="fas fa-arrow-up toggle-top" onClick={scrollTopFunction}></i>
    </a>
  );
    
    
}

export default ScrollTop;