'use client';
import styles from './page.module.css';
import Carousel from '../components/Carousel/Carousel';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import Button from '../components/Button/Button';
import { useState } from 'react';
import { historialapi } from '../services/historial';
import Input from '../components/Input/Input';

export default function Tirada() {
  const [reading, setReading] = useState([]);
  const [name, setName] = useState('');

  

  const saveName = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const historyApi = historialapi();

  const saveReading = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dateFormat = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

      
  const dataToSave = {
    date: dateFormat,
    name: name,
    reading: reading,
  };

  historyApi.createHist(dataToSave).then((res)=> {
    console.log(res)
  
  })
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.titleWithOrnament}>
        <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
        Elige tres cartas
        <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
      </h1>
      <h2>Desliza para ver todas las cartas</h2>
      <Carousel reading={reading} setReading={setReading} />
      <CardsContainer reading={reading} />
      <Input
        placeholder="Nombre"
        value={name}
        action={(event) => saveName(event)}
      />
      <div className={styles.buttonsContainer}>
        <Button action ={() =>saveReading()} isPrimary text={'Guarda mi tirada'} />
        <Button text={'Ir al historial'} type="submit" />
      </div>
    </main>
  );
}
