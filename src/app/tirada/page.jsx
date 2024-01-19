'use client';
import styles from './page.module.css';
import Carousel from './components/Carousel/Carousel';
import { useCards } from '@/context/cardContext';

export default function Tirada() {
    const cards = useCards();
    return (
    
      <main className={styles.main}>
        <Carousel cards={cards} />
      
      </main>
  )
}
