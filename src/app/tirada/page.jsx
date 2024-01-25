'use client';
import styles from './page.module.css';
import Carousel from '../components/Carousel/Carousel';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import Button from '../components/Button/Button';
import { useState } from 'react';

export default function Tirada() {
  const [reading, setReading] = useState([]);
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
      <div className={styles.buttonsContainer}>
        <Button isPrimary text={'Guarda mi tirada'} type="submit" />
        <Button text={'Ir al historial'} type="submit" />
      </div>
    </main>
  );
}
