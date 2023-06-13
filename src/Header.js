import React from "react";
import NavBar from "./NavBar";
import SocialMediaIcons from "./SocialMediaIcons";


const Header = () => {

    return (

        <header>
            
            <NavBar />
            <SocialMediaIcons />
            <video muted autoPlay loop playsInline src="./img/greek_yoga.mp4"></video>
            
        </header>
    );

}


export default Header;


