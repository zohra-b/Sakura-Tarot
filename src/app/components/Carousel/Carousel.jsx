import React from 'react'


export default function Carousel({cards}) {
  return (
    <div>
      
      {cards.map((card)=>(
        <p key={card.id}>{card.spanishName}</p>
      ))}
    </div>
  )
}

