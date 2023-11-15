import React from "react";
import { AiFillStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loncho from "../Assets/loncho.png";
import Leo from "../Assets/leo.png";
import Israel from "../Assets/israel.png";
interface Comment {
  name: string;
  picture: string;
  text: string;
}

export const TestimonialScreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const TestimonialCellComponent = ({ comment }: { comment: Comment }) => {
    return (
      <>
        <div className="testimonial-section-bottom">
          <img
            src={comment.picture}
            style={{ borderRadius: 100, aspectRatio: 3 / 3 }}
            alt=""
            height={100}
            width={100}
          />
          <p>{comment.text}</p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>{comment.name}</h2>
        </div>
      </>
    );
  };

  const comments: Comment[] = [
    {
      text: "Delicioso!! Excelente calidad.",
      name: "Leonardo",
      picture: Leo,
    },
    {
      text: "Demasiado delicioso! Los felicito la comida super rica, excelente presentación y porciones, ni hablar del sabor y la calidad de la comida estaba todo super delicioso. Dios bendiga su negocio y definitivamente seremos clientes frecuentes",
      name: "Israel Villa",
      picture: Israel,
    },
    {
      text: "Delicioso, adecuadas proporciones",
      name: "Luis Costra",
      picture: Loncho,
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Comentarios</p>
        <h1 className="primary-heading">Que estan diciendo</h1>
        <p className="primary-text"></p>
      </div>
      <Slider {...settings}>
        {comments.map((item, index) => (
          <div key={index}>
            <TestimonialCellComponent comment={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
