import Slider from "react-slick";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";


function random(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Carousel({ cards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  random(cards);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };

  const handleImageClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id}>
            <img
              src="img/card-back.png"
              alt="carta reverso de sakura"
              onClick={() => handleImageClick(card)}
            />
          </div>
        ))}
      </Slider>
      {/* Pasar la carta seleccionada como prop al componente Card */}
      {selectedCard && <Card card={selectedCard} />}
    </div>
  );
}