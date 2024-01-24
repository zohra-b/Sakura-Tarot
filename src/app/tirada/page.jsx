'use client';
import styles from './page.module.css';
import Carousel from '../components/Carousel/Carousel';
import { useState } from 'react';

export default function Tirada() {
  const [reading, setReading] = useState ([])
    return (
    
      <main className={styles.main}>
        <Carousel reading = {reading} setReading = {setReading} />
      
      </main>
  )
}
