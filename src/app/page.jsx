'use client';
import styles from './page.module.css';
import { useCards } from '@/context/cardContext';

export default function Home() {
  const cards = useCards();
  return (
    <main className={styles.main}>
    </main>
  );
}
