'use client'
import React, { useEffect, useState } from 'react'
import styles from './table.module.css'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from '@mui/material'
import { historialapi } from '@/app/services/historial'
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export default function HistTable() {
    const historyApi=historialapi()
    const [cards, setCards]=useState([])
    const h4 = ['Pasado', 'Presente', 'Futuro'];

    useEffect(() => {
        historyApi.getHist().then((res)=>res.data).then((data)=>setCards(data))
    }, [])
    


  return (
    <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={styles.tittleRow}>Nombre</TableCell>
          <TableCell className={styles.tittleRow}>Fecha</TableCell>
          <TableCell className={styles.tittleRow}>Tirada</TableCell>
          <TableCell className={styles.tittleRow}>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cards.map((cardSet, setIndex) => (
          <TableRow key={setIndex}>
            <TableCell className={styles.textInfo}>{cardSet.name}</TableCell>
            <TableCell className={styles.textInfo}>{cardSet.date}</TableCell>
            <TableCell className={styles.cardTableContainer}>
              {cardSet.reading.map((card, cardIndex) => (
                <div className={styles.cardContainer} key={cardIndex}>
                  <h4>{h4[cardIndex]}</h4>
                  <img src={card.sakuraCard} alt="" style={{ width: '70px' }} />
                  <p>{card.spanishName}</p>
                  <p>{card.meaning}</p>
                </div>
              ))}
            </TableCell>
            <TableCell className={styles.icons}><ClearIcon/> <ModeEditOutlineIcon/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  )
}
