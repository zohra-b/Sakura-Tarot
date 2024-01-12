"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CardsContext = createContext();


export function CardProvider({children}) {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards')
            .then((response)=>response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Error fetching data:', error));
    },[]);

  return (
      <CardsContext.Provider value={cards}>
        {children}
      </CardsContext.Provider>
  )
}

export function useCards(){
    return useContext(CardsContext)
}

