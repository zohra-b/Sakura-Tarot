'use client';
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './carousel.module.css';
import Slider from "react-slick";


export default function Carousel({ cards }) {
  const [selectedCards, setSelectedCards] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };

  const SelectCard = (cardId) => {
    if (selectedCards.length < 3) {
      const selectedCard = cards.find((card) => card.id === cardId);

      setSelectedCards((prevSelectedCards) => {
        const updatedSelectedCards = [...prevSelectedCards, selectedCard];
        return updatedSelectedCards
      });
    }
  };

  console.log(selectedCards)

  return (
    <section className={styles.carruselContainer}>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id}>
            <img
              src="img/card-back.png"
              alt="carta reverso de sakura"
              onClick={() => SelectCard(card.id)}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}