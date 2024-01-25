'use client'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    useScrollTrigger,
  } from '@mui/material'
import { historialapi } from '@/app/services/historial'

export default function HistTable() {
    const historyApi=historialapi()
    const [cards, setCards]=useState([])

    useEffect(() => {
        historyApi.getHist().then((res)=>res.data).then((data)=>setCards(data))
          

    }, [])
    


  return (
    <div>
        <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell>Fecha</TableCell>
          <TableCell>Tirada</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cards.map((cardSet, setIndex) => (
          <TableRow key={setIndex}>
            <TableCell>{cardSet.name}</TableCell>
            <TableCell>{cardSet.date}</TableCell>
            <TableCell>
              {cardSet.reading.map((card, cardIndex) => (
                <div key={cardIndex}>
                  <img src={card.sakuraCard} alt="" style={{ width: '50px' }} />
                  <p>{card.spanishName}</p>
                  <p>{card.meaning}</p>
                </div>
              ))}
            </TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  )
}
