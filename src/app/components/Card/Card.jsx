import React from "react";

export default function Card({ card }) {
  if (!card) {
    // Agrega un manejo para cuando card sea null o undefined
    return;
  }

  return (
    <div>
      <img src={card.sakuraCard} alt={card.meaning} />
      <p>{card.description}</p>
    </div>
  );
}