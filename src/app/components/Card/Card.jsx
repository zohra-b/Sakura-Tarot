import React from 'react'

export default function Card({ card, reading, setReading }) {
  
  const getReading = () => {
    if (reading.length < 3) {
      setReading((prevReading) => {
        const newReading = [...prevReading, card];
        console.log(newReading);
        return newReading;
      });
    }
  };
  
  return (
    <div onClick={getReading}>
    <img
    src="img/card-back.png"
    alt="carta reverso de sakura"
    />
  </div>
  )
}
