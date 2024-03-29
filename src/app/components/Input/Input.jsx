import React from 'react'
import styles from './input.module.css'

export default function Input({ placeholder, value, action }) {
    return (
        <form className={styles.form}>
            <label htmlFor="">Escribe tu nombre:</label>
            <input
            type="text"
            placeholder={placeholder}
            onChange={(event) => action(event)}
            value={value}
            required
            />
        </form>
    );
  }
