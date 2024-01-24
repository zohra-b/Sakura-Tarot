import React from 'react'

export default function Card({reading, setReading, card }) {
    const getReading = () => {
        setReading([...reading, card])
        console.log(reading)
        
    }
  return (
    <div onClick={getReading}>
    <img
    src="img/card-back.png"
    alt="carta reverso de sakura"
    />
  </div>
  )
}
