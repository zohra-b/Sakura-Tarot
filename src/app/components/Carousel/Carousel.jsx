'use client';
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './carousel.module.css';
import Slider from "react-slick";
import { sakuraApi } from "@/app/services/sakuraApi";
import Card from "../Card/Card";

export default function Carousel({reading, setReading}) {
const service = sakuraApi()
const [cards, setCards] = useState([])

useEffect(() => {
  service.getAll().then((res) => res.data)
  .then((data) => {
    const randomCards = (data.sort(() => Math.random() -0.5))
    setCards(randomCards)
  });
},[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };
  

  return (
    <section className={styles.carruselContainer}>
      <Slider {...settings}>
        {cards.map((card) => (
          <Card key={card.id}  reading = {reading} setReading = {setReading} card = {card}  />
        ))}
      </Slider>
    </section>
  );
}