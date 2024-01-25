import React from 'react'
import HistTable from '../components/HistTable/HistTable'
import styles from './page.module.css';
import Button from '../components/Button/Button';
import Link from 'next/link';

export default function page() {
  
  return (
    <main className={styles.main}>
      <h1 className={styles.titleWithOrnament}>
          <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
          Bienvenida a Sakura Tarot
          <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
        </h1>

        <h2>Aquí puedes manejar tu historial</h2>
        <div className={styles.btnContainer}>
        <Link href="/tirada"><Button isPrimary text={'Nueva tirada'}></Button></Link>
        </div>
        <HistTable />
    </main>
  )
}
