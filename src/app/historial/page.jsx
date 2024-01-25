import React from 'react'
import HistTable from '../components/HistTable/HistTable'
import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.main}>
        <HistTable />
    </main>
  )
}
