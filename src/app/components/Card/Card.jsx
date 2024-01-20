import React, {useState} from 'react';
import styles from './card.module.css';  

const Card = ({ card }) => {
    const [estado, setEstado] = useState('vacío');

    const handleTirada = () => {
        setEstado('full');
    };



    const Card = ({ card }) => {
        return (
            <div className={styles.card}>
                <h2>Pasado</h2>
                <div className={styles.cardImage}>
                    <img src={card.image} alt={card.name} />
                </div>
                <div className={styles.cardText}>
                    <h3>{card.name}</h3>
                    <p>{card.significado}</p>
                </div>
            </div>
        );
    }
};

export default Card;