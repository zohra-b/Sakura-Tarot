'use client';
import Form from './components/Form/Form';
import styles from './page.module.css';
import { useCards } from '@/context/cardContext';

export default function Home() {
  const cards = useCards();
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.titleWithOrnament}>
          <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
          Bienvenida a Sakura Tarot
          <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
        </h1>

        <h2>Deja que nuestras cartas te guien</h2>
        <Form />
      </section>
      <aside className={styles.aside}>
        <img className={styles.heroImg} src="/img/hero-img.png" alt="imagen tres cartas" />
      </aside>
    </main>
  );
}
