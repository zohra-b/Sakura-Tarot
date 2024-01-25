'use client';
import Form from './components/Form/Form';
import styles from './page.module.css';
import Link from 'next/link';
import Button from './components/Button/Button';


export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.titleWithOrnament}>
          <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
          Bienvenida a Sakura Tarot
          <img className={styles.sakuraOrnament} src="/img/sakura-ornament.png" alt="flor sakura" />
        </h1>

        <h2>Deja que nuestras cartas te guien</h2>
        <Link href='./tirada'><Button isPrimary text={'Ir a la tirada'} type="submit" /></Link>
      </section>
      <aside className={styles.aside}>
        <img className={styles.heroImg} src="/img/hero-img.png" alt="imagen tres cartas" />
      </aside>
    </main>
  );
}
