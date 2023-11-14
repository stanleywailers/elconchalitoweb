import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" style={{borderRadius: '50%',
    // Personaliza el tamaño según tus necesidades
   }} />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Tradición 
        </h1>
        <p className="primary-text">
        Atendiendoles desde 1971 de generación tras generación con lo mejor en carnes y mariscos
        </p>
        {/* <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        <div className="about-buttons-container" >
          {/* <button className="secondary-button">Learn More</button> */}
          <button className="watch-video-button" onClick={() =>{window.open('https://www.youtube.com/watch?v=gSigGpNDVgc&t=15s')}}>
            <BsFillPlayCircleFill /> Ver Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;