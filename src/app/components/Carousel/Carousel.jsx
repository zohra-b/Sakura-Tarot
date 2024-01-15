
import Slider from "react-slick";
import React, {useState, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* export default function Carousel({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <p key={card.id}>{card.spanishName}</p>
      ))}
    </div>
  );
} */
function random(array) { 

  for (let i = array.length - 1; i > 0; i--) { 
  const j = Math.floor(Math.random() * (i + 1)); 
  [array[i], array[j]] = [array[j], array[i]];
  }
  return array

  }

export default function Carousel({cards}) {
  random(cards)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10
  };
  return (
    <Slider {...settings}>
      {cards.map((card) => (
      <div>
    <img key={card.id} src="img/card-back.png" alt="carta reverso de sakura" />
      </div>
      ))}
      
      
    </Slider>
  );
}