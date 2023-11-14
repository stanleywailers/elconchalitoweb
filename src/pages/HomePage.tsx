import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Ubicacion_1_2.jpg";
import Navbar from "../components/Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Tu lugar favorito de carnes y mariscos
          </h1>
          <p className="primary-text">
            La misma calidad, produtos frescos, los cheff de siempre.
            pero una pisca mas de amor
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" style={{borderRadius: '50%',
    // Personaliza el tamaño según tus necesidades
   }} onClick={() => window.open('https://maps.app.goo.gl/6MDXSXbnedfN96Tw7')}/>
        </div>
      </div>
    </div>
  );
};

export default Home;