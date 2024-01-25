import styles from './cardsContainer.module.css';
import React from 'react';

export default function CardsContainer({ reading }) {
  return (
    <div className={styles.readingContainer}>
      <div className={styles.selectedCard}>
        <h2>Pasado</h2>
        {reading[0] ? (
          <div>
            <img className={styles.cardSelectedImg} src={reading[0].sakuraCard} alt={reading[0].spanishName} />
            <h3>{reading[0].spanishName}</h3>
            <p>{reading[0].meaning}</p>
          </div>
        ) : (
          <img className={styles.cardPlaceholder} src="/img/sakura-ornament.png" alt="Imagen por defecto" />
        )}
      </div>
      <div className={styles.selectedCard}>
        <h2>Presente</h2>
        {reading[1] ? (
          <div>
            <img className={styles.cardSelectedImg} src={reading[1].sakuraCard} alt={reading[1].spanishName} />
            <h3>{reading[1].spanishName}</h3>
            <p>{reading[1].meaning}</p>
          </div>
        ) : (
          <img className={styles.cardPlaceholder} src="/img/sakura-ornament.png" alt="Imagen por defecto" />
        )}
      </div>
      <div className={styles.selectedCard}>
        <h2>Futuro</h2>
        {reading[2] ? (
          <div>
            <img className={styles.cardSelectedImg} src={reading[2].sakuraCard} alt={reading[2].spanishName} />
            <h3>{reading[2].spanishName}</h3>
            <p>{reading[2].meaning}</p>
          </div>
        ) : (
          <img className={styles.cardPlaceholder} src="/img/sakura-ornament.png" alt="Imagen por defecto" />
        )}
      </div>
    </div>
  );
}
